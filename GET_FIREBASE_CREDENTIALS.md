# Get Your Firebase Credentials

Your `.env.local` file was created but needs the correct API key. Follow these steps to get it.

---

## 🔑 Step 1: Get Your Firebase Credentials

1. Go to: https://console.firebase.google.com
2. Select `urban-binge-oms` project
3. Click **Settings** (gear icon) → **Project Settings**
4. Go to **General** tab
5. Scroll down to "Your apps" section
6. Look for your web app (should show `</>`  icon)
7. Click on it to see the config

---

## 📋 Step 2: Copy the Config

You should see something like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "urban-binge-oms.firebaseapp.com",
  projectId: "urban-binge-oms",
  storageBucket: "urban-binge-oms.firebasestorage.app",
  messagingSenderId: "558585692434",
  appId: "1:558585692434:web:...",
  measurementId: "G-..."
};
```

---

## ✏️ Step 3: Update `.env.local`

1. Open `.env.local` in your project
2. Replace with your actual values:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=urban-binge-oms.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=urban-binge-oms
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=urban-binge-oms.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=558585692434
NEXT_PUBLIC_FIREBASE_APP_ID=1:558585692434:web:...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-...
```

---

## 🔄 Step 4: Restart Dev Server

```bash
# Stop current server (Ctrl+C)
# Then restart:
npm run dev
```

---

## ✅ Step 5: Test

1. Go to http://localhost:3001
2. Place new order in customer app
3. Order should appear in admin dashboard
4. Audio alert should play

---

**Once you update `.env.local` with the correct API key and restart, everything will work! 🚀**
