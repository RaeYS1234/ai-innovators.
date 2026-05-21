// ============ AI INNOVATORS — Service Worker ============
// Caches the app for offline access. Bumps version when files change.

const CACHE_NAME = "ai-innovators-v1";

// Core files to cache when the app installs
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

// Install: cache core files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_FILES))
      .then(() => self.skipWaiting())
      .catch((err) => console.log("[SW] Cache failed (some files missing - OK):", err))
  );
});

// Activate: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: serve from cache first, fall back to network
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  // Only cache same-origin
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        // Return cached version, also fetch fresh in background
        fetch(event.request).then((response) => {
          if (response && response.ok) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response));
          }
        }).catch(() => {});
        return cached;
      }
      // Not in cache - fetch from network and cache it
      return fetch(event.request).then((response) => {
        if (!response || !response.ok) return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // Offline and not cached - return homepage as fallback
        return caches.match("/homepage-kidfriendly.html");
      });
    })
  );
});
