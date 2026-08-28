# Push Notifications — One-Time Setup

I built all the code already. There are 4 things only you can do, because
they require logging into the Firebase console with your account. Do these
once, in order, then notifications will work forever.

Firebase console: https://console.firebase.google.com/ → pick your
**ai-innovators-6fc07** project.

---

## 1. Turn on Firestore (the database that stores who wants notifications)

1. In the left sidebar, click **Build → Firestore Database**.
2. Click **Create database**.
3. Choose **Start in production mode**, pick any location close to you, click **Enable**.

## 2. Set the security rules

1. Still in Firestore Database, click the **Rules** tab.
2. Replace everything with this:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /notificationTokens/{tokenId} {
      allow read: if false;
      allow write, delete: if true;
    }
  }
}
```

3. Click **Publish**.

(This lets anyone's device save/remove its own notification token, but
nobody can read the list of tokens from the browser — only your
`send-announcement.js` script can, using the admin key from step 4.)

## 3. Generate the Web Push key (VAPID key)

1. Click the gear icon (top left) → **Project settings**.
2. Click the **Cloud Messaging** tab.
3. Scroll to **Web configuration** → click **Generate key pair**.
4. Copy the long key that appears.
5. Open `notifications.js` in your AI Innovators folder, find this line near the top:
   ```
   const VAPID_KEY = "PASTE_YOUR_VAPID_KEY_HERE";
   ```
   Replace `PASTE_YOUR_VAPID_KEY_HERE` with the key you copied (keep the quotes).
6. Save, then deploy it like normal (copy to your live repo, commit, push).

## 4. Generate the admin key (for sending announcements)

This key lets the `send-announcement.js` script send notifications to
everyone. **Never share this file or put it on GitHub** — it's the master
key to your Firebase project.

1. Still in **Project settings**, click the **Service accounts** tab.
2. Click **Generate new private key** → confirm.
3. A file downloads, something like `ai-innovators-6fc07-firebase-adminsdk-xxxxx.json`.
4. Rename it to exactly `serviceAccountKey.json`.
5. Move it into this `notify-tool` folder (the same folder as `send-announcement.js`).

This folder already has a `.gitignore` that keeps `serviceAccountKey.json`
out of GitHub, so it stays private on your computer.

---

# Where this folder goes

Put this whole `notify-tool` folder **next to** `public`, not inside it —
like this:

```
ai-innovators-live/
├── public/              <- your live site (this stays the same)
└── notify-tool/         <- put this folder here
    ├── send-announcement.js
    ├── package.json
    ├── .gitignore
    └── serviceAccountKey.json   <- you'll add this in step 4
```

# Installing it (one time)

Open Terminal, then:

```
cd ~/Desktop/ai-innovators-live/notify-tool
npm install
```

# Sending an announcement (any time you want)

```
cd ~/Desktop/ai-innovators-live/notify-tool
node send-announcement.js "New course is live!" "Pitching to Investors just dropped — go check it out!"
```

That's it — it sends instantly to every device that has notifications
turned on. It does **not** run automatically; it only sends when you run
that command yourself.

# Good to know

- Only kids who **signed in with Google** AND tapped **Enable Notifications**
  on their profile page will get these. Kids who signed up with just a
  name/email (no Google) aren't tracked anywhere, so there's no way to
  reach them with a notification.
- On iPhone, push notifications only work if the site was added to the
  Home Screen first (Share button → Add to Home Screen) — that's an Apple
  rule for all websites, not something specific to AI Innovators.
