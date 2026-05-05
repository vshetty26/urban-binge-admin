# Urban Binge Admin - Migration Notes from Chopstick

This document outlines the changes made to convert the Chopstick Admin project to Urban Binge Admin.

## What Changed

### 1. Project Metadata
- **Package Name:** `chopstick-admin` → `urban-binge-admin`
- **Page Title:** "Chopstick Admin" → "Urban Binge Admin"
- **Description:** Updated to reflect Urban Binge branding

### 2. Files Updated

#### `package.json`
- Changed `name` from `chopstick-admin` to `urban-binge-admin`

#### `README.md`
- Updated project title and description
- Added comprehensive feature list
- Added project structure overview
- Added environment setup instructions

#### `app/layout.tsx`
- Updated metadata title and description

#### `app/orders/page.tsx`
- Updated header branding from "Chopstick Admin" to "Urban Binge Admin"

#### `app/inquiries/page.tsx`
- Updated header branding from "Chopstick Admin" to "Urban Binge Admin"

### 3. New Files Created

#### `.env.local.example`
- Template for environment variables
- Helps with Firebase configuration setup

#### `SETUP_GUIDE.md`
- Complete setup instructions
- Firebase project creation steps
- Environment configuration guide
- Firestore collection initialization
- Troubleshooting section

#### `FIREBASE_SCHEMA.md`
- Complete Firestore database schema
- Collection structures and field descriptions
- Security rules recommendations
- Common queries
- Backup and recovery procedures

#### `MIGRATION_NOTES.md` (this file)
- Documents all changes made

## What Stayed the Same

### Core Functionality
- ✅ Order management system
- ✅ Menu management system
- ✅ Inquiries management system
- ✅ Store status toggle
- ✅ Audio notifications
- ✅ Real-time Firebase integration
- ✅ Responsive UI with Tailwind CSS

### Tech Stack
- ✅ Next.js 16
- ✅ React 19
- ✅ TypeScript
- ✅ Firebase
- ✅ Tailwind CSS 4
- ✅ Framer Motion
- ✅ React Icons

### Project Structure
- ✅ Same folder organization
- ✅ Same component architecture
- ✅ Same utility functions
- ✅ Same styling approach

## Firebase Configuration

The Firebase configuration in `lib/firebase.ts` uses environment variables with fallback values. You'll need to:

1. Create a new Firebase project for Urban Binge
2. Get your Firebase credentials
3. Create `.env.local` file with your credentials
4. Initialize Firestore collections as per `FIREBASE_SCHEMA.md`

## Database Migration (if needed)

If you have existing Chopstick data to migrate:

1. **Export Chopstick data** from the old Firebase project
2. **Transform data** to match Urban Binge schema (if different)
3. **Import to new Firebase project** using Firebase Console or CLI
4. **Verify data integrity** before going live

### Data Transformation Checklist

- [ ] Restaurant name updated to "Urban Binge"
- [ ] Menu items match Urban Binge offerings
- [ ] Prices updated if different
- [ ] Categories reorganized if needed
- [ ] Images re-uploaded to new Firebase Storage
- [ ] Orders migrated (if applicable)
- [ ] Inquiries migrated (if applicable)

## Deployment Considerations

### Before Deploying

1. **Set up Firebase project** for Urban Binge
2. **Configure environment variables** in deployment platform
3. **Set up Firestore security rules** (see `FIREBASE_SCHEMA.md`)
4. **Test all features** in staging environment
5. **Set up admin authentication** (currently not implemented)

### Deployment Platforms

The project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Firebase Hosting**
- **Netlify**
- **AWS Amplify**
- **Self-hosted servers**

### Environment Variables for Deployment

Make sure to set these in your deployment platform:
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
```

## Testing Checklist

- [ ] Orders page loads and displays orders
- [ ] Menu page loads and allows editing
- [ ] Inquiries page loads and displays inquiries
- [ ] Store status toggle works
- [ ] Audio notifications trigger on new orders
- [ ] Images upload to Firebase Storage
- [ ] Real-time updates work (Firestore subscriptions)
- [ ] Responsive design works on mobile
- [ ] All navigation links work
- [ ] Build completes without errors

## Next Steps

1. **Set up Firebase project** - Follow `SETUP_GUIDE.md`
2. **Configure environment variables** - Copy `.env.local.example` to `.env.local`
3. **Initialize Firestore** - Create collections per `FIREBASE_SCHEMA.md`
4. **Add menu items** - Use the menu management page
5. **Test all features** - Use the testing checklist above
6. **Deploy** - Choose your deployment platform
7. **Connect customer app** - Link with your ordering app

## Support & Troubleshooting

### Common Issues

**Q: Build fails with "next: command not found"**
A: Run `npm install` first to install dependencies

**Q: Firebase connection errors**
A: Check `.env.local` has correct credentials and Firestore is created

**Q: Images not uploading**
A: Verify Firebase Storage rules allow uploads

**Q: Orders not appearing**
A: Check Firestore `orders` collection exists and security rules allow reads

### Getting Help

1. Check `SETUP_GUIDE.md` for setup issues
2. Check `FIREBASE_SCHEMA.md` for data structure issues
3. Review browser console for error messages
4. Check Firebase Console for project status

## Version History

- **v0.1.0** - Initial Urban Binge Admin setup (migrated from Chopstick)

## License

Private - Urban Binge

---

**Last Updated:** May 5, 2026
