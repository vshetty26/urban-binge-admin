# Urban Binge Admin - Features Guide

A comprehensive guide to all features in the Urban Binge Admin Dashboard.

---

## 📦 Orders Management

### Overview
Manage all customer orders in real-time with a complete workflow from placement to delivery.

### Features

#### View Orders
- **Real-time Updates** - Orders appear instantly as customers place them
- **Filter by Status** - View orders by status (Pending, Preparing, Out for Delivery, Rejected, Delivered)
- **Order Details** - See customer name, phone, address, items, and total
- **Order ID** - Unique identifier for each order

#### Order Workflow
```
Placed (Pending)
    ↓
Accept/Reject
    ↓
Accepted (Preparing)
    ↓
Out for Delivery
    ↓
Delivered
```

#### Order Actions
- **Accept Order** - Mark order as accepted and start preparation
- **Reject Order** - Reject order (customer will be notified)
- **Mark Out for Delivery** - Update status when order leaves restaurant
- **Mark Delivered** - Confirm order delivered to customer

#### Order Information
- **Customer Name** - Full name of customer
- **Phone Number** - Clickable link to call customer
- **Address** - Flat number, area, landmark
- **Distance** - Delivery distance in kilometers
- **Items** - List of ordered items with quantity and price
- **Total** - Order total including delivery charge
- **Delivery Charge** - Separate delivery fee
- **Order Time** - When order was placed

#### Notifications
- **Audio Alert** - Sound plays when new order arrives
- **Visual Alert** - New orders highlighted with red border and animation
- **Auto-scroll** - Dashboard scrolls to top when new order arrives

#### Bulk Actions
- **Clear All Orders** - Delete all order history (use with caution)
- **Filter Tabs** - Quick filter buttons for each status

### Tips
- Check pending orders frequently for quick response
- Use phone link to contact customers if needed
- Monitor delivery distance for logistics planning
- Archive old orders regularly to keep dashboard fast

---

## 🍽️ Menu Management

### Overview
Create and manage your restaurant's complete menu with categories, items, and images.

### Features

#### Menu Structure
```
Restaurant Info
├── Category 1
│   ├── Item 1 (with image)
│   ├── Item 2 (with image)
│   └── Item 3 (with image)
├── Category 2
│   ├── Item 1 (with image)
│   └── Item 2 (with image)
└── Category 3
    └── Item 1 (with image)
```

#### Restaurant Information
- **Name** - Restaurant name (Urban Binge)
- **Address** - Full address
- **Timings** - Operating hours (e.g., "11:00 AM - 11:00 PM")
- **Notes** - Special notes/policies (e.g., "Minimum order: ₹200")

#### Categories
- **Category Name** - Name of the category (e.g., "Biryani")
- **Cuisine Type** - Type of cuisine (e.g., "Indian")
- **Dietary Type** - Vegetarian/Non-Vegetarian
- **Section** - Menu section (e.g., "Main Course")

#### Menu Items
- **Item Name** - Name of the dish
- **Price** - Single price (if not half/full)
- **Half Price** - Price for half portion
- **Full Price** - Price for full portion
- **Dietary Type** - Vegetarian/Non-Vegetarian
- **Image** - Item photo (uploaded to Firebase Storage)

#### Actions

##### Create Category
1. Click "Add Category" button
2. Fill in category details
3. Click "Save Category"
4. Category appears in menu

##### Add Menu Item
1. Click "Add Item" in a category
2. Fill in item details
3. Upload item image
4. Click "Save Item"
5. Item appears in category

##### Edit Menu Item
1. Click "Edit" on an item
2. Modify details
3. Update image if needed
4. Click "Save"

##### Delete Menu Item
1. Click "Delete" on an item
2. Confirm deletion
3. Item removed from menu

##### Upload Images
1. Click "Upload Image" button
2. Select image from computer
3. Image uploads to Firebase Storage
4. Image URL automatically added to item

#### Image Guidelines
- **Formats** - JPG, PNG, WebP
- **Size** - Keep under 5MB
- **Dimensions** - Recommended 400x300px or larger
- **Quality** - High quality for better appearance

#### Save Menu
- Click "Save Menu" button to save all changes
- Changes sync to Firebase in real-time
- Menu updates immediately for customers

### Tips
- Add high-quality images for better appeal
- Organize categories logically
- Keep item names clear and descriptive
- Update prices regularly
- Add special notes (e.g., "Spicy", "Contains nuts")
- Use consistent image sizes

---

## 💬 Inquiries Management

### Overview
View and manage customer inquiries, feedback, and questions.

### Features

#### View Inquiries
- **Customer Name** - Name of person inquiring
- **Email** - Customer email address
- **Phone** - Customer phone number
- **Message** - Inquiry message or feedback
- **Timestamp** - When inquiry was submitted

#### Inquiry Actions
- **Call Customer** - Click phone number to call
- **Email Customer** - Click email to send email
- **View Details** - See full inquiry message
- **Delete Inquiry** - Remove individual inquiry

#### Bulk Actions
- **Clear All Inquiries** - Delete all inquiry history

#### Inquiry Types
- **Questions** - About menu, delivery, etc.
- **Feedback** - Positive or negative feedback
- **Complaints** - Issues with orders or service
- **Suggestions** - Ideas for improvement

