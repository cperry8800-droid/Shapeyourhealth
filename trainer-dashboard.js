// ===== Trainer Dashboard =====

// Demo client data
const clients = [
  {
    id: 1, name: "Jake Roberts", plan: "Monthly Subscription", status: "active",
    joined: "2026-01-15", lastWorkout: "2026-04-09", workoutsThisMonth: 12,
    totalMinutes: 540, streak: 5, goal: "Build Muscle",
    progress: [
      { week: "Week 1", workouts: 3, minutes: 135 },
      { week: "Week 2", workouts: 4, minutes: 180 },
      { week: "Week 3", workouts: 3, minutes: 135 },
      { week: "Week 4", workouts: 2, minutes: 90 },
    ],
    recentWorkouts: [
      { name: "5x5 Foundation", date: "2026-04-09", duration: 55, difficulty: "Hard", completed: true },
      { name: "Upper Body Blast", date: "2026-04-07", duration: 45, difficulty: "Moderate", completed: true },
      { name: "Leg Day Legends", date: "2026-04-05", duration: 50, difficulty: "Hard", completed: true },
    ]
  },
  {
    id: 2, name: "Sarah Kim", plan: "Monthly Subscription", status: "active",
    joined: "2026-02-03", lastWorkout: "2026-04-08", workoutsThisMonth: 10,
    totalMinutes: 420, streak: 3, goal: "Weight Loss",
    progress: [
      { week: "Week 1", workouts: 3, minutes: 120 },
      { week: "Week 2", workouts: 3, minutes: 105 },
      { week: "Week 3", workouts: 2, minutes: 90 },
      { week: "Week 4", workouts: 2, minutes: 105 },
    ],
    recentWorkouts: [
      { name: "Full Body Burn", date: "2026-04-08", duration: 40, difficulty: "Moderate", completed: true },
      { name: "Core Crusher", date: "2026-04-06", duration: 15, difficulty: "Easy", completed: true },
      { name: "20-Min Torch", date: "2026-04-04", duration: 20, difficulty: "Moderate", completed: true },
    ]
  },
  {
    id: 3, name: "Marcus Lee", plan: "5x5 Foundation (One-time)", status: "active",
    joined: "2026-03-20", lastWorkout: "2026-04-07", workoutsThisMonth: 6,
    totalMinutes: 270, streak: 0, goal: "Strength",
    progress: [
      { week: "Week 1", workouts: 2, minutes: 110 },
      { week: "Week 2", workouts: 2, minutes: 100 },
      { week: "Week 3", workouts: 1, minutes: 30 },
      { week: "Week 4", workouts: 1, minutes: 30 },
    ],
    recentWorkouts: [
      { name: "5x5 Foundation", date: "2026-04-07", duration: 55, difficulty: "Hard", completed: true },
      { name: "5x5 Foundation", date: "2026-04-04", duration: 50, difficulty: "Moderate", completed: true },
    ]
  },
  {
    id: 4, name: "Priya Patel", plan: "Monthly Subscription", status: "active",
    joined: "2025-11-08", lastWorkout: "2026-04-09", workoutsThisMonth: 15,
    totalMinutes: 675, streak: 8, goal: "General Fitness",
    progress: [
      { week: "Week 1", workouts: 4, minutes: 180 },
      { week: "Week 2", workouts: 4, minutes: 175 },
      { week: "Week 3", workouts: 4, minutes: 160 },
      { week: "Week 4", workouts: 3, minutes: 160 },
    ],
    recentWorkouts: [
      { name: "Deadlift Domination", date: "2026-04-09", duration: 60, difficulty: "Intense", completed: true },
      { name: "Upper Body Blast", date: "2026-04-08", duration: 45, difficulty: "Hard", completed: true },
      { name: "Leg Day Legends", date: "2026-04-07", duration: 50, difficulty: "Hard", completed: true },
    ]
  },
  {
    id: 5, name: "Tom Wilson", plan: "Monthly Subscription", status: "inactive",
    joined: "2026-01-22", lastWorkout: "2026-03-28", workoutsThisMonth: 1,
    totalMinutes: 45, streak: 0, goal: "Build Muscle",
    progress: [
      { week: "Week 1", workouts: 1, minutes: 45 },
      { week: "Week 2", workouts: 0, minutes: 0 },
      { week: "Week 3", workouts: 0, minutes: 0 },
      { week: "Week 4", workouts: 0, minutes: 0 },
    ],
    recentWorkouts: [
      { name: "5x5 Foundation", date: "2026-03-28", duration: 45, difficulty: "Moderate", completed: true },
    ]
  },
  {
    id: 6, name: "Emma Chen", plan: "Deadlift Domination (One-time)", status: "active",
    joined: "2026-04-01", lastWorkout: "2026-04-08", workoutsThisMonth: 4,
    totalMinutes: 240, streak: 2, goal: "Powerlifting",
    progress: [
      { week: "Week 1", workouts: 2, minutes: 120 },
      { week: "Week 2", workouts: 2, minutes: 120 },
      { week: "Week 3", workouts: 0, minutes: 0 },
      { week: "Week 4", workouts: 0, minutes: 0 },
    ],
    recentWorkouts: [
      { name: "Deadlift Domination", date: "2026-04-08", duration: 60, difficulty: "Intense", completed: true },
      { name: "Deadlift Domination", date: "2026-04-05", duration: 60, difficulty: "Hard", completed: true },
    ]
  },
  {
    id: 7, name: "David Nguyen", plan: "Monthly Subscription", status: "inactive",
    joined: "2025-12-10", lastWorkout: "2026-04-01", workoutsThisMonth: 2,
    totalMinutes: 90, streak: 0, goal: "Weight Loss",
    progress: [
      { week: "Week 1", workouts: 2, minutes: 90 },
      { week: "Week 2", workouts: 0, minutes: 0 },
      { week: "Week 3", workouts: 0, minutes: 0 },
      { week: "Week 4", workouts: 0, minutes: 0 },
    ],
    recentWorkouts: [
      { name: "Upper Body Blast", date: "2026-04-01", duration: 45, difficulty: "Hard", completed: true },
      { name: "Leg Day Legends", date: "2026-04-01", duration: 45, difficulty: "Moderate", completed: true },
    ]
  },
  {
    id: 8, name: "Lisa Johnson", plan: "Monthly Subscription", status: "active",
    joined: "2026-03-01", lastWorkout: "2026-04-09", workoutsThisMonth: 9,
    totalMinutes: 405, streak: 4, goal: "Tone & Sculpt",
    progress: [
      { week: "Week 1", workouts: 2, minutes: 90 },
      { week: "Week 2", workouts: 3, minutes: 135 },
      { week: "Week 3", workouts: 2, minutes: 90 },
      { week: "Week 4", workouts: 2, minutes: 90 },
    ],
    recentWorkouts: [
      { name: "Upper Body Blast", date: "2026-04-09", duration: 45, difficulty: "Moderate", completed: true },
      { name: "Leg Day Legends", date: "2026-04-08", duration: 50, difficulty: "Hard", completed: true },
      { name: "5x5 Foundation", date: "2026-04-06", duration: 55, difficulty: "Hard", completed: true },
    ]
  },
];

