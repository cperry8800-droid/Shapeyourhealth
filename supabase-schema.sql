-- Shape — Phase 1 schema
-- Run this in Supabase → SQL Editor → New query, then click "Run".
-- Safe to re-run: every statement is idempotent.

-- ===== profiles table =====
create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  role text not null check (role in ('client','trainer','nutritionist')),
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Multi-role support (Option B): a user can hold client + trainer + nutritionist
-- on one account. `role` stays as the "primary" / default role for routing;
-- `roles` is the full set.
alter table public.profiles add column if not exists roles text[] not null default '{}';

-- Backfill: every existing row gets its role copied into the roles array.
update public.profiles set roles = array[role]
  where role is not null and (roles is null or array_length(roles, 1) is null);

-- Keep updated_at fresh on any update.
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
  before update on public.profiles
  for each row execute function public.touch_updated_at();

-- ===== Row Level Security =====
alter table public.profiles enable row level security;

-- Any authenticated user can read any profile (needed for marketplace pages
-- that show trainer/nutritionist cards). Tighten later if needed.
drop policy if exists "profiles readable by authenticated" on public.profiles;
create policy "profiles readable by authenticated"
  on public.profiles for select
  to authenticated
  using (true);

-- Users can insert their own profile row (called right after signUp).
drop policy if exists "users insert own profile" on public.profiles;
create policy "users insert own profile"
  on public.profiles for insert
  to authenticated
  with check (auth.uid() = id);

-- Users can update their own profile row.
drop policy if exists "users update own profile" on public.profiles;
create policy "users update own profile"
  on public.profiles for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Auto-create a profile row whenever a new auth.users row is inserted.
