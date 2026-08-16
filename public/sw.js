// ============ AI INNOVATORS — Service Worker ============
// Auto-updating: always grabs the freshest files when online,
// falls back to cache when offline.

// ---- Push notifications (Firebase Cloud Messaging) ----
// Handles notifications that arrive while the app/site isn't open.
// (Notifications while the app IS open are handled in notifications.js.)
importScripts("https://www.gstatic.com/firebasejs/12.15.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.15.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDj-0TOvaENVWvUgP-MIJpy0xxYGzzxymg",
  authDomain: "ai-innovators-6fc07.firebaseapp.com",
  projectId: "ai-innovators-6fc07",
  storageBucket: "ai-innovators-6fc07.firebasestorage.app",
  messagingSenderId: "316596960929",
  appId: "1:316596960929:web:152759a44e57e25462fae0"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || "AI Innovators";
  const options = {
    body: (payload.notification && payload.notification.body) || "",
    icon: "/app-icon-192.svg",
    badge: "/app-icon-192.svg"
  };
  self.registration.showNotification(title, options);
});

// Tapping a notification focuses an existing tab, or opens a new one
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && "focus" in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow("/homepage-kidfriendly.html");
    })
  );
});

// Cache version — change this string when you want to force everyone
// to clear their cache. With the network-first strategy below, updates
// already show up immediately when the user has internet.
const CACHE_NAME = "ai-innovators-2026-08-11b";

