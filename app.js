// ===== Data =====
const trainers = [
  {
    id: 1, name: "Marcus Johnson", specialty: "Strength & Powerlifting",
    category: "strength", price: 49.99, rating: 4.9, subscribers: 1240, experience: "12 yrs",
    bio: "Former competitive powerlifter turned coach. Specializes in progressive overload programs for all levels.",
    color: "#6C3AED", trainerOfMonth: true,
    totmQuote: "Consistency beats intensity. Show up every day and the results will follow.",
    workouts: [
      { name: "5x5 Foundation", type: "Strength", duration: "55 min", difficulty: "Intermediate", location: "Gym", price: 29.99, description: "The classic 5x5 program adapted for progressive overload. Perfect for building raw strength.", sampleDays: [
        { day: "Day 1 — Squat & Press", exercises: ["Barbell Back Squat — 5x5", "Bench Press — 5x5", "Barbell Row — 5x5", "Face Pulls — 3x15", "Plank Hold — 3x45s"] },
        { day: "Day 2 — Deadlift & Pull", exercises: ["Conventional Deadlift — 5x5", "Overhead Press — 5x5", "Weighted Pull-Ups — 3x8", "Barbell Curls — 3x10", "Hanging Leg Raises — 3x12"] },
        { day: "Day 3 — Volume Day", exercises: ["Front Squat — 3x8", "Incline Bench Press — 3x8", "Pendlay Row — 3x8", "Dumbbell Lateral Raises — 3x12", "Cable Crunches — 3x15"] }
      ] },
      { name: "Deadlift Domination", type: "Powerlifting", duration: "60 min", difficulty: "Advanced", location: "Gym", price: 34.99, description: "A 6-week deadlift specialization program to break through plateaus.", sampleDays: [
        { day: "Day 1 — Heavy Pulls", exercises: ["Conventional Deadlift — 5x3", "Deficit Deadlifts — 3x5", "Barbell Hip Thrusts — 4x8", "Farmer Carries — 3x40m", "Ab Wheel Rollouts — 3x10"] },
        { day: "Day 2 — Accessory Work", exercises: ["Romanian Deadlift — 4x8", "Leg Curls — 3x12", "Glute-Ham Raises — 3x10", "Single-Leg RDL — 3x10/side", "Back Extensions — 3x15"] },
        { day: "Day 3 — Variation Day", exercises: ["Sumo Deadlift — 4x5", "Pause Deadlifts — 3x3", "Barbell Good Mornings — 3x10", "Lat Pulldowns — 3x12", "Pallof Press — 3x10/side"] }
      ] },
      { name: "Upper Body Blast", type: "Hypertrophy", duration: "45 min", difficulty: "Beginner", location: "Gym", price: 27.99, description: "High-volume upper body routine focused on chest, back, and shoulders.", sampleDays: [
        { day: "Day 1 — Chest & Triceps", exercises: ["Dumbbell Bench Press — 4x10", "Incline Dumbbell Flyes — 3x12", "Cable Crossovers — 3x15", "Tricep Rope Pushdowns — 3x12", "Overhead Tricep Extension — 3x10"] },
        { day: "Day 2 — Back & Biceps", exercises: ["Lat Pulldown — 3x12", "Seated Cable Row — 3x12", "Dumbbell Rows — 3x10/side", "EZ-Bar Curls — 3x12", "Hammer Curls — 3x10"] },
        { day: "Day 3 — Shoulders & Arms", exercises: ["Overhead Press — 3x10", "Lateral Raises — 3x15", "Rear Delt Flyes — 3x12", "Close-Grip Bench Press — 3x10", "Concentration Curls — 3x10/side"] }
      ] },
      { name: "Leg Day Legends", type: "Strength", duration: "50 min", difficulty: "Intermediate", location: "At Home", price: 29.99, description: "Squat-focused leg day with accessory work for complete lower body development.", sampleDays: [
        { day: "Day 1 — Quad Focus", exercises: ["Goblet Squats — 4x12", "Bulgarian Split Squats — 3x10/side", "Wall Sit Hold — 3x45s", "Step-Ups — 3x12/side", "Bodyweight Calf Raises — 3x20"] },
        { day: "Day 2 — Posterior Chain", exercises: ["Romanian Deadlift (dumbbell) — 3x10", "Glute Bridges — 4x15", "Single-Leg Glute Bridge — 3x12/side", "Nordic Curl Negatives — 3x6", "Banded Good Mornings — 3x15"] },
        { day: "Day 3 — Full Legs", exercises: ["Jump Squats — 4x10", "Lateral Lunges — 3x10/side", "Pistol Squat Progressions — 3x6/side", "Sumo Squat Hold — 3x30s", "Standing Calf Raises — 4x15"] }
      ] },
    ],
    tags: ["Powerlifting", "Hypertrophy", "Strength"]
  },
  {
    id: 2, name: "Aisha Patel", specialty: "HIIT & Fat Loss",
    category: "hiit", price: 39.99, rating: 4.8, subscribers: 2100, experience: "8 yrs",
    bio: "High-energy coach known for efficient, no-equipment HIIT sessions that burn maximum calories in minimum time.",
    color: "#EC4899",
    workouts: [
      { name: "20-Min Torch", type: "HIIT", duration: "20 min", difficulty: "Beginner", location: "At Home", price: 24.99, description: "Quick full-body HIIT session perfect for busy mornings.", sampleDays: [
        { day: "Day 1 — Total Body Blitz", exercises: ["Burpees — 40s on / 20s off x4", "Jump Squats — 3x15", "Mountain Climbers — 45s x3", "High Knees — 30s on / 15s off x4", "Plank Hold — 45s"] },
        { day: "Day 2 — Lower Body Torch", exercises: ["Squat Jumps — 40s on / 20s off x4", "Alternating Lunges — 3x12/side", "Skater Hops — 30s x4", "Wall Sit — 3x30s", "Glute Bridges — 3x15"] },
        { day: "Day 3 — Upper Body Fire", exercises: ["Push-Up Burpees — 30s on / 20s off x4", "Plank Shoulder Taps — 3x12/side", "Tricep Dips (chair) — 3x12", "Inchworms — 3x8", "Superman Hold — 3x20s"] }
      ] },
      { name: "Tabata Inferno", type: "HIIT", duration: "30 min", difficulty: "Advanced", location: "Gym", price: 29.99, description: "Intense Tabata protocol with 8 rounds of 20/10 intervals.", sampleDays: [
        { day: "Day 1 — Explosive Power", exercises: ["Box Jumps — 20s on / 10s off x8", "Battle Rope Slams — 20s on / 10s off x8", "Kettlebell Swings — 20s on / 10s off x8", "Med Ball Slams — 20s on / 10s off x8", "Assault Bike Sprint — 20s on / 10s off x8"] },
        { day: "Day 2 — Strength Tabata", exercises: ["Dumbbell Thrusters — 20s on / 10s off x8", "Renegade Rows — 20s on / 10s off x8", "Goblet Squats — 20s on / 10s off x8", "Push Press — 20s on / 10s off x8", "Plank Rows — 20s on / 10s off x8"] },
        { day: "Day 3 — Cardio Tabata", exercises: ["Rowing Sprints — 20s on / 10s off x8", "Burpee Box Jumps — 20s on / 10s off x8", "Ski Erg Sprints — 20s on / 10s off x8", "Lateral Hops — 20s on / 10s off x8", "Mountain Climbers — 20s on / 10s off x8"] }
      ] },
      { name: "Full Body Burn", type: "Cardio", duration: "40 min", difficulty: "Intermediate", location: "At Home", price: 27.99, description: "No-equipment cardio workout that torches calories head to toe.", sampleDays: [
        { day: "Day 1 — Cardio Circuit", exercises: ["High Knees — 60s intervals x4", "Jumping Lunges — 3x12/side", "Burpee Broad Jumps — 3x10", "Star Jumps — 3x15", "Plank Jacks — 3x20"] },
        { day: "Day 2 — Endurance Builder", exercises: ["Squat to Tuck Jump — 4x10", "Speed Skaters — 45s x4", "Bear Crawl — 3x30s", "Pop Squats — 3x15", "Flutter Kicks — 3x30s"] },
        { day: "Day 3 — Power Cardio", exercises: ["Tuck Jumps — 3x10", "Lateral Shuffle — 45s x4", "Burpees — 4x12", "High Knees to Sprawl — 3x8", "Mountain Climber Twists — 3x12/side"] }
      ] },
      { name: "Core Crusher", type: "HIIT", duration: "15 min", difficulty: "Beginner", location: "At Home", price: 24.99, description: "Targeted ab routine with HIIT-style pacing for maximum burn.", sampleDays: [
        { day: "Day 1 — Upper Abs", exercises: ["Bicycle Crunches — 40s on / 20s off x3", "V-Ups — 3x12", "Plank Hold — 45s x2", "Toe Touches — 3x15", "Dead Bug — 3x10/side"] },
        { day: "Day 2 — Lower Abs", exercises: ["Flutter Kicks — 30s on / 15s off x4", "Reverse Crunches — 3x15", "Leg Raises — 3x12", "Scissor Kicks — 30s x3", "Hollow Body Hold — 3x20s"] },
        { day: "Day 3 — Obliques & Core", exercises: ["Russian Twists — 3x20", "Side Plank — 30s/side x3", "Woodchoppers — 3x12/side", "Standing Oblique Crunches — 3x12/side", "Plank Hip Dips — 3x10/side"] }
      ] },
    ],
    tags: ["HIIT", "Fat Loss", "No Equipment"]
  },
  {
    id: 3, name: "Nina Brooks", specialty: "At Home Workouts",
    category: "athome", price: 29.99, rating: 4.8, subscribers: 2100, experience: "8 yrs",
    bio: "No gym? No problem. Nina designs effective bodyweight and minimal-equipment workouts you can do anywhere in your home.",
    color: "#10B981",
    workouts: [
      { name: "Living Room HIIT", type: "HIIT", duration: "25 min", difficulty: "Beginner", location: "At Home", price: 22.99, description: "High-energy bodyweight HIIT you can do in your living room — no equipment needed.", sampleDays: [
        { day: "Day 1 — Sweat Starter", exercises: ["Squat Jumps — 30s on / 15s off x4", "High Knees — 45s x3", "Burpees — 3x8", "Jumping Jacks — 60s x2", "Mountain Climbers — 30s x3"] },
        { day: "Day 2 — Core & Cardio", exercises: ["Plank Jacks — 3x15", "Bicycle Crunches — 3x20", "Star Jumps — 3x10", "Flutter Kicks — 30s x3", "Bodyweight Squats — 3x15"] },
        { day: "Day 3 — Total Body Blast", exercises: ["Burpee to Tuck Jump — 3x8", "Lateral Lunges — 3x10/side", "Push-Ups — 3x10", "Skater Hops — 30s x4", "Plank Hold — 3x30s"] }
      ] },
      { name: "Apartment-Friendly Strength", type: "Strength", duration: "35 min", difficulty: "Intermediate", location: "At Home", price: 27.99, description: "Low-impact strength training designed for small spaces and shared floors.", sampleDays: [
        { day: "Day 1 — Lower Body (No Jumping)", exercises: ["Slow-Tempo Squats — 4x12", "Glute Bridges — 3x15", "Single-Leg RDL — 3x10/side", "Wall Sit — 3x45s", "Calf Raises — 3x20"] },
        { day: "Day 2 — Upper Body (No Impact)", exercises: ["Push-Up Variations — 3x10", "Tricep Dips (chair) — 3x12", "Plank Shoulder Taps — 3x10/side", "Superman Hold — 3x20s", "Isometric Towel Curls — 3x10"] },
        { day: "Day 3 — Full Body (Quiet Mode)", exercises: ["Slow Lunges — 3x10/side", "Pike Push-Ups — 3x8", "Glute-Ham Bridge — 3x12", "Dead Bug — 3x10/side", "Plank to Downward Dog — 3x8"] }
      ] },
      { name: "Band & Bodyweight Burn", type: "Resistance", duration: "30 min", difficulty: "Intermediate", location: "At Home", price: 25.99, description: "Full-body burn using just resistance bands and your own bodyweight.", sampleDays: [
        { day: "Day 1 — Push & Legs", exercises: ["Banded Squats — 3x15", "Banded Push-Ups — 3x12", "Banded Lateral Walks — 3x12/side", "Banded Overhead Press — 3x12", "Banded Glute Kickbacks — 3x12/side"] },
        { day: "Day 2 — Pull & Core", exercises: ["Band Pull-Aparts — 3x20", "Banded Rows — 3x12", "Banded Deadlifts — 3x15", "Banded Pallof Press — 3x10/side", "Plank with Band Row — 3x8/side"] },
        { day: "Day 3 — Full Body Circuit", exercises: ["Banded Squat to Press — 3x12", "Banded Bicep Curls — 3x15", "Banded Tricep Extensions — 3x12", "Banded Hip Thrusts — 3x15", "Band-Assisted Crunches — 3x15"] }
      ] },
      { name: "No Excuses Full Body", type: "Bodyweight", duration: "40 min", difficulty: "Advanced", location: "At Home", price: 29.99, description: "Intense full-body session with zero equipment — just you and the floor.", sampleDays: [
        { day: "Day 1 — Strength Mastery", exercises: ["Pistol Squats — 3x6/side", "Handstand Push-Up Progressions — 3x8", "L-Sit Hold — 4x20s", "Archer Push-Ups — 3x6/side", "Single-Leg Calf Raises — 3x15/side"] },
        { day: "Day 2 — Power & Plyo", exercises: ["Clap Push-Ups — 4x6", "Jump Squats — 4x12", "Explosive Lunges — 3x8/side", "Tuck Jumps — 3x10", "Burpee to Tuck Jump — 3x8"] },
        { day: "Day 3 — Endurance Grind", exercises: ["Push-Up Ladder (1-10-1) — 1 set", "Squat Holds — 4x45s", "Bear Crawl — 3x40s", "Hollow Body Hold — 4x30s", "Plank to Push-Up — 4x10"] }
      ] },
    ],
    tags: ["At Home", "Bodyweight", "No Equipment"]
  },
  {
    id: 4, name: "Damon Clarke", specialty: "Cardio & Endurance",
    category: "cardio", price: 44.99, rating: 4.7, subscribers: 890, experience: "10 yrs",
    bio: "Endurance specialist who builds heart-pounding cardio programs. Improve stamina, burn fat, and boost your cardiovascular health.",
    color: "#F59E0B",
    workouts: [
      { name: "HIIT Burn", type: "Cardio", duration: "25 min", difficulty: "Beginner", location: "At Home", price: 26.99, description: "High-intensity intervals designed to torch calories and build endurance.", sampleDays: [
        { day: "Day 1 — Cardio Foundations", exercises: ["Jumping Jacks — 60s x4", "High Knees — 45s x3", "Skater Hops — 3x12/side", "Marching in Place — 60s x3", "Bodyweight Squats — 3x15"] },
        { day: "Day 2 — Step It Up", exercises: ["Step-Touch Side Slides — 3x60s", "Butt Kicks — 45s x4", "Standing Knee Raises — 3x12/side", "Arm Circles — 2x60s", "Modified Burpees — 3x8"] },
        { day: "Day 3 — Endurance Push", exercises: ["Jump Rope (or mimics) — 60s x5", "Lateral Shuffles — 30s x4", "High Knees to Squat — 3x10", "Standing Oblique Crunches — 3x12/side", "Cool-Down Walk — 3min"] }
      ] },
      { name: "Endurance Builder", type: "Cardio", duration: "40 min", difficulty: "Advanced", location: "Gym", price: 32.99, description: "Long-form cardio circuits that push your aerobic and anaerobic limits.", sampleDays: [
        { day: "Day 1 — Machine Intervals", exercises: ["Rowing Machine — 2000m intervals x3", "Assault Bike — 5x2min sprints", "Stairclimber — 10min steady-state", "Jump Rope — 3x2min", "Cool-Down Row — 5min easy"] },
        { day: "Day 2 — Circuit Endurance", exercises: ["Treadmill Incline Run — 8min", "Bike Sprint — 4x90s", "Rowing 500m Repeats — 4 sets", "Battle Ropes — 4x30s", "Farmer Carries — 3x40m"] },
        { day: "Day 3 — Threshold Training", exercises: ["Treadmill Tempo Run — 12min", "Assault Bike Tabata — 20s on / 10s off x8", "Ski Erg — 3x500m", "Stairclimber Intervals — 5x1min hard", "Cool-Down Walk — 5min"] }
      ] },
      { name: "Metabolic Blast", type: "Cardio", duration: "45 min", difficulty: "Intermediate", location: "Gym", price: 29.99, description: "Fast-paced metabolic conditioning to rev up your metabolism all day.", sampleDays: [
        { day: "Day 1 — Kettlebell Conditioning", exercises: ["Kettlebell Swings — 4x20", "Goblet Squats — 3x15", "KB Clean & Press — 3x10/side", "KB Farmers Walk — 3x40m", "KB Sumo Deadlift — 3x12"] },
        { day: "Day 2 — Sled & Steps", exercises: ["Box Step-Ups — 3x15/side", "Sled Push — 5x30m", "Box Jumps — 3x12", "Medicine Ball Slams — 3x15", "Bear Crawl — 3x30s"] },
        { day: "Day 3 — Full Circuit", exercises: ["Dumbbell Thrusters — 4x12", "Battle Rope Waves — 4x30s", "Rowing Sprint — 4x250m", "Burpee to Box Jump — 3x8", "Plank Pull-Throughs — 3x10/side"] }
      ] },
      { name: "Sprint Intervals", type: "Cardio", duration: "30 min", difficulty: "Intermediate", location: "At Home", price: 27.99, description: "Run-based interval training to build speed and cardiovascular power.", sampleDays: [
        { day: "Day 1 — Sprint & Recover", exercises: ["Sprint 30s / Walk 60s — x10", "Hill Sprints — 8x20s", "Lateral Shuffles — 4x30s", "Walking Lunges — 2x20 steps", "Cool-Down Jog — 3min"] },
        { day: "Day 2 — Fartlek Run", exercises: ["Easy Jog — 3min warm-up", "Fast Run 60s / Jog 90s — x8", "Sprint Finish — 4x15s", "Backward Jog — 2x30s", "Walking Cool-Down — 3min"] },
        { day: "Day 3 — Speed Ladder", exercises: ["Sprint 10s / Walk 30s — x5", "Sprint 20s / Walk 40s — x5", "Sprint 30s / Walk 60s — x5", "Sprint 15s / Walk 30s — x5", "Easy Jog Cool-Down — 3min"] }
      ] },
    ],
    tags: ["Cardio", "HIIT", "Endurance"]
  },
  {
    id: 5, name: "Sophie Turner", specialty: "Mobility & Recovery",
    category: "mobility", price: 54.99, rating: 4.8, subscribers: 1560, experience: "9 yrs",
    bio: "Mobility specialist who builds programs that keep you moving well — fewer injuries, better range, more years training.",
    color: "#EF4444",
    workouts: [
      { name: "Full Body Mobility Flow", type: "Mobility", duration: "35 min", difficulty: "All Levels", location: "At Home", price: 31.99, description: "Head-to-toe mobility routine that opens up everything. No equipment needed.", sampleDays: [
        { day: "Day 1 — Hips & Lower Body", exercises: ["90/90 Hip Stretch — 2min/side", "Deep Squat Hold — 3x45s", "Pigeon Pose — 90s/side", "Ankle Circles — 2min/side", "Standing Quad Stretch — 60s/side"] },
        { day: "Day 2 — Spine & Shoulders", exercises: ["Thoracic Spine Rotation — 3x8/side", "Cat-Cow — 3x10 breaths", "Thread the Needle — 60s/side", "Shoulder Pass-Throughs — 2x15", "Neck Circles — 2min"] },
        { day: "Day 3 — Full Body Flow", exercises: ["World's Greatest Stretch — 5 reps/side", "Downward Dog to Cobra — 3x8", "Hip Flexor Lunge — 60s/side", "Wrist Circles & Stretches — 2min", "Child's Pose — 90s"] }
      ] },
      { name: "Mobility Foundations", type: "Mobility", duration: "40 min", difficulty: "Beginner", location: "At Home", price: 27.99, description: "Learn the basics of joint health and movement quality before loading up.", sampleDays: [
        { day: "Day 1 — Joint Awareness", exercises: ["Cat-Cow — 3x10 breaths", "Hip Circles — 2min/side", "Ankle Dorsiflexion Stretch — 3x30s", "Arm Circles — 2x60s", "Neck Rolls — 2min"] },
        { day: "Day 2 — Flexibility Basics", exercises: ["Standing Hamstring Stretch — 60s/side", "Doorway Chest Stretch — 60s/side", "Seated Butterfly Stretch — 90s", "Supine Spinal Twist — 60s/side", "Calf Stretch — 45s/side"] },
        { day: "Day 3 — Movement Quality", exercises: ["Bodyweight Squat (slow tempo) — 3x10", "Wall Slides — 3x10", "Single-Leg Balance — 3x30s/side", "Bear Crawl — 3x20s", "Deep Breathing — 3min"] }
      ] },
      { name: "Pre-Workout Warm-Up", type: "Mobility", duration: "15 min", difficulty: "All Levels", location: "Gym", price: 19.99, description: "Quick activation routine to prime your joints and muscles before lifting.", sampleDays: [
        { day: "Day 1 — Upper Body Prep", exercises: ["Banded Shoulder Dislocates — 2x15", "Scapular Push-Ups — 2x10", "Arm Circles — 60s each direction", "Band Pull-Aparts — 2x15", "Thoracic Extensions — 2x8"] },
        { day: "Day 2 — Lower Body Prep", exercises: ["Leg Swings — 15/side", "Deep Squat Hold — 3x30s", "Walking Lunges — 2x8/side", "Glute Bridges — 2x12", "Ankle Rockers — 2x10/side"] },
        { day: "Day 3 — Full Body Activation", exercises: ["Inchworms — 2x6", "World's Greatest Stretch — 3/side", "High Knees — 30s", "Arm Circles to Overhead Reach — 2x10", "Bodyweight Squats — 2x10"] }
      ] },
      { name: "Recovery Day Protocol", type: "Mobility", duration: "30 min", difficulty: "All Levels", location: "At Home", price: 24.99, description: "Active recovery session combining stretching, foam rolling cues, and breathwork.", sampleDays: [
        { day: "Day 1 — Lower Body Recovery", exercises: ["Foam Roll Quads & IT Band — 2min/side", "Couch Stretch — 2min/side", "Pigeon Pose — 90s/side", "Calf Foam Roll — 60s/side", "Box Breathing — 3min"] },
        { day: "Day 2 — Upper Body Recovery", exercises: ["Foam Roll Lats & Upper Back — 2min/side", "Doorway Pec Stretch — 90s/side", "Child's Pose — 2min", "Neck Stretches — 60s/side", "4-7-8 Breathing — 3min"] },
        { day: "Day 3 — Total Body Reset", exercises: ["Full Body Foam Roll — 8min", "Supine Spinal Twist — 60s/side", "Happy Baby Pose — 90s", "Legs Up the Wall — 3min", "Deep Belly Breathing — 3min"] }
      ] },
    ],
    tags: ["Mobility", "Recovery", "Flexibility"]
  },
  {
    id: 6, name: "Jordan Blake", specialty: "Weight Loss",
    category: "weightloss", price: 44.99, rating: 4.9, subscribers: 2180, experience: "7 yrs",
    bio: "Straight-up fat loss programs that work. No gimmicks, no crash diets — just structured training and accountability.",
    color: "#F59E0B",
    workouts: [
      { name: "Lean Out — Phase 1", type: "Weight Loss", duration: "40 min", difficulty: "Beginner", location: "Gym", price: 29.99, description: "Entry-level fat loss program combining resistance training with steady-state cardio.", sampleDays: [
        { day: "Day 1 — Lower Body + Cardio", exercises: ["Goblet Squats — 3x12", "Dumbbell Lunges — 3x10/side", "Leg Press — 3x12", "Treadmill Incline Walk — 15min", "Calf Raises — 3x15"] },
        { day: "Day 2 — Upper Body + Cardio", exercises: ["Dumbbell Bench Press — 3x12", "Lat Pulldown — 3x12", "Dumbbell Shoulder Press — 3x10", "Cable Rows — 3x12", "Stationary Bike — 10min"] },
        { day: "Day 3 — Full Body Circuit", exercises: ["Dumbbell Deadlifts — 3x10", "Push-Ups — 3x12", "Bodyweight Squats — 3x15", "Plank Hold — 3x30s", "Treadmill Walk — 10min"] }
      ] },
      { name: "Lean Out — Phase 2", type: "Weight Loss", duration: "45 min", difficulty: "Intermediate", location: "Gym", price: 34.99, description: "Progressive overload meets metabolic conditioning. For when Phase 1 gets easy.", sampleDays: [
        { day: "Day 1 — Strength & Conditioning", exercises: ["Barbell Front Squats — 4x8", "Dumbbell Thrusters — 3x12", "Rowing Machine — 5x500m intervals", "Kettlebell Swings — 3x15", "Hanging Leg Raises — 3x10"] },
        { day: "Day 2 — Push & Metabolic", exercises: ["Bench Press — 4x8", "Incline Dumbbell Press — 3x10", "Dumbbell Lateral Raises — 3x12", "Battle Ropes — 4x30s", "Box Jumps — 3x10"] },
        { day: "Day 3 — Pull & Burn", exercises: ["Barbell Rows — 4x8", "Pull-Ups (assisted if needed) — 3x8", "Face Pulls — 3x15", "Assault Bike Sprints — 5x30s", "Sled Push — 4x20m"] }
      ] },
      { name: "At Home Burn", type: "Weight Loss", duration: "30 min", difficulty: "Beginner", location: "At Home", price: 24.99, description: "Bodyweight circuits designed to keep your heart rate up and burn calories at home.", sampleDays: [
        { day: "Day 1 — Calorie Torcher", exercises: ["Bodyweight Squats — 4x20", "Push-Ups — 3x15", "Mountain Climbers — 4x30s", "Jumping Jacks — 3x45s", "Plank Hold — 3x30s"] },
        { day: "Day 2 — Low Impact Burn", exercises: ["Marching in Place — 3x60s", "Wall Push-Ups — 3x15", "Step-Ups (stairs) — 3x12/side", "Standing Knee Raises — 3x15/side", "Glute Bridges — 3x15"] },
        { day: "Day 3 — Circuit Finisher", exercises: ["Burpees — 3x8", "Alternating Lunges — 3x10/side", "Plank Jacks — 3x15", "High Knees — 3x30s", "Superman Hold — 3x20s"] }
      ] },
      { name: "Accountability Check-In", type: "Weight Loss", duration: "20 min", difficulty: "All Levels", location: "At Home", price: 19.99, description: "Weekly check-in session with progress tracking, weigh-in protocol, and adjustments.", sampleDays: [
        { day: "Day 1 — Weigh-In & Photos", exercises: ["Morning Weigh-In Protocol", "Progress Photo (front, side, back)", "Body Measurement Log (waist, hips, arms)", "Hydration Check — 64oz goal review", "Weekly Reflection Journal"] },
        { day: "Day 2 — Nutrition Review", exercises: ["Calorie Log Review — 7-day average", "Macro Balance Check", "Meal Timing Assessment", "Identify 2 Wins This Week", "Set 1 Nutrition Goal for Next Week"] },
        { day: "Day 3 — Training Review", exercises: ["Workout Completion Rate Check", "Energy Level Assessment (1-10)", "Sleep Quality Review", "Set 1 Training Goal for Next Week", "Plan Next Week's Schedule"] }
      ] },
    ],
    tags: ["Weight Loss", "Fat Loss", "Cardio"]
  },
  {
    id: 7, name: "Reese Calloway", specialty: "Strength & Hypertrophy",
    category: "strength", price: 42.99, rating: 4.7, subscribers: 1890, experience: "6 yrs",
    bio: "Programs built around progressive overload and time under tension. If you want to get bigger and stronger — this is the playbook.",
    color: "#8B5CF6",
    workouts: [
      { name: "Push Pull Legs — Week A", type: "Hypertrophy", duration: "50 min", difficulty: "Intermediate", location: "Gym", price: 32.99, description: "Classic PPL split designed for maximum muscle growth over 6 days.", sampleDays: [
        { day: "Day 1 — Push", exercises: ["Incline Dumbbell Press — 4x10", "Flat Bench Press — 4x8", "Cable Flyes — 3x12", "Dumbbell Lateral Raises — 3x15", "Tricep Rope Pushdowns — 3x12"] },
        { day: "Day 2 — Pull", exercises: ["Cable Rows — 4x12", "Weighted Pull-Ups — 3x8", "Face Pulls — 3x15", "Barbell Curls — 3x10", "Rear Delt Flyes — 3x12"] },
        { day: "Day 3 — Legs", exercises: ["Leg Press — 4x12", "Romanian Deadlift — 3x10", "Leg Curls — 3x12", "Leg Extensions — 3x12", "Standing Calf Raises — 4x15"] }
      ] },
      { name: "Upper Lower Split", type: "Strength", duration: "55 min", difficulty: "Intermediate", location: "Gym", price: 34.99, description: "4-day upper/lower program focused on compound lifts and accessory work.", sampleDays: [
        { day: "Day 1 — Upper Strength", exercises: ["Bench Press — 4x6", "Barbell Rows — 4x6", "Overhead Press — 3x8", "Weighted Pull-Ups — 3x8", "Dumbbell Curls — 3x10"] },
        { day: "Day 2 — Lower Strength", exercises: ["Barbell Back Squat — 4x6", "Romanian Deadlift — 4x8", "Leg Press — 3x10", "Walking Lunges — 3x10/side", "Calf Raises — 4x12"] },
        { day: "Day 3 — Upper Volume", exercises: ["Incline Dumbbell Press — 3x10", "Lat Pulldowns — 3x12", "Cable Lateral Raises — 3x15", "Tricep Dips — 3x12", "Hammer Curls — 3x12"] }
      ] },
      { name: "Arm Day Special", type: "Hypertrophy", duration: "35 min", difficulty: "Beginner", location: "Gym", price: 24.99, description: "Dedicated arm session hitting biceps, triceps, and forearms from every angle.", sampleDays: [
        { day: "Day 1 — Biceps Focus", exercises: ["EZ-Bar Curls — 4x12", "Incline Dumbbell Curls — 3x10", "Concentration Curls — 3x10/side", "Cable Curls — 3x12", "Reverse Curls — 3x12"] },
        { day: "Day 2 — Triceps Focus", exercises: ["Tricep Rope Pushdowns — 4x15", "Overhead Tricep Extension — 3x12", "Close-Grip Bench Press — 3x10", "Skull Crushers — 3x10", "Diamond Push-Ups — 3x12"] },
        { day: "Day 3 — Arms Superset", exercises: ["Barbell Curls / Tricep Dips — 4x10 each", "Hammer Curls / Rope Pushdowns — 3x12 each", "Preacher Curls / Overhead Extension — 3x10 each", "Wrist Curls — 3x15", "Reverse Wrist Curls — 3x15"] }
      ] },
      { name: "Back & Biceps", type: "Hypertrophy", duration: "45 min", difficulty: "Intermediate", location: "Gym", price: 29.99, description: "Heavy pulling session with rows, pull-ups, and curls for a thick, wide back.", sampleDays: [
        { day: "Day 1 — Width Focus", exercises: ["Pull-Ups — 3xAMRAP", "Wide-Grip Lat Pulldowns — 4x12", "Straight-Arm Pulldowns — 3x12", "Dumbbell Curls — 3x12", "Preacher Curls — 3x10"] },
        { day: "Day 2 — Thickness Focus", exercises: ["Barbell Rows — 4x8", "T-Bar Rows — 3x10", "Seated Cable Row — 3x12", "Hammer Curls — 3x10", "EZ-Bar Curls — 3x12"] },
        { day: "Day 3 — Complete Back & Arms", exercises: ["Deadlifts — 3x5", "Dumbbell Rows — 3x10/side", "Face Pulls — 3x15", "Cable Curls — 3x12", "Chin-Ups — 3xAMRAP"] }
      ] },
    ],
    tags: ["Strength", "Hypertrophy", "Muscle"]
  },
  {
    id: 8, name: "Leah Kim", specialty: "HIIT & Weight Loss",
    category: "hiit", price: 34.99, rating: 4.9, subscribers: 3200, experience: "5 yrs", featured: true,
    bio: "Short sessions. Big results. Leah's HIIT programs are designed for people who don't have time to waste.",
    color: "#EC4899",
    workouts: [
      { name: "15-Min Express", type: "HIIT", duration: "15 min", difficulty: "Beginner", location: "At Home", price: 19.99, description: "No-excuses HIIT that fits into any schedule. Done in 15 minutes flat.", sampleDays: [
        { day: "Day 1 — Quick Burn", exercises: ["Star Jumps — 30s on / 15s off x4", "Push-Up to Plank — 3x8", "Speed Skaters — 3x12/side", "High Knees — 30s x3", "Plank Hold — 30s"] },
        { day: "Day 2 — Core Express", exercises: ["Mountain Climbers — 30s x4", "Bicycle Crunches — 3x15", "Squat Pulses — 3x20", "Plank Shoulder Taps — 3x10/side", "Jumping Jacks — 45s x2"] },
        { day: "Day 3 — Total Body Quickie", exercises: ["Burpees — 3x6", "Alternating Lunges — 3x8/side", "Push-Ups — 3x8", "Flutter Kicks — 30s x3", "Squat Jumps — 3x8"] }
      ] },
      { name: "Sweat & Shred", type: "HIIT", duration: "30 min", difficulty: "Intermediate", location: "At Home", price: 27.99, description: "Full-body HIIT combining plyometrics, core work, and cardio bursts.", sampleDays: [
        { day: "Day 1 — Plyo Power", exercises: ["Plyo Lunge Jumps — 4x10/side", "Tuck Jumps — 3x10", "Broad Jumps — 3x8", "Box Jumps (step) — 3x12", "Burpee to Star Jump — 3x6"] },
        { day: "Day 2 — Core Shred", exercises: ["V-Ups — 3x15", "Russian Twists — 3x20", "Plank Hip Dips — 3x10/side", "Leg Raises — 3x12", "Mountain Climber Twists — 3x12/side"] },
        { day: "Day 3 — Cardio Blast", exercises: ["High Knees — 45s x4", "Speed Skaters — 3x12/side", "Pop Squats — 3x15", "Lateral Shuffle Taps — 30s x4", "Burpees — 4x8"] }
      ] },
      { name: "Lunch Break Burn", type: "HIIT", duration: "20 min", difficulty: "Beginner", location: "At Home", price: 22.99, description: "Quick midday session to break up your workday and burn calories.", sampleDays: [
        { day: "Day 1 — Desk Break", exercises: ["March in Place — 60s x3", "Chair Squats — 3x15", "Standing Oblique Crunches — 3x12/side", "Calf Raises — 3x20", "Arm Circles — 2x30s"] },
        { day: "Day 2 — Energy Boost", exercises: ["Jumping Jacks — 45s x3", "Wall Push-Ups — 3x12", "Standing Knee Raises — 3x12/side", "Lateral Lunges — 3x8/side", "Torso Twists — 3x12/side"] },
        { day: "Day 3 — Midday Sweat", exercises: ["Step-Ups (stairs) — 3x12/side", "Tricep Dips (chair) — 3x10", "Bodyweight Squats — 3x15", "Standing Crunches — 3x12/side", "Marching High Knees — 60s x3"] }
      ] },
      { name: "HIIT & Strength Combo", type: "HIIT", duration: "40 min", difficulty: "Advanced", location: "Gym", price: 32.99, description: "Alternating HIIT intervals with strength sets for the best of both worlds.", sampleDays: [
        { day: "Day 1 — Upper + HIIT", exercises: ["Dumbbell Thrusters — 4x10", "Box Jumps — 3x15", "Renegade Rows — 3x10/side", "Battle Ropes — 4x30s", "Dumbbell Bench Press — 3x10"] },
        { day: "Day 2 — Lower + HIIT", exercises: ["Barbell Squats — 4x8", "Jump Lunges — 3x10/side", "Kettlebell Swings — 4x15", "Assault Bike Sprint — 4x30s", "Leg Press — 3x12"] },
        { day: "Day 3 — Full Body + HIIT", exercises: ["Deadlifts — 4x6", "Burpee to Box Jump — 3x8", "Dumbbell Clean & Press — 3x10", "Rowing Sprint — 4x250m", "Pull-Ups — 3xAMRAP"] }
      ] },
    ],
    tags: ["HIIT", "Weight Loss", "Quick Sessions"]
  },
  {
    id: 9, name: "Carlos Mendez", specialty: "Cardio & Endurance",
    category: "cardio", price: 39.99, rating: 4.6, subscribers: 760, experience: "11 yrs",
    bio: "Marathon runner and endurance coach. Whether you're training for a 5K or an ultramarathon — Carlos has a plan for it.",
    color: "#0EA5E9",
    workouts: [
      { name: "Couch to 5K", type: "Cardio", duration: "30 min", difficulty: "Beginner", location: "At Home", price: 22.99, description: "8-week run/walk program that takes you from zero to your first 5K.", sampleDays: [
        { day: "Day 1 — Walk/Jog Intro", exercises: ["Warm-Up Walk — 5min", "Walk 4min / Jog 1min — x5 cycles", "Cool-Down Walk — 5min", "Standing Quad Stretch — 30s/side", "Calf Stretch — 30s/side"] },
        { day: "Day 2 — Building Stamina", exercises: ["Warm-Up Walk — 5min", "Walk 3min / Jog 2min — x5 cycles", "Light Jog — 3min steady", "Cool-Down Walk — 4min", "Hamstring Stretch — 30s/side"] },
        { day: "Day 3 — Endurance Push", exercises: ["Warm-Up Walk — 3min", "Light Jog — 10min steady", "Walk Recovery — 2min", "Jog — 5min steady", "Cool-Down Walk — 5min"] }
      ] },
      { name: "Half Marathon Prep", type: "Cardio", duration: "60 min", difficulty: "Intermediate", location: "Gym", price: 39.99, description: "12-week structured plan with tempo runs, long runs, and recovery days.", sampleDays: [
        { day: "Day 1 — Tempo Run", exercises: ["Warm-Up Jog — 10min easy", "Tempo Run — 20min at threshold pace", "Recovery Jog — 5min easy", "Strides — 4x100m", "Cool-Down Walk & Stretch — 5min"] },
        { day: "Day 2 — Hill Repeats", exercises: ["Warm-Up Jog — 10min", "Hill Repeats — 6x90s hard uphill", "Recovery Jog Down — after each repeat", "Flat Cool-Down Jog — 8min", "Dynamic Stretching — 5min"] },
        { day: "Day 3 — Long Run", exercises: ["Easy Pace Run — 45min", "Mid-Run Fueling Practice — gel or chews", "Negative Split Last 10min — slightly faster", "Cool-Down Walk — 5min", "Full Body Stretch — 5min"] }
      ] },
      { name: "Speed Work Sessions", type: "Cardio", duration: "35 min", difficulty: "Advanced", location: "At Home", price: 29.99, description: "Interval-based speed training to shave minutes off your personal best.", sampleDays: [
        { day: "Day 1 — Track Repeats", exercises: ["Warm-Up Jog — 8min", "400m Repeats at Race Pace — x8", "90s Walk Recovery Between Sets", "Cool-Down Jog — 5min", "Leg Stretches — 3min"] },
        { day: "Day 2 — Fartlek Session", exercises: ["Easy Jog — 5min", "Fartlek Intervals — 20min (random speed bursts)", "Sprint 30s / Easy 60s — x5 finisher", "Cool-Down Jog — 5min", "Hip Flexor Stretch — 60s/side"] },
        { day: "Day 3 — Sprint Finishers", exercises: ["Warm-Up Jog — 8min", "200m Sprints — x4 at 95% effort", "Walk Recovery 90s Between Sprints", "800m at Tempo Pace — x2", "Cool-Down Walk & Stretch — 5min"] }
      ] },
      { name: "Low Impact Cardio", type: "Cardio", duration: "40 min", difficulty: "Beginner", location: "At Home", price: 24.99, description: "Joint-friendly cardio for anyone who wants to build endurance without the pounding.", sampleDays: [
        { day: "Day 1 — Gentle Movement", exercises: ["Marching in Place — 5min intervals x3", "Step-Touch Side Slides — 3x2min", "Seated Punches — 4x60s", "Standing Leg Swings — 2x10/side", "Gentle Arm Circles — 2x60s"] },
        { day: "Day 2 — Chair Cardio", exercises: ["Seated Marching — 3x2min", "Seated Knee Lifts — 3x12/side", "Chair Stand-Ups — 3x10", "Seated Torso Twists — 3x12/side", "Arm Raises with Light Cans — 3x12"] },
        { day: "Day 3 — Standing Flow", exercises: ["Slow Step-Ups — 3x10/side", "Side Steps with Arm Reach — 3x12/side", "Wall Push-Ups — 3x10", "Standing Hip Circles — 2x10/side", "Gentle Walking in Place — 5min cool-down"] }
      ] },
    ],
    tags: ["Cardio", "Running", "Endurance"]
  },
  {
    id: 10, name: "Tanya West", specialty: "At Home & Bodyweight",
    category: "athome", price: 27.99, rating: 4.8, subscribers: 2850, experience: "6 yrs", featured: true,
    bio: "You don't need a gym. Tanya's programs use nothing but your bodyweight and prove that simplicity works.",
    color: "#14B8A6",
    workouts: [
      { name: "Zero Equipment Full Body", type: "Bodyweight", duration: "35 min", difficulty: "Beginner", location: "At Home", price: 22.99, description: "Head-to-toe bodyweight session. All you need is a floor and some space.", sampleDays: [
        { day: "Day 1 — Upper & Core", exercises: ["Push-Ups — 3x10", "Plank Hold — 3x30s", "Superman Hold — 3x15s", "Tricep Dips (floor) — 3x10", "Dead Bug — 3x8/side"] },
        { day: "Day 2 — Lower Body", exercises: ["Air Squats — 4x15", "Glute Bridges — 3x15", "Alternating Lunges — 3x10/side", "Calf Raises — 3x20", "Wall Sit — 3x30s"] },
        { day: "Day 3 — Full Body Flow", exercises: ["Inchworms — 3x6", "Bodyweight Squats — 3x12", "Push-Ups — 3x8", "Reverse Lunges — 3x8/side", "Plank Hold — 2x45s"] }
      ] },
      { name: "Pilates Strength", type: "Bodyweight", duration: "40 min", difficulty: "Intermediate", location: "At Home", price: 27.99, description: "Pilates-inspired strength work that builds core stability and lean muscle.", sampleDays: [
        { day: "Day 1 — Core Foundation", exercises: ["The Hundred — 3x100 count", "Roll-Ups — 3x10", "Single-Leg Circles — 10/side", "Criss-Cross — 3x12/side", "Plank — 3x45s"] },
        { day: "Day 2 — Lower Body Sculpt", exercises: ["Side-Lying Leg Lifts — 3x15/side", "Clam Shells — 3x15/side", "Bridge with March — 3x10/side", "Inner Thigh Lifts — 3x15/side", "Standing Leg Press — 3x12/side"] },
        { day: "Day 3 — Full Pilates Flow", exercises: ["Swimming — 3x20 count", "Teaser — 3x8", "Spine Stretch Forward — 3x8", "Saw — 3x8/side", "Side Plank — 30s/side x3"] }
      ] },
      { name: "Morning Wake-Up", type: "Bodyweight", duration: "15 min", difficulty: "Beginner", location: "At Home", price: 17.99, description: "Quick morning routine to wake up your body and set the tone for the day.", sampleDays: [
        { day: "Day 1 — Energize", exercises: ["Sun Salutation Flow — x5", "Bodyweight Squats — 2x10", "Arm Circles — 2min", "Cat-Cow Stretch — 10 breaths", "Gentle Twist — 30s/side"] },
        { day: "Day 2 — Activate", exercises: ["March in Place — 2min", "Standing Side Bends — 2x8/side", "Glute Bridges — 2x10", "Wall Push-Ups — 2x8", "Forward Fold — 60s"] },
        { day: "Day 3 — Mobilize", exercises: ["Hip Circles — 10/side", "Shoulder Rolls — 2x10 each direction", "Standing Quad Stretch — 30s/side", "Downward Dog — 45s", "Deep Breathing — 2min"] }
      ] },
      { name: "Bodyweight Strength", type: "Bodyweight", duration: "45 min", difficulty: "Advanced", location: "At Home", price: 29.99, description: "Advanced calisthenics session — push-ups, pistol squats, and more.", sampleDays: [
        { day: "Day 1 — Push Mastery", exercises: ["Diamond Push-Ups — 4x12", "Pike Push-Ups — 3x10", "Archer Push-Ups — 3x6/side", "Pseudo-Planche Push-Ups — 3x8", "Handstand Hold (wall) — 3x20s"] },
        { day: "Day 2 — Legs & Balance", exercises: ["Pistol Squats — 3x6/side", "Shrimp Squats — 3x6/side", "Nordic Curl Negatives — 3x5", "Single-Leg Glute Bridge — 3x12/side", "Jumping Lunges — 3x10/side"] },
        { day: "Day 3 — Pull & Core", exercises: ["Chin-Ups (door bar) — 4x8", "Inverted Rows — 3x12", "L-Sit Hold — 4x20s", "Dragon Flags (negative) — 3x5", "Hollow Body Hold — 3x30s"] }
      ] },
    ],
    tags: ["At Home", "Bodyweight", "No Equipment"]
  },
  {
    id: 11, name: "Derek Osei", specialty: "Weight Loss & Strength",
    category: "weightloss", price: 49.99, rating: 4.8, subscribers: 1650, experience: "9 yrs",
    bio: "Fat loss through strength training. Derek's approach is simple — build muscle, burn more at rest, lose weight for good.",
    color: "#D97706",
    workouts: [
      { name: "Strength-Based Fat Loss", type: "Weight Loss", duration: "50 min", difficulty: "Intermediate", location: "Gym", price: 34.99, description: "Compound lifts with short rest periods. Build muscle and burn fat simultaneously.", sampleDays: [
        { day: "Day 1 — Lower Compound", exercises: ["Barbell Back Squat — 4x8", "Romanian Deadlift — 3x10", "Leg Press — 3x12", "Walking Lunges — 3x10/side", "Calf Raises — 3x15"] },
        { day: "Day 2 — Upper Compound", exercises: ["Bench Press — 4x8", "Bent-Over Row — 4x10", "Overhead Press — 3x8", "Pull-Ups — 3xAMRAP", "Face Pulls — 3x15"] },
        { day: "Day 3 — Full Body Burn", exercises: ["Trap Bar Deadlift — 4x6", "Dumbbell Thrusters — 3x10", "Cable Rows — 3x12", "Kettlebell Swings — 3x15", "Plank Hold — 3x45s"] }
      ] },
      { name: "Metabolic Resistance", type: "Weight Loss", duration: "40 min", difficulty: "Intermediate", location: "Gym", price: 29.99, description: "Resistance circuits that keep your heart rate elevated the entire session.", sampleDays: [
        { day: "Day 1 — Circuit A", exercises: ["Kettlebell Goblet Squats — 3x15", "Dumbbell Clean & Press — 3x10", "Cable Woodchops — 3x12/side", "Box Step-Ups — 3x12/side", "Renegade Rows — 3x8/side"] },
        { day: "Day 2 — Circuit B", exercises: ["Dumbbell Lunges — 3x12/side", "Push Press — 3x10", "Cable Face Pulls — 3x15", "Medicine Ball Slams — 3x12", "Farmer Carries — 3x30m"] },
        { day: "Day 3 — Circuit C", exercises: ["Sumo Deadlifts — 3x10", "Dumbbell Bench Press — 3x12", "TRX Rows — 3x12", "Kettlebell Swings — 3x20", "Battle Rope Waves — 3x30s"] }
      ] },
      { name: "Beginner Fat Loss", type: "Weight Loss", duration: "35 min", difficulty: "Beginner", location: "At Home", price: 24.99, description: "Entry-level program for anyone starting their weight loss process. Low impact, high results.", sampleDays: [
        { day: "Day 1 — Easy Start", exercises: ["Bodyweight Lunges — 3x10/side", "Wall Push-Ups — 3x12", "Standing Knee Raises — 3x15/side", "Glute Bridges — 3x12", "Marching in Place — 3x60s"] },
        { day: "Day 2 — Build Confidence", exercises: ["Bodyweight Squats — 3x12", "Incline Push-Ups (counter) — 3x10", "Side Steps — 3x12/side", "Seated Leg Extensions — 3x12", "Arm Raises — 3x10"] },
        { day: "Day 3 — Move More", exercises: ["Step-Ups (stairs) — 3x10/side", "Chair-Assisted Squats — 3x12", "Standing Calf Raises — 3x15", "Wall Plank — 3x20s", "Walking in Place — 5min"] }
      ] },
      { name: "Weekend Warrior", type: "Weight Loss", duration: "60 min", difficulty: "Advanced", location: "Gym", price: 37.99, description: "Intense full-body session for the days when you have extra time and energy.", sampleDays: [
        { day: "Day 1 — Heavy Hitters", exercises: ["Trap Bar Deadlifts — 5x5", "Barbell Squats — 4x6", "Bench Press — 4x6", "Weighted Pull-Ups — 3x8", "Barbell Rows — 4x8"] },
        { day: "Day 2 — Metabolic Mayhem", exercises: ["Dumbbell Walking Lunges — 4x12/side", "Battle Rope Finisher — 5x30s", "Box Jumps — 4x10", "Sled Push — 5x20m", "Medicine Ball Slams — 4x12"] },
        { day: "Day 3 — Endurance Challenge", exercises: ["Kettlebell Complex (swing, clean, press) — 5 rounds", "Rowing Machine — 3x500m", "Burpees — 4x10", "Farmer Carries — 4x40m", "Assault Bike — 5x30s sprints"] }
      ] },
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
      { name: "High Protein Performance", type: "High Protein", duration: "8 weeks", difficulty: "Intermediate", price: 34.99, description: "Optimized macro split for muscle growth and recovery. 40/30/30 protein-forward approach.", sampleDays: [
        { day: "Day 1", breakfast: "6 egg whites with spinach, whole grain toast, and turkey sausage", lunch: "Grilled chicken breast with quinoa and roasted vegetables", dinner: "Pan-seared salmon with sweet potato and steamed broccoli" },
        { day: "Day 2", breakfast: "Protein overnight oats with whey, blueberries, and almond butter", lunch: "Lean ground turkey bowl with brown rice and black beans", dinner: "Grilled sirloin steak with asparagus and baked potato" },
        { day: "Day 3", breakfast: "Greek yogurt with granola, honey, and mixed berries", lunch: "Tuna salad wrap with avocado and mixed greens", dinner: "Chicken stir-fry with bell peppers and jasmine rice" }
      ] },
      { name: "Competition Prep Plan", type: "Low Carb", duration: "12 weeks", difficulty: "Advanced", price: 44.99, description: "Periodized nutrition plan for athletes peaking for competition. Precise carb cycling included.", sampleDays: [
        { day: "Day 1 — Low Carb", breakfast: "Egg white frittata with spinach, mushrooms, and feta", lunch: "Herb-crusted tilapia with asparagus and cauliflower rice", dinner: "Turkey lettuce wraps with avocado and salsa" },
        { day: "Day 2 — Moderate Carb", breakfast: "Oatmeal with protein powder, walnuts, and cinnamon", lunch: "Chicken breast with sweet potato and green beans", dinner: "Lean ground beef with zucchini noodles and marinara" },
        { day: "Day 3 — High Carb (Refeed)", breakfast: "Pancakes with banana, maple syrup, and egg whites on the side", lunch: "Chicken and rice bowl with teriyaki sauce and edamame", dinner: "Pasta with grilled shrimp, garlic, and olive oil" }
      ] },
      { name: "Clean Bulk Blueprint", type: "High Calorie", duration: "10 weeks", difficulty: "Intermediate", price: 39.99, description: "Structured surplus plan to gain lean mass without excess fat. Includes supplement timing.", sampleDays: [
        { day: "Day 1", breakfast: "Peanut butter banana protein smoothie with oats and whole milk", lunch: "Double chicken burrito bowl with rice, black beans, and cheese", dinner: "Beef stir-fry with noodles, mixed vegetables, and sesame oil" },
        { day: "Day 2", breakfast: "4 whole eggs scrambled with cheese, toast, and avocado", lunch: "Turkey and avocado sandwich with sweet potato fries", dinner: "Salmon with wild rice, roasted broccoli, and olive oil drizzle" },
        { day: "Day 3", breakfast: "Mass gainer shake with oats, banana, peanut butter, and whey", lunch: "Grilled chicken thighs with pasta and pesto sauce", dinner: "Lean ground beef tacos with rice, beans, and guacamole" }
      ] },
      { name: "Race Day Fuel Guide", type: "Performance", duration: "6 weeks", difficulty: "Beginner", price: 29.99, description: "Pre, during, and post-race nutrition strategy for endurance athletes.", sampleDays: [
        { day: "Day 1 — Pre-Race", breakfast: "Oatmeal with banana, honey, and almond butter", lunch: "Pasta with lean turkey bolognese and side salad", dinner: "Grilled chicken with white rice and steamed vegetables" },
        { day: "Day 2 — Race Day", breakfast: "Toast with peanut butter and jam, plus a banana", lunch: "Mid-race energy gels, electrolyte drink, and orange slices", dinner: "Recovery shake with whey, berries, and a turkey sandwich" },
        { day: "Day 3 — Recovery Day", breakfast: "Smoothie with tart cherry juice, protein, and oats", lunch: "Salmon with sweet potato and sauteed spinach", dinner: "Energy date balls with coconut, chia seeds, and a casein shake" }
      ] },
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
      { name: "Sustainable Deficit Plan", type: "Low Calorie", duration: "12 weeks", difficulty: "Beginner", price: 29.99, description: "Gradual calorie reduction with flexible food choices. No crash dieting — just steady results.", sampleDays: [
        { day: "Day 1", breakfast: "Greek yogurt parfait with mixed berries and a drizzle of honey", lunch: "Grilled chicken salad with cucumbers, tomatoes, and light vinaigrette", dinner: "Zucchini noodles with shrimp, garlic, and cherry tomatoes" },
        { day: "Day 2", breakfast: "Two scrambled eggs with spinach and whole grain toast", lunch: "Turkey and veggie lettuce wraps with hummus", dinner: "Baked cod with roasted broccoli and a small baked potato" },
        { day: "Day 3", breakfast: "Smoothie with banana, spinach, protein powder, and almond milk", lunch: "Lentil soup with a side of mixed green salad", dinner: "Grilled chicken breast with steamed green beans and quinoa" }
      ] },
      { name: "Macro Counting Mastery", type: "Balanced", duration: "8 weeks", difficulty: "Intermediate", price: 34.99, description: "Learn to track and balance macros while hitting your weight loss goals.", sampleDays: [
        { day: "Day 1", breakfast: "Overnight oats with chia seeds, almond butter, and banana", lunch: "Turkey and avocado whole wheat wrap with side salad", dinner: "Salmon with brown rice and steamed broccoli" },
        { day: "Day 2", breakfast: "Egg white omelette with peppers, onions, and feta cheese", lunch: "Chicken and quinoa bowl with roasted sweet potato", dinner: "Lean ground turkey tacos with lettuce, salsa, and cheese" },
        { day: "Day 3", breakfast: "Cottage cheese bowl with fruit, granola, and a drizzle of honey", lunch: "Grilled shrimp salad with avocado and balsamic dressing", dinner: "Baked chicken thigh with roasted vegetables and wild rice" }
      ] },
      { name: "Metabolic Reset", type: "High Protein", duration: "6 weeks", difficulty: "Intermediate", price: 32.99, description: "Reverse diet protocol to restore metabolism after prolonged restriction.", sampleDays: [
        { day: "Day 1", breakfast: "Protein pancakes with blueberries and a side of turkey bacon", lunch: "Steak salad with mixed greens, avocado, and balsamic glaze", dinner: "Grilled salmon with roasted sweet potato and green beans" },
        { day: "Day 2", breakfast: "Scrambled eggs with cheese, whole wheat toast, and fruit", lunch: "Tuna poke bowl with edamame, brown rice, and pickled ginger", dinner: "Chicken breast with mashed potatoes and sauteed spinach" },
        { day: "Day 3", breakfast: "Greek yogurt with granola, walnuts, and sliced banana", lunch: "Turkey burger (no bun) with sweet potato fries and coleslaw", dinner: "Lean beef stir-fry with bell peppers and jasmine rice" }
      ] },
      { name: "Weekend-Proof Plan", type: "Flexible", duration: "8 weeks", difficulty: "Beginner", price: 27.99, description: "A practical plan that accounts for social eating and weekends without derailing progress.", sampleDays: [
        { day: "Day 1 — Weekday", breakfast: "Veggie omelette with whole wheat toast and fruit", lunch: "Build-your-own grain bowl with lean protein and veggies", dinner: "Grilled chicken stir-fry with flexible carb options" },
        { day: "Day 2 — Weekday", breakfast: "Overnight oats with peanut butter and banana", lunch: "Chicken Caesar salad (light dressing) with a breadstick", dinner: "Baked fish with roasted vegetables and a small portion of rice" },
        { day: "Day 3 — Weekend", breakfast: "Brunch-style eggs benedict (lighter portion) with fruit", lunch: "Grilled chicken sandwich with side salad instead of fries", dinner: "Portion-controlled pizza night (2 slices) with a large salad" }
      ] },
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
      { name: "Plant-Powered Starter", type: "Vegan", duration: "4 weeks", difficulty: "Beginner", price: 24.99, description: "Ease into plant-based eating with simple swaps and complete nutrition guidance.", sampleDays: [
        { day: "Day 1", breakfast: "Avocado toast with hemp seeds, cherry tomatoes, and lemon", lunch: "Chickpea and vegetable curry with basmati rice", dinner: "Black bean tacos with mango salsa and cashew crema" },
        { day: "Day 2", breakfast: "Smoothie bowl with acai, banana, granola, and coconut flakes", lunch: "Mediterranean hummus wrap with cucumber, tomato, and olives", dinner: "Veggie stir-fry with tofu, broccoli, and soy-ginger sauce" },
        { day: "Day 3", breakfast: "Overnight oats with almond milk, chia seeds, and mixed berries", lunch: "Roasted vegetable and quinoa salad with tahini dressing", dinner: "Lentil and sweet potato coconut curry with naan bread" }
      ] },
      { name: "High Protein Vegan", type: "High Protein", duration: "8 weeks", difficulty: "Intermediate", price: 34.99, description: "Hit your protein goals without animal products. Includes 60+ recipes.", sampleDays: [
        { day: "Day 1", breakfast: "Tofu scramble with black beans, sweet potato, and nutritional yeast", lunch: "Tempeh stir-fry with broccoli, edamame, and peanut sauce", dinner: "Lentil bolognese with whole wheat pasta and side salad" },
        { day: "Day 2", breakfast: "Protein smoothie with pea protein, banana, spinach, and almond butter", lunch: "Chickpea and quinoa power bowl with tahini and roasted veggies", dinner: "Black bean burgers with avocado and sweet potato wedges" },
        { day: "Day 3", breakfast: "Peanut butter and banana oatmeal with hemp seeds and soy milk", lunch: "Seitan wrap with hummus, arugula, and pickled onions", dinner: "Thai red curry with tofu, chickpeas, and jasmine rice" }
      ] },
      { name: "Whole Foods Reset", type: "Whole Foods", duration: "6 weeks", difficulty: "Beginner", price: 29.99, description: "Eliminate processed foods and reset your palate with nutrient-dense whole foods.", sampleDays: [
        { day: "Day 1", breakfast: "Fresh fruit bowl with raw almonds and coconut flakes", lunch: "Quinoa Buddha bowl with roasted vegetables and lemon-tahini dressing", dinner: "Sweet potato and lentil soup with crusty sourdough bread" },
        { day: "Day 2", breakfast: "Steel-cut oats with cinnamon, walnuts, and fresh apple slices", lunch: "Fresh spring rolls with vegetables and almond dipping sauce", dinner: "Stuffed bell peppers with brown rice, black beans, and corn" },
        { day: "Day 3", breakfast: "Green smoothie with kale, mango, banana, and coconut water", lunch: "Mixed bean salad with cucumber, tomato, and olive oil dressing", dinner: "Roasted cauliflower steaks with chimichurri and wild rice" }
      ] },
      { name: "Vegan Athlete Fuel", type: "Performance", duration: "10 weeks", difficulty: "Advanced", price: 39.99, description: "High-performance plant-based plan for serious athletes and active lifestyles.", sampleDays: [
        { day: "Day 1", breakfast: "Power smoothie with banana, spirulina, oat milk, and pea protein", lunch: "Loaded veggie burrito with brown rice, black beans, and guacamole", dinner: "Chickpea pasta with roasted red pepper sauce and nutritional yeast" },
        { day: "Day 2", breakfast: "Tofu breakfast scramble with sweet potato hash and avocado", lunch: "Lentil and quinoa bowl with roasted beets and hemp seed dressing", dinner: "Tempeh teriyaki with stir-fried vegetables and brown rice" },
        { day: "Day 3", breakfast: "Pre-workout energy bites with oats, dates, and peanut butter", lunch: "Giant salad with edamame, chickpeas, avocado, and seeds", dinner: "Plant-based protein bowl with soba noodles and miso broth" }
      ] },
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
      { name: "Gut Restore Protocol", type: "Anti-Inflammatory", duration: "8 weeks", difficulty: "Intermediate", price: 39.99, description: "Step-by-step gut healing plan with probiotics, bone broth, and targeted elimination.", sampleDays: [
        { day: "Day 1", breakfast: "Bone broth with ginger, turmeric, and collagen peptides", lunch: "Baked salmon with sauerkraut and steamed leafy greens", dinner: "Slow-cooked chicken with roasted root vegetables and herbs" },
        { day: "Day 2", breakfast: "Probiotic yogurt bowl with flaxseed, walnuts, and blueberries", lunch: "Turkey and avocado lettuce wraps with fermented pickles", dinner: "Herb-baked cod with steamed zucchini and bone broth soup" },
        { day: "Day 3", breakfast: "Warm lemon water followed by oatmeal with slippery elm and banana", lunch: "Chicken and vegetable soup with fresh ginger and turmeric", dinner: "Grilled salmon with kimchi, brown rice, and steamed broccoli" }
      ] },
      { name: "Anti-Inflammatory Reset", type: "Low Carb", duration: "6 weeks", difficulty: "Beginner", price: 34.99, description: "Remove inflammatory triggers and rebuild with healing whole foods.", sampleDays: [
        { day: "Day 1", breakfast: "Berry smoothie with collagen, almond butter, and coconut milk", lunch: "Turmeric-spiced chicken with roasted cauliflower and olive oil", dinner: "Wild-caught cod with sauteed leafy greens and lemon" },
        { day: "Day 2", breakfast: "Chia pudding with coconut milk, walnuts, and cinnamon", lunch: "Grilled chicken salad with avocado, cucumber, and olive oil dressing", dinner: "Baked turkey meatballs with zucchini noodles and basil" },
        { day: "Day 3", breakfast: "Scrambled eggs with turmeric, spinach, and avocado", lunch: "Salmon and avocado bowl with mixed greens and seeds", dinner: "Slow-cooked beef stew with anti-inflammatory spices and root vegetables" }
      ] },
      { name: "Food Sensitivity Blueprint", type: "Elimination", duration: "10 weeks", difficulty: "Advanced", price: 44.99, description: "Structured elimination and reintroduction protocol to identify your triggers.", sampleDays: [
        { day: "Day 1 — Elimination Phase", breakfast: "Pear and oat porridge with cinnamon and coconut oil", lunch: "Simple rice bowl with steamed vegetables and olive oil", dinner: "Baked chicken breast with zucchini, carrots, and herbs" },
        { day: "Day 2 — Elimination Phase", breakfast: "Rice cereal with coconut milk and sliced banana", lunch: "Turkey patties with sweet potato and steamed green beans", dinner: "Baked white fish with roasted squash and fresh dill" },
        { day: "Day 3 — Reintroduction Phase", breakfast: "Oatmeal with one test food introduced (e.g., dairy or eggs)", lunch: "Chicken and rice with the test food included", dinner: "Simple protein with vegetables — monitor and log symptoms" }
      ] },
      { name: "Digestive Wellness Plan", type: "Balanced", duration: "6 weeks", difficulty: "Beginner", price: 29.99, description: "Daily meal plans designed to support healthy digestion and reduce bloating.", sampleDays: [
        { day: "Day 1", breakfast: "Banana oat pancakes with a drizzle of honey and cinnamon", lunch: "Miso soup with tofu, seaweed, and steamed rice", dinner: "Grilled chicken with roasted fennel, quinoa, and lemon" },
        { day: "Day 2", breakfast: "Warm ginger tea with yogurt, papaya, and pumpkin seeds", lunch: "Poached chicken salad with cucumber, mint, and light dressing", dinner: "Baked salmon with steamed asparagus and mashed sweet potato" },
        { day: "Day 3", breakfast: "Smoothie with kefir, banana, ginger, and a pinch of turmeric", lunch: "Lentil soup with cumin, coriander, and a slice of sourdough", dinner: "Herb-baked chicken thigh with roasted carrots and brown rice" }
      ] },
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
      { name: "First Trimester Foundations", type: "Prenatal", duration: "12 weeks", difficulty: "Beginner", price: 34.99, description: "Nausea-friendly meals packed with folate, iron, and essential nutrients for early pregnancy.", sampleDays: [
        { day: "Day 1", breakfast: "Ginger tea with plain toast and a small banana", lunch: "Spinach and cheese quesadilla with sliced fruit", dinner: "Mild lentil soup with whole grain crackers and a side salad" },
        { day: "Day 2", breakfast: "Small portions of scrambled eggs with dry toast", lunch: "Ginger lemon chicken with brown rice and steamed carrots", dinner: "Baked sweet potato with cottage cheese and steamed broccoli" },
        { day: "Day 3", breakfast: "Smoothie with mango, yogurt, and a prenatal-friendly greens blend", lunch: "Turkey and avocado wrap with a cup of chicken broth", dinner: "Pasta with mild tomato sauce, ground turkey, and spinach" }
      ] },
      { name: "Third Trimester Power Plan", type: "High Calorie", duration: "12 weeks", difficulty: "Intermediate", price: 37.99, description: "Calorie-dense nutrition to support baby's growth and prepare your body for delivery.", sampleDays: [
        { day: "Day 1", breakfast: "Nut butter smoothie with oats, banana, and whole milk", lunch: "Salmon with mashed sweet potato and sauteed kale", dinner: "Chicken thighs with roasted root vegetables and quinoa" },
        { day: "Day 2", breakfast: "Eggs with whole grain toast, avocado, and a glass of orange juice", lunch: "Turkey and cheese sandwich with fruit and yogurt", dinner: "Beef stew with potatoes, carrots, and a slice of bread" },
        { day: "Day 3", breakfast: "Oatmeal with dried fruit, walnuts, and a drizzle of maple syrup", lunch: "Chicken Caesar salad with extra protein and a breadstick", dinner: "Baked cod with brown rice, roasted broccoli, and butter" }
      ] },
      { name: "Postnatal Recovery Plan", type: "Recovery", duration: "8 weeks", difficulty: "Beginner", price: 34.99, description: "Healing foods and balanced meals to support recovery and energy after birth.", sampleDays: [
        { day: "Day 1", breakfast: "Overnight oats with dates, pumpkin seeds, and cinnamon", lunch: "Iron-rich beef stew with dark leafy greens and bread", dinner: "Warm salmon and avocado rice bowl with sesame seeds" },
        { day: "Day 2", breakfast: "Eggs with spinach, whole wheat toast, and fresh fruit", lunch: "Chicken and vegetable soup with a side of crackers", dinner: "Baked chicken breast with sweet potato and steamed green beans" },
        { day: "Day 3", breakfast: "Greek yogurt with iron-rich granola and mixed berries", lunch: "Turkey wrap with hummus, spinach, and bell peppers", dinner: "Slow-cooked pork with mashed potatoes and roasted carrots" }
      ] },
      { name: "Lactation Boost Plan", type: "High Protein", duration: "6 weeks", difficulty: "Beginner", price: 29.99, description: "Nutrient-rich meals to support milk production and postpartum energy levels.", sampleDays: [
        { day: "Day 1", breakfast: "Oatmeal lactation cookies with brewer's yeast and a glass of milk", lunch: "Chicken and vegetable stir-fry with sesame and brown rice", dinner: "Salmon with roasted asparagus and quinoa" },
        { day: "Day 2", breakfast: "Greek yogurt with granola, flaxseed, and berries", lunch: "Turkey and avocado sandwich with a side of fruit", dinner: "Lean beef tacos with cheese, tomato, and a lactation smoothie" },
        { day: "Day 3", breakfast: "Whole grain waffles with almond butter, banana, and fenugreek tea", lunch: "Lentil soup with a slice of buttered sourdough bread", dinner: "Chicken breast with sweet potato mash and steamed broccoli" }
      ] },
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
      { name: "$50/Week Meal Plan", type: "Budget", duration: "4 weeks", difficulty: "Beginner", price: 22.99, description: "Complete weekly meal plan for one person on a tight budget. Includes shopping lists.", sampleDays: [
        { day: "Day 1", breakfast: "Scrambled eggs with toast and a banana", lunch: "Rice and beans with roasted frozen vegetables", dinner: "Pasta with canned tomatoes, garlic, and chickpeas" },
        { day: "Day 2", breakfast: "Oatmeal with peanut butter and a drizzle of honey", lunch: "Egg fried rice with cabbage and soy sauce", dinner: "Baked chicken drumsticks with roasted potatoes and frozen peas" },
        { day: "Day 3", breakfast: "Toast with peanut butter and sliced banana", lunch: "Black bean quesadilla with salsa and sour cream", dinner: "Spaghetti with meat sauce (ground beef) and a side of bread" }
      ] },
      { name: "Sunday Prep Master", type: "Meal Prep", duration: "6 weeks", difficulty: "Beginner", price: 27.99, description: "Prep all your weekday meals in under 2 hours every Sunday. Step-by-step guide.", sampleDays: [
        { day: "Day 1", breakfast: "Pre-made egg muffins with veggies and cheese", lunch: "Chicken thigh meal prep with rice and broccoli", dinner: "Turkey taco bowls with black beans, corn, and salsa" },
        { day: "Day 2", breakfast: "Overnight oats (prepped Sunday) with fruit and nuts", lunch: "Sheet pan sausage with peppers and sweet potato", dinner: "Pre-portioned pasta with turkey meatballs and marinara" },
        { day: "Day 3", breakfast: "Grab-and-go smoothie packs (frozen, blend in AM)", lunch: "Mason jar salad with chicken and ranch dressing", dinner: "Slow cooker pulled chicken with coleslaw and rolls" }
      ] },
      { name: "Family of Four Plan", type: "Budget", duration: "8 weeks", difficulty: "Intermediate", price: 34.99, description: "Healthy, kid-friendly meals for the whole family without breaking the bank.", sampleDays: [
        { day: "Day 1", breakfast: "Pancakes with syrup and scrambled eggs", lunch: "PB&J sandwiches with carrot sticks and apple slices", dinner: "One-pot chicken pasta with hidden veggies" },
        { day: "Day 2", breakfast: "Cereal with milk and a piece of fruit", lunch: "Quesadillas with cheese, chicken, and a side of grapes", dinner: "Homemade fish sticks with oven fries and ketchup" },
        { day: "Day 3", breakfast: "Toast with butter, eggs, and orange juice", lunch: "Turkey and cheese wraps with cucumber slices", dinner: "Slow cooker chili with cornbread and shredded cheese" }
      ] },
      { name: "15-Minute Meals", type: "Quick Recipes", duration: "4 weeks", difficulty: "Beginner", price: 24.99, description: "30 quick and healthy recipes that go from fridge to plate in 15 minutes or less.", sampleDays: [
        { day: "Day 1", breakfast: "Avocado toast with a fried egg and everything seasoning", lunch: "Caprese chicken with balsamic glaze and mixed greens", dinner: "Shrimp and garlic butter with couscous and lemon" },
        { day: "Day 2", breakfast: "Greek yogurt with honey, granola, and berries", lunch: "Turkey and hummus wrap with cucumber and tomato", dinner: "Black bean quesadillas with quick guacamole and salsa" },
        { day: "Day 3", breakfast: "Smoothie with frozen fruit, yogurt, and a handful of spinach", lunch: "Tuna salad on crackers with a side of fruit", dinner: "One-pan lemon herb chicken with cherry tomatoes and orzo" }
      ] },
    ],
    tags: ["Budget-Friendly", "Meal Prep", "Quick Recipes"]
  },
  {
    id: 107, name: "Tanya Brooks", specialty: "Sports Nutrition",
    category: "sports", price: 54.99, rating: 4.9, subscribers: 1340, experience: "11 yrs",
    bio: "Former collegiate athlete turned sports dietitian. Builds fuel strategies for strength, endurance, and recovery.",
    color: "#0EA5E9", featured: true,
    services: ["Periodized nutrition", "Hydration protocols", "Recovery plans", "Race-day fueling"],
    plans: [
      { name: "Strength Fuel Plan", type: "High Protein", duration: "8 weeks", difficulty: "Intermediate", price: 36.99, description: "Calorie and macro targets built around your training splits for max strength gains.", sampleDays: [
        { day: "Day 1 — Training Day", breakfast: "4 whole eggs with turkey sausage, oats, and a banana", lunch: "Grilled steak with baked potato and asparagus", dinner: "Protein-packed chicken and rice meal prep with broccoli" },
        { day: "Day 2 — Training Day", breakfast: "Post-workout whey shake with oats, banana, and peanut butter", lunch: "Salmon with sweet potato and steamed green beans", dinner: "Lean ground beef with jasmine rice and mixed vegetables" },
        { day: "Day 3 — Rest Day", breakfast: "Greek yogurt with granola, honey, and mixed berries", lunch: "Turkey and avocado wrap with a side salad", dinner: "Grilled chicken breast with quinoa and roasted vegetables" }
      ] },
      { name: "Endurance Nutrition System", type: "Performance", duration: "10 weeks", difficulty: "Advanced", price: 42.99, description: "Carb loading, mid-race fueling, and recovery nutrition for distance athletes.", sampleDays: [
        { day: "Day 1 — Carb Loading", breakfast: "Whole wheat pasta with chicken and marinara sauce", lunch: "Large rice bowl with grilled chicken, beans, and corn", dinner: "Bagel with peanut butter, banana, and a glass of juice" },
        { day: "Day 2 — Race Day", breakfast: "Pre-run oatmeal with honey and a banana", lunch: "Mid-race energy gels, sports drink, and rice cakes", dinner: "Recovery smoothie with tart cherry, protein, and oats" },
        { day: "Day 3 — Recovery", breakfast: "Eggs with toast, avocado, and orange juice", lunch: "Salmon with sweet potato and sauteed spinach", dinner: "Chicken stir-fry with brown rice and anti-inflammatory spices" }
      ] },
      { name: "Recovery Rebuild", type: "Anti-Inflammatory", duration: "6 weeks", difficulty: "Beginner", price: 29.99, description: "Post-training recovery meals rich in antioxidants and anti-inflammatory compounds.", sampleDays: [
        { day: "Day 1", breakfast: "Blueberry almond overnight oats with chia seeds", lunch: "Turmeric salmon with wild rice and mixed greens", dinner: "Tart cherry and beet recovery smoothie bowl with granola" },
        { day: "Day 2", breakfast: "Acai bowl with mixed berries, coconut, and hemp seeds", lunch: "Grilled chicken salad with walnuts, berries, and olive oil", dinner: "Baked cod with roasted sweet potato and steamed broccoli" },
        { day: "Day 3", breakfast: "Green smoothie with spinach, pineapple, ginger, and turmeric", lunch: "Turkey and avocado lettuce wraps with a side of fruit", dinner: "Herb-crusted salmon with quinoa and sauteed kale" }
      ] },
      { name: "Game Day Protocol", type: "Performance", duration: "4 weeks", difficulty: "Intermediate", price: 27.99, description: "Pre-game, halftime, and post-game nutrition timing for competitive athletes.", sampleDays: [
        { day: "Day 1 — Pre-Game", breakfast: "Pre-game oatmeal with banana, honey, and almond butter", lunch: "Chicken and rice with steamed vegetables (3 hours before)", dinner: "Light pasta with olive oil and lean protein (evening game)" },
        { day: "Day 2 — Game Day", breakfast: "Toast with peanut butter and banana (morning game)", lunch: "Halftime rice cakes with peanut butter and sports drink", dinner: "Post-game chicken wrap with sweet potato fries and juice" },
        { day: "Day 3 — Recovery Day", breakfast: "Protein pancakes with berries and a recovery shake", lunch: "Grilled salmon with brown rice and steamed asparagus", dinner: "Lean beef with mashed potatoes and a large salad" }
      ] },
    ],
    tags: ["Sports", "Performance", "Recovery"]
  },
  {
    id: 108, name: "Omar Hassan", specialty: "Weight Management",
    category: "weightloss", price: 42.99, rating: 4.8, subscribers: 1890, experience: "8 yrs",
    bio: "Evidence-based approach to body composition. Combines flexible dieting with behavioral strategies that last.",
    color: "#D946EF", featured: true,
    services: ["Body recomposition", "Reverse dieting", "Flexible dieting", "Progress tracking"],
    plans: [
      { name: "Flexible Cut", type: "Low Calorie", duration: "10 weeks", difficulty: "Intermediate", price: 32.99, description: "Calorie deficit with no food restrictions. Hit your targets your way.", sampleDays: [
        { day: "Day 1", breakfast: "Greek yogurt with honey, mixed nuts, and a piece of fruit", lunch: "Choose-your-protein bowl with mixed greens and light dressing", dinner: "Light chicken Caesar wrap with a side of veggies" },
        { day: "Day 2", breakfast: "Two eggs any style with a slice of toast and fruit", lunch: "Turkey lettuce wraps with hummus and cucumber", dinner: "Grilled shrimp with cauliflower rice and steamed asparagus" },
        { day: "Day 3", breakfast: "Protein smoothie with spinach, banana, and almond milk", lunch: "Chicken and veggie soup with a small roll", dinner: "Baked salmon with a large mixed green salad and vinaigrette" }
      ] },
      { name: "Body Recomp Blueprint", type: "High Protein", duration: "12 weeks", difficulty: "Advanced", price: 44.99, description: "Simultaneous fat loss and muscle gain through precise nutrition cycling.", sampleDays: [
        { day: "Day 1 — Training Day (High Carb)", breakfast: "Egg and cheese breakfast burrito with salsa and fruit", lunch: "Lean ground turkey with jasmine rice and mixed veggies", dinner: "Grilled chicken with quinoa, roasted peppers, and sweet potato" },
        { day: "Day 2 — Training Day (Moderate)", breakfast: "Protein oats with whey, banana, and almond butter", lunch: "Salmon with brown rice and steamed broccoli", dinner: "Lean steak with baked potato and a side salad" },
        { day: "Day 3 — Rest Day (Low Carb)", breakfast: "Scrambled eggs with avocado and turkey bacon", lunch: "Grilled chicken salad with olive oil, feta, and walnuts", dinner: "Baked cod with roasted vegetables and a small portion of rice" }
      ] },
      { name: "Reverse Diet Recovery", type: "Balanced", duration: "8 weeks", difficulty: "Intermediate", price: 34.99, description: "Gradually increase calories post-diet to maintain results and restore metabolism.", sampleDays: [
        { day: "Day 1", breakfast: "Whole grain toast with avocado and poached eggs", lunch: "Balanced plate with salmon, rice, and steamed veggies", dinner: "Chicken stir-fry with mixed vegetables and noodles" },
        { day: "Day 2", breakfast: "Oatmeal with berries, nuts, and a drizzle of honey", lunch: "Turkey sandwich on whole wheat with a side of fruit", dinner: "Grilled chicken thigh with sweet potato and green beans" },
        { day: "Day 3", breakfast: "Smoothie bowl with protein, granola, and sliced banana", lunch: "Quinoa bowl with black beans, corn, avocado, and salsa", dinner: "Lean beef with roasted potatoes and a mixed salad" }
      ] },
      { name: "No-Track Intuitive Plan", type: "Flexible", duration: "6 weeks", difficulty: "Beginner", price: 26.99, description: "Learn to eat intuitively with portion guides and hunger cue training.", sampleDays: [
        { day: "Day 1", breakfast: "Mindful breakfast: eggs, toast, and fruit — eat until satisfied", lunch: "Portion-guided pasta with pesto and grilled chicken", dinner: "Simple fish tacos with slaw and lime" },
        { day: "Day 2", breakfast: "Oatmeal with toppings of choice — practice hunger awareness", lunch: "Mindful snack plate with cheese, fruit, nuts, and crackers", dinner: "Grilled chicken with roasted vegetables and a roll" },
        { day: "Day 3", breakfast: "Yogurt parfait — stop when comfortably full", lunch: "Soup and sandwich combo — listen to satiety cues", dinner: "Salmon with rice and salad — practice portion awareness" }
      ] },
    ],
    tags: ["Flexible Dieting", "Recomp", "Sustainable"]
  },
  {
    id: 109, name: "Lisa Chen", specialty: "Gut Health & Wellness",
    category: "guthealth", price: 49.99, rating: 4.7, subscribers: 920, experience: "12 yrs",
    bio: "Integrative nutritionist combining Eastern and Western dietary science for whole-body gut wellness.",
    color: "#F97316",
    services: ["Microbiome support", "Fermentation guides", "Elimination diets", "Stress-gut protocols"],
    plans: [
      { name: "Microbiome Reset", type: "Gut Health", duration: "8 weeks", difficulty: "Intermediate", price: 37.99, description: "Rebuild your gut flora with prebiotic and probiotic-rich meal plans.", sampleDays: [
        { day: "Day 1", breakfast: "Kefir smoothie with banana, prebiotic fiber, and flaxseed", lunch: "Kimchi rice bowl with soft-boiled egg and sesame seeds", dinner: "Jerusalem artichoke soup with sourdough bread and olive oil" },
        { day: "Day 2", breakfast: "Yogurt bowl with prebiotic granola, chicory root, and berries", lunch: "Fermented vegetable wrap with hummus and sprouts", dinner: "Miso-glazed chicken with sauteed leeks and brown rice" },
        { day: "Day 3", breakfast: "Overnight oats with kefir, chia seeds, and sliced banana", lunch: "Lentil soup with garlic, onions, and a side of sauerkraut", dinner: "Baked salmon with asparagus and fermented beet salad" }
      ] },
      { name: "Fermented Foods Journey", type: "Whole Foods", duration: "6 weeks", difficulty: "Beginner", price: 28.99, description: "Introduce fermented foods into your daily routine for better digestion and immunity.", sampleDays: [
        { day: "Day 1", breakfast: "Kombucha overnight oats with sauerkraut on toast", lunch: "Miso-glazed salmon with pickled vegetables and rice", dinner: "Tempeh bowl with fermented hot sauce, greens, and quinoa" },
        { day: "Day 2", breakfast: "Kefir smoothie with mango, ginger, and turmeric", lunch: "Kimchi fried rice with a fried egg and scallions", dinner: "Grilled chicken with fermented salsa and sweet potato" },
        { day: "Day 3", breakfast: "Sourdough toast with avocado and a side of yogurt", lunch: "Miso soup with tofu, seaweed, and pickled radish", dinner: "Tempeh stir-fry with fermented black bean sauce and noodles" }
      ] },
      { name: "Stress-Gut Connection", type: "Anti-Inflammatory", duration: "8 weeks", difficulty: "Intermediate", price: 39.99, description: "Address the gut-brain axis with calming foods and stress-reducing meal patterns.", sampleDays: [
        { day: "Day 1", breakfast: "Warm turmeric oatmeal with walnuts and a cup of chamomile tea", lunch: "Chamomile-poached chicken with steamed greens and brown rice", dinner: "Warm turmeric lentil soup with calming herbs and sourdough" },
        { day: "Day 2", breakfast: "Magnesium-rich smoothie with banana, cacao, and almond butter", lunch: "Salmon salad with leafy greens, avocado, and pumpkin seeds", dinner: "Slow-cooked chicken with sweet potato and lavender-infused broth" },
        { day: "Day 3", breakfast: "Yogurt with dark chocolate shavings, nuts, and berries", lunch: "Turkey and vegetable soup with ginger and lemongrass", dinner: "Baked cod with roasted root vegetables and fresh herbs" }
      ] },
      { name: "Seasonal Cleanse", type: "Elimination", duration: "4 weeks", difficulty: "Beginner", price: 24.99, description: "Quarterly reset plan using seasonal whole foods to support digestive health.", sampleDays: [
        { day: "Day 1", breakfast: "Fresh fruit and seed breakfast bowl with coconut flakes", lunch: "Seasonal roasted vegetable and grain bowl with tahini", dinner: "Simple poached fish with steamed squash and fresh herbs" },
        { day: "Day 2", breakfast: "Warm porridge with seasonal fruit, cinnamon, and honey", lunch: "Mixed green salad with roasted beets, walnuts, and lemon", dinner: "Herb-baked chicken with seasonal root vegetables" },
        { day: "Day 3", breakfast: "Green juice with cucumber, celery, apple, and ginger", lunch: "Butternut squash soup with a slice of whole grain bread", dinner: "Steamed white fish with sauteed seasonal greens and rice" }
      ] },
    ],
    tags: ["Gut Health", "Integrative", "Fermentation"]
  },
  {
    id: 110, name: "Derek Williams", specialty: "Meal Prep & Budget",
    category: "mealprep", price: 29.99, rating: 4.6, subscribers: 2450, experience: "5 yrs",
    bio: "College athlete who learned to eat well on nothing. Now teaches thousands to meal prep like a pro on any budget.",
    color: "#14B8A6",
    services: ["Student meal plans", "Bulk cooking", "Freezer prep", "Dorm-friendly recipes"],
    plans: [
      { name: "College Kitchen Plan", type: "Budget", duration: "4 weeks", difficulty: "Beginner", price: 19.99, description: "Healthy meals you can make in a dorm or small kitchen with basic equipment.", sampleDays: [
        { day: "Day 1", breakfast: "Microwave scrambled eggs with cheese and toast", lunch: "Instant ramen upgrade with a soft-boiled egg and frozen veggies", dinner: "Peanut butter banana wrap with honey and a glass of milk" },
        { day: "Day 2", breakfast: "Overnight oats with peanut butter (no cooking needed)", lunch: "Canned tuna on crackers with an apple", dinner: "Microwave baked potato with cheese, broccoli, and butter" },
        { day: "Day 3", breakfast: "Cereal with milk and a banana", lunch: "Turkey and cheese sandwich with mustard and chips", dinner: "Quesadilla with canned beans, cheese, and salsa" }
      ] },
      { name: "Freezer Meal Mastery", type: "Meal Prep", duration: "6 weeks", difficulty: "Beginner", price: 24.99, description: "Batch cook and freeze 20+ meals in one session. Reheat and eat all week.", sampleDays: [
        { day: "Day 1", breakfast: "Frozen breakfast burritos with sausage, eggs, and peppers", lunch: "Pre-portioned beef and vegetable stew (thawed overnight)", dinner: "Freezer-friendly chicken enchilada bake with rice" },
        { day: "Day 2", breakfast: "Frozen egg muffin cups with cheese and spinach", lunch: "Frozen chili portioned out with shredded cheese and crackers", dinner: "Frozen meatball marinara with pasta (boil fresh)" },
        { day: "Day 3", breakfast: "Frozen smoothie packs — just add milk and blend", lunch: "Frozen chicken and rice casserole (reheat)", dinner: "Frozen teriyaki chicken with stir-fry vegetables and rice" }
      ] },
      { name: "Bulk on a Budget", type: "High Calorie", duration: "8 weeks", difficulty: "Intermediate", price: 29.99, description: "High-calorie meal plan for muscle building without expensive supplements.", sampleDays: [
        { day: "Day 1", breakfast: "Peanut butter and oat mass gainer shake with whole milk and banana", lunch: "Chicken and rice with olive oil, mixed nuts, and avocado", dinner: "Ground beef pasta with cheese and a glass of whole milk" },
        { day: "Day 2", breakfast: "6 eggs scrambled with cheese, toast with butter, and juice", lunch: "Double portion tuna salad sandwich with chips and fruit", dinner: "Chicken thighs with mashed potatoes, gravy, and bread" },
        { day: "Day 3", breakfast: "Whole milk yogurt with granola, dried fruit, and honey", lunch: "Large burrito with rice, beans, cheese, and sour cream", dinner: "Pork chops with sweet potato, butter, and a protein shake" }
      ] },
      { name: "5-Ingredient Meals", type: "Quick Recipes", duration: "4 weeks", difficulty: "Beginner", price: 19.99, description: "Simple, nutritious meals using just 5 ingredients each. Perfect for beginners.", sampleDays: [
        { day: "Day 1", breakfast: "Banana pancakes with eggs, oats, cinnamon, and maple syrup", lunch: "Baked chicken with lemon, garlic, olive oil, and herbs", dinner: "Pasta with butter, parmesan, frozen peas, and black pepper" },
        { day: "Day 2", breakfast: "Toast, peanut butter, banana, honey, and milk", lunch: "Canned soup upgraded with rotisserie chicken and frozen veggies", dinner: "Rice, canned black beans, salsa, cheese, and sour cream" },
        { day: "Day 3", breakfast: "Yogurt, granola, honey, banana, and a handful of nuts", lunch: "Tortilla, deli turkey, cheese, mustard, and lettuce", dinner: "Salmon fillet, soy sauce, honey, garlic, and steamed rice" }
      ] },
    ],
    tags: ["Budget", "Students", "Freezer Prep"]
  },
  {
    id: 111, name: "Priya Sharma", specialty: "Plant-Based Nutrition",
    category: "plantbased", price: 44.99, rating: 4.8, subscribers: 1050, experience: "9 yrs",
    bio: "Ayurvedic-inspired plant-based nutritionist. Blends traditional wisdom with modern nutrition science.",
    color: "#84CC16",
    services: ["Ayurvedic meal plans", "Plant protein optimization", "Spice therapy", "Seasonal eating"],
    plans: [
      { name: "Ayurvedic Balance", type: "Whole Foods", duration: "8 weeks", difficulty: "Intermediate", price: 36.99, description: "Eat according to your dosha with balanced plant-based meals rooted in Ayurveda.", sampleDays: [
        { day: "Day 1", breakfast: "Warm spiced porridge with ghee, cardamom, and stewed fruit", lunch: "Kitchari with cumin, fresh cilantro, and a squeeze of lime", dinner: "Warming dal with turmeric rice and freshly baked naan" },
        { day: "Day 2", breakfast: "Stewed apples with cinnamon, cloves, and a drizzle of honey", lunch: "Spiced coconut vegetable stew with basmati rice", dinner: "Mung bean soup with ginger, cumin, and fresh coriander" },
        { day: "Day 3", breakfast: "Golden milk latte with dates and soaked almonds", lunch: "Vegetable biryani with raita and pickled onions", dinner: "Stuffed chapati with spiced potato and a side of sauteed greens" }
      ] },
      { name: "Plant Protein Power", type: "High Protein", duration: "6 weeks", difficulty: "Beginner", price: 29.99, description: "Complete protein combinations from plant sources to fuel your training.", sampleDays: [
        { day: "Day 1", breakfast: "Peanut butter oatmeal with hemp seeds and soy milk", lunch: "Red lentil and chickpea power bowl with tahini dressing", dinner: "Tofu tikka masala with brown rice and steamed spinach" },
        { day: "Day 2", breakfast: "Protein smoothie with pea protein, banana, and almond butter", lunch: "Edamame and quinoa salad with sesame dressing and avocado", dinner: "Black bean and tempeh chili with cornbread" },
        { day: "Day 3", breakfast: "Chickpea flour omelette with mushrooms and fresh herbs", lunch: "Lentil and walnut tacos with cashew crema and slaw", dinner: "Seitan stir-fry with broccoli, peanut sauce, and rice noodles" }
      ] },
      { name: "Anti-Inflammatory Spice Plan", type: "Anti-Inflammatory", duration: "6 weeks", difficulty: "Beginner", price: 27.99, description: "Harness turmeric, ginger, and healing spices in daily anti-inflammatory meals.", sampleDays: [
        { day: "Day 1", breakfast: "Golden milk turmeric smoothie bowl with walnuts and berries", lunch: "Ginger-spiced lentil soup with fresh herbs and sourdough", dinner: "Cinnamon roasted sweet potato and chickpea bowl with tahini" },
        { day: "Day 2", breakfast: "Warm ginger-turmeric tea with overnight oats and cardamom", lunch: "Cumin-roasted cauliflower wrap with anti-inflammatory slaw", dinner: "Coconut curry with turmeric, ginger, tofu, and vegetables" },
        { day: "Day 3", breakfast: "Spiced chia pudding with cinnamon, nutmeg, and fresh mango", lunch: "Black pepper and turmeric chickpea salad with lemon", dinner: "Ginger-garlic stir-fry with tempeh, greens, and brown rice" }
      ] },
      { name: "Seasonal Harvest Plan", type: "Whole Foods", duration: "12 weeks", difficulty: "Intermediate", price: 39.99, description: "Eat in sync with the seasons using local, plant-based whole foods.", sampleDays: [
        { day: "Day 1", breakfast: "Seasonal fruit and nut morning porridge with maple syrup", lunch: "Farm-fresh vegetable and herb grain bowl with lemon dressing", dinner: "Root vegetable tagine with couscous and fresh mint" },
        { day: "Day 2", breakfast: "Buckwheat pancakes with seasonal berries and coconut cream", lunch: "Roasted squash soup with toasted pumpkin seeds and bread", dinner: "Stuffed acorn squash with wild rice, cranberries, and pecans" },
        { day: "Day 3", breakfast: "Smoothie with seasonal greens, pear, ginger, and hemp seeds", lunch: "Warm lentil salad with roasted seasonal vegetables", dinner: "Mushroom and barley risotto with fresh herbs and olive oil" }
      ] },
    ],
    tags: ["Ayurvedic", "Plant-Based", "Holistic"]
  },
  {
    id: 112, name: "Marcus Johnson", specialty: "Sports Nutrition",
    category: "sports", price: 59.99, rating: 4.9, subscribers: 1580, experience: "13 yrs",
    bio: "NFL nutritionist for 8 seasons. Now bringing pro-level fuel strategies to everyday athletes on Shape.",
    color: "#7C3AED",
    services: ["Pro athlete protocols", "Weight class management", "Supplement stacks", "In-season nutrition"],
    plans: [
      { name: "Pro Athlete Fuel", type: "Performance", duration: "12 weeks", difficulty: "Advanced", price: 49.99, description: "The same periodized nutrition framework used by professional athletes.", sampleDays: [
        { day: "Day 1 — Game Day", breakfast: "Competition-day oatmeal with banana, honey, and electrolyte drink", lunch: "Chicken and white rice with steamed vegetables (3 hours pre-game)", dinner: "Post-game recovery shake with casein, berries, oats, and a full meal" },
        { day: "Day 2 — Training Day", breakfast: "6 egg whites with whole grain toast, avocado, and orange juice", lunch: "High-carb pasta with lean ground beef and mixed veggies", dinner: "Grilled salmon with sweet potato, broccoli, and olive oil" },
        { day: "Day 3 — Recovery Day", breakfast: "Protein pancakes with blueberries and turkey sausage", lunch: "Chicken breast with brown rice and a large mixed salad", dinner: "Lean beef with mashed potatoes, green beans, and a casein shake" }
      ] },
      { name: "Weight Class Manager", type: "Low Calorie", duration: "8 weeks", difficulty: "Advanced", price: 42.99, description: "Safe, effective weight manipulation for combat sports and weight-class athletes.", sampleDays: [
        { day: "Day 1 — Maintenance Phase", breakfast: "Egg white omelette with spinach, tomato, and a slice of toast", lunch: "Measured portion grilled fish with steamed greens and lemon", dinner: "Light turkey meatballs with zucchini noodles and marinara" },
        { day: "Day 2 — Cutting Phase", breakfast: "Small portion of oatmeal with protein powder and water", lunch: "Grilled chicken breast with cucumber and a small sweet potato", dinner: "White fish with steamed broccoli and a tablespoon of olive oil" },
        { day: "Day 3 — Refeed Day", breakfast: "Scrambled eggs with rice, avocado, and fruit", lunch: "Chicken and pasta with tomato sauce and a side salad", dinner: "Steak with baked potato, butter, and steamed vegetables" }
      ] },
      { name: "Off-Season Builder", type: "High Calorie", duration: "10 weeks", difficulty: "Intermediate", price: 39.99, description: "Structured surplus plan to build size and strength during the off-season.", sampleDays: [
        { day: "Day 1", breakfast: "Mass-building shake with oats, peanut butter, whole milk, and banana", lunch: "Double burger patties with rice, avocado, and cheese", dinner: "Loaded baked potato with pulled chicken, cheese, and sour cream" },
        { day: "Day 2", breakfast: "5 whole eggs with bacon, hash browns, and toast with butter", lunch: "Chicken thighs with pasta, alfredo sauce, and breadsticks", dinner: "Ribeye steak with mashed potatoes, corn, and a roll" },
        { day: "Day 3", breakfast: "French toast with syrup, scrambled eggs, and sausage links", lunch: "Large burrito bowl with double rice, double meat, and guacamole", dinner: "Salmon with wild rice, roasted vegetables, and a protein shake" }
      ] },
      { name: "Travel Nutrition Guide", type: "Flexible", duration: "4 weeks", difficulty: "Beginner", price: 24.99, description: "Stay on track while traveling for games, tournaments, or work.", sampleDays: [
        { day: "Day 1 — Travel Day", breakfast: "Hotel-room overnight oats with protein powder and fruit", lunch: "Airport-friendly chicken and veggie wrap with a protein bar", dinner: "Grilled chicken salad from a restaurant (dressing on the side)" },
        { day: "Day 2 — On the Road", breakfast: "Portable protein box with nuts, jerky, fruit, and cheese", lunch: "Subway or deli sandwich with lean protein and vegetables", dinner: "Room service grilled fish with rice and steamed vegetables" },
        { day: "Day 3 — Tournament Day", breakfast: "Pre-packed oatmeal cups with banana and almond butter", lunch: "Packed PB&J sandwich, trail mix, and sports drink", dinner: "Post-competition meal: pasta with grilled chicken and a recovery shake" }
      ] },
    ],
    tags: ["Pro Sports", "Elite", "Performance"]
  },
];

