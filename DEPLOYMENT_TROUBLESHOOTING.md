# Urban Binge Admin - Deployment Troubleshooting

Your project builds successfully locally but has errors during deployment. Follow this guide to diagnose and fix.

---

## 🔍 Common Deployment Issues

### Issue 1: Environment Variables Not Set

**Symptom:** Build succeeds but app crashes on deployment

**Cause:** Environment variables not configured in deployment platform

**Fix:**

#### For Vercel:
1. Go to your Vercel project
2. Click **Settings** → **Environment Variables**
3. Add these variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=urban-binge-oms.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=urban-binge-oms
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=urban-binge-oms.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=558585692434
NEXT_PUBLIC_FIREBASE_APP_ID=1:558585692434:web:...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-...
```

4. Redeploy

#### For Firebase Hosting:
1. Create `.env.production` file:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=urban-binge-oms.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=urban-binge-oms
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=urban-binge-oms.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=558585692434
NEXT_PUBLIC_FIREBASE_APP_ID=1:558585692434:web:...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-...
```

2. Deploy:
```bash
firebase deploy
```

#### For Netlify:
1. Go to your Netlify site
2. Click **Site settings** → **Build & deploy** → **Environment**
3. Add the same environment variables
4. Redeploy

---

### Issue 2: Firebase Security Rules Blocking Access

**Symptom:** App loads but can't fetch orders

**Cause:** Security rules too restrictive for production

**Fix:**

1. Go to Firebase Console
2. Go to Firestore → Rules
3. Update rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow reads for everyone
    match /orders/{document=**} {
      allow read: if true;
    }
    match /menu {
      allow read: if true;
    }
    match /storeStatus {
      allow read: if true;
    }
    match /inquiries/{document=**} {
      allow read: if true;
    }
    
    // Allow writes for authenticated users (optional)
    match /orders/{document=**} {
      allow write: if true;  // or: if request.auth != null;
    }
    match /inquiries/{document=**} {
      allow write: if true;  // or: if request.auth != null;
    }
  }
}
```

4. Click **Publish**

---

### Issue 3: CORS Errors

**Symptom:** Browser console shows CORS errors

**Cause:** Firebase domain not whitelisted

**Fix:**

1. Go to Firebase Console
2. Go to **Settings** → **Authorized domains**
3. Add your deployment domain:
   - For Vercel: `your-project.vercel.app`
   - For Firebase Hosting: `your-project.web.app`
   - For Netlify: `your-domain.netlify.app`

---

### Issue 4: Build Fails with TypeScript Errors

**Symptom:** Deployment fails during build

**Cause:** TypeScript strict mode errors

**Fix:**

1. Check build logs for specific errors
2. Fix errors locally:
   ```bash
   npm run build
   ```
3. Commit and push
4. Redeploy

---

### Issue 5: Missing Dependencies

**Symptom:** Build fails with "module not found"

**Cause:** Dependencies not installed

**Fix:**

```bash
# Ensure all dependencies are installed
npm install

# Verify build works locally
npm run build

# Commit package-lock.json
git add package-lock.json
git commit -m "Update dependencies"
git push
```

---

## 📋 Pre-Deployment Checklist

Before deploying, verify:

- [ ] `.env.local` has all Firebase credentials
- [ ] `npm run build` succeeds locally
- [ ] `npm run lint` passes
- [ ] No TypeScript errors
- [ ] All dependencies in `package.json`
- [ ] `package-lock.json` committed to git
- [ ] Firebase security rules allow reads/writes
- [ ] Firebase authorized domains include deployment URL
- [ ] Environment variables set in deployment platform

---

## 🚀 Deployment Steps

### Step 1: Verify Local Build

```bash
# Clean build
rm -rf .next
npm run build

# Should complete without errors
```

### Step 2: Set Environment Variables

**For Vercel:**
1. Go to project settings
2. Add environment variables
3. Redeploy

**For Firebase Hosting:**
1. Create `.env.production`
2. Add variables
3. Run `firebase deploy`

**For Netlify:**
1. Go to site settings
2. Add environment variables
3. Redeploy

### Step 3: Check Deployment Logs

**For Vercel:**
- Click "Deployments"
- Click on latest deployment
- Check "Build Logs"

**For Firebase Hosting:**
```bash
firebase deploy --debug
```

**For Netlify:**
- Go to "Deploys"
- Click on latest deploy
- Check "Deploy log"

### Step 4: Test Deployed App

1. Visit your deployed URL
2. Open browser DevTools (F12)
3. Check Console for errors
4. Test order placement
5. Verify orders appear

---

## 🔧 Debugging Deployment Errors

### Check 1: Environment Variables

```javascript
// In browser console on deployed app:
console.log('Project ID:', firebase.firestore().app.options.projectId);
// Should output: urban-binge-oms
```

### Check 2: Firebase Connection

```javascript
// In browser console:
firebase.firestore().collection('orders').get().then(snap => {
  console.log('✅ Connected. Orders:', snap.size);
}).catch(err => {
  console.log('❌ Error:', err.message);
});
```

### Check 3: Network Errors

1. Open DevTools → Network tab
2. Look for failed requests
3. Check for CORS errors
4. Check for 403/404 errors

---

## 📊 Deployment Platform Comparison

| Platform | Ease | Cost | Speed | Support |
|----------|------|------|-------|---------|
| **Vercel** | ⭐⭐⭐⭐⭐ | Free | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Firebase Hosting** | ⭐⭐⭐⭐ | Free | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Netlify** | ⭐⭐⭐⭐ | Free | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **AWS Amplify** | ⭐⭐⭐ | Free tier | ⭐⭐⭐⭐ | ⭐⭐⭐ |

**Recommendation:** Use **Vercel** (easiest for Next.js)

---

## ✅ Success Indicators

Your deployment is working when:

✅ App loads without errors  
✅ Firebase connects successfully  
✅ Orders appear in real-time  
✅ Audio alerts play  
✅ Status updates sync  
✅ No console errors  
✅ Mobile responsive  

---

## 📞 If Still Having Issues

Share these details:

1. **Deployment platform** (Vercel, Firebase, Netlify, etc.)
2. **Error message** from deployment logs
3. **Browser console errors** (F12 → Console)
4. **Build logs** (full output)
5. **Deployed URL** (if accessible)

---

**Once you set the environment variables and redeploy, your app should work! 🚀**
