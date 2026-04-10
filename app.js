// ===== Data =====
const trainers = [
  {
    id: 1, name: "Marcus Johnson", specialty: "Strength & Powerlifting",
    category: "strength", price: 49.99, rating: 4.9, subscribers: 1240, experience: "12 yrs",
    bio: "Former competitive powerlifter turned coach. Specializes in progressive overload programs for all levels.",
    color: "#6C3AED", trainerOfMonth: true,
    totmQuote: "Consistency beats intensity. Show up every day and the results will follow.",
    workouts: [
      { name: "5x5 Foundation", type: "Strength", duration: "55 min", difficulty: "Intermediate", location: "Gym", price: 29.99, description: "The classic 5x5 program adapted for progressive overload. Perfect for building raw strength." },
      { name: "Deadlift Domination", type: "Powerlifting", duration: "60 min", difficulty: "Advanced", location: "Gym", price: 34.99, description: "A 6-week deadlift specialization program to break through plateaus." },
      { name: "Upper Body Blast", type: "Hypertrophy", duration: "45 min", difficulty: "Beginner", location: "Gym", price: 27.99, description: "High-volume upper body routine focused on chest, back, and shoulders." },
      { name: "Leg Day Legends", type: "Strength", duration: "50 min", difficulty: "Intermediate", location: "At Home", price: 29.99, description: "Squat-focused leg day with accessory work for complete lower body development." },
    ],
    tags: ["Powerlifting", "Hypertrophy", "Strength"]
  },
  {
    id: 2, name: "Aisha Patel", specialty: "HIIT & Fat Loss",
    category: "hiit", price: 39.99, rating: 4.8, subscribers: 2100, experience: "8 yrs",
    bio: "High-energy coach known for efficient, no-equipment HIIT sessions that burn maximum calories in minimum time.",
    color: "#EC4899",
    workouts: [
      { name: "20-Min Torch", type: "HIIT", duration: "20 min", difficulty: "Beginner", location: "At Home", price: 24.99, description: "Quick full-body HIIT session perfect for busy mornings." },
      { name: "Tabata Inferno", type: "HIIT", duration: "30 min", difficulty: "Advanced", location: "Gym", price: 29.99, description: "Intense Tabata protocol with 8 rounds of 20/10 intervals." },
      { name: "Full Body Burn", type: "Cardio", duration: "40 min", difficulty: "Intermediate", location: "At Home", price: 27.99, description: "No-equipment cardio workout that torches calories head to toe." },
      { name: "Core Crusher", type: "HIIT", duration: "15 min", difficulty: "Beginner", location: "At Home", price: 24.99, description: "Targeted ab routine with HIIT-style pacing for maximum burn." },
    ],
    tags: ["HIIT", "Fat Loss", "No Equipment"]
  },
  {
    id: 3, name: "Nina Brooks", specialty: "At Home Workouts",
    category: "athome", price: 29.99, rating: 4.8, subscribers: 2100, experience: "8 yrs",
    bio: "No gym? No problem. Nina designs effective bodyweight and minimal-equipment workouts you can do anywhere in your home.",
    color: "#10B981",
    workouts: [
      { name: "Living Room HIIT", type: "HIIT", duration: "25 min", difficulty: "Beginner", location: "At Home", price: 22.99, description: "High-energy bodyweight HIIT you can do in your living room — no equipment needed." },
      { name: "Apartment-Friendly Strength", type: "Strength", duration: "35 min", difficulty: "Intermediate", location: "At Home", price: 27.99, description: "Low-impact strength training designed for small spaces and shared floors." },
      { name: "Band & Bodyweight Burn", type: "Resistance", duration: "30 min", difficulty: "Intermediate", location: "At Home", price: 25.99, description: "Full-body burn using just resistance bands and your own bodyweight." },
      { name: "No Excuses Full Body", type: "Bodyweight", duration: "40 min", difficulty: "Advanced", location: "At Home", price: 29.99, description: "Intense full-body session with zero equipment — just you and the floor." },
    ],
    tags: ["At Home", "Bodyweight", "No Equipment"]
  },
  {
    id: 4, name: "Damon Clarke", specialty: "Cardio & Endurance",
    category: "cardio", price: 44.99, rating: 4.7, subscribers: 890, experience: "10 yrs",
    bio: "Endurance specialist who builds heart-pounding cardio programs. Improve stamina, burn fat, and boost your cardiovascular health.",
    color: "#F59E0B",
    workouts: [
      { name: "HIIT Burn", type: "Cardio", duration: "25 min", difficulty: "Beginner", location: "At Home", price: 26.99, description: "High-intensity intervals designed to torch calories and build endurance." },
      { name: "Endurance Builder", type: "Cardio", duration: "40 min", difficulty: "Advanced", location: "Gym", price: 32.99, description: "Long-form cardio circuits that push your aerobic and anaerobic limits." },
      { name: "Metabolic Blast", type: "Cardio", duration: "45 min", difficulty: "Intermediate", location: "Gym", price: 29.99, description: "Fast-paced metabolic conditioning to rev up your metabolism all day." },
      { name: "Sprint Intervals", type: "Cardio", duration: "30 min", difficulty: "Intermediate", location: "At Home", price: 27.99, description: "Run-based interval training to build speed and cardiovascular power." },
    ],
    tags: ["Cardio", "HIIT", "Endurance"]
  },
  {
    id: 5, name: "Sophie Turner", specialty: "Mobility & Recovery",
    category: "mobility", price: 54.99, rating: 4.8, subscribers: 1560, experience: "9 yrs",
    bio: "Mobility specialist who builds programs that keep you moving well — fewer injuries, better range, more years training.",
    color: "#EF4444",
    workouts: [
      { name: "Full Body Mobility Flow", type: "Mobility", duration: "35 min", difficulty: "All Levels", location: "At Home", price: 31.99, description: "Head-to-toe mobility routine that opens up everything. No equipment needed." },
      { name: "Mobility Foundations", type: "Mobility", duration: "40 min", difficulty: "Beginner", location: "At Home", price: 27.99, description: "Learn the basics of joint health and movement quality before loading up." },
      { name: "Pre-Workout Warm-Up", type: "Mobility", duration: "15 min", difficulty: "All Levels", location: "Gym", price: 19.99, description: "Quick activation routine to prime your joints and muscles before lifting." },
      { name: "Recovery Day Protocol", type: "Mobility", duration: "30 min", difficulty: "All Levels", location: "At Home", price: 24.99, description: "Active recovery session combining stretching, foam rolling cues, and breathwork." },
    ],
    tags: ["Mobility", "Recovery", "Flexibility"]
  },
  {
    id: 6, name: "Jordan Blake", specialty: "Weight Loss",
    category: "weightloss", price: 44.99, rating: 4.9, subscribers: 2180, experience: "7 yrs",
    bio: "Straight-up fat loss programs that work. No gimmicks, no crash diets — just structured training and accountability.",
    color: "#F59E0B",
    workouts: [
      { name: "Lean Out — Phase 1", type: "Weight Loss", duration: "40 min", difficulty: "Beginner", location: "Gym", price: 29.99, description: "Entry-level fat loss program combining resistance training with steady-state cardio." },
      { name: "Lean Out — Phase 2", type: "Weight Loss", duration: "45 min", difficulty: "Intermediate", location: "Gym", price: 34.99, description: "Progressive overload meets metabolic conditioning. For when Phase 1 gets easy." },
      { name: "At Home Burn", type: "Weight Loss", duration: "30 min", difficulty: "Beginner", location: "At Home", price: 24.99, description: "Bodyweight circuits designed to keep your heart rate up and burn calories at home." },
      { name: "Accountability Check-In", type: "Weight Loss", duration: "20 min", difficulty: "All Levels", location: "At Home", price: 19.99, description: "Weekly check-in session with progress tracking, weigh-in protocol, and adjustments." },
    ],
    tags: ["Weight Loss", "Fat Loss", "Cardio"]
  },
  {
    id: 7, name: "Reese Calloway", specialty: "Strength & Hypertrophy",
    category: "strength", price: 42.99, rating: 4.7, subscribers: 1890, experience: "6 yrs",
    bio: "Programs built around progressive overload and time under tension. If you want to get bigger and stronger — this is the playbook.",
    color: "#8B5CF6",
    workouts: [
      { name: "Push Pull Legs — Week A", type: "Hypertrophy", duration: "50 min", difficulty: "Intermediate", location: "Gym", price: 32.99, description: "Classic PPL split designed for maximum muscle growth over 6 days." },
      { name: "Upper Lower Split", type: "Strength", duration: "55 min", difficulty: "Intermediate", location: "Gym", price: 34.99, description: "4-day upper/lower program focused on compound lifts and accessory work." },
      { name: "Arm Day Special", type: "Hypertrophy", duration: "35 min", difficulty: "Beginner", location: "Gym", price: 24.99, description: "Dedicated arm session hitting biceps, triceps, and forearms from every angle." },
      { name: "Back & Biceps", type: "Hypertrophy", duration: "45 min", difficulty: "Intermediate", location: "Gym", price: 29.99, description: "Heavy pulling session with rows, pull-ups, and curls for a thick, wide back." },
    ],
    tags: ["Strength", "Hypertrophy", "Muscle"]
  },
  {
    id: 8, name: "Leah Kim", specialty: "HIIT & Weight Loss",
    category: "hiit", price: 34.99, rating: 4.9, subscribers: 3200, experience: "5 yrs", featured: true,
    bio: "Short sessions. Big results. Leah's HIIT programs are designed for people who don't have time to waste.",
    color: "#EC4899",
    workouts: [
      { name: "15-Min Express", type: "HIIT", duration: "15 min", difficulty: "Beginner", location: "At Home", price: 19.99, description: "No-excuses HIIT that fits into any schedule. Done in 15 minutes flat." },
      { name: "Sweat & Shred", type: "HIIT", duration: "30 min", difficulty: "Intermediate", location: "At Home", price: 27.99, description: "Full-body HIIT combining plyometrics, core work, and cardio bursts." },
      { name: "Lunch Break Burn", type: "HIIT", duration: "20 min", difficulty: "Beginner", location: "At Home", price: 22.99, description: "Quick midday session to break up your workday and burn calories." },
      { name: "HIIT & Strength Combo", type: "HIIT", duration: "40 min", difficulty: "Advanced", location: "Gym", price: 32.99, description: "Alternating HIIT intervals with strength sets for the best of both worlds." },
    ],
    tags: ["HIIT", "Weight Loss", "Quick Sessions"]
  },
  {
    id: 9, name: "Carlos Mendez", specialty: "Cardio & Endurance",
    category: "cardio", price: 39.99, rating: 4.6, subscribers: 760, experience: "11 yrs",
    bio: "Marathon runner and endurance coach. Whether you're training for a 5K or an ultramarathon — Carlos has a plan for it.",
    color: "#0EA5E9",
    workouts: [
      { name: "Couch to 5K", type: "Cardio", duration: "30 min", difficulty: "Beginner", location: "At Home", price: 22.99, description: "8-week run/walk program that takes you from zero to your first 5K." },
      { name: "Half Marathon Prep", type: "Cardio", duration: "60 min", difficulty: "Intermediate", location: "Gym", price: 39.99, description: "12-week structured plan with tempo runs, long runs, and recovery days." },
      { name: "Speed Work Sessions", type: "Cardio", duration: "35 min", difficulty: "Advanced", location: "At Home", price: 29.99, description: "Interval-based speed training to shave minutes off your personal best." },
      { name: "Low Impact Cardio", type: "Cardio", duration: "40 min", difficulty: "Beginner", location: "At Home", price: 24.99, description: "Joint-friendly cardio for anyone who wants to build endurance without the pounding." },
    ],
    tags: ["Cardio", "Running", "Endurance"]
  },
  {
    id: 10, name: "Tanya West", specialty: "At Home & Bodyweight",
    category: "athome", price: 27.99, rating: 4.8, subscribers: 2850, experience: "6 yrs", featured: true,
    bio: "You don't need a gym. Tanya's programs use nothing but your bodyweight and prove that simplicity works.",
    color: "#14B8A6",
    workouts: [
      { name: "Zero Equipment Full Body", type: "Bodyweight", duration: "35 min", difficulty: "Beginner", location: "At Home", price: 22.99, description: "Head-to-toe bodyweight session. All you need is a floor and some space." },
      { name: "Pilates Strength", type: "Bodyweight", duration: "40 min", difficulty: "Intermediate", location: "At Home", price: 27.99, description: "Pilates-inspired strength work that builds core stability and lean muscle." },
      { name: "Morning Wake-Up", type: "Bodyweight", duration: "15 min", difficulty: "Beginner", location: "At Home", price: 17.99, description: "Quick morning routine to wake up your body and set the tone for the day." },
      { name: "Bodyweight Strength", type: "Bodyweight", duration: "45 min", difficulty: "Advanced", location: "At Home", price: 29.99, description: "Advanced calisthenics session — push-ups, pistol squats, and more." },
    ],
    tags: ["At Home", "Bodyweight", "No Equipment"]
  },
  {
    id: 11, name: "Derek Osei", specialty: "Weight Loss & Strength",
    category: "weightloss", price: 49.99, rating: 4.8, subscribers: 1650, experience: "9 yrs",
    bio: "Fat loss through strength training. Derek's approach is simple — build muscle, burn more at rest, lose weight for good.",
    color: "#D97706",
    workouts: [
      { name: "Strength-Based Fat Loss", type: "Weight Loss", duration: "50 min", difficulty: "Intermediate", location: "Gym", price: 34.99, description: "Compound lifts with short rest periods. Build muscle and burn fat simultaneously." },
      { name: "Metabolic Resistance", type: "Weight Loss", duration: "40 min", difficulty: "Intermediate", location: "Gym", price: 29.99, description: "Resistance circuits that keep your heart rate elevated the entire session." },
      { name: "Beginner Fat Loss", type: "Weight Loss", duration: "35 min", difficulty: "Beginner", location: "At Home", price: 24.99, description: "Entry-level program for anyone starting their weight loss process. Low impact, high results." },
      { name: "Weekend Warrior", type: "Weight Loss", duration: "60 min", difficulty: "Advanced", location: "Gym", price: 37.99, description: "Intense full-body session for the days when you have extra time and energy." },
    ],
    tags: ["Weight Loss", "Strength", "Fat Loss"]
  },
];

