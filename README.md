# Urban Binge Admin

A modern admin dashboard for Urban Binge restaurant management. Built with Next.js, Firebase, and Tailwind CSS.

## Features

- **Menu Management** - Create, update, and manage restaurant menu items
- **Order Management** - Track and manage customer orders in real-time
- **Inquiries** - Handle customer inquiries and feedback
- **Store Status** - Toggle store open/closed status
- **Real-time Updates** - Firebase integration for live data synchronization
- **Audio Notifications** - Get notified of new orders with sound alerts

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Backend**: Firebase
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- Firebase project setup
- Environment variables configured

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The admin dashboard will be available at `http://localhost:3001`

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── menu/               # Menu management
│   ├── orders/             # Order management
│   └── inquiries/          # Inquiries management
├── components/             # Reusable components
├── lib/                    # Utilities and Firebase config
└── public/                 # Static assets
```

## Environment Setup

Create a `.env.local` file with your Firebase credentials:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## License

Private - Urban Binge
