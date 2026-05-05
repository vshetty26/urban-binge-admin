# Urban Binge - Orders Not Appearing Troubleshooting

Orders are showing in the customer app but not in the admin dashboard. Follow this guide to diagnose and fix.

---

## 🔍 Diagnostic Steps

### Step 1: Check Firebase Console

**Go to:** https://console.firebase.google.com

1. Select `urban-binge-oms` project
2. Go to **Firestore Database**
3. Check if `orders` collection exists
4. Look for the order you just placed

**Expected:** You should see the order document with:
- `customerName`: "Test Customer"
- `customerPhone`: "+919876543210"
- `items`: Array of items
- `status`: "placed"
- `createdAt`: Timestamp

**If you don't see the order:**
- Customer app is writing to wrong Firebase project
- Firestore collection doesn't exist
- Security rules blocking writes

---

### Step 2: Check Admin Dashboard Console

**In Admin Dashboard (http://localhost:3001):**

1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Paste this code:

```javascript
// Check 1: Firebase initialized
console.log('Firebase loaded:', typeof firebase !== 'undefined');

// Check 2: Firestore connection
firebase.firestore().collection('orders').get().then(snap => {
  console.log('✅ Firestore connected');
  console.log('Total orders in Firestore:', snap.size);
  snap.forEach(doc => {
    console.log('Order:', doc.id, doc.data());
  });
}).catch(err => {
  console.log('❌ Firestore error:', err.message);
});

// Check 3: Real-time listener
firebase.firestore().collection('orders')
  .orderBy('createdAt', 'desc')
  .onSnapshot(snap => {
    console.log('✅ Real-time listener active');
    console.log('Pending orders:', snap.size);
  }, err => {
    console.log('❌ Listener error:', err.message);
  });
```

**Expected Output:**
```
Firebase loaded: true
✅ Firestore connected
Total orders in Firestore: 1
Order: [order-id] {customerName: "Test", ...}
✅ Real-time listener active
Pending orders: 1
```

**If you see errors:**
- Firebase not initialized
- Firestore connection failed
- Security rules blocking reads

---

### Step 3: Check Firebase Credentials

**In Admin Dashboard (.env.local):**

```bash
# Verify these are set correctly:
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=urban-binge-oms
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

**Check:**
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID` should be `urban-binge-oms`
- All other values should match your Firebase project
- No typos or extra spaces

**If credentials are wrong:**
1. Update `.env.local`
2. Restart dev server (`npm run dev`)
3. Try again

---

### Step 4: Check Firestore Security Rules

**Go to:** Firebase Console → Firestore → Rules

**Current Rules Should Allow:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow reads for admin
    match /orders/{document=**} {
      allow read: if true;  // or if request.auth != null
    }
    
    // Allow writes for customer app
    match /orders/{document=**} {
      allow create: if true;  // or if request.auth != null
    }
  }
}
```

**If Rules Are Restrictive:**
1. Go to Firebase Console
2. Go to Firestore → Rules
3. Update rules to allow reads/writes
4. Click "Publish"

**Test Rules:**
1. Click "Rules Playground"
2. Select `orders` collection
3. Test read/write permissions

---

### Step 5: Check Collection Name

**In Customer App:**
- Should write to collection named `orders`
- Check the code that places orders

**In Admin Dashboard (lib/orders.ts):**
- Should read from collection named `orders`
- Line: `const ORDERS_COLLECTION = "orders";`

**If Names Don't Match:**
- Update customer app to use `orders`
- Or update admin dashboard to match customer app

---

## 🔧 Common Issues & Fixes

### Issue 1: Firebase Project Mismatch

**Symptom:** Orders appear in customer app but not in admin dashboard

**Cause:** Apps using different Firebase projects

**Fix:**
1. Check customer app Firebase credentials
2. Check admin dashboard `.env.local`
3. Ensure both use `urban-binge-oms` project
4. Restart both apps

### Issue 2: Firestore Security Rules Too Restrictive

**Symptom:** Console shows "Permission denied" error

**Cause:** Security rules blocking reads

**Fix:**
1. Go to Firebase Console → Firestore → Rules
2. Update rules to allow reads:
   ```javascript
   match /orders/{document=**} {
     allow read: if true;
   }
   ```
3. Click "Publish"
4. Refresh admin dashboard

### Issue 3: Collection Doesn't Exist

**Symptom:** No orders appear in Firestore console

**Cause:** Collection not created yet

**Fix:**
1. Place an order from customer app
2. This should create the collection automatically
3. If not, manually create collection in Firebase Console

### Issue 4: Real-time Listener Not Active

**Symptom:** Orders appear in Firestore but not in admin dashboard

**Cause:** Listener not subscribed properly

**Fix:**
1. Check browser console for errors
2. Verify `subscribeToAllOrders` is called
3. Check for network errors
4. Refresh page

### Issue 5: Timestamp Format Wrong

**Symptom:** Orders appear but with wrong timestamps

**Cause:** Timestamp format mismatch

**Fix:**
1. Ensure customer app uses `serverTimestamp()`
2. Ensure admin dashboard handles Timestamp objects
3. Check `createdAt` field format

---

## 🧪 Manual Testing

### Test 1: Direct Firestore Write

**In Admin Dashboard Console:**

```javascript
// Manually create an order
firebase.firestore().collection('orders').add({
  customerName: 'Test Admin',
  customerPhone: '+919876543210',
  items: [{name: 'Test Item', quantity: 1, price: 100}],
  total: 100,
  deliveryCharge: 0,
  status: 'placed',
  address: {flatNo: '123', area: 'Test', landmark: 'Test', distance: '1'},
  createdAt: firebase.firestore.FieldValue.serverTimestamp()
}).then(doc => {
  console.log('✅ Order created:', doc.id);
}).catch(err => {
  console.log('❌ Error:', err.message);
});
```

**Expected:** Order appears in admin dashboard immediately

**If It Fails:**
- Check Firestore write permissions
- Check security rules
- Check Firebase connection

### Test 2: Check Real-time Listener

**In Admin Dashboard Console:**

```javascript
// Subscribe to orders
const unsub = firebase.firestore().collection('orders')
  .orderBy('createdAt', 'desc')
  .onSnapshot(snap => {
    console.log('Orders updated:', snap.size);
    snap.forEach(doc => {
      console.log('- ', doc.data().customerName);
    });
  }, err => {
    console.log('Listener error:', err.message);
  });

