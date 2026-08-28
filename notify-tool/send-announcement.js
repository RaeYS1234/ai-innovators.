// ============ AI INNOVATORS — Send an Announcement ============
// Sends a push notification to every device that has notifications
// turned on. Run this yourself whenever you want to announce something —
// it does NOT run automatically.
//
// Usage:
//   node send-announcement.js "Title here" "Message here" ["https://link (optional)"]
//
// Example:
//   node send-announcement.js "New course is live!" "Pitching to Investors just dropped — check it out!"
//
// One-time setup (see SETUP.md): put your serviceAccountKey.json file
// in this same folder before running this for the first time.

const admin = require("firebase-admin");
const path = require("path");
const fs = require("fs");

const keyPath = path.join(__dirname, "serviceAccountKey.json");
if (!fs.existsSync(keyPath)) {
  console.error("Missing serviceAccountKey.json in this folder. See SETUP.md.");
  process.exit(1);
}
const serviceAccount = require(keyPath);

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

const SITE_URL = "https://ai-innovators-613l.vercel.app/";

async function main() {
  const [, , title, body, link] = process.argv;
  if (!title || !body) {
    console.log('Usage: node send-announcement.js "Title" "Message" ["https://link"]');
    process.exit(1);
  }

  const snap = await db.collection("notificationTokens").get();
  const tokens = snap.docs.map((d) => d.id);

  if (tokens.length === 0) {
    console.log("No devices have notifications turned on yet — nothing to send.");
    return;
  }

  console.log(`Sending to ${tokens.length} device(s)...`);

  const message = {
    notification: { title, body },
    webpush: {
      fcmOptions: { link: link || SITE_URL },
      notification: { icon: SITE_URL + "app-icon-192.svg" }
    },
    tokens
  };

  const res = await admin.messaging().sendEachForMulticast(message);
  console.log(`Sent to ${res.successCount}/${tokens.length} device(s).`);
  if (res.failureCount > 0) {
    console.log(`${res.failureCount} failed (probably old/uninstalled devices) — cleaning those up...`);
  }

  // Remove tokens that are no longer valid (app uninstalled, permission revoked, etc.)
  const deletions = [];
  res.responses.forEach((r, i) => {
    if (!r.success) {
      const code = r.error && r.error.code;
      if (code === "messaging/registration-token-not-registered" || code === "messaging/invalid-registration-token") {
        deletions.push(db.collection("notificationTokens").doc(tokens[i]).delete());
      }
    }
  });
  if (deletions.length) {
    await Promise.all(deletions);
    console.log(`Cleaned up ${deletions.length} expired device(s).`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error("Something went wrong:", err.message || err);
  process.exit(1);
});