const nutritionists = [
  {
    id: 101, name: "Dr. Sarah Mitchell", specialty: "Sports Nutrition",
    category: "sports", price: 59.99, rating: 4.9, subscribers: 980, experience: "14 yrs",
    bio: "PhD in Nutritional Science. Specializes in performance nutrition for athletes — from amateur to Olympic level.",
    color: "#10B981", nutritionistOfMonth: true,
    notmQuote: "Food is fuel, but the right food is a superpower. Let's unlock yours.",
    services: ["Custom meal plans", "Macro coaching", "Supplement guidance", "Competition prep"],
    plans: [
      { name: "High Protein Performance", type: "High Protein", duration: "8 weeks", difficulty: "Intermediate", price: 34.99, description: "Optimized macro split for muscle growth and recovery. 40/30/30 protein-forward approach." },
      { name: "Competition Prep Plan", type: "Low Carb", duration: "12 weeks", difficulty: "Advanced", price: 44.99, description: "Periodized nutrition plan for athletes peaking for competition. Precise carb cycling included." },
      { name: "Clean Bulk Blueprint", type: "High Calorie", duration: "10 weeks", difficulty: "Intermediate", price: 39.99, description: "Structured surplus plan to gain lean mass without excess fat. Includes supplement timing." },
      { name: "Race Day Fuel Guide", type: "Performance", duration: "6 weeks", difficulty: "Beginner", price: 29.99, description: "Pre, during, and post-race nutrition strategy for endurance athletes." },
    ],
    tags: ["Performance", "Athletes", "Macro Coaching"]
  },
  {
    id: 102, name: "James Okafor", specialty: "Weight Management",
    category: "weightloss", price: 44.99, rating: 4.8, subscribers: 1650, experience: "9 yrs",
    bio: "Registered dietitian focused on sustainable weight loss. No fad diets — just science-backed strategies that stick.",
    color: "#6C3AED",
    services: ["Calorie-deficit plans", "Habit coaching", "Weekly check-ins", "Grocery guides"],
    plans: [
      { name: "Sustainable Deficit Plan", type: "Low Calorie", duration: "12 weeks", difficulty: "Beginner", price: 29.99, description: "Gradual calorie reduction with flexible food choices. No crash dieting — just steady results." },
      { name: "Macro Counting Mastery", type: "Balanced", duration: "8 weeks", difficulty: "Intermediate", price: 34.99, description: "Learn to track and balance macros while hitting your weight loss goals." },
      { name: "Metabolic Reset", type: "High Protein", duration: "6 weeks", difficulty: "Intermediate", price: 32.99, description: "Reverse diet protocol to restore metabolism after prolonged restriction." },
      { name: "Weekend-Proof Plan", type: "Flexible", duration: "8 weeks", difficulty: "Beginner", price: 27.99, description: "A practical plan that accounts for social eating and weekends without derailing progress." },
    ],
    tags: ["Weight Loss", "Sustainable", "Habit Coaching"]
  },
  {
    id: 103, name: "Maria Santos", specialty: "Plant-Based Nutrition",
    category: "plantbased", price: 39.99, rating: 4.7, subscribers: 1120, experience: "7 yrs",
    bio: "Certified plant-based nutritionist helping people thrive on vegan and vegetarian diets without missing nutrients.",
    color: "#EC4899",
    services: ["Vegan meal plans", "Nutrient optimization", "Recipe library", "Transition coaching"],
    plans: [
      { name: "Plant-Powered Starter", type: "Vegan", duration: "4 weeks", difficulty: "Beginner", price: 24.99, description: "Ease into plant-based eating with simple swaps and complete nutrition guidance." },
      { name: "High Protein Vegan", type: "High Protein", duration: "8 weeks", difficulty: "Intermediate", price: 34.99, description: "Hit your protein goals without animal products. Includes 60+ recipes." },
      { name: "Whole Foods Reset", type: "Whole Foods", duration: "6 weeks", difficulty: "Beginner", price: 29.99, description: "Eliminate processed foods and reset your palate with nutrient-dense whole foods." },
      { name: "Vegan Athlete Fuel", type: "Performance", duration: "10 weeks", difficulty: "Advanced", price: 39.99, description: "High-performance plant-based plan for serious athletes and active lifestyles." },
    ],
    tags: ["Vegan", "Plant-Based", "Whole Foods"]
  },
  {
    id: 104, name: "Dr. Kevin Park", specialty: "Gut Health & Wellness",
    category: "guthealth", price: 54.99, rating: 4.9, subscribers: 760, experience: "16 yrs",
    bio: "Functional medicine nutritionist specializing in gut health, food sensitivities, and anti-inflammatory protocols.",
    color: "#F59E0B",
    services: ["Elimination protocols", "Gut healing plans", "Food sensitivity guidance", "Anti-inflammatory diets"],
    plans: [
      { name: "Gut Restore Protocol", type: "Anti-Inflammatory", duration: "8 weeks", difficulty: "Intermediate", price: 39.99, description: "Step-by-step gut healing plan with probiotics, bone broth, and targeted elimination." },
      { name: "Anti-Inflammatory Reset", type: "Low Carb", duration: "6 weeks", difficulty: "Beginner", price: 34.99, description: "Remove inflammatory triggers and rebuild with healing whole foods." },
      { name: "Food Sensitivity Blueprint", type: "Elimination", duration: "10 weeks", difficulty: "Advanced", price: 44.99, description: "Structured elimination and reintroduction protocol to identify your triggers." },
      { name: "Digestive Wellness Plan", type: "Balanced", duration: "6 weeks", difficulty: "Beginner", price: 29.99, description: "Daily meal plans designed to support healthy digestion and reduce bloating." },
    ],
    tags: ["Gut Health", "Functional", "Anti-Inflammatory"]
  },
  {
    id: 105, name: "Rachel Kim", specialty: "Prenatal & Postnatal",
    category: "prenatal", price: 49.99, rating: 4.8, subscribers: 540, experience: "10 yrs",
    bio: "Specializes in nutrition for expecting and new mothers. Ensures optimal nutrition for both mom and baby.",
    color: "#8B5CF6",
    services: ["Trimester-specific plans", "Postnatal recovery nutrition", "Lactation support", "Iron & folate optimization"],
    plans: [
      { name: "First Trimester Foundations", type: "Prenatal", duration: "12 weeks", difficulty: "Beginner", price: 34.99, description: "Nausea-friendly meals packed with folate, iron, and essential nutrients for early pregnancy." },
      { name: "Third Trimester Power Plan", type: "High Calorie", duration: "12 weeks", difficulty: "Intermediate", price: 37.99, description: "Calorie-dense nutrition to support baby's growth and prepare your body for delivery." },
      { name: "Postnatal Recovery Plan", type: "Recovery", duration: "8 weeks", difficulty: "Beginner", price: 34.99, description: "Healing foods and balanced meals to support recovery and energy after birth." },
      { name: "Lactation Boost Plan", type: "High Protein", duration: "6 weeks", difficulty: "Beginner", price: 29.99, description: "Nutrient-rich meals to support milk production and postpartum energy levels." },
    ],
    tags: ["Prenatal", "Postnatal", "Maternal Health"]
  },
  {
    id: 106, name: "Alex Rivera", specialty: "Meal Prep & Budget",
    category: "mealprep", price: 32.99, rating: 4.7, subscribers: 2200, experience: "6 yrs",
    bio: "Makes healthy eating affordable and easy. Weekly meal prep plans that save time, money, and taste amazing.",
    color: "#EF4444",
    services: ["Budget meal plans", "Batch cooking guides", "Shopping lists", "Quick recipes under 20 min"],
    plans: [
      { name: "$50/Week Meal Plan", type: "Budget", duration: "4 weeks", difficulty: "Beginner", price: 22.99, description: "Complete weekly meal plan for one person on a tight budget. Includes shopping lists." },
      { name: "Sunday Prep Master", type: "Meal Prep", duration: "6 weeks", difficulty: "Beginner", price: 27.99, description: "Prep all your weekday meals in under 2 hours every Sunday. Step-by-step guide." },
      { name: "Family of Four Plan", type: "Budget", duration: "8 weeks", difficulty: "Intermediate", price: 34.99, description: "Healthy, kid-friendly meals for the whole family without breaking the bank." },
      { name: "15-Minute Meals", type: "Quick Recipes", duration: "4 weeks", difficulty: "Beginner", price: 24.99, description: "30 quick and healthy recipes that go from fridge to plate in 15 minutes or less." },
    ],
    tags: ["Budget-Friendly", "Meal Prep", "Quick Recipes"]
  },
];