// After 5 seconds, unsubscribe
setTimeout(() => {
  unsub();
  console.log('Listener stopped');
}, 5000);
```

**Expected:** Listener logs orders and updates when new orders arrive

**If It Fails:**
- Check network connection
- Check Firebase connection
- Check security rules

---

## 📋 Verification Checklist

Before considering the system working:

- [ ] Firebase project is `urban-binge-oms`
- [ ] Admin dashboard `.env.local` has correct credentials
- [ ] Customer app uses same Firebase project
- [ ] Firestore `orders` collection exists
- [ ] Security rules allow reads/writes
- [ ] Order appears in Firestore console
- [ ] Order appears in admin dashboard
- [ ] Audio alert plays
- [ ] Real-time listener is active
- [ ] No console errors

---

## 🚀 Quick Fix Checklist

Try these in order:

1. **Restart Admin Dashboard**
   ```bash
   npm run dev
   ```

2. **Clear Browser Cache**
   - F12 → Application → Clear Storage

3. **Check Firebase Credentials**
   - Verify `.env.local` has correct values
   - Restart dev server

4. **Check Firestore Rules**
   - Go to Firebase Console → Firestore → Rules
   - Ensure rules allow reads/writes

5. **Check Collection Name**
   - Verify collection is named `orders`
   - Check for typos

6. **Manually Create Order**
   - Use console script above
   - Verify it appears in dashboard

7. **Check Network**
   - Verify internet connection
   - Check DevTools Network tab for errors

---

## 📞 If Still Not Working

### Gather Information

1. **Screenshot of Firestore Console**
   - Show orders collection
   - Show order document

2. **Screenshot of Admin Dashboard**
   - Show what's displayed
   - Show any error messages

3. **Browser Console Output**
   - Run diagnostic script above
   - Copy all output

4. **Firebase Project ID**
   - Confirm it's `urban-binge-oms`

5. **Environment Variables**
   - Verify `.env.local` values

### Debug Steps

1. **Check Firebase Connection**
   ```javascript
   firebase.firestore().collection('orders').get().then(snap => {
     console.log('Orders:', snap.size);
   });
   ```

2. **Check Security Rules**
   - Go to Firebase Console → Firestore → Rules
   - Click "Rules Playground"
   - Test read/write

3. **Check Network**
   - Open DevTools → Network tab
   - Look for failed requests
   - Check for CORS errors

4. **Check Code**
   - Verify collection name is `orders`
   - Verify field names match
   - Verify data structure

---

## ✅ Success Indicators

Your system is working when:

✅ Order appears in Firestore console immediately after placement  
✅ Order appears in admin dashboard within 1 second  
✅ Audio alert plays on new order  
✅ Visual alert shows (red border, banner)  
✅ Status updates sync in real-time  
✅ No console errors  
✅ Multiple orders handled correctly  

---

## 📚 Related Documentation

- `VERIFY_CONNECTION.md` - Connection verification
- `TESTING_GUIDE.md` - Complete testing procedures
- `FIREBASE_SCHEMA.md` - Database schema
- `SETUP_GUIDE.md` - Setup instructions

---

**Once you complete these steps, your orders should appear in the admin dashboard! 🎉**
