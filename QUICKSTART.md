# Urban Binge Admin - Quick Start

Get up and running in 5 minutes!

## 1. Install Dependencies (1 min)

```bash
npm install
```

## 2. Set Up Firebase (2 min)

1. Go to [firebase.google.com](https://firebase.google.com)
2. Create a new project called "Urban Binge Admin"
3. Go to **Project Settings** → Copy your config
4. Create `.env.local` file:

```bash
cp .env.local.example .env.local
```

5. Paste your Firebase credentials into `.env.local`

## 3. Initialize Firestore (1 min)

In Firebase Console:

1. Go to **Firestore Database** → Create database (Production mode)
2. Go to **Storage** → Get started (Production mode)
3. Go to **Authentication** → Enable Email/Password

## 4. Create Initial Data (1 min)

In Firestore Console, create these documents:

### Document 1: `menu`
```json
{
  "restaurant": {
    "name": "Urban Binge",
    "address": "Your Address Here",
    "timings": "11:00 AM - 11:00 PM",
    "notes": []
  },
  "menu": []
}
```

### Document 2: `storeStatus`
```json
{
  "isOpen": true,
  "lastUpdated": "2024-01-01T00:00:00Z"
}
```

## 5. Run Development Server

```bash
npm run dev
```

Visit **http://localhost:3001** 🎉

---

## What You Can Do Now

✅ **Orders** - View and manage customer orders  
✅ **Menu** - Add and edit menu items  
✅ **Inquiries** - View customer inquiries  
✅ **Store Status** - Toggle store open/closed  

---

## Next Steps

1. Add your menu items via the Menu page
2. Test with sample orders
3. Configure Firebase security rules
4. Deploy to production

---

## Need Help?

- **Setup Issues?** → Read `SETUP_GUIDE.md`
- **Database Questions?** → Read `FIREBASE_SCHEMA.md`
- **Migration Help?** → Read `MIGRATION_NOTES.md`

---

**Happy managing! 🍽️**