// ===== Render Functions =====
function createTrainerCard(trainer) {
  const initials = trainer.name.split(' ').map(n => n[0]).join('');
  return `
    <div class="card" onclick="openTrainerModal(${trainer.id})" data-category="${trainer.category}">
      <div class="card-body">
        <div class="card-header-row">
          ${trainer.avatar
            ? `<img class="card-avatar-inline" src="${trainer.avatar}" alt="${trainer.name}">`
            : `<div class="card-avatar-inline" style="background: ${trainer.color};">${initials}</div>`
          }
          <div class="card-header-info">
            <h3>${trainer.name}</h3>
            <div class="card-specialty">${trainer.specialty}</div>
          </div>
        </div>
        <p class="card-desc">${trainer.bio}</p>
        <div class="card-meta">
          <span class="card-rating">${trainer.rating}</span>
          <span>${trainer.subscribers.toLocaleString()} subscribers</span>
          <span>${trainer.experience}</span>
        </div>
        <div class="card-footer">
          <div class="card-price">$${trainer.price}<span>/mo</span></div>
          <button class="btn btn-sm btn-primary">View Workouts</button>
        </div>
      </div>
    </div>
  `;
}

function createNutritionistCard(nutritionist) {
  const initials = nutritionist.name.split(' ').map(n => n[0]).join('');
  return `
    <div class="card" onclick="openNutritionistModal(${nutritionist.id})">
      <div class="card-body">
        <div class="card-header-row">
          ${nutritionist.avatar
            ? `<img class="card-avatar-inline" src="${nutritionist.avatar}" alt="${nutritionist.name}">`
            : `<div class="card-avatar-inline" style="background: ${nutritionist.color};">${initials}</div>`
          }
          <div class="card-header-info">
            <h3>${nutritionist.name}</h3>
            <div class="card-specialty">${nutritionist.specialty}</div>
          </div>
        </div>
        <p class="card-desc">${nutritionist.bio}</p>
        <div class="card-meta">
          <span class="card-rating">${nutritionist.rating}</span>
          <span>${nutritionist.subscribers.toLocaleString()} subscribers</span>
          <span>${nutritionist.experience}</span>
        </div>
        <div class="card-footer">
          <div class="card-price">$${nutritionist.price}<span>/mo</span></div>
          <button class="btn btn-sm btn-accent">View Plans</button>
        </div>
      </div>
    </div>
  `;
}