-- The app passes { role } via raw_user_meta_data on signUp; we default to
-- 'client' if it's missing, and we also seed the `roles` array with it.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_role text;
begin
  v_role := coalesce(new.raw_user_meta_data->>'role', 'client');
  if v_role not in ('client','trainer','nutritionist') then
    v_role := 'client';
  end if;

  insert into public.profiles (id, role, roles, full_name)
  values (
    new.id,
    v_role,
    array[v_role],
    coalesce(new.raw_user_meta_data->>'full_name', null)
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ===== sessions table =====
-- Bookings between a client and a provider (trainer or nutritionist).
create table if not exists public.sessions (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references auth.users on delete cascade,
  provider_id uuid not null references auth.users on delete cascade,
  provider_role text not null check (provider_role in ('trainer','nutritionist')),
  type text not null check (type in ('video','phone','inperson','message')),
  scheduled_at timestamptz not null,
  duration_min int not null default 30,
  status text not null default 'requested'
    check (status in ('requested','confirmed','declined','completed','cancelled')),
  meeting_url text,
  client_phone text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists sessions_client_idx on public.sessions (client_id, scheduled_at desc);
create index if not exists sessions_provider_idx on public.sessions (provider_id, scheduled_at desc);

drop trigger if exists sessions_touch_updated_at on public.sessions;
create trigger sessions_touch_updated_at
  before update on public.sessions
  for each row execute function public.touch_updated_at();

alter table public.sessions enable row level security;

-- Client and provider can both read their own sessions.
drop policy if exists "sessions readable by participants" on public.sessions;
create policy "sessions readable by participants"
  on public.sessions for select
  to authenticated
  using (auth.uid() = client_id or auth.uid() = provider_id);

-- Clients create booking requests (they're the requester).
drop policy if exists "clients insert session requests" on public.sessions;
create policy "clients insert session requests"
  on public.sessions for insert
  to authenticated
  with check (auth.uid() = client_id);

-- Either side can update (provider accepts/declines, client cancels, etc.).
drop policy if exists "participants update sessions" on public.sessions;
create policy "participants update sessions"
  on public.sessions for update
  to authenticated
  using (auth.uid() = client_id or auth.uid() = provider_id)
  with check (auth.uid() = client_id or auth.uid() = provider_id);

-- =====================================================================
-- Phase 1 — Marketplace tables (trainers / nutritionists / gyms)
-- These hold the data that currently lives as hardcoded arrays in app.js.
-- Safe to run: tables are additive and default to public-read RLS so the
-- static site can fetch them without a logged-in session. No existing
-- tables or data are modified.
-- =====================================================================

-- ===== trainers =====
create table if not exists public.trainers (
  id bigint primary key,
  name text not null,
  specialty text,
  category text,
  price numeric(10,2),
  rating numeric(3,2),
  subscribers int,
  experience text,
  credential text,
  credential_full text,
  specialty_type text,
  bio text,
  color text,
  tags text[] not null default '{}',
  trainer_of_month boolean not null default false,
  totm_quote text,
  featured boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.trainer_workouts (
  id bigserial primary key,
  trainer_id bigint not null references public.trainers(id) on delete cascade,
  name text not null,
  type text,
  duration text,
  difficulty text,
  location text,
  price numeric(10,2),
  description text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists trainer_workouts_trainer_idx
  on public.trainer_workouts (trainer_id, sort_order);

create table if not exists public.workout_sample_days (
  id bigserial primary key,
  workout_id bigint not null references public.trainer_workouts(id) on delete cascade,
  day_label text,
  exercises text[] not null default '{}',
  sort_order int not null default 0
);

create index if not exists workout_sample_days_workout_idx
  on public.workout_sample_days (workout_id, sort_order);

-- ===== nutritionists =====
create table if not exists public.nutritionists (
  id bigint primary key,
  name text not null,
  specialty text,
  category text,
  price numeric(10,2),
  rating numeric(3,2),
  subscribers int,
  experience text,
  credential text,
  credential_full text,
  specialty_type text,
  bio text,
  color text,
  tags text[] not null default '{}',
  services text[] not null default '{}',
  nutritionist_of_month boolean not null default false,
  notm_quote text,
  featured boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.nutritionist_plans (
  id bigserial primary key,
  nutritionist_id bigint not null references public.nutritionists(id) on delete cascade,
  name text not null,
  type text,
  duration text,
  difficulty text,
  price numeric(10,2),
  description text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists nutritionist_plans_nutritionist_idx
  on public.nutritionist_plans (nutritionist_id, sort_order);

create table if not exists public.plan_sample_days (
  id bigserial primary key,
  plan_id bigint not null references public.nutritionist_plans(id) on delete cascade,
  day_label text,
  calories text,
  protein text,
  breakfast text,
  lunch text,
  dinner text,
  sort_order int not null default 0
);

create index if not exists plan_sample_days_plan_idx
  on public.plan_sample_days (plan_id, sort_order);

-- ===== gyms =====
create table if not exists public.gyms (
  id bigint primary key,
  name text not null,
  type text,
  category text,
  location text,
  rating numeric(3,2),
  members int,
  trainers int,
  price numeric(10,2),
  bio text,
  color text,
  amenities text[] not null default '{}',
  classes text[] not null default '{}',
  tags text[] not null default '{}',
  featured boolean not null default false,
  gym_of_month boolean not null default false,
  gotm_quote text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ===== updated_at triggers =====
drop trigger if exists trainers_touch_updated_at on public.trainers;
create trigger trainers_touch_updated_at
  before update on public.trainers
  for each row execute function public.touch_updated_at();

drop trigger if exists nutritionists_touch_updated_at on public.nutritionists;
create trigger nutritionists_touch_updated_at
  before update on public.nutritionists
  for each row execute function public.touch_updated_at();

drop trigger if exists gyms_touch_updated_at on public.gyms;
create trigger gyms_touch_updated_at
  before update on public.gyms
  for each row execute function public.touch_updated_at();

-- ===== Row Level Security =====
-- Public read so the marketplace pages work without a login.
-- No public write policies — inserts/updates must go through a server
-- context with the service_role key (the seed script, or future admin UI).

alter table public.trainers enable row level security;
alter table public.trainer_workouts enable row level security;
alter table public.workout_sample_days enable row level security;
alter table public.nutritionists enable row level security;
alter table public.nutritionist_plans enable row level security;
alter table public.plan_sample_days enable row level security;
alter table public.gyms enable row level security;

drop policy if exists "trainers public read" on public.trainers;
create policy "trainers public read" on public.trainers
  for select to anon, authenticated using (true);

drop policy if exists "trainer_workouts public read" on public.trainer_workouts;
create policy "trainer_workouts public read" on public.trainer_workouts
  for select to anon, authenticated using (true);

drop policy if exists "workout_sample_days public read" on public.workout_sample_days;
create policy "workout_sample_days public read" on public.workout_sample_days
  for select to anon, authenticated using (true);

drop policy if exists "nutritionists public read" on public.nutritionists;
create policy "nutritionists public read" on public.nutritionists
  for select to anon, authenticated using (true);

drop policy if exists "nutritionist_plans public read" on public.nutritionist_plans;
create policy "nutritionist_plans public read" on public.nutritionist_plans
  for select to anon, authenticated using (true);

drop policy if exists "plan_sample_days public read" on public.plan_sample_days;
create policy "plan_sample_days public read" on public.plan_sample_days
  for select to anon, authenticated using (true);

drop policy if exists "gyms public read" on public.gyms;
create policy "gyms public read" on public.gyms
  for select to anon, authenticated using (true);