### Tips
- Respond to inquiries promptly
- Keep feedback for improvement insights
- Address complaints quickly
- Use suggestions for menu updates
- Archive old inquiries regularly

---

## 🏪 Store Status

### Overview
Control whether your store is open or closed for orders.

### Features

#### Store Status Toggle
- **Open** - Store is accepting orders (green indicator)
- **Closed** - Store is not accepting orders (red indicator)
- **Real-time Update** - Status updates instantly for customers

#### When to Use
- **Open** - During operating hours
- **Closed** - During breaks, holidays, or when busy
- **Maintenance** - When updating menu or system

#### Status Visibility
- Customers see store status on ordering app
- Customers cannot place orders when closed
- Status persists across sessions

### Tips
- Close store during peak hours if overwhelmed
- Close store during breaks
- Close store for maintenance
- Always open before operating hours
- Always close after operating hours

---

## 🔔 Audio Notifications

### Overview
Get instant audio alerts when new orders arrive.

### Features

#### Notification Trigger
- **New Order** - Sound plays when customer places order
- **Automatic** - No need to manually trigger
- **Persistent** - Works even if tab is in background

#### Sound Alert
- **Distinctive Sound** - Easy to hear in busy environment
- **Repeating** - Continues until acknowledged
- **Volume** - Respects system volume settings

#### Visual Alert
- **Red Border** - New order card has red border
- **Pulsing Animation** - Card pulses to draw attention
- **Banner** - "Urgent: New Order!" banner on card

#### Notification Control
- **Enable/Disable** - Toggle in browser settings
- **Volume** - Adjust system volume
- **Mute** - Mute browser tab if needed

### Tips
- Keep volume at comfortable level
- Don't mute notifications during service
- Use headphones if in shared space
- Test notifications before service starts

---

## 🎨 User Interface

### Navigation
- **Orders** - View and manage orders
- **Menu** - Create and edit menu
- **Inquiries** - View customer inquiries
- **Store Status** - Toggle store open/closed

### Dashboard Header
- **Restaurant Name** - Shows "Urban Binge Admin"
- **Current Section** - Shows what you're viewing
- **Pending Count** - Number of pending orders
- **Total Count** - Total orders in system

### Responsive Design
- **Mobile** - Optimized for phones
- **Tablet** - Optimized for tablets
- **Desktop** - Full-featured desktop view
- **Touch-friendly** - Large buttons for touch

### Color Scheme
- **Primary** - Red (Urban Binge brand color)
- **Success** - Green (accepted, delivered)
- **Warning** - Yellow (pending)
- **Danger** - Red (rejected)
- **Info** - Blue (out for delivery)

---

## ⚙️ Settings & Configuration

### Environment Variables
Located in `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
```

### Firebase Configuration
- **Database** - Firestore
- **Storage** - Firebase Storage
- **Authentication** - Firebase Auth
- **Real-time** - Firestore listeners

### Customization
- **Colors** - Edit `tailwind.config.ts`
- **Fonts** - Edit `app/layout.tsx`
- **Icons** - Replace React Icons
- **Animations** - Edit Framer Motion settings

---

## 🔐 Security Features

### Data Protection
- ✅ Firebase security rules
- ✅ Environment variables for secrets
- ✅ HTTPS encryption
- ✅ Real-time data validation

### Access Control
- ✅ Firebase authentication
- ✅ Admin-only access (can be implemented)
- ✅ Role-based permissions (can be added)
- ✅ Audit logging (can be added)

---

## 📊 Analytics & Reporting

### Available Metrics
- **Total Orders** - Number of orders
- **Pending Orders** - Orders awaiting action
- **Order Status Distribution** - Orders by status
- **Customer Inquiries** - Number of inquiries

### Future Enhancements
- Revenue tracking
- Popular items
- Customer analytics
- Delivery time tracking
- Rating and reviews

---

## 🚀 Performance Features

### Optimization
- ✅ Real-time updates (no page refresh needed)
- ✅ Lazy loading (images load on demand)
- ✅ Code splitting (faster page loads)
- ✅ Caching (faster subsequent loads)

### Speed
- Page load time: < 3 seconds
- Real-time updates: < 1 second
- Image loading: Optimized
- Smooth animations: 60 FPS

---

## 🆘 Troubleshooting

### Orders Not Appearing
- Check Firestore database
- Verify security rules
- Check browser console for errors
- Refresh page

### Images Not Uploading
- Check Firebase Storage rules
- Verify file size < 5MB
- Check file format (JPG, PNG, WebP)
- Check internet connection

### Notifications Not Working
- Check browser notification settings
- Verify audio is enabled
- Check system volume
- Refresh page

### Real-time Updates Not Working
- Check internet connection
- Verify Firebase connection
- Check browser console for errors
- Refresh page

---

## 📚 Additional Resources

- `SETUP_GUIDE.md` - Setup instructions
- `FIREBASE_SCHEMA.md` - Database schema
- `QUICKSTART.md` - Quick start guide
- `DEPLOYMENT_CHECKLIST.md` - Deployment guide

---

**Happy managing! 🍽️**
