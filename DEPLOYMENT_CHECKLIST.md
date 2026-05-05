# Urban Binge Admin - Deployment Checklist

Use this checklist before deploying to production.

## Pre-Deployment Setup

### Firebase Configuration
- [ ] Firebase project created for Urban Binge
- [ ] Firestore database created and initialized
- [ ] Firebase Storage bucket created
- [ ] Authentication enabled (Email/Password)
- [ ] All collections created (`menu`, `orders`, `inquiries`, `storeStatus`)
- [ ] Security rules configured (see `FIREBASE_SCHEMA.md`)
- [ ] Backups enabled in Firebase Console

### Environment Variables
- [ ] `.env.local` created with all Firebase credentials
- [ ] All `NEXT_PUBLIC_FIREBASE_*` variables filled in
- [ ] No sensitive data in version control
- [ ] Environment variables set in deployment platform

### Code Quality
- [ ] No console errors in development
- [ ] TypeScript compilation successful (`npm run build`)
- [ ] All pages load without errors
- [ ] No broken links or missing assets

## Feature Testing

### Orders Management
- [ ] Orders page loads
- [ ] Can view all orders
- [ ] Can filter orders by status
- [ ] Can accept/reject orders
- [ ] Can update order status
- [ ] Audio notifications work
- [ ] Real-time updates work
- [ ] Can clear all orders

### Menu Management
- [ ] Menu page loads
- [ ] Can create new categories
- [ ] Can add menu items
- [ ] Can edit menu items
- [ ] Can delete menu items
- [ ] Can upload item images
- [ ] Images display correctly
- [ ] Can save menu changes
- [ ] Menu persists after refresh

### Inquiries Management
- [ ] Inquiries page loads
- [ ] Can view all inquiries
- [ ] Can contact customers (phone/email links work)
- [ ] Can clear all inquiries
- [ ] Inquiries persist correctly

### Store Status
- [ ] Store status toggle visible
- [ ] Can toggle store open/closed
- [ ] Status updates in real-time
- [ ] Status persists after refresh

### UI/UX
- [ ] Responsive design on mobile
- [ ] Responsive design on tablet
- [ ] Responsive design on desktop
- [ ] All buttons clickable
- [ ] All forms submit correctly
- [ ] Loading states display
- [ ] Error messages display
- [ ] Navigation works smoothly

## Performance Testing

- [ ] Page load time < 3 seconds
- [ ] Images load quickly
- [ ] No memory leaks in browser
- [ ] Smooth animations
- [ ] No lag when scrolling
- [ ] Real-time updates are fast

## Security Testing

- [ ] Firebase security rules prevent unauthorized access
- [ ] API keys are restricted (if using restricted keys)
- [ ] No sensitive data in client-side code
- [ ] HTTPS enabled on deployment
- [ ] No console errors about security
- [ ] CORS configured correctly (if needed)

## Browser Compatibility

- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge
- [ ] Works on iOS Safari
- [ ] Works on Android Chrome

## Deployment Platform Setup

### For Vercel
- [ ] Project connected to GitHub/GitLab
- [ ] Environment variables configured
- [ ] Build settings correct
- [ ] Preview deployments working
- [ ] Production deployment successful
- [ ] Custom domain configured (if needed)

### For Firebase Hosting
- [ ] Firebase CLI installed
- [ ] Project initialized (`firebase init`)
- [ ] Build output configured
- [ ] Deployed successfully (`firebase deploy`)
- [ ] Custom domain configured (if needed)

### For Other Platforms
- [ ] Build command: `npm run build`
- [ ] Start command: `npm start`
- [ ] Node version: 18+
- [ ] Environment variables set
- [ ] Deployment successful

## Post-Deployment Testing

### Live Environment
- [ ] All pages load on production URL
- [ ] Orders page works
- [ ] Menu page works
- [ ] Inquiries page works
- [ ] Store status works
- [ ] Real-time updates work
- [ ] Images load correctly
- [ ] No console errors

### Monitoring
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Set up uptime monitoring
- [ ] Set up performance monitoring
- [ ] Logs accessible for debugging

## Documentation

- [ ] README.md updated with production URL
- [ ] SETUP_GUIDE.md reviewed
- [ ] FIREBASE_SCHEMA.md reviewed
- [ ] Team trained on admin dashboard
- [ ] Backup procedures documented
- [ ] Disaster recovery plan in place

## Final Checks

- [ ] All team members can access admin dashboard
- [ ] Admin credentials secure and shared safely
- [ ] Backup of Firebase data created
- [ ] Rollback plan in place
- [ ] Support contact information available
- [ ] Monitoring alerts configured

## Go-Live Checklist

- [ ] Announce to team
- [ ] Monitor for issues first 24 hours
- [ ] Have support team on standby
- [ ] Document any issues found
- [ ] Plan for future improvements

---

## Rollback Plan

If issues occur after deployment:

1. **Immediate Actions**
   - [ ] Disable store status (close store)
   - [ ] Notify team of issue
   - [ ] Check Firebase Console for errors
   - [ ] Check browser console for errors

2. **Rollback Steps**
   - [ ] Revert to previous deployment
   - [ ] Verify previous version works
   - [ ] Restore from backup if needed
   - [ ] Notify team of resolution

3. **Post-Incident**
   - [ ] Document what went wrong
   - [ ] Identify root cause
   - [ ] Implement fix
   - [ ] Add tests to prevent recurrence
   - [ ] Plan re-deployment

---

## Maintenance Schedule

### Daily
- [ ] Monitor error logs
- [ ] Check Firebase usage
- [ ] Verify real-time updates working

### Weekly
- [ ] Review order statistics
- [ ] Check storage usage
- [ ] Verify backups completed

### Monthly
- [ ] Review security rules
- [ ] Update dependencies (if needed)
- [ ] Optimize database queries
- [ ] Archive old orders

### Quarterly
- [ ] Full security audit
- [ ] Performance optimization
- [ ] Disaster recovery drill
- [ ] Team training update

---

## Support Contacts

- **Firebase Support:** [firebase.google.com/support](https://firebase.google.com/support)
- **Next.js Support:** [nextjs.org/docs](https://nextjs.org/docs)
- **Deployment Platform Support:** [your platform support]
- **Team Lead:** [contact info]
- **On-Call Support:** [contact info]

---

## Sign-Off

- [ ] Development Lead: _________________ Date: _______
- [ ] QA Lead: _________________ Date: _______
- [ ] DevOps Lead: _________________ Date: _______
- [ ] Product Manager: _________________ Date: _______

---

**Deployment Date:** _______________  
**Deployed By:** _______________  
**Deployment Time:** _______________  
**Status:** ☐ Successful ☐ Rolled Back

**Notes:**
```
[Add any deployment notes here]
```

---

**Last Updated:** May 5, 2026