const recentSales = [
  { client: "Emma Chen", plan: "Deadlift Domination", price: 14.99, date: "2026-04-01", type: "One-time" },
  { client: "Marcus Lee", plan: "5x5 Foundation", price: 9.99, date: "2026-03-20", type: "One-time" },
  { client: "New User", plan: "Upper Body Blast", price: 7.99, date: "2026-04-05", type: "One-time" },
  { client: "Sarah Kim", plan: "Monthly Subscription", price: 29.99, date: "2026-04-03", type: "Recurring" },
  { client: "Priya Patel", plan: "Monthly Subscription", price: 29.99, date: "2026-04-01", type: "Recurring" },
  { client: "Jake Roberts", plan: "Monthly Subscription", price: 29.99, date: "2026-04-01", type: "Recurring" },
  { client: "Lisa Johnson", plan: "Monthly Subscription", price: 29.99, date: "2026-04-01", type: "Recurring" },
  { client: "New User", plan: "Leg Day Legends", price: 9.99, date: "2026-04-07", type: "One-time" },
];

// ===== Render Client List =====
function renderClients(filter) {
  const filtered = filter === 'all' ? clients :
    filter === 'active' ? clients.filter(c => c.status === 'active' && c.workoutsThisMonth >= 3) :
    clients.filter(c => c.status === 'inactive' || c.workoutsThisMonth < 3);

  const list = document.getElementById('clientList');
  list.innerHTML = filtered.map(c => {
    const initials = c.name.split(' ').map(n => n[0]).join('');
    const isLow = c.status === 'inactive' || c.workoutsThisMonth < 3;
    const lastDate = new Date(c.lastWorkout + 'T00:00:00');
    const daysAgo = Math.floor((new Date() - lastDate) / (1000 * 60 * 60 * 24));
    const lastStr = daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo} days ago`;

    return `
      <div class="td-client-row ${isLow ? 'needs-attention' : ''}" onclick="showClientDetail(${c.id})">
        <div class="td-client-avatar">
          <div class="avatar">${initials}</div>
        </div>
        <div class="td-client-info">
          <h4>${c.name}</h4>
          <span>${c.plan}</span>
        </div>
        <div class="td-client-stats-mini">
          <div class="td-mini-stat">
            <strong>${c.workoutsThisMonth}</strong>
            <span>workouts</span>
          </div>
          <div class="td-mini-stat">
            <strong>${c.streak}</strong>
            <span>streak</span>
          </div>
          <div class="td-mini-stat">
            <strong>${lastStr}</strong>
            <span>last active</span>
          </div>
        </div>
        <div class="td-client-status">
          ${isLow ? '<span class="status-badge status-warning">Needs Attention</span>' : '<span class="status-badge status-good">On Track</span>'}
        </div>
      </div>
    `;
  }).join('');
}

function filterClients(filter, btn) {
  document.querySelectorAll('.td-filters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderClients(filter);
}

// ===== Client Detail =====
function showClientDetail(id) {
  const c = clients.find(cl => cl.id === id);
  if (!c) return;

  document.getElementById('clientDetailSection').style.display = '';
  document.getElementById('clientDetailName').textContent = c.name;

  const maxMin = Math.max(...c.progress.map(w => w.minutes), 1);

  document.getElementById('clientDetailContent').innerHTML = `
    <div class="progress-stats-row" style="margin-bottom:36px;">
      <div class="progress-stat-card">
        <div class="progress-stat-number">${c.workoutsThisMonth}</div>
        <div class="progress-stat-label">Workouts This Month</div>
      </div>
      <div class="progress-stat-card">
        <div class="progress-stat-number">${c.totalMinutes}</div>
        <div class="progress-stat-label">Total Minutes</div>
      </div>
      <div class="progress-stat-card">
        <div class="progress-stat-number">${c.streak}</div>
        <div class="progress-stat-label">Day Streak</div>
      </div>
      <div class="progress-stat-card">
        <div class="progress-stat-number">${c.goal}</div>
        <div class="progress-stat-label">Fitness Goal</div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:36px;">
      <div>
        <h3 style="font-size:0.78rem;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);margin-bottom:20px;">Weekly Progress</h3>
        <div class="progress-bar-chart">
          ${c.progress.map(w => `
            <div class="chart-row">
              <div class="chart-label">${w.week}</div>
              <div class="chart-bar-container">
                <div class="chart-bar" style="width: ${(w.minutes / maxMin) * 100}%;"></div>
              </div>
              <div class="chart-value">${w.workouts} workouts &middot; ${w.minutes} min</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <h3 style="font-size:0.78rem;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);margin-bottom:20px;">Recent Workouts</h3>
        ${c.recentWorkouts.map(w => {
          const d = new Date(w.date + 'T00:00:00');
          const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          const diffColor = { 'Easy': '#10B981', 'Moderate': '#F59E0B', 'Hard': '#EF4444', 'Intense': '#DC2626' }[w.difficulty] || '#888';
          return `
            <div class="log-entry" style="cursor:default;">
              <div class="log-entry-date">${dateStr}</div>
              <div class="log-entry-info">
                <h4>${w.name}</h4>
                <div class="log-entry-meta">
                  <span>${w.duration} min</span>
                  <span style="color:${diffColor};font-weight:500;">${w.difficulty}</span>
                  ${w.completed ? '<span style="color:#10B981;">&#10003; Completed</span>' : ''}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div style="margin-top:36px;padding-top:24px;border-top:1px solid var(--border);display:flex;gap:12px;">
      <span style="font-size:0.82rem;color:var(--text-muted);">Member since ${new Date(c.joined + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
    </div>
  `;

  document.getElementById('clientDetailSection').scrollIntoView({ behavior: 'smooth' });
}

function closeClientDetail() {
  document.getElementById('clientDetailSection').style.display = 'none';
}

// ===== Sales List =====
function renderSales() {
  const list = document.getElementById('salesList');
  list.innerHTML = recentSales.map(s => {
    const d = new Date(s.date + 'T00:00:00');
    const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `
      <div class="td-sale-row">
        <div class="td-sale-info">
          <h4>${s.client}</h4>
          <span>${s.plan}</span>
        </div>
        <div class="td-sale-type">
          <span class="workout-tag">${s.type}</span>
        </div>
        <div class="td-sale-amount">
          <strong>$${s.price.toFixed(2)}</strong>
          <span>${dateStr}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Init
renderClients('all');
renderSales();
