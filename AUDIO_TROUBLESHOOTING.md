# Audio Notification Troubleshooting

## Issue: Sound Not Working on Client Device

### Root Causes

1. **Browser Autoplay Policy** - Most browsers block audio autoplay
2. **Notification Permission Not Granted** - Browser requires permission
3. **Device Volume Muted** - Device or browser volume is muted
4. **Audio File Not Loading** - M4A file not accessible

---

## Solution: Enable Audio Alerts

### Step 1: Click "Enable Audio & Status" Button
When you open the admin dashboard, you'll see a modal:

```
┌─────────────────────────────────────┐
│  Enable Order Alerts                │
│                                     │
│  To ensure you never miss an order, │
│  we need to enable audio and        │
│  prevent your device from sleeping. │
│                                     │
│  [Enable Audio & Status]            │
└─────────────────────────────────────┘
```

**Click this button to:**
- ✅ Unlock audio context (browser autoplay policy)
- ✅ Request notification permission
- ✅ Enable wake lock (prevent device sleep)
- ✅ Play test sound

### Step 2: Grant Notification Permission
Browser will ask: "Allow notifications?"
- Click **Allow** to enable notifications

### Step 3: Check Device Volume
- ✅ Device volume is NOT muted
- ✅ Browser volume is NOT muted
- ✅ Tab volume is NOT muted

---

## Troubleshooting Steps

### If Sound Still Not Working

**1. Check Browser Console (F12)**
```
Press: F12 → Console tab
Look for: ✅ Playing: /ORDER%20RINGTONE.m4a
```

**2. Check Device Settings**
- [ ] Device volume is on (not muted)
- [ ] Browser volume is on (not muted)
- [ ] Tab volume is on (not muted)

**3. Check Browser Permissions**
- [ ] Notification permission is granted
- [ ] Audio permission is granted

**4. Try Different Browser**
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

**5. Check Network**
- [ ] Internet connection is stable
- [ ] M4A file can be downloaded (check Network tab in DevTools)

---

## Browser-Specific Settings

### Chrome/Edge
1. Settings → Privacy and security → Site settings
2. Notifications → Allow
3. Sounds → Allow

### Safari
1. Preferences → Websites → Notifications
2. Allow notifications for the site

### Firefox
1. Preferences → Privacy & Security → Permissions
2. Allow notifications

---

## Audio File Issues

### If Custom Ringtone Not Playing

**Check File Exists:**
```
File: public/ORDER RINGTONE.m4a
Size: 300KB
Format: M4A (AAC audio)
```

**If File Missing:**
- Fallback bell sound will play automatically
- Check browser console for errors

**If File Not Loading:**
- Check Network tab in DevTools (F12)
- Verify file is accessible
- Check CORS settings

---

## Testing Audio

### Quick Test
1. Open admin dashboard
2. Click "Enable Audio & Status"
3. Listen for test sound
4. Place a test order
5. Listen for ringtone

### Expected Behavior
- ✅ Test sound plays immediately after clicking button
- ✅ Ringtone plays when new order placed
- ✅ Ringtone repeats every 2 seconds while order pending
- ✅ Sound stops when order accepted

---

## Multi-Device Audio

### All Devices Should Play Sound Simultaneously
- ✅ Device A (Mac) plays sound
- ✅ Device B (Windows) plays sound
- ✅ Device C (Mobile) plays sound

### If Only One Device Plays Sound
- Other devices may not have clicked "Enable Audio & Status"
- Other devices may have notifications disabled
- Other devices may have volume muted

---

## Browser Autoplay Policy

### Why Audio Requires User Interaction

Modern browsers require user interaction before playing audio:
- ✅ User must click a button (Enable Audio & Status)
- ✅ User must grant notification permission
- ✅ User must have device volume on

This is a security feature to prevent websites from playing unwanted audio.

---

## Default Settings

### Recommended Settings for Best Experience

**Browser Settings:**
- ✅ Notifications: Allow
- ✅ Audio: Allow
- ✅ Autoplay: Allow with sound

**Device Settings:**
- ✅ Volume: On (not muted)
- ✅ Do Not Disturb: Off
- ✅ Focus Mode: Off

**Browser Tab Settings:**
- ✅ Tab volume: On (not muted)
- ✅ Tab notifications: On

---

## FAQ

**Q: Why do I need to click "Enable Audio & Status"?**
A: Browser autoplay policy requires user interaction before playing audio.

**Q: Will sound work if I close the tab?**
A: No. Audio only works when the tab is open. But wake lock keeps device awake.

**Q: Can I disable the audio?**
A: Yes. Just don't click "Enable Audio & Status" button. You'll still see notifications.

**Q: What if I want to use bell sound instead of custom ringtone?**
A: If M4A file fails to load, fallback bell sound plays automatically.

**Q: Does it work on mobile?**
A: Yes. iOS Safari and Android Chrome both support audio notifications.

---

## Support

If audio still not working:
1. Check browser console (F12) for errors
2. Check device volume is on
3. Try different browser
4. Check notification permission is granted
5. Verify M4A file exists in public folder

---

## Technical Details

### Audio Implementation
- **Primary**: Custom M4A ringtone (`public/ORDER RINGTONE.m4a`)
- **Fallback**: Synthesized bell sound (Web Audio API)
- **Frequency**: Every 2 seconds while orders pending
- **Volume**: Full (1.0)

### Browser Support
- ✅ Chrome/Edge (all versions)
- ✅ Safari (iOS 14+, macOS 11+)
- ✅ Firefox (all versions)
- ✅ Mobile browsers (iOS Safari, Android Chrome)

### Autoplay Policy
- Requires user interaction (click button)
- Requires notification permission
- Requires device volume on
- Requires browser volume on
