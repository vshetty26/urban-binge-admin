# Urban Binge Admin - Setup Guide

Welcome to the Urban Binge Admin Dashboard! This guide will help you get the project up and running.

## Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn** package manager
- **Firebase Project** (create one at [firebase.google.com](https://firebase.google.com))

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Firebase Setup

### Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a new project"
3. Name it "Urban Binge Admin"
4. Enable Google Analytics (optional)
5. Create the project

### Get Firebase Credentials

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Under "Your apps", click the web icon `</>`
3. Register your app as "Urban Binge Admin"
4. Copy the Firebase config object

### Set Up Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click "Create database"
3. Start in **Production mode**
4. Choose a location (preferably closest to your users)
5. Create the database

### Set Up Storage

1. In Firebase Console, go to **Storage**
2. Click "Get started"
3. Start in **Production mode**
4. Choose the same location as Firestore
5. Create the storage

### Set Up Authentication

1. In Firebase Console, go to **Authentication**
2. Click "Get started"
3. Enable **Email/Password** provider
4. (Optional) Enable **Google** provider for easier login

## Step 3: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

2. Open `.env.local` and fill in your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Step 4: Initialize Firestore Collections

The app expects the following Firestore structure:

### Collections to Create

1. **`menu`** - Stores restaurant menu data
   - Document ID: `menu`
   - Structure:
     ```json
     {
       "restaurant": {
         "name": "Urban Binge",
         "address": "Your Address",
         "timings": "11:00 AM - 11:00 PM",
         "notes": []
       },
       "menu": []
     }
     ```

2. **`orders`** - Stores customer orders
   - Auto-generated document IDs
   - Structure:
     ```json
     {
       "customerName": "John Doe",
       "customerPhone": "+91XXXXXXXXXX",
       "address": {
         "flatNo": "123",
         "area": "Downtown",
         "landmark": "Near Park",
         "distance": 2.5
       },
       "items": [
         {
           "name": "Biryani",
           "quantity": 2,
           "price": 250
         }
       ],
       "total": 500,
       "deliveryCharge": 50,
       "status": "placed",
       "createdAt": "timestamp"
     }
     ```

3. **`inquiries`** - Stores customer inquiries
   - Auto-generated document IDs
   - Structure:
     ```json
     {
       "name": "Customer Name",
       "email": "customer@example.com",
       "phone": "+91XXXXXXXXXX",
       "message": "Inquiry message",
       "createdAt": "timestamp"
     }
     ```

4. **`storeStatus`** - Stores store open/closed status
   - Document ID: `status`
   - Structure:
     ```json
     {
       "isOpen": true,
       "lastUpdated": "timestamp"
     }
     ```

## Step 5: Run the Development Server

```bash
npm run dev
```

The admin dashboard will be available at **http://localhost:3001**

## Step 6: Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
urban-binge-admin/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home (redirects to /orders)
│   ├── globals.css             # Global styles
│   ├── menu/
│   │   └── page.tsx            # Menu management page
│   ├── orders/
│   │   └── page.tsx            # Order management page
│   └── inquiries/
│       └── page.tsx            # Inquiries management page
├── components/
│   ├── AdminNavbar.tsx         # Navigation bar
│   ├── AudioNotification.tsx   # Sound notifications for new orders
│   ├── AuthProvider.tsx        # Firebase auth context
│   └── StoreStatusToggle.tsx   # Store open/closed toggle
├── lib/
│   ├── firebase.ts             # Firebase initialization
│   ├── menu.ts                 # Menu operations
│   ├── orders.ts               # Order operations
│   ├── inquiries.ts            # Inquiry operations
│   ├── status.ts               # Store status operations
│   └── defaultMenu.ts          # Default menu template
├── public/                     # Static assets
├── .env.local                  # Environment variables (create this)
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind CSS config
└── next.config.ts              # Next.js config
```

## Features

### 📋 Order Management
- View all orders in real-time
- Filter orders by status (Pending, Preparing, Out for Delivery, Rejected, Delivered)
- Accept or reject orders
- Update order status through the workflow
- Audio notifications for new orders
- View customer details and delivery information

### 🍽️ Menu Management
- Create and edit menu categories
- Add/edit/delete menu items
- Upload item images to Firebase Storage
- Organize items by cuisine type and section
- Set prices for different portions (half/full)

### 💬 Inquiries Management
- View customer inquiries and feedback
- Track inquiry timestamps
- Contact customer via phone or email
- Clear inquiry history

### 🏪 Store Status
- Toggle store open/closed status
- Real-time status updates
- Visible to customers on the ordering app

## Troubleshooting

### Firebase Connection Issues
- Verify all environment variables are correctly set
- Check Firebase project is active
- Ensure Firestore database is created
- Check Firebase security rules allow read/write

### Port Already in Use
If port 3001 is already in use, you can change it in `package.json`:
```json
"dev": "next dev --port 3002"
```

### Images Not Uploading
- Check Firebase Storage rules allow uploads
- Verify storage bucket is created
- Check file size limits

### Orders Not Appearing
- Verify Firestore `orders` collection exists
- Check security rules allow reads
- Ensure timestamps are in correct format

## Security Considerations

1. **Firebase Security Rules** - Set up proper Firestore rules to restrict access
2. **Authentication** - Implement admin authentication before deployment
3. **Environment Variables** - Never commit `.env.local` to version control
4. **API Keys** - Consider using restricted API keys in production

## Support

For issues or questions:
1. Check the Firebase documentation
2. Review the code comments
3. Check browser console for errors
4. Verify Firestore data structure matches expected format

## Next Steps

1. Customize the menu with your restaurant's items
2. Set up admin authentication
3. Configure Firebase security rules
4. Deploy to production (Vercel, Firebase Hosting, etc.)
5. Connect with your customer ordering app

Happy managing! 🍽️
