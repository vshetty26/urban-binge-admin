# Quick Test Checklist - 5 Minute Test

## Before Testing
- [ ] Build successful: `npm run build`
- [ ] No console errors
- [ ] Custom ringtone file exists: `public/ORDER RINGTONE.m4a`

---

## Test 1: No False Alerts (30 seconds)
```
1. Open admin dashboard
2. Observe: No sound, no notification
3. ✅ PASS if: Dashboard loads silently
```

---

## Test 2: Single Order Alert (1 minute)
```
1. Open admin dashboard
2. Place 1 order from menu website
3. ✅ PASS if:
   - Ringtone plays immediately
   - "New Order Received" notification appears
   - Order shows in "Pending" tab with red border
```

---

## Test 3: Multiple Orders (1 minute)
```
1. Open admin dashboard
2. Place 5 orders rapidly
3. ✅ PASS if:
   - All 5 orders appear
   - Ringtone plays every 2 seconds
   - UI remains responsive
   - Console shows only 1 log (not 5+)
```

---

## Test 4: Accept Order (1 minute)
```
1. Open admin dashboard
2. Place 1 order
3. Click "Accept" button
4. ✅ PASS if:
   - Ringtone stops
   - Order moves to "Preparing" tab
   - Order shows green badge
```

---

## Test 5: Multiple Devices (1 minute)
```
1. Open admin on Mac
2. Open admin on Windows
3. Place 1 order
4. ✅ PASS if:
   - Both devices play ringtone simultaneously
   - Both devices show notification
   - Both devices show order
```

---

## Test 6: Page Refresh (1 minute)
```
1. Open admin dashboard
2. Place 3 orders
3. Accept 1, reject 1, leave 1 pending
4. Refresh page (Cmd+R or Ctrl+R)
5. ✅ PASS if:
   - All 3 orders still visible
   - Statuses preserved
   - No false alerts on refresh
```

---

## Test 7: High Load (1 minute)
```
1. Open admin dashboard
2. Place 20+ orders rapidly
3. ✅ PASS if:
   - All orders appear
   - Ringtone plays continuously
   - Browser doesn't freeze
   - Can still click buttons
```

---

## Test 8: Custom Ringtone (30 seconds)
```
1. Open admin dashboard
2. Place 1 order
3. ✅ PASS if:
   - Custom M4A ringtone plays (not bell sound)
   - Sound is clear and audible
```

---

## Test 9: Console Performance (1 minute)
```
1. Open DevTools (F12)
2. Go to Console tab
3. Place 20+ orders
4. ✅ PASS if:
   - Console shows only 1 log every 5 seconds
   - No spam of individual order logs
   - Console remains responsive
```

---

## Test 10: Export Users (1 minute)
```
1. Go to "Users" tab
2. Click "Export" button
3. Select "Last 24 Hours"
4. ✅ PASS if:
   - CSV file downloads
   - Users remain visible
   - Can still place orders
```

---

## Summary

**Total Time**: ~10 minutes
**Devices**: Mac, Windows, Mobile
**Status**: ✅ Ready for Vercel deployment if all tests pass

---

## Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| No sound on load | ✅ Expected - only NEW orders ring |
| Sound not on 2nd device | Click "Enable Audio & Status" button |
| Console is spammy | ✅ Normal - throttled to every 5 seconds |
| Orders disappear | Check you're on "out_for_delivery" tab |
| Custom ringtone not playing | Check `public/ORDER RINGTONE.m4a` exists |

---

## Deployment

After all tests pass:
```bash
git add .
git commit -m "Performance optimization + false alert fix"
git push origin main
# Deploy to Vercel
```
