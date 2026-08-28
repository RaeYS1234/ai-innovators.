// ============ AI INNOVATORS — Cross-Device Sync ============
// If a kid is signed in with Google, this automatically saves their
// progress (XP, streak, badges, everything) to the cloud and pulls it
// back down when they sign in on a different device. No codes to
// copy/paste — it just works in the background.
//
// Only works for kids who signed in with Google (they have a stable
// firebaseUid). The quick name/email signup is local-only and can't
// sync across devices since it isn't tied to a real account.

(function () {
  let firestoreApi = null;
  let initPromise = null;
  let pushTimer = null;

  const firebaseConfig = {
    apiKey: "AIzaSyDj-0TOvaENVWvUgP-MIJpy0xxYGzzxymg",
    authDomain: "ai-innovators-6fc07.firebaseapp.com",
    projectId: "ai-innovators-6fc07",
    storageBucket: "ai-innovators-6fc07.firebasestorage.app",
    messagingSenderId: "316596960929",
    appId: "1:316596960929:web:152759a44e57e25462fae0"
  };

  function init() {
    if (initPromise) return initPromise;
    initPromise = (async () => {
      const [{ initializeApp, getApps, getApp }, firestoreMod] = await Promise.all([
        import("https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js"),
        import("https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js")
      ]);
      const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
      const db = firestoreMod.getFirestore(app);
      firestoreApi = { db, ...firestoreMod };
      return firestoreApi;
    })();
    return initPromise;
  }

  function getLocalUser() {
    try { return JSON.parse(localStorage.getItem("aii_user") || "null"); } catch (e) { return null; }
  }

  // Push the current user object to the cloud (debounced — waits for a
  // quiet moment so rapid saves don't spam Firestore with writes).
  window.aiiSyncPush = function () {
    const user = getLocalUser();
    if (!user || !user.firebaseUid) return; // only Google-signed-in kids sync
    clearTimeout(pushTimer);
    pushTimer = setTimeout(async () => {
      try {
        const { db, doc, setDoc, serverTimestamp } = await init();
        await setDoc(doc(db, "users", user.firebaseUid), {
          ...user,
          updatedAt: serverTimestamp()
        });
      } catch (e) {
        console.warn("[sync] push failed:", e);
      }
    }, 800);
  };

  // Pull this account's cloud progress. Returns the saved user object,
  // or null if nothing's been synced yet for this account.
  window.aiiSyncPull = async function (uid) {
    if (!uid) return null;
    try {
      const { db, doc, getDoc } = await init();
      const snap = await getDoc(doc(db, "users", uid));
      return snap.exists() ? snap.data() : null;
    } catch (e) {
      console.warn("[sync] pull failed:", e);
      return null;
    }
  };

  // Auto-push whenever aii_user changes, from ANY page, without needing
  // every file that saves progress to remember to call sync itself.
  if (!localStorage.__aiiSyncPatched) {
    const realSetItem = localStorage.setItem.bind(localStorage);
    localStorage.setItem = function (key, value) {
      realSetItem(key, value);
      if (key === "aii_user") window.aiiSyncPush();
    };
    try { localStorage.__aiiSyncPatched = "1"; } catch (e) {}
  }
})();
