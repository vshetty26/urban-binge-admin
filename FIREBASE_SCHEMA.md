# Urban Binge Admin - Firebase Schema Reference

This document outlines the complete Firestore database schema for the Urban Binge Admin Dashboard.

## Collections Overview

```
Firestore Database
├── menu (document)
├── orders (collection)
├── inquiries (collection)
└── storeStatus (document)
```

---

## 1. Menu Collection

**Type:** Single Document  
**Document ID:** `menu`  
**Purpose:** Stores the complete restaurant menu with categories and items

### Schema

```json
{
  "restaurant": {
    "name": "Urban Binge",
    "address": "123 Main Street, Downtown",
    "timings": "11:00 AM - 11:00 PM",
    "notes": [
      "Minimum order: ₹200",
      "Delivery available within 5km"
    ]
  },
  "menu": [
    {
      "category": "Biryani",
      "cuisine": "Indian",
      "type": "Vegetarian",
      "section": "Main Course",
      "items": [
        {
          "name": "Vegetable Biryani",
          "price": 250,
          "half": null,
          "full": null,
          "type": "Vegetarian",
          "image": "https://firebasestorage.googleapis.com/..."
        },
        {
          "name": "Chicken Biryani",
          "half": 300,
          "full": 500,
          "price": null,
          "type": "Non-Vegetarian",
          "image": "https://firebasestorage.googleapis.com/..."
        }
      ]
    }
  ]
}
```

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `restaurant.name` | String | Restaurant name |
| `restaurant.address` | String | Full address |
| `restaurant.timings` | String | Operating hours |
| `restaurant.notes` | Array | Additional notes/policies |
| `menu` | Array | Array of menu categories |
| `menu[].category` | String | Category name (e.g., "Biryani") |
| `menu[].cuisine` | String | Cuisine type (e.g., "Indian") |
| `menu[].type` | String | Dietary type (e.g., "Vegetarian") |
| `menu[].section` | String | Menu section (e.g., "Main Course") |
| `menu[].items` | Array | Array of menu items |
| `items[].name` | String | Item name |
| `items[].price` | Number | Single price (if not half/full) |
| `items[].half` | Number | Half portion price (optional) |
| `items[].full` | Number | Full portion price (optional) |
| `items[].type` | String | Dietary type |
| `items[].image` | String | Firebase Storage URL |

---

## 2. Orders Collection

**Type:** Collection  
**Document ID:** Auto-generated  
**Purpose:** Stores all customer orders

### Schema

```json
{
  "customerName": "John Doe",
  "customerPhone": "+919876543210",
  "address": {
    "flatNo": "123",
    "area": "Downtown",
    "landmark": "Near Central Park",
    "distance": 2.5
  },
  "items": [
    {
      "name": "Chicken Biryani",
      "quantity": 2,
      "price": 500
    },
    {
      "name": "Raita",
      "quantity": 1,
      "price": 50
    }
  ],
  "total": 1050,
  "deliveryCharge": 50,
  "status": "placed",
  "createdAt": {
    "_seconds": 1704067200,
    "_nanoseconds": 0
  }
}
```

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `customerName` | String | Customer's full name |
| `customerPhone` | String | Customer's phone number |
| `address.flatNo` | String | Flat/House number |
| `address.area` | String | Area/Locality name |
| `address.landmark` | String | Nearby landmark |
| `address.distance` | Number | Distance in kilometers |
| `items` | Array | Array of ordered items |
| `items[].name` | String | Item name |
| `items[].quantity` | Number | Quantity ordered |
| `items[].price` | Number | Price per unit |
| `total` | Number | Total order amount |
| `deliveryCharge` | Number | Delivery fee |
| `status` | String | Order status (see below) |
| `createdAt` | Timestamp | Order creation time |

### Order Status Values

```
"placed"           → New order, awaiting acceptance
"accepted"         → Order accepted, being prepared
"out_for_delivery" → Order is with delivery partner
"delivered"        → Order delivered to customer
"rejected"         → Order rejected by restaurant
```

---

## 3. Inquiries Collection

**Type:** Collection  
**Document ID:** Auto-generated  
**Purpose:** Stores customer inquiries and feedback