// ===== Gyms =====
const gyms = [
  {
    id: 201, name: "Iron House Fitness", type: "Full-Service Gym",
    category: "gym", location: "Austin, TX", rating: 4.9, members: 2400,
    trainers: 18, price: 49.99, featured: true, gymOfMonth: true,
    gotmQuote: "We built Iron House to be the gym people never want to leave.",
    bio: "A 25,000 sq ft full-service facility with free weights, machines, turf area, and group fitness studios. Open 24/7 with personal training included in every membership.",
    color: "#EF4444",
    amenities: ["Free Weights", "Machines", "Turf Area", "Group Classes", "Sauna", "Locker Rooms", "24/7 Access"],
    classes: ["Strength Training", "HIIT", "Yoga", "Spin"],
    tags: ["Full-Service", "24/7", "Personal Training"]
  },
  {
    id: 202, name: "Flow Studio", type: "Boutique Studio",
    category: "studio", location: "Brooklyn, NY", rating: 4.8, members: 860,
    trainers: 8, price: 89.99, featured: true,
    bio: "A premium yoga and pilates studio in the heart of Williamsburg. Heated rooms, infrared saunas, and small class sizes for a personalized experience.",
    color: "#8B5CF6",
    amenities: ["Heated Studios", "Infrared Sauna", "Mat Rentals", "Showers", "Retail Shop"],
    classes: ["Vinyasa Yoga", "Hot Yoga", "Pilates", "Barre"],
    tags: ["Yoga", "Pilates", "Boutique"]
  },
  {
    id: 203, name: "Grit Athletics", type: "CrossFit Box",
    category: "crossfit", location: "Denver, CO", rating: 4.9, members: 520,
    trainers: 6, price: 159.99,
    bio: "A no-frills CrossFit affiliate focused on community, competition, and results. Programming updated daily with scalable options for every fitness level.",
    color: "#F59E0B",
    amenities: ["Olympic Lifting Platforms", "Rigs & Pull-Up Bars", "Rowers & Bikes", "Open Gym Hours", "Competition Team"],
    classes: ["CrossFit WOD", "Olympic Lifting", "Endurance", "Gymnastics"],
    tags: ["CrossFit", "Competition", "Community"]
  },
  {
    id: 204, name: "Elevate Performance", type: "Full-Service Gym",
    category: "gym", location: "Miami, FL", rating: 4.7, members: 3100,
    trainers: 24, price: 59.99,
    bio: "Miami's premier training facility with ocean views, rooftop recovery suites, and a team of nationally certified coaches. Two floors of equipment and dedicated functional training zones.",
    color: "#0EA5E9",
    amenities: ["Rooftop Recovery", "Pool", "Two Training Floors", "Juice Bar", "Childcare", "Parking"],
    classes: ["Strength", "Boxing", "Spin", "Recovery Yoga"],
    tags: ["Premium", "Full-Service", "Recovery"]
  },
  {
    id: 205, name: "The Sweat Lab", type: "Boutique Studio",
    category: "studio", location: "Nashville, TN", rating: 4.8, members: 640,
    trainers: 5, price: 79.99,
    bio: "A high-energy boutique studio specializing in HIIT, cycling, and strength circuits. Music-driven classes capped at 20 people for maximum coaching attention.",
    color: "#EC4899",
    amenities: ["Sound System", "Heart Rate Tracking", "Showers", "Towel Service", "Water Station"],
    classes: ["HIIT", "Spin", "Strength Circuits", "Stretch & Recover"],
    tags: ["HIIT", "Cycling", "Small Classes"]
  },
  {
    id: 206, name: "Forge Barbell Club", type: "Specialty Gym",
    category: "specialty", location: "Portland, OR", rating: 4.9, members: 280,
    trainers: 4, price: 99.99,
    bio: "A powerlifting and Olympic weightlifting gym built for serious lifters. Calibrated plates, competition benches, and a coaching staff with national-level experience.",
    color: "#10B981",
    amenities: ["Calibrated Plates", "Competition Platforms", "Chalk Stations", "Video Review Area", "Meet Prep"],
    classes: ["Powerlifting", "Olympic Lifting", "Strongman", "Accessory Work"],
    tags: ["Powerlifting", "Olympic Lifting", "Serious Lifters"]
  },
  {
    id: 207, name: "Basecamp Fitness", type: "Full-Service Gym",
    category: "gym", location: "Chicago, IL", rating: 4.6, members: 4200,
    trainers: 32, price: 39.99,
    bio: "Affordable, no-contract fitness for everyone. Three locations across Chicago with clean facilities, modern equipment, and free group classes for all members.",
    color: "#6C3AED",
    amenities: ["3 Locations", "Modern Equipment", "Free Group Classes", "No Contract", "App Check-In", "Locker Rooms"],
    classes: ["Group Strength", "Cardio Blast", "Yoga", "Core & Abs"],
    tags: ["Affordable", "No Contract", "Multi-Location"]
  },
  {
    id: 208, name: "Apex MMA & Fitness", type: "Specialty Gym",
    category: "specialty", location: "Las Vegas, NV", rating: 4.8, members: 750,
    trainers: 12, price: 129.99,
    bio: "A combat sports training center with world-class coaches in boxing, Muay Thai, Brazilian Jiu-Jitsu, and MMA. Open to all levels from beginners to fighters.",
    color: "#DC2626",
    amenities: ["Boxing Ring", "MMA Cage", "Mat Space", "Heavy Bags", "Strength Area", "Pro Shop"],
    classes: ["Boxing", "Muay Thai", "Brazilian Jiu-Jitsu", "MMA", "Kickboxing"],
    tags: ["MMA", "Boxing", "Combat Sports"]
  },
  {
    id: 209, name: "Solstice Wellness", type: "Boutique Studio",
    category: "studio", location: "San Diego, CA", rating: 4.7, members: 480,
    trainers: 7, price: 69.99,
    bio: "A holistic wellness studio combining yoga, meditation, and breathwork. Focused on mind-body connection with certified instructors and intimate class settings.",
    color: "#14B8A6",
    amenities: ["Meditation Room", "Essential Oils", "Sound Healing", "Private Sessions", "Workshop Space"],
    classes: ["Yin Yoga", "Power Yoga", "Meditation", "Breathwork", "Sound Bath"],
    tags: ["Wellness", "Meditation", "Mind-Body"]
  },
  {
    id: 210, name: "Titan Strength Co.", type: "Full-Service Gym",
    category: "gym", location: "Atlanta, GA", rating: 4.8, members: 1800,
    trainers: 15, price: 54.99,
    bio: "A strength-focused gym with dedicated zones for powerlifting, bodybuilding, and functional training. Known for its community and coaching culture.",
    color: "#F97316",
    amenities: ["Powerlifting Zone", "Bodybuilding Area", "Functional Zone", "Recovery Room", "Supplement Bar"],
    classes: ["Strength Basics", "Hypertrophy", "Functional Fitness", "Mobility"],
    tags: ["Strength", "Community", "Coaching"]
  },
  {
    id: 211, name: "Northeast Barbell", type: "Specialty Gym",
    category: "specialty", location: "Boston, MA", rating: 4.9, members: 420,
    trainers: 5, price: 89.99,
    bio: "A no-nonsense barbell gym in South Boston built for lifters who want to get strong. Calibrated equipment, experienced coaching, and a tight-knit community of dedicated athletes.",
    color: "#1D4ED8",
    amenities: ["Eleiko Equipment", "Competition Platforms", "Chalk Friendly", "Open Gym Hours", "Meet Prep Program"],
    classes: ["Powerlifting", "Olympic Lifting", "Strongman Saturday", "Beginner Barbell"],
    tags: ["Powerlifting", "Barbell", "Coaching"]
  },
  {
    id: 212, name: "Harbor Fitness Club", type: "Full-Service Gym",
    category: "gym", location: "Portland, ME", rating: 4.7, members: 1600,
    trainers: 12, price: 44.99,
    bio: "Portland's largest full-service gym overlooking the harbor. Two floors of cardio and strength equipment, a lap pool, and over 40 group classes per week.",
    color: "#0891B2",
    amenities: ["Lap Pool", "Steam Room", "Free Weights", "Cardio Deck", "Group Studios", "Childcare", "Free Parking"],
    classes: ["Spin", "Yoga", "Aqua Fitness", "Strength", "Zumba", "Boxing"],
    tags: ["Full-Service", "Pool", "Family-Friendly"]
  },
  {
    id: 213, name: "Elm City CrossFit", type: "CrossFit Box",
    category: "crossfit", location: "New Haven, CT", rating: 4.8, members: 340,
    trainers: 4, price: 175.99,
    bio: "A welcoming CrossFit affiliate in the heart of New Haven. Scalable programming for all levels, a strong competition team, and a community that shows up for each other every day.",
    color: "#059669",
    amenities: ["Rigs & Bars", "Rowers & Ski Ergs", "Outdoor Training Area", "Mobility Corner", "Community Events"],
    classes: ["CrossFit WOD", "Olympic Lifting", "Engine Builder", "Competitors Class"],
    tags: ["CrossFit", "Community", "All Levels"]
  },
  {
    id: 214, name: "Summit Studio", type: "Boutique Studio",
    category: "studio", location: "Burlington, VT", rating: 4.8, members: 380,
    trainers: 6, price: 74.99,
    bio: "A mountain-inspired boutique studio offering cycling, barre, and strength classes. Small class sizes, locally sourced smoothie bar, and a rooftop stretch deck with views of the Green Mountains.",
    color: "#7C3AED",
    amenities: ["Cycling Room", "Barre Studio", "Rooftop Deck", "Smoothie Bar", "Showers", "Towel Service"],
    classes: ["Rhythm Ride", "Barre Sculpt", "Strength & Flow", "Stretch & Recover"],
    tags: ["Boutique", "Cycling", "Barre"]
  },
  {
    id: 215, name: "Granite State Athletics", type: "Full-Service Gym",
    category: "gym", location: "Manchester, NH", rating: 4.6, members: 2100,
    trainers: 14, price: 34.99,
    bio: "New Hampshire's most affordable full-service gym. Clean, well-maintained, and open early to late. No frills, no gimmicks — just solid equipment and a welcoming atmosphere.",
    color: "#64748B",
    amenities: ["Free Weights", "Machines", "Cardio Floor", "Turf Area", "Locker Rooms", "24/7 Key Fob Access"],
    classes: ["Group Strength", "Cardio Kickboxing", "Yoga", "Ab Lab"],
    tags: ["Affordable", "24/7", "No Contract"]
  },
  {
    id: 216, name: "Coastline Yoga", type: "Boutique Studio",
    category: "studio", location: "Newport, RI", rating: 4.9, members: 290,
    trainers: 5, price: 79.99,
    bio: "A serene oceanside yoga studio offering heated and unheated classes in a restored seaside building. Specializing in Vinyasa, Yin, and meditation with views of Narragansett Bay.",
    color: "#2DD4BF",
    amenities: ["Ocean Views", "Heated Studio", "Mat Rentals", "Tea Lounge", "Private Sessions", "Weekend Retreats"],
    classes: ["Vinyasa Flow", "Yin Yoga", "Hot Power Yoga", "Meditation", "Sunrise Stretch"],
    tags: ["Yoga", "Wellness", "Oceanside"]
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

function createGymCard(gym) {
  const initials = gym.name.split(' ').map(n => n[0]).join('').slice(0, 2);
  return `
    <div class="card" onclick="openGymModal(${gym.id})" data-category="${gym.category}">
      <div class="card-body">
        <div class="card-header-row">
          <div class="card-avatar-inline" style="background: ${gym.color};">${initials}</div>
          <div class="card-header-info">
            <h3>${gym.name}</h3>
            <div class="card-specialty">${gym.type} — ${gym.location}</div>
          </div>
        </div>
        <p class="card-desc">${gym.bio}</p>
        <div class="card-meta">
          <span class="card-rating">${gym.rating}</span>
          <span>${gym.members.toLocaleString()} members</span>
          <span>${gym.trainers} trainers</span>
        </div>
        <div class="card-footer">
          <div class="card-price">$${gym.price}<span>/mo</span></div>
          <button class="btn btn-sm btn-primary">View Details</button>
        </div>
      </div>
    </div>
  `;
}

function openGymModal(id) {
  const gym = gyms.find(g => g.id === id);
  if (!gym) return;
  const initials = gym.name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const modal = document.getElementById('gymModal');
  const content = document.getElementById('gymModalContent');
  if (!modal || !content) return;
  content.innerHTML = `
    <div class="trainer-detail">
      <div class="trainer-detail-header">
        <div class="trainer-detail-avatar" style="background: ${gym.color};">${initials}</div>
        <div>
          <h2>${gym.name}</h2>
          <div class="card-specialty">${gym.type} — ${gym.location}</div>
          <div class="trainer-detail-stats">
            <span>${gym.rating} rating</span>
            <span>${gym.members.toLocaleString()} members</span>
            <span>${gym.trainers} trainers on staff</span>
          </div>
        </div>
      </div>
      <p style="color:var(--text-muted);font-size:0.95rem;line-height:1.8;margin-bottom:24px;">${gym.bio}</p>
      <div style="margin-bottom:24px;">
        <h3 style="font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:12px;">Amenities</h3>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          ${gym.amenities.map(a => `<span style="padding:6px 14px;border:1px solid var(--border);border-radius:20px;font-size:0.82rem;color:var(--text-muted);">${a}</span>`).join('')}
        </div>
      </div>
      <div style="margin-bottom:24px;">
        <h3 style="font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:12px;">Classes Offered</h3>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          ${gym.classes.map(c => `<span style="padding:6px 14px;border:1px solid var(--border);border-radius:20px;font-size:0.82rem;color:var(--text-muted);">${c}</span>`).join('')}
        </div>
      </div>
      <div class="card-footer" style="border-top:1px solid var(--border);padding-top:20px;margin-top:8px;">
        <div class="card-price" style="font-size:1.4rem;">$${gym.price}<span>/mo</span></div>
        <button class="btn btn-sm btn-primary" onclick="showToast('Membership request sent!')">Join This Gym</button>
      </div>
    </div>
  `;
  modal.classList.add('active');
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
let activeGymFilter = 'all';

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

function setGymFilter(btn) {
  document.querySelectorAll('#gymFilterButtons .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeGymFilter = btn.dataset.filter;
  filterGyms();
}

function sortData(data, sortBy) {
  const sorted = [...data];
  switch (sortBy) {
    case 'subscribers': sorted.sort((a, b) => b.subscribers - a.subscribers); break;
    case 'members': sorted.sort((a, b) => b.members - a.members); break;
    case 'rating': sorted.sort((a, b) => b.rating - a.rating); break;
    case 'price': sorted.sort((a, b) => a.price - b.price); break;
    case 'experience': sorted.sort((a, b) => parseInt(b.experience) - parseInt(a.experience)); break;
    case 'trainers': sorted.sort((a, b) => b.trainers - a.trainers); break;
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

function filterGyms() {
  const searchEl = document.getElementById('gymSearch');
  const sortEl = document.getElementById('gymSort');
  const grid = document.getElementById('gymGrid');
  if (!grid) return;
  const search = searchEl ? searchEl.value.toLowerCase().trim() : '';
  const sortBy = sortEl ? sortEl.value : 'members';
  let filtered = gyms.filter(g => {
    const matchesSearch = !search || g.name.toLowerCase().includes(search) || g.location.toLowerCase().includes(search);
    const matchesCategory = activeGymFilter === 'all' || g.category === activeGymFilter;
    return matchesSearch && matchesCategory;
  });
  filtered = sortData(filtered, sortBy);
  grid.innerHTML = filtered.map(createGymCard).join('');
}

// ===== Navbar Scroll =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ===== Mobile Nav: move action buttons into slide-out menu =====
function handleMobileNav() {
  const navLinks = document.getElementById('navLinks');
  const navActions = document.querySelector('.nav-actions');
  if (!navLinks || !navActions) return;
  if (window.innerWidth <= 768) {
    // Move action buttons into nav-links if not already there
    if (!navLinks.contains(navActions)) {
      navLinks.appendChild(navActions);
      navActions.style.display = 'flex';
      navActions.style.flexDirection = 'column';
      navActions.style.alignItems = 'center';
      navActions.style.gap = '16px';
      navActions.style.marginTop = '20px';
      navActions.style.paddingTop = '20px';
      navActions.style.borderTop = '1px solid var(--border)';
      navActions.style.width = '100%';
    }
  } else {
    // Move back to nav-container on desktop
    const navContainer = document.querySelector('.nav-container');
    const navToggleBtn = document.getElementById('navToggle');
    if (navActions.parentElement === navLinks && navContainer) {
      navContainer.insertBefore(navActions, navToggleBtn);
      navActions.style.display = '';
      navActions.style.flexDirection = '';
      navActions.style.alignItems = '';
      navActions.style.gap = '';
      navActions.style.marginTop = '';
      navActions.style.paddingTop = '';
      navActions.style.borderTop = '';
      navActions.style.width = '';
    }
  }
}
handleMobileNav();
window.addEventListener('resize', handleMobileNav);

const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
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
            ${w.sampleDays ? `<div class="exercise-preview" style="margin-top:8px;padding-left:2px;">
              <div style="font-size:0.72rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Sample Program</div>
              ${w.sampleDays.map(d => `
                <div style="margin-bottom:6px;">
                  <div style="font-size:0.78rem;font-weight:500;color:var(--text);margin-bottom:2px;">${d.day}</div>
                  ${d.exercises.map(e => `<div style="font-size:0.78rem;color:var(--text-muted);padding:1px 0 1px 8px;font-weight:300;">&middot; ${e}</div>`).join('')}
                </div>
              `).join('')}
            </div>` : ''}
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
            ${p.sampleDays ? `<div class="meal-preview" style="margin-top:8px;padding-left:2px;">
              <div style="font-size:0.72rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Sample Meal Plan</div>
              ${p.sampleDays.map(d => `
                <div style="margin-bottom:6px;">
                  <div style="font-size:0.78rem;font-weight:500;color:var(--text);margin-bottom:2px;">${d.day}</div>
                  <div style="font-size:0.78rem;color:var(--text-muted);padding:1px 0 1px 8px;font-weight:300;"><span style="color:var(--accent-light);font-weight:400;">Breakfast</span> &middot; ${d.breakfast}</div>
                  <div style="font-size:0.78rem;color:var(--text-muted);padding:1px 0 1px 8px;font-weight:300;"><span style="color:var(--accent-light);font-weight:400;">Lunch</span> &middot; ${d.lunch}</div>
                  <div style="font-size:0.78rem;color:var(--text-muted);padding:1px 0 1px 8px;font-weight:300;"><span style="color:var(--accent-light);font-weight:400;">Dinner</span> &middot; ${d.dinner}</div>
                </div>
              `).join('')}
            </div>` : ''}
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
