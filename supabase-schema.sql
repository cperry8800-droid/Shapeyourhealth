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
