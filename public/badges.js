// ============ AI INNOVATORS — Badge Registry ============
// A small, curated set of REAL achievement badges. These are earned once,
// stored by id in user.earnedBadgeIds, and shown in the Badges gallery.
// Keep this list short and meaningful — badges should feel special, not automatic.

(function () {
  // ---- Badge icon art (flat, kid-friendly, same style as lesson badges) ----
  const ICONS = {
    moon: `<svg viewBox="0 0 64 64"><path d="M40 6 C 24 6 12 18 12 34 C 12 50 24 60 38 58 C 26 54 18 44 18 32 C 18 20 26 10 40 6 Z" fill="#818cf8" stroke="#4338ca" stroke-width="2.5" stroke-linejoin="round"/><circle cx="46" cy="16" r="3" fill="#fbbf24"/><circle cx="52" cy="26" r="2" fill="#fbbf24"/></svg>`,
    sun: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="14" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/><g stroke="#fbbf24" stroke-width="4" stroke-linecap="round"><line x1="32" y1="4" x2="32" y2="12"/><line x1="32" y1="52" x2="32" y2="60"/><line x1="4" y1="32" x2="12" y2="32"/><line x1="52" y1="32" x2="60" y2="32"/><line x1="12" y1="12" x2="18" y2="18"/><line x1="46" y1="46" x2="52" y2="52"/><line x1="52" y1="12" x2="46" y2="18"/><line x1="18" y1="46" x2="12" y2="52"/></g></svg>`,
    flame: `<svg viewBox="0 0 64 64"><path d="M32 4 C 20 20 14 28 14 38 C 14 50 22 58 32 58 C 42 58 50 50 50 38 C 50 32 47 27 44 24 C 45 32 40 36 37 34 C 40 26 34 14 32 4 Z" fill="#f97316" stroke="#c2410c" stroke-width="2.5"/><path d="M32 30 C 27 38 26 43 26 46 C 26 51 29 54 32 54 C 35 54 38 51 38 46 C 38 43 37 40 35 37 C 35 40 33 41 32 39 C 33 36 32 33 32 30 Z" fill="#fbbf24"/></svg>`,
    ribbon: `<svg viewBox="0 0 64 64"><circle cx="32" cy="24" r="18" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/><text x="32" y="30" font-size="16" fill="white" text-anchor="middle" font-weight="900">★</text><path d="M22 38 L 12 58 L 24 52 L 32 60 L 40 52 L 52 58 L 42 38" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/></svg>`,
    crown: `<svg viewBox="0 0 64 64"><path d="M 8 36 L 14 18 L 22 28 L 32 14 L 42 28 L 50 18 L 56 36 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/><rect x="8" y="36" width="48" height="12" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/><circle cx="14" cy="20" r="3" fill="#ef4444"/><circle cx="32" cy="14" r="3" fill="#0ea5e9"/><circle cx="50" cy="20" r="3" fill="#22c55e"/></svg>`,
    target: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="white" stroke="#ef4444" stroke-width="3"/><circle cx="32" cy="32" r="18" fill="#ef4444"/><circle cx="32" cy="32" r="10" fill="white"/><circle cx="32" cy="32" r="4" fill="#ef4444"/></svg>`,
    trophy: `<svg viewBox="0 0 64 64"><path d="M16 6 L 48 6 L 48 26 C 48 36 41 44 32 44 C 23 44 16 36 16 26 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/><rect x="26" y="44" width="12" height="8" fill="#d97706"/><rect x="18" y="52" width="28" height="6" rx="2" fill="#92400e"/></svg>`,
    medal: `<svg viewBox="0 0 64 64"><path d="M20 6 L 12 26 L 24 22 L 32 34 L 40 22 L 52 26 L 44 6 Z" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/><circle cx="32" cy="42" r="18" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/><text x="32" y="48" font-size="16" fill="white" text-anchor="middle" font-weight="900">1</text></svg>`,
    brain: `<svg viewBox="0 0 64 64"><path d="M32 8 C 22 8 14 16 14 26 C 12 28 10 30 10 34 C 10 38 12 40 14 41 C 14 49 22 56 32 56 C 42 56 50 49 50 41 C 52 40 54 38 54 34 C 54 30 52 28 50 26 C 50 16 42 8 32 8 Z" fill="#f472b6" stroke="#be185d" stroke-width="2"/></svg>`,
    starter: `<svg viewBox="0 0 64 64"><path d="M32 6 C 22 14 16 24 16 36 L 16 46 L 22 42 L 22 50 L 32 46 L 42 50 L 42 42 L 48 46 L 48 36 C 48 24 42 14 32 6 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2.5" stroke-linejoin="round"/><circle cx="32" cy="28" r="6" fill="white" stroke="#d97706" stroke-width="2"/><circle cx="32" cy="28" r="3" fill="#0ea5e9"/></svg>`,
    bulb: `<svg viewBox="0 0 64 64"><path d="M32 6 C 22 6 14 14 14 24 C 14 30 18 34 20 38 L 20 44 L 44 44 L 44 38 C 46 34 50 30 50 24 C 50 14 42 6 32 6 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2.5"/><rect x="22" y="46" width="20" height="4" rx="2" fill="#475569"/><rect x="24" y="52" width="16" height="4" rx="2" fill="#475569"/></svg>`,
    money: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="#22c55e" stroke="#15803d" stroke-width="2.5"/><text x="32" y="42" font-size="32" fill="white" text-anchor="middle" font-weight="900" font-family="sans-serif">$</text></svg>`,
    rocket: `<svg viewBox="0 0 64 64"><path d="M32 4 C 42 12 46 24 46 34 L 46 44 L 40 40 L 40 48 L 32 44 L 24 48 L 24 40 L 18 44 L 18 34 C 18 24 22 12 32 4 Z" fill="#0ea5e9" stroke="#0369a1" stroke-width="2.5"/><circle cx="32" cy="26" r="6" fill="white" stroke="#0369a1" stroke-width="2"/></svg>`
  };

  // ---- Level → course grouping (matches homepage-kidfriendly.html sections) ----
  const LEVELS = {
    1: ["business-101", "money-math", "what-is-ai"],
    2: ["business-idea", "ai-pictures", "marketing-branding"],
    3: ["business-plan", "pricing-strategy", "ai-tools-workshop"],
    4: ["first-pitch", "startup-fundamentals", "prompt-engineering"],
    5: ["financial-modeling", "build-mvps", "pitching-investors", "market-research"]
  };

  // ---- The real badge list ----
  const BADGES = [
    // Dedication
    { id: "night_owl", name: "Night Owl", desc: "Complete 10 lessons after 10pm", icon: "moon", category: "Dedication",
      check: (u) => (u.nightLessons || 0) >= 10 },
    { id: "early_bird", name: "Early Bird", desc: "Complete 10 lessons before 8am", icon: "sun", category: "Dedication",
      check: (u) => (u.earlyLessons || 0) >= 10 },
    { id: "streak_7", name: "7-Day Streak", desc: "Keep a 7-day learning streak going", icon: "flame", category: "Dedication",
      check: (u) => (u.bestStreak || u.streak || 0) >= 7 },
    { id: "streak_30", name: "30-Day Streak", desc: "Keep a 30-day learning streak going", icon: "flame", category: "Dedication",
      check: (u) => (u.bestStreak || u.streak || 0) >= 30 },

    // Mastery
    { id: "perfectionist", name: "Perfectionist", desc: "Get a perfect score 5 times", icon: "ribbon", category: "Mastery",
      check: (u) => (u.perfectScores || 0) >= 5 },
    { id: "quiz_master", name: "Quiz Master", desc: "Get a perfect score 10 times", icon: "crown", category: "Mastery",
      check: (u) => (u.perfectScores || 0) >= 10 },
    { id: "sharp_shooter", name: "Sharp Shooter", desc: "Finish 5 lessons in a row without losing a heart", icon: "target", category: "Mastery",
      check: (u) => (u.heartStreak || 0) >= 5 },

    // Exploration
    { id: "course_complete", name: "Course Complete", desc: "Finish every lesson in a course", icon: "trophy", category: "Exploration",
      check: (u) => (u.completedCourses || []).length >= 1 },
    { id: "level_up", name: "Level Up", desc: "Finish every course in a level", icon: "medal", category: "Exploration",
      check: (u) => (u.completedLevels || []).length >= 1 },
    { id: "all_rounder", name: "All-Rounder", desc: "Try lessons in 3 different courses", icon: "brain", category: "Exploration",
      check: (u) => (u.coursesStarted || []).length >= 3 },

    // Milestones
    { id: "first_lesson", name: "First Lesson", desc: "Complete your very first lesson", icon: "starter", category: "Milestones",
      check: (u) => (u.completedLessons || []).length >= 1 },
    { id: "lessons_50", name: "50 Lessons", desc: "Complete 50 lessons total", icon: "bulb", category: "Milestones",
      check: (u) => (u.completedLessons || []).length >= 50 },
    { id: "lessons_100", name: "100 Lessons", desc: "Complete 100 lessons total", icon: "rocket", category: "Milestones",
      check: (u) => (u.completedLessons || []).length >= 100 },
    { id: "xp_500", name: "500 XP", desc: "Earn 500 total XP", icon: "money", category: "Milestones",
      check: (u) => (u.xp || 0) >= 500 },
    { id: "xp_1000", name: "1000 XP", desc: "Earn 1000 total XP", icon: "money", category: "Milestones",
      check: (u) => (u.xp || 0) >= 1000 }
  ];

  // Derive a course's id from a lesson id like "financial-modeling-1-2" or "business-idea-challenge"
  function courseIdFromLessonId(lessonId) {
    if (!lessonId) return null;
    return lessonId.replace(/-\d+-\d+$/, "").replace(/-challenge$/, "");
  }

  // Check all badges against the current user object, returning any newly-earned ids
  // (does NOT mutate user.earnedBadgeIds — caller decides when to save)
  function checkNewlyEarned(user) {
    const already = user.earnedBadgeIds || [];
    return BADGES.filter(b => !already.includes(b.id) && b.check(user)).map(b => b.id);
  }

  window.AII_BADGES = BADGES;
  window.AII_BADGE_ICONS = ICONS;
  window.AII_LEVELS = LEVELS;
  window.AII_courseIdFromLessonId = courseIdFromLessonId;
  window.AII_checkNewlyEarned = checkNewlyEarned;
})();