### Schema

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+919876543210",
  "message": "Do you have gluten-free options?",
  "createdAt": {
    "_seconds": 1704067200,
    "_nanoseconds": 0
  }
}
```

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Inquiry sender's name |
| `email` | String | Inquiry sender's email |
| `phone` | String | Inquiry sender's phone |
| `message` | String | Inquiry message |
| `createdAt` | Timestamp | Inquiry submission time |

---

## 4. Store Status Document

**Type:** Single Document  
**Document ID:** `status`  
**Purpose:** Tracks whether the store is open or closed

### Schema

```json
{
  "isOpen": true,
  "lastUpdated": {
    "_seconds": 1704067200,
    "_nanoseconds": 0
  }
}
```

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `isOpen` | Boolean | Store open (true) or closed (false) |
| `lastUpdated` | Timestamp | Last status change time |

---

## Firestore Security Rules

### Recommended Rules for Development

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Recommended Rules for Production

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Admin can read/write everything
    match /{document=**} {
      allow read, write: if request.auth.token.admin == true;
    }
    
    // Public can read menu and status
    match /menu {
      allow read: if true;
    }
    match /storeStatus {
      allow read: if true;
    }
    
    // Public can create orders and inquiries
    match /orders/{document=**} {
      allow create: if true;
    }
    match /inquiries/{document=**} {
      allow create: if true;
    }
  }
}
```

---

## Firebase Storage Structure

### Image Storage Path

```
gs://your-project.appspot.com/
├── menu-items/
│   ├── {itemId}/
│   │   └── image.jpg
```

### Upload Configuration

- **Max File Size:** 5MB (configurable)
- **Allowed Types:** JPG, PNG, WebP
- **Naming:** `menu-items/{timestamp}-{filename}`

---

## Data Type Reference

### Timestamp Format

Firestore timestamps are stored as objects with `_seconds` and `_nanoseconds`:

```json
{
  "_seconds": 1704067200,
  "_nanoseconds": 0
}
```

When reading in JavaScript, they're automatically converted to Date objects.

### Phone Number Format

Store phone numbers with country code:
- ✅ `+919876543210` (with country code)
- ❌ `9876543210` (without country code)

### Currency

All prices are in Indian Rupees (₹):
- Store as numbers (not strings)
- Example: `250` for ₹250

---

## Indexes

For optimal query performance, create these indexes:

### Orders Collection

| Fields | Type |
|--------|------|
| `status` | Ascending |
| `createdAt` | Descending |
| `status`, `createdAt` | Composite |

### Inquiries Collection

| Fields | Type |
|--------|------|
| `createdAt` | Descending |

---

## Backup & Recovery

### Automated Backups

Enable Firestore automated backups in Firebase Console:
1. Go to **Firestore Database**
2. Click **Backups**
3. Enable **Automated backups**
4. Set retention period (30 days recommended)

### Manual Export

```bash
gcloud firestore export gs://your-bucket/backup-name
```

---

## Common Queries

### Get all pending orders

```javascript
db.collection('orders')
  .where('status', '==', 'placed')
  .orderBy('createdAt', 'desc')
  .get()
```

### Get recent inquiries

```javascript
db.collection('inquiries')
  .orderBy('createdAt', 'desc')
  .limit(10)
  .get()
```

### Get store status

```javascript
db.collection('storeStatus')
  .doc('status')
  .get()
```

---

## Migration from Other Systems

If migrating from another system:

1. **Export data** from old system
2. **Transform** to match schema above
3. **Validate** data structure
4. **Import** to Firestore using Firebase Console or CLI
5. **Test** all features before going live

---

## Troubleshooting

### Data Not Appearing

- Check Firestore security rules
- Verify collection names match exactly (case-sensitive)
- Ensure timestamps are in correct format
- Check browser console for errors

### Performance Issues

- Create recommended indexes
- Limit query results with `.limit()`
- Use pagination for large datasets
- Archive old orders periodically

### Storage Issues

- Check Firebase Storage rules
- Verify file sizes are within limits
- Ensure image URLs are accessible
- Clear browser cache if images don't update

---

## Related Documentation

- [Firebase Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Storage Documentation](https://firebase.google.com/docs/storage)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
