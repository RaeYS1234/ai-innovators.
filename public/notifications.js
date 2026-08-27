// ============ AI INNOVATORS — Push Notifications ============
// Lets a signed-in kid turn on notifications so they get a push
// alert on their phone/computer whenever Rae sends an announcement
// (like "a new course just went live!").
//
// This file needs ONE thing filled in before it works: the VAPID key
// from the Firebase console (Project settings -> Cloud Messaging ->
// Web configuration -> Generate key pair). Paste it below.

import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore, doc, setDoc, deleteDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getMessaging, getToken, onMessage, isSupported } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyDj-0TOvaENVWvUgP-MIJpy0xxYGzzxymg",
  authDomain: "ai-innovators-6fc07.firebaseapp.com",
  projectId: "ai-innovators-6fc07",
  storageBucket: "ai-innovators-6fc07.firebasestorage.app",
  messagingSenderId: "316596960929",
  appId: "1:316596960929:web:152759a44e57e25462fae0"
};

// TODO (Rae): paste your Web Push VAPID key here — see the setup checklist.
const VAPID_KEY = "BPmFF-V5wG7fYqcC-s9DAtxxrhyEATE_MgOC-mFia2HckYTROvNZFZ3Ov27usnjKvtiiRuzvNpj0RmPIDhFc9PM";

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function currentToken() {
  try { return localStorage.getItem("aii_notification_token"); } catch(e) { return null; }
}

// Returns "on", "off", or "unsupported"
window.aiiNotificationStatus = async function() {
  if (!("Notification" in window) || !(await isSupported().catch(() => false))) return "unsupported";
  if (Notification.permission === "granted" && currentToken()) return "on";
  return "off";
};

window.aiiEnableNotifications = async function() {
  if (!("Notification" in window)) {
    alert("Notifications aren't supported in this browser.");
    return false;
  }
  const supported = await isSupported().catch(() => false);
  if (!supported) {
    alert("Push notifications aren't supported on this browser/device yet. Try Chrome on Android or desktop — on iPhone, add AI Innovators to your Home Screen first (Share button -> Add to Home Screen), then try again from there.");
    return false;
  }

  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    alert("Notifications are off. You can turn them on anytime from your browser settings.");
    return false;
  }

  if (VAPID_KEY === "PASTE_YOUR_VAPID_KEY_HERE") {
    console.warn("[notifications] VAPID_KEY isn't set yet — see the setup checklist.");
    alert("Notifications aren't fully set up yet. Ask Rae to finish the setup checklist!");
    return false;
  }

  try {
    const reg = await navigator.serviceWorker.ready;
    const messaging = getMessaging(app);
    const token = await getToken(messaging, { vapidKey: VAPID_KEY, serviceWorkerRegistration: reg });
    if (!token) return false;

    let user = null;
    try { user = JSON.parse(localStorage.getItem("aii_user") || "null"); } catch(e) {}

    await setDoc(doc(db, "notificationTokens", token), {
      token,
      uid: (auth.currentUser && auth.currentUser.uid) || (user && user.firebaseUid) || null,
      email: (auth.currentUser && auth.currentUser.email) || (user && user.email) || null,
      name: (user && user.name) || null,
      savedAt: serverTimestamp(),
      userAgent: navigator.userAgent
    });

    try { localStorage.setItem("aii_notification_token", token); } catch(e) {}
    return true;
  } catch (err) {
    console.error("[notifications] enable failed:", err);
    alert("Hmm, that didn't work. Try again in a bit!");
    return false;
  }
};

window.aiiDisableNotifications = async function() {
  const token = currentToken();
  if (token) {
    try { await deleteDoc(doc(db, "notificationTokens", token)); } catch(e) {}
  }
  try { localStorage.removeItem("aii_notification_token"); } catch(e) {}
  return true;
};

// Show a friendly popup if a notification arrives while the app is already open
// (background notifications while the app is closed are handled in sw.js)
isSupported().then((supported) => {
  if (!supported) return;
  const messaging = getMessaging(app);
  onMessage(messaging, (payload) => {
    const title = (payload.notification && payload.notification.title) || "AI Innovators";
    const body = (payload.notification && payload.notification.body) || "";
    if (window.showToast) window.showToast(title + (body ? " — " + body : ""));
    else alert(title + (body ? "\n" + body : ""));
  });
});
