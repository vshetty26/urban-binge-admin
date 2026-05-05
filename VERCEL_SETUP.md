# Vercel Deployment Setup Guide

## Firebase Environment Variables

The admin dashboard requires Firebase credentials to connect to Firestore. These must be set in Vercel's environment variables.

### Steps to Configure on Vercel:

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Select your "urban-binge-admin" project

2. **Navigate to Settings**
   - Click "Settings" tab
   - Go to "Environment Variables" in the left sidebar

3. **Add Each Variable**
   - Copy each variable from `.env.local` and add it to Vercel:

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY = AIzaSyDYVCLIRts_LRu5ls1jb7afJOJ3HF_RMSs
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = urban-binge-oms.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID = urban-binge-oms
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = urban-binge-oms.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 558585692434
   NEXT_PUBLIC_FIREBASE_APP_ID = 1:558585692434:web:1611383571a8954ab3f3cb
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = G-2BNT4NEE8T
   ```

4. **Apply to All Environments**
   - Make sure each variable is set for:
     - Production
     - Preview
     - Development

5. **Redeploy**
   - After adding variables, redeploy your project:
   - Go to "Deployments" tab
   - Click the three dots on the latest deployment
   - Select "Redeploy"

### Verification

After redeploying, check if orders appear:
1. Visit your Vercel deployment URL
2. Open browser DevTools (F12)
3. Go to Console tab
4. Look for logs like:
   - `🔄 Orders page mounted - subscribing to orders`
   - `📦 Orders snapshot received - Total orders: X`

If you still see "0 pending", check:
- All 7 environment variables are set correctly
- No typos in variable names
- Deployment has completed (check Deployments tab)
- Firebase Firestore has orders in the database

### Troubleshooting

**If orders still don't appear:**
1. Check `/debug` page on Vercel to see if Firebase connection works
2. Verify Firebase Firestore security rules allow read access
3. Check browser console for any error messages
4. Ensure `.env.local` is in `.gitignore` (it should not be committed)
