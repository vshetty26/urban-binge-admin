import {
    collection,
    addDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
    query,
    where,
    orderBy,
    onSnapshot,
    serverTimestamp,
    Timestamp,
    deleteDoc,
    writeBatch,
} from "firebase/firestore";
import { db } from "./firebase";
import { calculateDeliveryFee } from "./deliveryFees";

export type OrderStatus = "placed" | "accepted" | "rejected" | "out_for_delivery" | "delivered";

export interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface OrderAddress {
    flatNo: string;
    area: string;
    landmark?: string;
    distance: string;
}

export interface Order {
    id?: string;
    customerName: string;
    customerPhone: string;
    customerEmail?: string;
    items: OrderItem[];
    subtotal: number;
    deliveryCharge: number;
    total: number;
    address: OrderAddress;
    status: OrderStatus;
    createdAt?: Timestamp;
    updatedAt?: Timestamp;
}

const ORDERS_COLLECTION = "orders";

/**
 * Fetch a single order by ID.
 */
export async function getOrder(orderId: string): Promise<Order | null> {
    const docSnap = await getDoc(doc(db, ORDERS_COLLECTION, orderId));
    if (!docSnap.exists()) return null;
    return { id: docSnap.id, ...docSnap.data() } as Order;
}

/**
 * Fetch ALL orders (for admin).
 */
export async function getAllOrders(): Promise<Order[]> {
    const q = query(collection(db, ORDERS_COLLECTION), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Order));
}

/**
 * Update order status (admin accept/reject).
 */
export async function updateOrderStatus(orderId: string, status: OrderStatus): Promise<void> {
    await updateDoc(doc(db, ORDERS_COLLECTION, orderId), {
        status,
        updatedAt: serverTimestamp(),
    });
}

/**
 * Subscribe to real-time updates for ALL orders (admin).
 * Returns an unsubscribe function.
 * Optimized: Minimal logging to prevent console blocking under high load
 */
export function subscribeToAllOrders(callback: (orders: Order[]) => void): () => void {
    const q = query(collection(db, ORDERS_COLLECTION), orderBy("createdAt", "desc"));
    let lastLogTime = 0;
    const LOG_THROTTLE_MS = 5000; // Log only every 5 seconds
    
    return onSnapshot(q, (snapshot) => {
        const now = Date.now();
        const shouldLog = now - lastLogTime > LOG_THROTTLE_MS;
        
        if (shouldLog) {
            console.log(`📦 Orders snapshot: ${snapshot.docs.length} total`);
            lastLogTime = now;
        }
        
        const orders = snapshot.docs.map((d) => ({
            id: d.id,
            ...d.data()
        } as Order));
        
        callback(orders);
    }, (error) => {
        console.error("❌ Orders subscription error:", error);
    });
}

/**
 * Auto-transition accepted orders to out_for_delivery after 30 seconds
 */
export async function autoTransitionAcceptedOrders(): Promise<void> {
    try {
        const q = query(
            collection(db, ORDERS_COLLECTION),
            where("status", "==", "accepted")
        );
        const snapshot = await getDocs(q);
        
        for (const doc of snapshot.docs) {
            const order = doc.data() as Order;
            const createdTime = order.createdAt?.seconds || 0;
            const now = Math.floor(Date.now() / 1000);
            const ageInSeconds = now - createdTime;
            
            // Auto-transition after 30 seconds
            if (ageInSeconds > 30) {
                console.log("🚚 Auto-transitioning order to out_for_delivery:", doc.id);
                await updateOrderStatus(doc.id, "out_for_delivery");
            }
        }
    } catch (err) {
        console.error("❌ Error auto-transitioning orders:", err);
    }
}
/**
 * Validate order and calculate delivery fee
 */
export function validateAndCalculateDelivery(
    orderTotal: number,
    distanceKm: number
): { isValid: boolean; deliveryFee: number; message: string } {
    const result = calculateDeliveryFee(orderTotal, distanceKm);
    
    return {
        isValid: result.isEligible,
        deliveryFee: result.deliveryFee,
        message: result.reason
    };
}

/**
 * Delete all orders from the database.
 */
export async function deleteAllOrders(): Promise<void> {
    const orders = await getAllOrders();
    if (orders.length === 0) return;

    const batch = writeBatch(db);
    orders.forEach((order) => {
        if (order.id) {
            batch.delete(doc(db, ORDERS_COLLECTION, order.id));
        }
    });

    await batch.commit();
}