// ===== Trainer of the Month =====
const totmCard = document.getElementById('totmCard');
if (totmCard) {
  const totm = trainers.find(t => t.trainerOfMonth);
  if (totm) {
    const initials = totm.name.split(' ').map(n => n[0]).join('');
    totmCard.innerHTML = `
      <div class="totm-layout">
        <div class="totm-avatar-area">
          <div class="totm-avatar" style="background: ${totm.color};">${initials}</div>
          <div class="totm-badge">Trainer of the Month</div>
        </div>
        <div class="totm-info">
          <h2>${totm.name}</h2>
          <div class="card-specialty">${totm.specialty}</div>
          <p class="totm-quote">"${totm.totmQuote}"</p>
          <p class="card-desc">${totm.bio}</p>
          <div class="trainer-detail-stats">
            <span>${totm.rating} rating</span>
            <span>${totm.subscribers.toLocaleString()} subscribers</span>
            <span>${totm.experience} experience</span>
          </div>
          <div style="margin-top: 24px; display: flex; gap: 12px;">
            <button class="btn btn-primary" onclick="openTrainerModal(${totm.id})">View Workouts</button>
            <button class="btn btn-outline" onclick="subscribe('${totm.name}', ${totm.price})">Subscribe — $${totm.price}/mo</button>
          </div>
        </div>
      </div>
    `;
  }
}

// ===== Init Cards =====
const trainerGrid = document.getElementById('trainerGrid');
const nutritionistGrid = document.getElementById('nutritionistGrid');
if (trainerGrid) trainerGrid.innerHTML = trainers.map(createTrainerCard).join('');
if (nutritionistGrid) nutritionistGrid.innerHTML = nutritionists.map(createNutritionistCard).join('');

// Nutritionist of the Month
const notmCard = document.getElementById('notmCard');
if (notmCard) {
  const notm = nutritionists.find(n => n.nutritionistOfMonth);
  if (notm) {
    const initials = notm.name.split(' ').map(n => n[0]).join('');
    notmCard.innerHTML = `
      <div class="totm-layout">
        <div class="totm-avatar-area">
          <div class="totm-avatar" style="background: ${notm.color};">${initials}</div>
          <div class="totm-badge">Nutritionist of the Month</div>
        </div>
        <div class="totm-info">
          <h2>${notm.name}</h2>
          <div class="card-specialty">${notm.specialty}</div>
          <p class="totm-quote">"${notm.notmQuote}"</p>
          <p class="card-desc">${notm.bio}</p>
          <div class="card-meta">
            <span>${notm.rating} rating</span>
            <span>${notm.subscribers.toLocaleString()} subscribers</span>
            <span>${notm.experience} experience</span>
          </div>
          <div class="card-actions">
            <button class="btn btn-primary" onclick="openNutritionistModal(${notm.id})">View Plans</button>
            <button class="btn btn-outline" onclick="subscribe('${notm.name}', ${notm.price})">Subscribe — $${notm.price}/mo</button>
          </div>
        </div>
      </div>
    `;
  }
}

