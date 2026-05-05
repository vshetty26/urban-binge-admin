/**
 * Calculate delivery fee based on order total and delivery distance
 * 
 * Rules:
 * - Delivery radius: 0-3km
 * - If order total < ₹250: Add ₹35 delivery fee
 * - If order total ≥ ₹250: Free delivery
 */

export interface DeliveryFeeResult {
    deliveryFee: number;
    isEligible: boolean;
    reason: string;
}

/**
 * Calculate delivery fee for an order
 * @param orderTotal - Total order amount in rupees
 * @param distanceKm - Delivery distance in kilometers
 * @returns Delivery fee calculation result
 */
export function calculateDeliveryFee(orderTotal: number, distanceKm: number): DeliveryFeeResult {
    // Check if delivery is within service radius
    if (distanceKm > 3) {
        return {
            deliveryFee: 0,
            isEligible: false,
            reason: "Delivery location is outside our 3km service radius"
        };
    }

    // Check if order qualifies for free delivery
    if (orderTotal >= 250) {
        return {
            deliveryFee: 0,
            isEligible: true,
            reason: "Free delivery on orders ₹250 and above"
        };
    }

    // Orders below ₹250 get ₹35 delivery fee
    return {
        deliveryFee: 35,
        isEligible: true,
        reason: "₹35 delivery fee for orders below ₹250"
    };
}

/**
 * Get delivery fee message for display
 */
export function getDeliveryFeeMessage(orderTotal: number, distanceKm: number): string {
    const result = calculateDeliveryFee(orderTotal, distanceKm);
    
    if (!result.isEligible) {
        return `❌ ${result.reason}`;
    }

    if (result.deliveryFee === 0) {
        return `✅ Free Delivery - ${result.reason}`;
    }

    return `📦 Delivery Fee: ₹${result.deliveryFee}`;
}
