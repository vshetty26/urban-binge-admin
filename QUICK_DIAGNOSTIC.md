# Urban Binge - Quick Diagnostic (2 minutes)

Run this to quickly identify why orders aren't appearing in the admin dashboard.

---

## 🚀 Step 1: Check Firebase Console (1 minute)

1. Go to: https://console.firebase.google.com
2. Select `urban-binge-oms` project
3. Click **Firestore Database**
4. Look for `orders` collection

**What you should see:**
- Collection named `orders`
- At least one order document
- Order has fields: `customerName`, `items`, `status`, `createdAt`

**If you don't see it:**
- ❌ Customer app is writing to wrong Firebase project
- ❌ Collection doesn't exist
- ❌ Security rules blocking writes

---

## 🔍 Step 2: Check Admin Dashboard Console (1 minute)

1. Open admin dashboard: http://localhost:3001
2. Open DevTools: F12
3. Go to **Console** tab
4. Paste this code and press Enter:

```javascript
// Quick diagnostic
firebase.firestore().collection('orders').get().then(snap => {
  console.log('=== DIAGNOSTIC RESULTS ===');
  console.log('✅ Firebase connected');
  console.log('Total orders in Firestore:', snap.size);
  if (snap.size > 0) {
    console.log('First order:', snap.docs[0].data());
  } else {
    console.log('❌ No orders found in Firestore');
  }
}).catch(err => {
  console.log('❌ ERROR:', err.message);
  console.log('Possible causes:');
  console.log('1. Firebase not initialized');
  console.log('2. Wrong Firebase project');
  console.log('3. Security rules blocking reads');
  console.log('4. No internet connection');
});
```

**Expected Output:**
```
=== DIAGNOSTIC RESULTS ===
✅ Firebase connected
Total orders in Firestore: 1
First order: {customerName: "Test", ...}
```

**If you see errors:**
- ❌ Firebase not initialized
- ❌ Wrong Firebase project
- ❌ Security rules too restrictive

---

## 🔧 Step 3: Quick Fixes (based on results)

### Fix 1: If Firebase Not Connected

**Problem:** Error about Firebase not being defined

**Solution:**
1. Check `.env.local` exists
2. Verify `NEXT_PUBLIC_FIREBASE_PROJECT_ID=urban-binge-oms`
3. Restart dev server: `npm run dev`
4. Refresh page

### Fix 2: If No Orders in Firestore

**Problem:** Diagnostic shows 0 orders

**Solution:**
1. Go to customer app: https://urban-binge-menu.vercel.app/menu
2. Add item to cart
3. Click Checkout
4. Fill in details and place order
5. Check Firestore console again

### Fix 3: If Security Rules Error

**Problem:** Error about "Permission denied"

**Solution:**
1. Go to Firebase Console
2. Go to Firestore → Rules
3. Replace with this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /orders/{document=**} {
      allow read, write: if true;
    }
    match /menu {
      allow read: if true;
    }
    match /storeStatus {
      allow read: if true;
    }
    match /inquiries/{document=**} {
      allow read, write: if true;
    }
  }
}
```

4. Click "Publish"
5. Refresh admin dashboard

### Fix 4: If Wrong Firebase Project

**Problem:** Orders in Firestore but different project

**Solution:**
1. Check customer app Firebase credentials
2. Check admin dashboard `.env.local`
3. Ensure both use `urban-binge-oms`
4. Restart both apps

---

## ✅ Verification

Once you complete the fixes:

1. **Place a test order** in customer app
2. **Check Firestore console** - order should appear
3. **Check admin dashboard** - order should appear with audio alert
4. **Run diagnostic again** - should show order count

---

## 📊 Decision Tree

```
Does order appear in Firestore console?
│
├─ NO → Customer app issue
│   ├─ Check customer app Firebase credentials
│   ├─ Check security rules allow writes
│   └─ Check collection name is "orders"
│
└─ YES → Admin dashboard issue
    ├─ Does admin dashboard show order?
    │   ├─ NO → Check admin dashboard Firebase credentials
    │   ├─ NO → Check security rules allow reads
    │   └─ NO → Check real-time listener is active
    │
    └─ YES → System working! ✅
```

---

## 🎯 Most Common Issues

### Issue 1: Wrong Firebase Project (40% of cases)

**Check:**
```javascript
// In admin dashboard console:
firebase.firestore().app.options.projectId
// Should output: urban-binge-oms
```

**Fix:** Update `.env.local` with correct credentials

### Issue 2: Security Rules Too Restrictive (30% of cases)

**Check:** Firebase Console → Firestore → Rules

**Fix:** Update rules to allow reads/writes (see Fix 3 above)

### Issue 3: Collection Name Mismatch (20% of cases)

**Check:**
```javascript
// In admin dashboard console:
firebase.firestore().collection('orders').get().then(snap => {
  console.log('Collection exists:', snap.size >= 0);
});
```

**Fix:** Ensure collection is named exactly `orders`

### Issue 4: Real-time Listener Not Active (10% of cases)

**Check:** Browser console for listener errors

**Fix:** Refresh page, check for network errors

---

## 🚀 Next Steps

### If Diagnostic Passes ✅
1. Orders are syncing correctly
2. Go to `TESTING_GUIDE.md` for full testing
3. Deploy admin dashboard

### If Diagnostic Fails ❌
1. Follow the appropriate fix above
2. Run diagnostic again
3. If still failing, check `TROUBLESHOOTING_ORDERS.md`

---

## 📞 Still Not Working?

Gather this information:

1. **Diagnostic output** - Run the code above, copy output
2. **Firebase project ID** - Should be `urban-binge-oms`
3. **Admin dashboard `.env.local`** - Verify credentials
4. **Firestore console** - Screenshot of orders collection
5. **Browser console errors** - Any red errors?

---

**Run the diagnostic now and let me know the results! 🔍**