// ===== Filter & Sort =====
let activeTrainerFilter = 'all';
let activeNutritionistFilter = 'all';

function setTrainerFilter(btn) {
  document.querySelectorAll('.filter-bar-buttons .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeTrainerFilter = btn.dataset.filter;
  filterTrainers();
}

function setNutritionistFilter(btn) {
  document.querySelectorAll('.filter-bar-buttons .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeNutritionistFilter = btn.dataset.filter;
  filterNutritionists();
}

function sortData(data, sortBy) {
  const sorted = [...data];
  switch (sortBy) {
    case 'subscribers': sorted.sort((a, b) => b.subscribers - a.subscribers); break;
    case 'rating': sorted.sort((a, b) => b.rating - a.rating); break;
    case 'price': sorted.sort((a, b) => a.price - b.price); break;
    case 'experience': sorted.sort((a, b) => parseInt(b.experience) - parseInt(a.experience)); break;
  }
  return sorted;
}

function filterTrainers() {
  const searchEl = document.getElementById('trainerSearch');
  const sortEl = document.getElementById('trainerSort');
  const grid = document.getElementById('trainerGrid');
  if (!grid) return;
  const search = searchEl ? searchEl.value.toLowerCase().trim() : '';
  const sortBy = sortEl ? sortEl.value : 'subscribers';
  let filtered = trainers.filter(t => {
    const matchesSearch = !search || t.name.toLowerCase().includes(search);
    const matchesCategory = activeTrainerFilter === 'all' || t.category === activeTrainerFilter;
    return matchesSearch && matchesCategory;
  });
  filtered = sortData(filtered, sortBy);
  grid.innerHTML = filtered.map(createTrainerCard).join('');
}

function filterNutritionists() {
  const searchEl = document.getElementById('nutritionistSearch');
  const sortEl = document.getElementById('nutritionistSort');
  const grid = document.getElementById('nutritionistGrid');
  if (!grid) return;
  const search = searchEl ? searchEl.value.toLowerCase().trim() : '';
  const sortBy = sortEl ? sortEl.value : 'subscribers';
  let filtered = nutritionists.filter(n => {
    const matchesSearch = !search || n.name.toLowerCase().includes(search);
    const matchesCategory = activeNutritionistFilter === 'all' || n.category === activeNutritionistFilter;
    return matchesSearch && matchesCategory;
  });
  filtered = sortData(filtered, sortBy);
  grid.innerHTML = filtered.map(createNutritionistCard).join('');
}

// ===== Navbar Scroll =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ===== Mobile Nav =====
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
    const navActions = document.querySelector('.nav-actions');
    if (navActions) navActions.classList.toggle('open');
    navToggle.classList.toggle('active');
  });
}

// Close mobile nav when tapping outside
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    const navLinks = document.getElementById('navLinks');
    if (navLinks && navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove('open');
      const navActions = document.querySelector('.nav-actions');
      if (navActions) navActions.classList.remove('open');
      navToggle.classList.remove('active');
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
    }
  }
});

// ===== Mobile Nav Dropdown =====
document.querySelectorAll('.nav-dropdown > a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      const parent = this.parentElement;
      // Close other dropdowns (accordion)
      document.querySelectorAll('.nav-dropdown').forEach(dd => {
        if (dd !== parent) dd.classList.remove('open');
      });
      parent.classList.toggle('open');
      return false;
    }
  });
});

// ===== Modals =====
function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
}

