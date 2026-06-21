// ============ AI INNOVATORS — Service Worker ============
// Auto-updating: always grabs the freshest files when online,
// falls back to cache when offline.

// Cache version — change this string when you want to force everyone
// to clear their cache. With the network-first strategy below, updates
// already show up immediately when the user has internet.
const CACHE_NAME = "ai-innovators-2026-05-26";

// Core files to cache so the app works offline
const CORE_FILES = [
  "/",
  "/homepage-kidfriendly.html",
  "/enroll.html",
  "/manifest.json",
  "/app-icon.svg",
  "/app-icon-192.svg",
  "/app-icon-512.svg",
  "/app-icon-maskable.svg",
  "/lesson-shared.css",
  "/lesson-engine.js",
  "/sound.js",
  "/course-shared.css",
  "/course-engine.js",
  // Course pages
  "/course-business-101.html",
  "/course-money-math.html",
  "/course-what-is-ai.html",
  "/course-business-idea.html",
  "/course-ai-pictures.html",
  "/course-business-plan.html",
  "/course-marketing-branding.html",
  "/course-ai-tools-workshop.html",
  "/course-pricing-strategy.html",
  "/course-first-pitch.html",
  "/course-startup-fundamentals.html",
  "/course-prompt-engineering.html",
  "/course-financial-modeling.html",
  "/course-build-mvps.html",
  "/course-pitching-investors.html",
  "/course-market-research.html",
  // Business 101 lessons
  "/lesson-1-business-101.html",
  "/lesson-1-2-entrepreneur.html",
  "/lesson-1-3-unit1-quiz.html",
  "/lesson-2-1-revenue.html",
  "/lesson-2-2-cost.html",
  "/lesson-2-3-profit.html",
  "/lesson-2-4-unit2-quiz.html",
  "/lesson-3-1-customers.html",
  "/lesson-3-2-match-customers.html",
  "/lesson-4-1-marketing.html",
  "/lesson-challenge.html",
  // What is AI lessons
  "/lesson-ai-1-1-what-is-ai.html",
  "/lesson-ai-1-2-daily-life.html",
  "/lesson-ai-1-3-unit1-quiz.html",
  "/lesson-ai-2-1-ai-as-helper.html",
  "/lesson-ai-2-2-kinds-of-ai.html",
  "/lesson-ai-2-3-match-tools.html",
  "/lesson-ai-3-1-smart-with-ai.html",
  "/lesson-ai-3-2-mistakes.html",
  "/lesson-ai-challenge.html",
  // Other K-5 starter lessons
  "/lesson-mm-1-1-what-is-money.html",
  "/lesson-bi-1-1-where-ideas-come-from.html",
  "/lesson-ap-1-1-how-ai-makes-pictures.html"
];

// Install: cache core files and activate immediately
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_FILES))
      .then(() => self.skipWaiting())
      .catch((err) => console.log("[SW] Cache failed (some files missing - OK):", err))
  );
});

// Activate: clean up old caches and take control immediately
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: NETWORK-FIRST strategy
// = always try to get the latest version from the internet first.
// = only fall back to cache when offline.
// This means changes show up IMMEDIATELY when users have internet.
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  // Only handle same-origin
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    // Try the network first
    fetch(event.request)
      .then((response) => {
        // Got fresh version - update cache and return it
        if (response && response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Network failed (offline) - use cache
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          // Not in cache either - return homepage as fallback
          return caches.match("/homepage-kidfriendly.html");
        });
      })
  );
});

// Listen for "skip waiting" messages from the page
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
