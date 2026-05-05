# Urban Binge Admin - Testing & Verification Guide

This guide helps you verify that the order notification system is working correctly between the customer app and admin dashboard.

---

## 🔄 Order Flow Architecture

```
Customer App (Menu)
    ↓
Customer Places Order
    ↓
Order Data Sent to Firebase
    ↓
Admin Dashboard Listens to Firebase
    ↓
New Order Appears in Admin Dashboard
    ↓
Audio Alert Plays + Visual Alert Shows
```

---

## ✅ Pre-Testing Checklist

Before testing, ensure:

- [ ] Customer app is deployed at https://urban-binge-menu.vercel.app/menu
- [ ] Admin dashboard is running locally or deployed
- [ ] Firebase project `urban-binge-oms` is active
- [ ] Firestore `orders` collection exists
- [ ] Both apps use the same Firebase project
- [ ] Browser notifications are enabled
- [ ] Audio is enabled on your device

---

## 🧪 Testing Steps

### Step 1: Verify Firebase Connection

**In Admin Dashboard:**

1. Open browser DevTools (F12)
2. Go to **Console** tab
3. You should see Firebase initialization messages
4. No red errors about Firebase connection

**Expected Output:**
```
✓ Firebase initialized
✓ Connected to Firestore
✓ Listening to orders collection
```

### Step 2: Check Firestore Data

**In Firebase Console:**

1. Go to https://console.firebase.google.com
2. Select `urban-binge-oms` project
3. Go to **Firestore Database**
4. Check `orders` collection exists
5. Should be empty initially

### Step 3: Place a Test Order

**In Customer App:**

1. Open https://urban-binge-menu.vercel.app/menu
2. Add items to cart (e.g., Masala Dosa)
3. Click "Checkout"
4. Fill in customer details:
   - Name: "Test Customer"
   - Phone: "+919876543210"
   - Address: "Test Area"
5. Click "Place Order"
6. You should see confirmation message

### Step 4: Verify Order in Firebase

**In Firebase Console:**

1. Go to Firestore Database
2. Open `orders` collection
3. You should see a new order document
4. Check the order contains:
   - `customerName`: "Test Customer"
   - `customerPhone`: "+919876543210"
   - `items`: Array of ordered items
   - `status`: "placed"
   - `createdAt`: Current timestamp

### Step 5: Check Admin Dashboard

**In Admin Dashboard:**

1. Keep the dashboard open while placing order
2. **Expected Behavior:**
   - ✅ New order appears in "Pending" tab
   - ✅ Red border around order card
   - ✅ "Urgent: New Order!" banner appears
   - ✅ Card pulses/animates
   - ✅ Audio alert plays (if enabled)
   - ✅ Dashboard scrolls to top automatically

### Step 6: Verify Audio Notification

**Audio Alert Testing:**

1. Ensure browser volume is not muted
2. Ensure system volume is not muted
3. Place another test order
4. Listen for audio alert sound
5. Check browser console for audio logs

**If Audio Doesn't Play:**
- Check browser notification settings
- Check system volume
- Check browser permissions
- Refresh page and try again

### Step 7: Test Order Status Updates

**In Admin Dashboard:**

1. Click "Accept" button on pending order
2. Order should move to "Preparing" tab
3. Status should update in real-time
4. Click "Out for Delivery"
5. Order should move to "Out for Delivery" tab
6. Click "Mark Delivered"
7. Order should move to "Delivered" tab

**In Firebase Console:**

1. Open the order document
2. Check `status` field updates in real-time
3. Should show: placed → accepted → out_for_delivery → delivered

---

## 🔍 Debugging Checklist

### Orders Not Appearing in Admin Dashboard

**Check 1: Firebase Connection**
```javascript
// In browser console, run:
firebase.firestore().collection('orders').get().then(snap => {
  console.log('Total orders:', snap.size);
  snap.forEach(doc => console.log(doc.data()));
});
```

**Check 2: Firestore Security Rules**
- Go to Firebase Console → Firestore → Rules
- Ensure rules allow read/write for orders collection
- Test rules with "Rules Playground"

**Check 3: Order Data Structure**
- Verify order has all required fields
- Check `status` field is "placed"
- Check `createdAt` is a valid timestamp

**Check 4: Real-time Listener**
- Check browser console for listener errors
- Verify `subscribeToAllOrders` function is working
- Check for network errors in DevTools

### Audio Alert Not Playing

**Check 1: Browser Settings**
- Ensure notifications are enabled
- Ensure audio is not muted
- Check browser permissions

**Check 2: Audio File**
- Verify audio file exists
- Check file path is correct
- Test audio plays manually

**Check 3: Code**
- Check `AudioNotification` component is mounted
- Verify audio element is in DOM
- Check console for audio errors

### Real-time Updates Not Working

**Check 1: Firestore Listener**
- Verify listener is active
- Check for listener errors in console
- Verify collection path is correct

**Check 2: Network**
- Check internet connection
- Check Firebase connectivity
- Check for CORS errors

**Check 3: Data**
- Verify data is being written to Firestore
- Check timestamp format
- Verify document structure

---

## 📊 Test Scenarios

### Scenario 1: Single Order

**Steps:**
1. Place one order from customer app
2. Verify it appears in admin dashboard
3. Verify audio alert plays
4. Accept the order
5. Verify status updates

**Expected Result:** ✅ Order appears, alert plays, status updates

### Scenario 2: Multiple Orders

**Steps:**
1. Place 3 orders quickly
2. Verify all appear in admin dashboard
3. Verify audio alerts play for each
4. Accept orders one by one
5. Verify statuses update independently

