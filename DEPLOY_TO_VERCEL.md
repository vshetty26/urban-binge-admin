# Deploy Urban Binge Admin to Vercel

Vercel is the easiest way to deploy Next.js apps. Follow these steps.

---

## 🚀 Step 1: Push to GitHub (5 minutes)

### If you haven't already:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Urban Binge Admin - Initial commit"

# Create GitHub repo and push
# (Follow GitHub's instructions)
git push -u origin main
```

---

## 🔗 Step 2: Connect to Vercel (2 minutes)

1. Go to: https://vercel.com
2. Click **Sign Up** (or **Sign In** if you have account)
3. Click **Continue with GitHub**
4. Authorize Vercel to access your GitHub
5. Click **Import Project**
6. Select your `urban-binge-admin` repository
7. Click **Import**

---

## 🔐 Step 3: Set Environment Variables (3 minutes)

1. In Vercel, you'll see "Configure Project"
2. Scroll to **Environment Variables**
3. Add these variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY = AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = urban-binge-oms.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID = urban-binge-oms
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = urban-binge-oms.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 558585692434
NEXT_PUBLIC_FIREBASE_APP_ID = 1:558585692434:web:...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = G-...
```

4. Click **Deploy**

---

## ⏳ Step 4: Wait for Deployment (2-5 minutes)

Vercel will:
1. Build your project
2. Run tests
3. Deploy to production
4. Give you a URL

You'll see a screen like:
```
✅ Deployment successful!
🎉 Your site is live at: https://urban-binge-admin.vercel.app
```

---

## ✅ Step 5: Test Deployed App (5 minutes)

1. Click the URL to visit your deployed app
2. Open DevTools (F12)
3. Go to Console tab
4. Paste this:

```javascript
firebase.firestore().collection('orders').get().then(snap => {
  console.log('✅ Connected. Orders:', snap.size);
}).catch(err => {
  console.log('❌ Error:', err.message);
});
```

**Expected:** Should show your orders count

---

## 🔄 Step 6: Update Firebase Authorized Domains

1. Go to Firebase Console
2. Go to **Settings** → **Authorized domains**
3. Add your Vercel URL:
   ```
   urban-binge-admin.vercel.app
   ```
4. Click **Add**

---

## 🎯 Step 7: Test Full Functionality

1. Go to your deployed app
2. Place order in customer app
3. Check if order appears in deployed admin dashboard
4. Verify audio alert plays
5. Test status updates

---

## 🔄 Making Updates

After deployment, to make changes:

```bash
# Make changes locally
# Test with: npm run dev

# Commit changes
git add .
git commit -m "Your message"

# Push to GitHub
git push

# Vercel automatically redeploys!
```

---

## 📊 Vercel Dashboard

After deployment, you can:

1. **View Deployments** - See all versions
2. **Check Logs** - Debug issues
3. **Set Domains** - Add custom domain
4. **Configure** - Change environment variables
5. **Analytics** - Monitor usage

---

## 🆘 If Deployment Fails

### Check Build Logs

1. Go to Vercel dashboard
2. Click on failed deployment
3. Click **View Build Logs**
4. Look for error messages

### Common Errors

**Error: "Cannot find module"**
- Solution: Run `npm install` locally, commit `package-lock.json`

**Error: "Environment variable not found"**
- Solution: Add missing variables in Vercel settings

**Error: "TypeScript error"**
- Solution: Fix error locally with `npm run build`

---

## 🎉 Success!

Your Urban Binge Admin Dashboard is now live! 

**Your URL:** `https://urban-binge-admin.vercel.app` (or your custom domain)

---

## 📱 Next Steps

1. ✅ Share URL with your team
2. ✅ Test with real orders
3. ✅ Monitor for issues
4. ✅ Make improvements
5. ✅ Scale as needed

---

## 💡 Pro Tips

1. **Custom Domain** - Add your own domain in Vercel settings
2. **Preview URLs** - Each PR gets a preview URL
3. **Automatic Deployments** - Deploys on every push to main
4. **Rollback** - Easy to rollback to previous version
5. **Analytics** - Monitor performance and usage

---

**Your app is now deployed and live! 🚀**