// Core files to cache so the app works offline
const CORE_FILES = [
  "/",
  "/homepage-kidfriendly.html",
  "/enroll.html",
  "/profile.html",
  "/manifest.json",
  "/app-icon.svg",
  "/app-icon-192.svg",
  "/app-icon-512.svg",
  "/app-icon-maskable.svg",
  "/lesson-shared.css",
  "/lesson-engine.js",
  "/notifications.js",
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
  "/lesson-bi-1-2-solving-problems.html",
  "/lesson-bi-1-3-brainstorm.html",
  "/lesson-bi-2-1-good-idea.html",
  "/lesson-bi-2-2-test-your-idea.html",
  "/lesson-bi-challenge.html",
  "/lesson-ap-1-1-how-ai-makes-pictures.html",
  "/lesson-ap-1-2-good-prompts.html",
  "/lesson-ap-1-3-first-prompt.html",
  "/lesson-ap-2-1-what-is-a-logo.html",
  "/lesson-ap-2-2-make-your-logo.html",
  "/lesson-ap-2-3-pick-colors.html",
  "/lesson-ap-challenge.html",
  // Money Math full course
  "/lesson-mm-1-2-adding-dollars.html",
  "/lesson-mm-1-3-unit1-quiz.html",
  "/lesson-mm-2-1-earning.html",
  "/lesson-mm-2-2-spending.html",
  "/lesson-mm-2-3-earn-practice.html",
  "/lesson-mm-2-4-unit2-quiz.html",
  "/lesson-mm-3-1-why-save.html",
  "/lesson-mm-3-2-how-to-save.html",
  "/lesson-mm-challenge.html",
  // Writing a Business Plan (Level 3 Builder)
  "/lesson-bp-1-1-what-is-a-business-plan.html",
  "/lesson-bp-1-2-executive-summary.html",
  "/lesson-bp-1-3-unit1-quiz.html",
  "/lesson-bp-2-1-target-market.html",
  "/lesson-bp-2-2-competition.html",
  "/lesson-bp-2-3-money-plan.html",
  "/lesson-bp-3-1-putting-it-together.html",
  "/lesson-bp-challenge.html",
  // AI Tools Workshop (Level 3 Builder)
  "/lesson-at-1-1-chatgpt-basics.html",
  "/lesson-at-1-2-canva-ai.html",
  "/lesson-at-1-3-unit1-quiz.html",
  "/lesson-at-2-1-choosing-right-tool.html",
  "/lesson-at-2-2-combining-tools.html",
  "/lesson-at-2-3-avoiding-mistakes.html",
  "/lesson-at-3-1-for-your-business.html",
  "/lesson-at-challenge.html",
  // Marketing & Branding (6-8 Builder Mission)
  "/lesson-mb-1-1-what-is-marketing.html",
  "/lesson-mb-1-2-your-brand.html",
  "/lesson-mb-1-3-name-and-voice.html",
  "/lesson-mb-1-4-logo-visual-identity.html",
  "/lesson-mb-2-1-social-media.html",
  "/lesson-mb-2-2-email-newsletters.html",
  "/lesson-mb-2-3-word-of-mouth.html",
  "/lesson-mb-3-1-content-that-works.html",
  "/lesson-mb-3-2-plan-campaign.html",
  "/lesson-mb-challenge.html",
  // Building Your First Pitch (Level 4 Pro)
  "/lesson-fp-1-1-what-makes-a-pitch.html",
  "/lesson-fp-1-2-problem-solution.html",
  "/lesson-fp-1-3-unit1-quiz.html",
  "/lesson-fp-2-1-slide-deck-structure.html",
  "/lesson-fp-2-2-delivery-and-nerves.html",
  "/lesson-fp-challenge.html",
  // Pricing & Profit Strategy
  "/lesson-ps-1-1-what-determines-price.html",
  "/lesson-ps-1-2-cost-plus-value-based.html",
  "/lesson-ps-1-3-pricing-practice.html",
  "/lesson-ps-2-1-discounts-promos.html",
  "/lesson-ps-2-2-bundling-products.html",
  "/lesson-ps-2-3-price-test-practice.html",
  "/lesson-ps-challenge.html",
  // Financial Modeling (Level 5 Master)
  "/lesson-fm-1-1-what-is-a-financial-model.html",
  "/lesson-fm-1-2-revenue-forecast.html",
  "/lesson-fm-1-3-unit1-quiz.html",
  "/lesson-fm-2-1-expenses-and-costs.html",
  "/lesson-fm-2-2-break-even.html",
  "/lesson-fm-challenge.html",
  // Startup Fundamentals (Level 4 Pro)
  "/lesson-sf-1-1-founders-and-equity.html",
  "/lesson-sf-1-2-startup-vs-small-business.html",
  "/lesson-sf-1-3-mission-vision-values.html",
  "/lesson-sf-2-1-finding-the-problem.html",
  "/lesson-sf-2-2-building-an-mvp.html",
  "/lesson-sf-2-3-customer-discovery.html",
  "/lesson-sf-2-4-iteration-and-pivots.html",
  "/lesson-sf-3-1-bootstrapping-vs-investors.html",
  "/lesson-sf-3-2-angels-and-vcs.html",
  "/lesson-sf-3-3-convertible-notes-safes.html",
  "/lesson-sf-4-1-acquisition-channels.html",
  "/lesson-sf-4-2-unit-economics.html",
  "/lesson-sf-challenge.html",
  // Prompt Engineering (Level 4 Pro)
  "/lesson-pe-1-1-how-language-models-think.html",
  "/lesson-pe-1-2-anatomy-of-a-prompt.html",
  "/lesson-pe-1-3-specificity-and-context.html",
  "/lesson-pe-2-1-chain-of-thought.html",
  "/lesson-pe-2-2-few-shot-examples.html",
  "/lesson-pe-2-3-role-playing-personas.html",
  "/lesson-pe-2-4-output-formatting.html",
  "/lesson-pe-3-1-prompts-for-writing.html",
  "/lesson-pe-3-2-prompts-for-analysis.html",
  "/lesson-pe-3-3-prompts-for-coding.html",
  "/lesson-pe-challenge.html",
  // Market Research with AI (Level 5 Master)
  "/lesson-mr-1-1-what-is-market-research.html",
  "/lesson-mr-1-2-primary-vs-secondary-research.html",
  "/lesson-mr-1-3-asking-the-right-questions.html",
  "/lesson-mr-2-1-ai-for-surveys-analysis.html",
  "/lesson-mr-2-2-competitive-intelligence-ai.html",
  "/lesson-mr-2-3-finding-trends-in-data.html",
  "/lesson-mr-3-1-building-customer-personas.html",
  "/lesson-mr-3-2-spotting-opportunities.html",
  "/lesson-mr-challenge.html",
  // Pitching to Investors (Level 5 Master)
  "/lesson-pi-1-1-what-investors-want.html",
  "/lesson-pi-1-2-the-pitch-deck.html",
  "/lesson-pi-1-3-unit1-quiz.html",
  "/lesson-pi-2-1-valuation-basics.html",
  "/lesson-pi-2-2-handling-questions.html",
  "/lesson-pi-challenge.html",
  // Building MVPs with AI (Level 5 Master)
  "/lesson-mvp-1-1-what-is-an-mvp.html",
  "/lesson-mvp-1-2-scoping-smallest-useful-thing.html",
  "/lesson-mvp-1-3-mvp-examples-real-startups.html",
  "/lesson-mvp-2-1-no-code-tools-with-ai.html",
  "/lesson-mvp-2-2-ai-coding-assistants.html",
  "/lesson-mvp-2-3-design-tools-with-ai.html",
  "/lesson-mvp-3-1-project-setup.html",
  "/lesson-mvp-3-2-build-the-frontend.html",
  "/lesson-mvp-3-3-add-functionality.html",
  "/lesson-mvp-3-4-test-and-iterate.html",
  "/lesson-mvp-challenge.html"
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
