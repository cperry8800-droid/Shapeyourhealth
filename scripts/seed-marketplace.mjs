// Shape — Phase 1 marketplace seed script
//
// Reads the hardcoded `trainers`, `nutritionists`, and `gyms` arrays from
// ../app.js and upserts them into Supabase. Does NOT modify app.js or any
// live-site file — app.js is read as text and evaluated in a sandbox.
//
// Usage:
//   1. cd shape-website/scripts
//   2. cp .env.example .env  (then fill in SUPABASE_SERVICE_ROLE_KEY)
//   3. npm install
//   4. npm run seed
//
// Safe to re-run: uses upsert on primary keys, and child rows (workouts,
// sample days, plans) are wiped + reinserted per parent so the DB always
// matches app.js exactly after a run.

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_JS = resolve(__dirname, '..', 'app.js');

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const db = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false }
});

// ---------- Extract arrays from app.js without modifying it ----------
// app.js starts with `const trainers = [...]; const nutritionists = [...];
// const gyms = [...]` and then a bunch of unrelated helpers. We only want
// the three arrays, so grab each one by balanced-bracket slicing and eval.
function extractArray(source, varName) {
  const marker = `const ${varName} = [`;
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Could not find "${marker}" in app.js`);
  let i = start + marker.length - 1; // points at the opening [
  let depth = 0;
  let inString = null;
  for (; i < source.length; i++) {
    const c = source[i];
    if (inString) {
      if (c === '\\') { i++; continue; }
      if (c === inString) inString = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inString = c; continue; }
    if (c === '[') depth++;
    else if (c === ']') {
      depth--;
      if (depth === 0) { i++; break; }
    }
  }
  const literal = source.slice(start + marker.length - 1, i);
  // eslint-disable-next-line no-new-func
  return new Function(`return ${literal};`)();
}

const appJsSource = readFileSync(APP_JS, 'utf8');
const trainers = extractArray(appJsSource, 'trainers');
const nutritionists = extractArray(appJsSource, 'nutritionists');
const gyms = extractArray(appJsSource, 'gyms');

console.log(`Parsed app.js: ${trainers.length} trainers, ${nutritionists.length} nutritionists, ${gyms.length} gyms`);

// ---------- Helpers ----------
async function run(label, promise) {
  const { error } = await promise;
  if (error) {
    console.error(`  ✗ ${label}:`, error.message);
    throw error;
  }
  console.log(`  ✓ ${label}`);
}

// ---------- Trainers ----------
async function seedTrainers() {
  console.log('\nSeeding trainers...');
  const rows = trainers.map((t, idx) => ({
    id: t.id,
    name: t.name,
    specialty: t.specialty ?? null,
    category: t.category ?? null,
    price: t.price ?? null,
    rating: t.rating ?? null,
    subscribers: t.subscribers ?? null,
    experience: t.experience ?? null,
    credential: t.credential ?? null,
    credential_full: t.credentialFull ?? null,
    specialty_type: t.specialtyType ?? null,
    bio: t.bio ?? null,
    color: t.color ?? null,
    tags: t.tags ?? [],
    trainer_of_month: !!t.trainerOfMonth,
    totm_quote: t.totmQuote ?? null,
    featured: !!t.featured,
    sort_order: idx
  }));
  await run(`upsert ${rows.length} trainers`, db.from('trainers').upsert(rows));

  // Wipe and re-insert children so re-runs stay consistent.
  const trainerIds = trainers.map(t => t.id);
  await run('clear old trainer_workouts',
    db.from('trainer_workouts').delete().in('trainer_id', trainerIds));

  for (const t of trainers) {
    if (!Array.isArray(t.workouts) || t.workouts.length === 0) continue;
    const workoutRows = t.workouts.map((w, idx) => ({
      trainer_id: t.id,
      name: w.name,
      type: w.type ?? null,
      duration: w.duration ?? null,
      difficulty: w.difficulty ?? null,
      location: w.location ?? null,
      price: w.price ?? null,
      description: w.description ?? null,
      sort_order: idx
    }));
    const { data: inserted, error } = await db
      .from('trainer_workouts')
      .insert(workoutRows)
      .select('id, sort_order');
    if (error) { console.error(`  ✗ insert workouts for trainer ${t.id}:`, error.message); throw error; }

    // Map sort_order → new workout id so we can link sample days.
    const idBySort = new Map(inserted.map(r => [r.sort_order, r.id]));
    const dayRows = [];
    t.workouts.forEach((w, wIdx) => {
      if (!Array.isArray(w.sampleDays)) return;
      w.sampleDays.forEach((d, dIdx) => {
        dayRows.push({
          workout_id: idBySort.get(wIdx),
          day_label: d.day ?? null,
          exercises: d.exercises ?? [],
          sort_order: dIdx
        });
      });
    });
    if (dayRows.length) {
      const res = await db.from('workout_sample_days').insert(dayRows);
      if (res.error) { console.error(`  ✗ insert sample days for trainer ${t.id}:`, res.error.message); throw res.error; }
    }
    console.log(`  ✓ trainer ${t.id} (${t.name}): ${t.workouts.length} workouts`);
  }
}

// ---------- Nutritionists ----------
async function seedNutritionists() {
  console.log('\nSeeding nutritionists...');
  const rows = nutritionists.map((n, idx) => ({
    id: n.id,
    name: n.name,
    specialty: n.specialty ?? null,
    category: n.category ?? null,
    price: n.price ?? null,
    rating: n.rating ?? null,
    subscribers: n.subscribers ?? null,
    experience: n.experience ?? null,
    credential: n.credential ?? null,
    credential_full: n.credentialFull ?? null,
    specialty_type: n.specialtyType ?? null,
    bio: n.bio ?? null,
    color: n.color ?? null,
    tags: n.tags ?? [],
    services: n.services ?? [],
    nutritionist_of_month: !!n.nutritionistOfMonth,
    notm_quote: n.notmQuote ?? null,
    featured: !!n.featured,
    sort_order: idx
  }));
  await run(`upsert ${rows.length} nutritionists`, db.from('nutritionists').upsert(rows));

  const nutIds = nutritionists.map(n => n.id);
  await run('clear old nutritionist_plans',
    db.from('nutritionist_plans').delete().in('nutritionist_id', nutIds));

  for (const n of nutritionists) {
    if (!Array.isArray(n.plans) || n.plans.length === 0) continue;
    const planRows = n.plans.map((p, idx) => ({
      nutritionist_id: n.id,
      name: p.name,
      type: p.type ?? null,
      duration: p.duration ?? null,
      difficulty: p.difficulty ?? null,
      price: p.price ?? null,
      description: p.description ?? null,
      sort_order: idx
    }));
    const { data: inserted, error } = await db
      .from('nutritionist_plans')
      .insert(planRows)
      .select('id, sort_order');
    if (error) { console.error(`  ✗ insert plans for nutritionist ${n.id}:`, error.message); throw error; }

    const idBySort = new Map(inserted.map(r => [r.sort_order, r.id]));
    const dayRows = [];
    n.plans.forEach((p, pIdx) => {
      if (!Array.isArray(p.sampleDays)) return;
      p.sampleDays.forEach((d, dIdx) => {
        dayRows.push({
          plan_id: idBySort.get(pIdx),
          day_label: d.day ?? null,
          calories: d.calories ?? null,
          protein: d.protein ?? null,
          breakfast: d.breakfast ?? null,
          lunch: d.lunch ?? null,
          dinner: d.dinner ?? null,
          sort_order: dIdx
        });
      });
    });
    if (dayRows.length) {
      const res = await db.from('plan_sample_days').insert(dayRows);
      if (res.error) { console.error(`  ✗ insert sample days for nutritionist ${n.id}:`, res.error.message); throw res.error; }
    }
    console.log(`  ✓ nutritionist ${n.id} (${n.name}): ${n.plans.length} plans`);
  }
}

// ---------- Gyms ----------
async function seedGyms() {
  console.log('\nSeeding gyms...');
  const rows = gyms.map((g, idx) => ({
    id: g.id,
    name: g.name,
    type: g.type ?? null,
    category: g.category ?? null,
    location: g.location ?? null,
    rating: g.rating ?? null,
    members: g.members ?? null,
    trainers: g.trainers ?? null,
    price: g.price ?? null,
    bio: g.bio ?? null,
    color: g.color ?? null,
    amenities: g.amenities ?? [],
    classes: g.classes ?? [],
    tags: g.tags ?? [],
    featured: !!g.featured,
    gym_of_month: !!g.gymOfMonth,
    gotm_quote: g.gotmQuote ?? null,
    sort_order: idx
  }));
  await run(`upsert ${rows.length} gyms`, db.from('gyms').upsert(rows));
}

// ---------- Run ----------
try {
  await seedTrainers();
  await seedNutritionists();
  await seedGyms();
  console.log('\nAll done. Check the Table Editor in Supabase to verify.');
} catch (e) {
  console.error('\nSeed failed:', e.message);
  process.exit(1);
}
