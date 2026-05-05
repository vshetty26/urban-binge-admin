# Vercel Settings - Manual Configuration

Vercel को manually configure करना होगा क्योंकि यह `.next` folder को recognize नहीं कर रहा।

---

## 🔧 Step 1: Go to Vercel Project Settings

1. Go to: https://vercel.com/dashboard
2. Click on your `urban-binge-admin` project
3. Click **Settings** (top menu)
4. Go to **Build & Development Settings**

---

## 📝 Step 2: Configure Build Settings

### Build Command
```
npm run build
```

### Output Directory
```
.next
```

### Install Command
```
npm install
```

### Framework Preset
```
Next.js
```

---

## 🔐 Step 3: Set Environment Variables

1. Go to **Settings** → **Environment Variables**
2. Add these variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY = AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = urban-binge-oms.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID = urban-binge-oms
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = urban-binge-oms.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 558585692434
NEXT_PUBLIC_FIREBASE_APP_ID = 1:558585692434:web:...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = G-...
```

3. Click **Save**

---

## 🚀 Step 4: Redeploy

1. Go to **Deployments**
2. Click **Redeploy** on the latest deployment
3. Wait for build to complete

---

## ✅ Verify

After deployment:
1. Check for green checkmark ✅
2. Visit your URL
3. Open DevTools (F12)
4. Test Firebase connection

---

**यह settings करने के बाद deployment काम करेगी!**
