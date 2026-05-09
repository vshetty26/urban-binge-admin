# Delivery Validation Implementation Guide

## Problem
Orders are being placed from locations outside the 3km delivery radius (e.g., 110km away).

## Solution
Add validation on the menu website to:
1. Check if delivery distance is within 3km
2. Disable "PLACE ORDER" button if outside service area
3. Show error message to customer

## Implementation Steps

### Step 1: Add Validation Function
Add this to your menu website's checkout/cart component:

```typescript
// deliveryValidation.ts
export function isDeliveryEligible(distanceKm: number): boolean {
    return distanceKm <= 3;
}

export function getDeliveryValidationMessage(distanceKm: number): string {
    if (distanceKm > 3) {
        return `❌ Delivery not available at ${distanceKm.toFixed(1)}km. We deliver within 3km radius only.`;
    }
    return `✅ Delivery available at ${distanceKm.toFixed(1)}km`;
}
```

### Step 2: Update Checkout Component
In your checkout/cart page where "PLACE ORDER" button is:

```typescript
// Before: Button is always enabled
<button onClick={handlePlaceOrder} className="...">
    PLACE ORDER
</button>

// After: Add validation check
const isDeliveryValid = isDeliveryEligible(distanceKm);

<div>
    {!isDeliveryValid && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded mb-4">
            {getDeliveryValidationMessage(distanceKm)}
        </div>
    )}
    <button 
        onClick={handlePlaceOrder} 
        disabled={!isDeliveryValid}
        className={`... ${!isDeliveryValid ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
        PLACE ORDER
    </button>
</div>
```

### Step 3: Validate Before Submitting Order
When customer clicks "PLACE ORDER":

```typescript
const handlePlaceOrder = async () => {
    // Validate delivery distance
    if (distanceKm > 3) {
        alert("❌ Delivery not available at this location. We deliver within 3km radius only.");
        return;
    }

    // Calculate delivery fee
    const deliveryFee = distanceKm <= 3 && orderTotal < 250 ? 35 : 0;
    
    // Proceed with order
    const order = {
        ...orderData,
        deliveryCharge: deliveryFee,
        total: orderTotal + deliveryFee
    };
    
    // Submit order to Firebase
    await submitOrder(order);
};
```

## Delivery Fee Rules (Recap)
- **Delivery Radius:** 0-3km only
- **Order < ₹250:** Add ₹35 delivery fee
- **Order ≥ ₹250:** Free delivery
- **Beyond 3km:** ❌ Not eligible (block order)

## Current Issue
The menu website at https://urban-binge-menu.vercel.app is NOT validating the 3km radius before allowing order placement. This needs to be fixed in that codebase.

## Action Required
1. Update the menu website checkout component
2. Add the validation checks above
3. Disable "PLACE ORDER" button for distances > 3km
4. Show error message to customer
5. Redeploy the menu website

## Testing
- Test with 2km distance → Should allow order with ₹35 fee (if < ₹250)
- Test with 5km distance → Should block order with error message
- Test with 3km distance → Should allow order (boundary case)