**Expected Result:** ✅ All orders appear, alerts play, statuses update

### Scenario 3: Order Rejection

**Steps:**
1. Place an order
2. Click "Reject" button
3. Verify order moves to "Rejected" tab
4. Verify status in Firebase shows "rejected"

**Expected Result:** ✅ Order rejected, status updates

### Scenario 4: Complete Order Workflow

**Steps:**
1. Place order
2. Accept order
3. Mark "Out for Delivery"
4. Mark "Delivered"
5. Verify order appears in "Delivered" tab

**Expected Result:** ✅ Order completes full workflow

### Scenario 5: Store Closed

**Steps:**
1. Toggle store status to "Closed"
2. Try to place order from customer app
3. Verify customer cannot place order
4. Toggle store status to "Open"
5. Verify customer can place order again

**Expected Result:** ✅ Store status controls order placement

---

## 🔧 Manual Testing Commands

### Test Firebase Connection

```javascript
// In browser console:
firebase.firestore().collection('orders').add({
  customerName: 'Test',
  customerPhone: '+919876543210',
  items: [{name: 'Test Item', quantity: 1, price: 100}],
  total: 100,
  deliveryCharge: 0,
  status: 'placed',
  address: {flatNo: '123', area: 'Test', landmark: 'Test', distance: 1}
}).then(doc => console.log('Order created:', doc.id));
```

### Test Audio

```javascript
// In browser console:
const audio = new Audio('path/to/notification.mp3');
audio.play();
```

### Test Real-time Listener

```javascript
// In browser console:
firebase.firestore().collection('orders')
  .where('status', '==', 'placed')
  .onSnapshot(snap => {
    console.log('Pending orders:', snap.size);
    snap.forEach(doc => console.log(doc.data()));
  });
```

---

## 📱 Testing on Different Devices

### Desktop Testing
- ✅ Chrome/Firefox/Safari
- ✅ Full screen
- ✅ DevTools open
- ✅ Audio enabled

### Mobile Testing
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ Responsive design
- ✅ Touch interactions

### Network Testing
- ✅ Fast connection (5G/WiFi)
- ✅ Slow connection (3G)
- ✅ Offline mode
- ✅ Connection loss recovery

---

## 🐛 Common Issues & Solutions

### Issue: Orders appear but no audio alert

**Solution:**
1. Check browser volume
2. Check system volume
3. Check browser notification permissions
4. Check audio file exists
5. Refresh page and try again

### Issue: Orders don't appear in real-time

**Solution:**
1. Check Firebase connection
2. Check Firestore security rules
3. Check collection name is correct
4. Check listener is active
5. Refresh page

### Issue: Status updates don't sync

**Solution:**
1. Check Firestore write permissions
2. Check network connection
3. Check data structure
4. Check timestamp format
5. Refresh page

### Issue: Customer app can't place orders

**Solution:**
1. Check Firebase project is active
2. Check Firestore collection exists
3. Check security rules allow writes
4. Check network connection
5. Check form validation

---

## 📈 Performance Testing

### Load Testing

**Test with Multiple Orders:**
1. Place 10 orders rapidly
2. Verify all appear in dashboard
3. Check dashboard performance
4. Monitor browser memory usage
5. Verify no lag or freezing

**Expected Result:** ✅ Dashboard handles multiple orders smoothly

### Stress Testing

**Test with Large Orders:**
1. Place order with 50+ items
2. Verify order displays correctly
3. Check performance impact
4. Verify status updates work

**Expected Result:** ✅ Dashboard handles large orders

---

## 📋 Test Report Template

```
Test Date: _______________
Tester: _______________
Environment: [ ] Local [ ] Staging [ ] Production

Test Results:
- [ ] Firebase connection working
- [ ] Orders appear in dashboard
- [ ] Audio alerts play
- [ ] Visual alerts show
- [ ] Status updates work
- [ ] Real-time sync works
- [ ] Mobile responsive
- [ ] No console errors

Issues Found:
1. _______________
2. _______________
3. _______________

Notes:
_______________
_______________
_______________

Status: [ ] PASS [ ] FAIL
```

---

## 🚀 Deployment Testing

### Before Going Live

- [ ] Test on production Firebase project
- [ ] Test with real customer data
- [ ] Test with multiple concurrent users
- [ ] Test on different networks
- [ ] Test on different devices
- [ ] Test audio on all devices
- [ ] Test notifications on all browsers
- [ ] Monitor error logs
- [ ] Check performance metrics

### Post-Deployment

- [ ] Monitor real orders
- [ ] Check error logs daily
- [ ] Verify audio alerts working
- [ ] Verify real-time sync
- [ ] Get user feedback
- [ ] Fix any issues immediately

---

## 📞 Support

### If Testing Fails

1. **Check Firebase Console**
   - Verify project is active
   - Check Firestore data
   - Check security rules
   - Check error logs

2. **Check Browser Console**
   - Look for error messages
   - Check network requests
   - Verify Firebase initialization

3. **Check Network**
   - Verify internet connection
   - Check for CORS errors
   - Verify API endpoints

4. **Check Code**
   - Verify collection names
   - Verify field names
   - Verify data structure

---

## ✅ Final Verification Checklist

Before considering the system ready:

- [ ] Orders appear in admin dashboard
- [ ] Audio alerts play on new orders
- [ ] Visual alerts show on new orders
- [ ] Status updates work correctly
- [ ] Real-time sync works
- [ ] Multiple orders handled correctly
- [ ] Order rejection works
- [ ] Store status toggle works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Performance acceptable
- [ ] All browsers supported

---

**Once all tests pass, your Urban Binge Admin Dashboard is ready for production! 🎉**