function openTrainerModal(id) {
  const t = trainers.find(tr => tr.id === id);
  if (!t) return;
  const initials = t.name.split(' ').map(n => n[0]).join('');
  document.getElementById('trainerModalContent').innerHTML = `
    <div class="trainer-detail-header">
      <div class="trainer-detail-avatar" style="background: ${t.color};">${initials}</div>
      <div class="trainer-detail-info">
        <h2>${t.name}</h2>
        <div class="card-specialty">${t.specialty}</div>
        <p class="card-desc">${t.bio}</p>
        <div class="trainer-detail-stats">
          <span>${t.rating} rating</span>
          <span>${t.subscribers.toLocaleString()} subscribers</span>
          <span>${t.experience} experience</span>
        </div>
      </div>
    </div>
    <div class="workout-list">
      <h3>Workout Plans — Buy Individually</h3>
      ${t.workouts.map(w => `
        <div class="workout-item-purchase">
          <div class="workout-item-info">
            <h4>${w.name}</h4>
            <p>${w.description || w.type}</p>
            <div class="workout-item-tags">
              <span class="workout-tag">${w.type}</span>
              <span class="workout-tag">${w.duration}</span>
              <span class="workout-tag">${w.difficulty}</span>
              ${w.location ? `<span class="workout-tag">${w.location}</span>` : ''}
            </div>
          </div>
          <div class="workout-item-buy">
            <div class="workout-item-price">$${w.price.toFixed(2)}</div>
            <button class="btn btn-sm btn-outline" onclick="purchaseWorkout('${w.name}', ${w.price}, event)">Buy Plan</button>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="consult-section">
      <h3>Not sure yet?</h3>
      <p style="font-size:0.88rem;color:var(--text-muted);font-weight:300;margin-bottom:16px;">Book a free 15-minute 1-on-1 consultation with ${t.name} before subscribing.</p>
      <button class="btn btn-sm btn-accent" onclick="bookConsultation('${t.name}', 'trainer')">Book Free Consultation</button>
    </div>
    <div class="subscribe-bar">
      <div>
        <div class="card-price">$${t.price}<span>/mo</span></div>
        <div style="font-size:0.82rem;color:var(--text-muted);">Subscribe for all workouts + new plans monthly</div>
      </div>
      <button class="btn btn-primary" onclick="subscribe('${t.name}', ${t.price})">Subscribe Now</button>
    </div>
  `;
  document.getElementById('trainerModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openNutritionistModal(id) {
  const n = nutritionists.find(nu => nu.id === id);
  if (!n) return;
  const initials = n.name.split(' ').map(w => w[0]).join('');
  document.getElementById('trainerModalContent').innerHTML = `
    <div class="trainer-detail-header">
      <div class="trainer-detail-avatar" style="background: ${n.color};">${initials}</div>
      <div class="trainer-detail-info">
        <h2>${n.name}</h2>
        <div class="card-specialty">${n.specialty}</div>
        <p class="card-desc">${n.bio}</p>
        <div class="trainer-detail-stats">
          <span>${n.rating} rating</span>
          <span>${n.subscribers.toLocaleString()} subscribers</span>
          <span>${n.experience} experience</span>
        </div>
      </div>
    </div>
    <div class="workout-list">
      <h3>Meal Plans — Buy Individually</h3>
      ${n.plans.map(p => `
        <div class="workout-item-purchase">
          <div class="workout-item-info">
            <h4>${p.name}</h4>
            <p>${p.description}</p>
            <div class="workout-item-tags">
              <span class="workout-tag">${p.type}</span>
              <span class="workout-tag">${p.duration}</span>
              <span class="workout-tag">${p.difficulty}</span>
            </div>
          </div>
          <div class="workout-item-buy">
            <div class="workout-item-price">$${p.price.toFixed(2)}</div>
            <button class="btn btn-sm btn-outline" onclick="purchaseWorkout('${p.name}', ${p.price}, event)">Buy Plan</button>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="workout-list" style="margin-top:24px;">
      <h3>What's Included with Subscription</h3>
      ${n.services.map(s => `
        <div class="workout-item">
          <div class="workout-item-info">
            <h4>${s}</h4>
          </div>
          <div class="workout-item-meta">
            <strong>Included</strong>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="consult-section">
      <h3>Not sure yet?</h3>
      <p style="font-size:0.88rem;color:var(--text-muted);font-weight:300;margin-bottom:16px;">Book a free 15-minute 1-on-1 consultation with ${n.name} before subscribing.</p>
      <button class="btn btn-sm btn-accent" onclick="bookConsultation('${n.name}', 'nutritionist')">Book Free Consultation</button>
    </div>
    <div class="subscribe-bar">
      <div>
        <div class="card-price">$${n.price}<span>/mo</span></div>
        <div style="font-size:0.82rem;color:var(--text-muted);">Subscribe for all plans + new ones monthly</div>
      </div>
      <button class="btn btn-accent" onclick="subscribe('${n.name}', ${n.price})">Subscribe Now</button>
    </div>
  `;
  document.getElementById('trainerModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function subscribe(name, price) {
  closeAllModals();
  showToast(`Subscribed to ${name} — $${price}/mo`);
}

function bookConsultation(name, type) {
  closeAllModals();
  window.location.href = `consultation.html?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`;
}

function purchaseWorkout(name, price, event) {
  event.stopPropagation();
  const btn = event.target;
  btn.textContent = 'Purchased!';
  btn.disabled = true;
  btn.classList.remove('btn-outline');
  btn.classList.add('btn-primary');
  showToast(`Purchased "${name}" — $${price.toFixed(2)} one-time`);

  // Save to purchased workouts in localStorage
  const purchased = JSON.parse(localStorage.getItem('shapePurchasedWorkouts') || '[]');
  purchased.push({ name, price, purchasedAt: new Date().toISOString() });
  localStorage.setItem('shapePurchasedWorkouts', JSON.stringify(purchased));
}

function openModal(type) {
  const content = document.getElementById('authModalContent');
  if (type === 'login') {
    content.innerHTML = `
      <h2>Welcome back</h2>
      <p class="subtitle">Log in to your Shape account</p>
      <div class="form-group">
        <label>Email</label>
        <input type="email" placeholder="you@example.com">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" placeholder="Enter your password">
      </div>
      <button class="btn btn-primary btn-block" onclick="closeAllModals(); showToast('Welcome back!')">Log In</button>
      <p style="text-align:center;margin-top:16px;font-size:0.88rem;color:var(--text-muted);">
        Don't have an account? <a href="#" style="color:var(--primary-light)" onclick="event.preventDefault();openModal('signup')">Sign up</a>
      </p>
    `;
  } else {
    content.innerHTML = `
      <h2>Get started</h2>
      <p class="subtitle">Create your free Shape account</p>
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="Your name">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" placeholder="you@example.com">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" placeholder="Create a password">
      </div>
      <div class="form-group">
        <label>I'm interested in</label>
        <select>
          <option>Personal Training</option>
          <option>Nutrition</option>
          <option>Both</option>
        </select>
      </div>
      <button class="btn btn-primary btn-block" onclick="closeAllModals(); showToast('Account created! Welcome to Shape.')">Create Account</button>
      <p style="text-align:center;margin-top:16px;font-size:0.88rem;color:var(--text-muted);">
        Already have an account? <a href="#" style="color:var(--primary-light)" onclick="event.preventDefault();openModal('login')">Log in</a>
      </p>
    `;
  }
  document.getElementById('authModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeAllModals();
  });
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAllModals();
});

// ===== Toast =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3000);
}

// ===== Close mobile nav on link click =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    // Don't close nav when tapping dropdown parent links on mobile
    if (window.innerWidth <= 768 && this.parentElement.classList.contains('nav-dropdown')) return;
    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.remove('open');
    const navActions = document.querySelector('.nav-actions');
    if (navActions) navActions.classList.remove('open');
    const toggle = document.getElementById('navToggle');
    if (toggle) toggle.classList.remove('active');
  });
});

// ===== AI Trainer =====
const chatMessages = document.getElementById('aiChatMessages');
const aiState = { step: 'goal', goal: '', level: '', equipment: '', duration: '' };

const exerciseDB = {
  'Muscle Gain': {
    gym: [
      { name: 'Barbell Bench Press', sets: '4', reps: '8-10' },
      { name: 'Incline Dumbbell Press', sets: '3', reps: '10-12' },
      { name: 'Barbell Rows', sets: '4', reps: '8-10' },
      { name: 'Lat Pulldowns', sets: '3', reps: '10-12' },
      { name: 'Overhead Press', sets: '4', reps: '8-10' },
      { name: 'Barbell Squats', sets: '4', reps: '8-10' },
      { name: 'Romanian Deadlifts', sets: '3', reps: '10-12' },
      { name: 'Leg Press', sets: '3', reps: '12' },
      { name: 'Cable Flyes', sets: '3', reps: '12-15' },
      { name: 'Dumbbell Curls', sets: '3', reps: '12' },
      { name: 'Tricep Dips', sets: '3', reps: '10-12' },
      { name: 'Face Pulls', sets: '3', reps: '15' },
    ],
    home: [
      { name: 'Push-Ups', sets: '4', reps: '15-20' },
      { name: 'Diamond Push-Ups', sets: '3', reps: '12' },
      { name: 'Pike Push-Ups', sets: '3', reps: '10-12' },
      { name: 'Inverted Rows', sets: '4', reps: '12' },
      { name: 'Bulgarian Split Squats', sets: '3', reps: '12 each' },
      { name: 'Pistol Squat Progressions', sets: '3', reps: '8 each' },
      { name: 'Glute Bridges', sets: '3', reps: '15' },
      { name: 'Plank to Push-Up', sets: '3', reps: '10' },
      { name: 'Chin-Ups (door frame bar)', sets: '4', reps: '8-10' },
      { name: 'Dips (between chairs)', sets: '3', reps: '12' },
    ],
    minimal: [
      { name: 'Dumbbell Goblet Squats', sets: '4', reps: '12' },
      { name: 'Dumbbell Floor Press', sets: '4', reps: '10-12' },
      { name: 'Dumbbell Rows', sets: '4', reps: '10 each' },
      { name: 'Dumbbell Lunges', sets: '3', reps: '12 each' },
      { name: 'Dumbbell Shoulder Press', sets: '3', reps: '10-12' },
      { name: 'Dumbbell RDLs', sets: '3', reps: '12' },
      { name: 'Resistance Band Pull-Aparts', sets: '3', reps: '15' },
      { name: 'Dumbbell Curls', sets: '3', reps: '12' },
    ],
  },
  'Fat Loss': {
    gym: [
      { name: 'Kettlebell Swings', sets: '4', reps: '20' },
      { name: 'Battle Ropes', sets: '4', reps: '30 sec' },
      { name: 'Box Jumps', sets: '3', reps: '12' },
      { name: 'Rowing Machine Intervals', sets: '5', reps: '200m sprints' },
      { name: 'Dumbbell Thrusters', sets: '4', reps: '12' },
      { name: 'Medicine Ball Slams', sets: '3', reps: '15' },
      { name: 'Sled Push', sets: '4', reps: '30 sec' },
      { name: 'Cable Woodchops', sets: '3', reps: '12 each' },
      { name: 'Treadmill Incline Walk', sets: '1', reps: '10 min' },
    ],
    home: [
      { name: 'Burpees', sets: '4', reps: '12' },
      { name: 'Mountain Climbers', sets: '4', reps: '30 sec' },
      { name: 'Jump Squats', sets: '4', reps: '15' },
      { name: 'High Knees', sets: '4', reps: '30 sec' },
      { name: 'Plank Jacks', sets: '3', reps: '20' },
      { name: 'Skater Jumps', sets: '3', reps: '12 each' },
      { name: 'Bicycle Crunches', sets: '3', reps: '20' },
      { name: 'Jumping Lunges', sets: '3', reps: '10 each' },
      { name: 'High Knees Sprint', sets: '3', reps: '1 min' },
    ],
    minimal: [
      { name: 'Dumbbell Snatch', sets: '4', reps: '10 each' },
      { name: 'Dumbbell Squat to Press', sets: '4', reps: '12' },
      { name: 'Renegade Rows', sets: '3', reps: '10 each' },
      { name: 'Dumbbell Swings', sets: '4', reps: '15' },
      { name: 'Band-Assisted Sprints', sets: '4', reps: '20 sec' },
      { name: 'Dumbbell Burpees', sets: '3', reps: '10' },
      { name: 'Plank Rows', sets: '3', reps: '12 each' },
    ],
  },
  'Endurance': {
    gym: [
      { name: 'Treadmill Intervals', sets: '8', reps: '1 min on / 1 min off' },
      { name: 'Rowing Machine', sets: '4', reps: '500m' },
      { name: 'Stairmaster', sets: '1', reps: '10 min' },
      { name: 'Assault Bike', sets: '5', reps: '30 sec sprints' },
      { name: 'Bodyweight Circuit (squats, push-ups, lunges)', sets: '3', reps: '15 each' },
      { name: 'Farmer Carries', sets: '4', reps: '40m' },
      { name: 'Jump Rope', sets: '5', reps: '1 min' },
    ],
    home: [
      { name: 'Jumping Jacks', sets: '4', reps: '1 min' },
      { name: 'Running in Place (high knees)', sets: '4', reps: '45 sec' },
      { name: 'Step-Ups (on stairs)', sets: '4', reps: '20 each' },
      { name: 'Squat Holds', sets: '3', reps: '45 sec' },
      { name: 'Push-Up to Plank Hold', sets: '3', reps: '10 + 20 sec' },
      { name: 'Lateral Shuffles', sets: '4', reps: '30 sec' },
      { name: 'Burpee Broad Jumps', sets: '3', reps: '8' },
      { name: 'Bear Crawls', sets: '3', reps: '30 sec' },
    ],
    minimal: [
      { name: 'Dumbbell Complex (clean, press, squat)', sets: '5', reps: '8 each' },
      { name: 'Band Sprints', sets: '6', reps: '20 sec' },
      { name: 'Dumbbell Walking Lunges', sets: '4', reps: '20 steps' },
      { name: 'Band Pull-Aparts', sets: '3', reps: '20' },
      { name: 'Dumbbell Step-Ups', sets: '3', reps: '12 each' },
      { name: 'Plank with Dumbbell Drag', sets: '3', reps: '10 each' },
    ],
  },
  'Flexibility': {
    gym: [
      { name: 'Foam Roll Full Body', sets: '1', reps: '5 min' },
      { name: 'Hip Flexor Stretch', sets: '2', reps: '45 sec each' },
      { name: 'Pigeon Pose', sets: '2', reps: '60 sec each' },
      { name: 'Hanging Lat Stretch', sets: '2', reps: '30 sec' },
      { name: 'Cat-Cow Stretch', sets: '2', reps: '10 reps' },
      { name: 'World\'s Greatest Stretch', sets: '2', reps: '8 each' },
      { name: 'Seated Hamstring Stretch', sets: '2', reps: '45 sec each' },
      { name: 'Thoracic Spine Rotations', sets: '2', reps: '10 each' },
    ],
    home: [
      { name: 'Sun Salutations', sets: '3', reps: '5 flows' },
      { name: 'Deep Squat Hold', sets: '3', reps: '45 sec' },
      { name: 'Standing Forward Fold', sets: '2', reps: '60 sec' },
      { name: 'Supine Spinal Twist', sets: '2', reps: '45 sec each' },
      { name: 'Butterfly Stretch', sets: '2', reps: '60 sec' },
      { name: 'Downward Dog to Cobra Flow', sets: '3', reps: '8' },
      { name: 'Neck & Shoulder Rolls', sets: '2', reps: '10 each' },
      { name: 'Child\'s Pose', sets: '1', reps: '60 sec' },
    ],
    minimal: [
      { name: 'Band-Assisted Hamstring Stretch', sets: '2', reps: '45 sec each' },
      { name: 'Band Shoulder Dislocates', sets: '3', reps: '10' },
      { name: 'Band-Assisted Hip Opener', sets: '2', reps: '45 sec each' },
      { name: 'Foam Roll Quads & IT Band', sets: '1', reps: '3 min' },
      { name: 'Doorway Chest Stretch', sets: '2', reps: '30 sec each' },
      { name: 'Seated Spinal Twist', sets: '2', reps: '45 sec each' },
    ],
  },
  'General Fitness': {
    gym: [
      { name: 'Dumbbell Bench Press', sets: '3', reps: '12' },
      { name: 'Cable Rows', sets: '3', reps: '12' },
      { name: 'Leg Press', sets: '3', reps: '12' },
      { name: 'Dumbbell Shoulder Press', sets: '3', reps: '12' },
      { name: 'Lat Pulldowns', sets: '3', reps: '12' },
      { name: 'Plank', sets: '3', reps: '45 sec' },
      { name: 'Treadmill Walk/Jog', sets: '1', reps: '10 min' },
      { name: 'Bicycle Crunches', sets: '3', reps: '15' },
    ],
    home: [
      { name: 'Push-Ups', sets: '3', reps: '12-15' },
      { name: 'Bodyweight Squats', sets: '3', reps: '15' },
      { name: 'Lunges', sets: '3', reps: '12 each' },
      { name: 'Plank', sets: '3', reps: '30 sec' },
      { name: 'Glute Bridges', sets: '3', reps: '15' },
      { name: 'Superman Hold', sets: '3', reps: '20 sec' },
      { name: 'Jumping Jacks', sets: '3', reps: '30 sec' },
      { name: 'Mountain Climbers', sets: '3', reps: '20' },
    ],
    minimal: [
      { name: 'Dumbbell Squats', sets: '3', reps: '12' },
      { name: 'Dumbbell Press', sets: '3', reps: '12' },
      { name: 'Dumbbell Rows', sets: '3', reps: '12 each' },
      { name: 'Dumbbell Lunges', sets: '3', reps: '10 each' },
      { name: 'Band Lateral Raises', sets: '3', reps: '15' },
      { name: 'Plank', sets: '3', reps: '45 sec' },
      { name: 'Band Face Pulls', sets: '3', reps: '15' },
    ],
  },
};

function scrollChat() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMsg(html, delay) {
  return new Promise(resolve => {
    const typing = document.createElement('div');
    typing.className = 'ai-msg ai-msg-bot';
    typing.innerHTML = '<div class="ai-typing"><span></span><span></span><span></span></div>';
    chatMessages.appendChild(typing);
    scrollChat();
    setTimeout(() => {
      typing.innerHTML = `<p>${html}</p>`;
      scrollChat();
      resolve(typing);
    }, delay || 800);
  });
}

function addUserMsg(text) {
  const div = document.createElement('div');
  div.className = 'ai-msg ai-msg-user';
  div.innerHTML = `<p>${text}</p>`;
  chatMessages.appendChild(div);
  scrollChat();
}

function addQuickReplies(container, options, step) {
  const wrap = document.createElement('div');
  wrap.className = 'ai-quick-replies';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => aiSelectOption(step, opt);
    wrap.appendChild(btn);
  });
  container.appendChild(wrap);
  scrollChat();
}

function aiSelectOption(step, value) {
  // Remove quick reply buttons
  document.querySelectorAll('.ai-quick-replies').forEach(el => el.remove());
  addUserMsg(value);
  processStep(step, value);
}

function aiSendMessage() {
  const input = document.getElementById('aiInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  document.querySelectorAll('.ai-quick-replies').forEach(el => el.remove());
  addUserMsg(text);
  processStep(aiState.step, text);
}

async function processStep(step, value) {
  if (step === 'goal') {
    aiState.goal = value;
    aiState.step = 'level';
    const msg = await addBotMsg(`Great choice — <strong>${value}</strong>! What's your <strong>experience level</strong>?`);
    addQuickReplies(msg, ['Beginner', 'Intermediate', 'Advanced'], 'level');

  } else if (step === 'level') {
    aiState.level = value;
    aiState.step = 'equipment';
    const msg = await addBotMsg(`Got it, <strong>${value}</strong>. What <strong>equipment</strong> do you have access to?`);
    addQuickReplies(msg, ['Full Gym', 'Minimal (Dumbbells/Bands)', 'No Equipment (Bodyweight)'], 'equipment');

  } else if (step === 'equipment') {
    aiState.equipment = value;
    aiState.step = 'duration';
    const msg = await addBotMsg(`Perfect. How long do you want your workout to be?`);
    addQuickReplies(msg, ['15 minutes', '30 minutes', '45 minutes', '60 minutes'], 'duration');

  } else if (step === 'duration') {
    aiState.duration = value;
    aiState.step = 'done';
    await addBotMsg(`Building your personalized <strong>${aiState.goal}</strong> workout...`, 600);
    await generateWorkout();

  } else if (step === 'done') {
    // Allow follow-up requests
    const lower = value.toLowerCase();
    if (lower.includes('another') || lower.includes('new') || lower.includes('again') || lower.includes('different')) {
      aiState.step = 'goal';
      const msg = await addBotMsg(`Let's build another one! What's your <strong>fitness goal</strong> this time?`);
      addQuickReplies(msg, ['Muscle Gain', 'Fat Loss', 'Endurance', 'Flexibility', 'General Fitness'], 'goal');
    } else if (lower.includes('harder') || lower.includes('intense')) {
      await addBotMsg(`Ramping up the intensity...`, 600);
      await generateWorkout(true);
    } else if (lower.includes('easier') || lower.includes('lighter')) {
      await addBotMsg(`Scaling it down...`, 600);
      await generateWorkout(false, true);
    } else {
      const msg = await addBotMsg(`Want me to generate <strong>another workout</strong>, make this one <strong>harder</strong>, or <strong>easier</strong>?`);
      addQuickReplies(msg, ['Another Workout', 'Make It Harder', 'Make It Easier'], 'done');
    }
  }
}

async function generateWorkout(harder, easier) {
  let equipKey = 'home';
  if (aiState.equipment.toLowerCase().includes('gym')) equipKey = 'gym';
  else if (aiState.equipment.toLowerCase().includes('minimal') || aiState.equipment.toLowerCase().includes('dumbbell')) equipKey = 'minimal';

  const goal = aiState.goal || 'General Fitness';
  const pool = (exerciseDB[goal] && exerciseDB[goal][equipKey]) || exerciseDB['General Fitness']['home'];

  // Determine exercise count based on duration
  let durationMin = parseInt(aiState.duration) || 30;
  let count = Math.min(pool.length, Math.max(4, Math.round(durationMin / 7)));

  // Shuffle and pick exercises
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  let exercises = shuffled.slice(0, count).map(ex => {
    let sets = parseInt(ex.sets);
    let reps = ex.reps;
    if (harder) { sets = Math.min(sets + 1, 6); }
    if (easier) { sets = Math.max(sets - 1, 2); }
    return { ...ex, sets: String(sets), reps };
  });

  const workoutName = `${aiState.goal} — ${durationMin} Min ${aiState.level} Blast`;
  const totalSets = exercises.reduce((sum, e) => sum + parseInt(e.sets), 0);

  const exerciseRows = exercises.map(e =>
    `<div class="ai-exercise">
      <span class="ai-exercise-name">${e.name}</span>
      <span class="ai-exercise-detail">${e.sets} x ${e.reps}</span>
    </div>`
  ).join('');

  const workoutHtml = `Here's your workout:
    <div class="ai-workout-card">
      <h4>${workoutName}</h4>
      ${exerciseRows}
      <div class="ai-workout-footer">
        <span>${exercises.length} exercises &middot; ${totalSets} total sets &middot; ~${durationMin} min</span>
        <button class="ai-save-btn" onclick="saveWorkout(this)">Save Workout</button>
      </div>
    </div>`;

  const msg = await addBotMsg(workoutHtml, 1200);
  const followUp = await addBotMsg(`How's that look? I can generate <strong>another workout</strong>, make this <strong>harder</strong> or <strong>easier</strong>, or you can type any request!`);
  addQuickReplies(followUp, ['Another Workout', 'Make It Harder', 'Make It Easier'], 'done');
}

function saveWorkout(btn) {
  btn.textContent = 'Saved!';
  btn.style.background = 'var(--primary)';
  btn.disabled = true;
  showToast('Workout saved to your library!');
}
