import { 
    collection, 
    query, 
    orderBy, 
    onSnapshot, 
    Timestamp, 
    writeBatch, 
    doc, 
    getDocs,
    where,
    updateDoc,
    addDoc
} from "firebase/firestore";
import { db } from "./firebase";

export interface UserData {
    id?: string;
    name: string;
    email: string;
    phone: string;
    address?: string;
    city?: string;
    message?: string;
    orderId: string;  // Reference to the order
    createdAt?: Timestamp;
    exportedAt?: Timestamp;
    isExported?: boolean;
}

export interface OrderAddress {
    flatNo: string;
    area: string;
    landmark?: string;
    distance: string;
}

/**
 * Verify if a customer has placed an order
 */
export async function verifyCustomerOrder(phone: string): Promise<string | null> {
    const q = query(
        collection(db, "orders"),
        where("customerPhone", "==", phone)
    );
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) return null;
    
    // Return the first order ID found
    return snapshot.docs[0].id;
}

/**
 * Create a user record from an order
 * This is called when an order is placed on the menu site
 */
export async function createUserFromOrder(
    orderId: string,
    customerName: string,
    customerPhone: string,
    customerEmail: string | undefined,
    address: OrderAddress
): Promise<string> {
    console.log("📝 Creating user from order:", {
        orderId,
        customerName,
        customerPhone,
        customerEmail,
        address
    });

    const docRef = await addDoc(collection(db, "users"), {
        name: customerName,
        email: customerEmail || "",
        phone: customerPhone,
        address: `${address.flatNo}, ${address.area}`,
        city: address.area,
        message: address.landmark ? `Landmark: ${address.landmark}` : "",
        orderId: orderId,
        createdAt: Timestamp.now(),
        isExported: false
    });

    console.log("✅ User created from order with ID:", docRef.id);
    return docRef.id;
}

/**
 * Subscribe to all users created in the last 24 hours (exported or not)
 */
export function subscribeToVisibleUsers(callback: (users: UserData[]) => void): () => void {
    // Query all users (both exported and non-exported)
    const q = query(
        collection(db, "users")
    );
    
    return onSnapshot(q, (snapshot) => {
        console.log("📊 Firestore Snapshot - Total docs:", snapshot.docs.length);
        
        const now = Date.now();
        const items = snapshot.docs
            .map((d) => {
                const data = d.data() as UserData;
                console.log("📝 User doc:", d.id, data);
                return { id: d.id, ...data };
            })
            .filter((user) => {
                if (!user.createdAt) {
                    console.log("⚠️ User missing createdAt:", user.id);
                    return false;
                }
                const createdTime = user.createdAt.seconds * 1000;
                const ageInHours = (now - createdTime) / (1000 * 60 * 60);
                const isWithin24h = ageInHours < 24;
                console.log(`⏱️ User ${user.id}: ${ageInHours.toFixed(1)}h old, within 24h: ${isWithin24h}`);
                return isWithin24h;
            })
            // Sort client-side instead of server-side
            .sort((a, b) => {
                if (!a.createdAt || !b.createdAt) return 0;
                return b.createdAt.seconds - a.createdAt.seconds;
            });
        
        console.log("✅ Final visible users:", items.length);
        callback(items);
    }, (error) => {
        console.error("❌ Firestore subscription error:", error);
    });
}

/**
 * Subscribe to all orders and automatically create user records from them
 * This syncs order data to the users collection
 */
export function subscribeToOrdersAndSyncUsers(): () => void {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    
    return onSnapshot(q, async (snapshot) => {
        console.log("📦 Orders snapshot - Total orders:", snapshot.docs.length);
        
        for (const orderDoc of snapshot.docs) {
            const order = orderDoc.data();
            const orderId = orderDoc.id;
            
            console.log("🔍 Processing order:", orderId, order);
            
            // Check if user already exists for this order
            const userQuery = query(
                collection(db, "users"),
                where("orderId", "==", orderId)
            );
            const userSnapshot = await getDocs(userQuery);
            
            if (userSnapshot.empty) {
                // User doesn't exist for this order, create one
                try {
                    const docRef = await addDoc(collection(db, "users"), {
                        name: order.customerName || "",
                        email: order.customerEmail || "",
                        phone: order.customerPhone || "",
                        address: order.address?.flatNo ? `${order.address.flatNo}, ${order.address.area}` : order.address?.area || "",
                        city: order.address?.area || "",
                        message: order.address?.landmark ? `Landmark: ${order.address.landmark}` : "",
                        orderId: orderId,
                        createdAt: order.createdAt || Timestamp.now(),
                        isExported: false
                    });
                    console.log("✅ User auto-created from order:", docRef.id);
                } catch (err) {
                    console.error("❌ Error creating user from order:", err);
                }
            } else {
                console.log("ℹ️ User already exists for order:", orderId);
            }
        }
    }, (error) => {
        console.error("❌ Orders subscription error:", error);
    });
}

/**
 * Get all users (for export functionality)
 */
export async function getAllUsers(): Promise<UserData[]> {
    const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as UserData));
}

/**
 * Get users within a specific time range
 */
export async function getUsersByTimeRange(days: number): Promise<UserData[]> {
    const now = Date.now();
    const cutoffTime = now - days * 24 * 60 * 60 * 1000;
    
    const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    
    return snapshot.docs
        .map((d) => ({ id: d.id, ...d.data() } as UserData))
        .filter((user) => {
            if (!user.createdAt) return false;
            const createdTime = user.createdAt.seconds * 1000;
            return createdTime >= cutoffTime;
        });
}

/**
 * Get users within a specific date range
 */
export async function getUsersByDateRange(startDate: Date, endDate: Date): Promise<UserData[]> {
    const start = startDate.getTime();
    const end = endDate.getTime() + 24 * 60 * 60 * 1000; // Include entire end day
    
    const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    
    return snapshot.docs
        .map((d) => ({ id: d.id, ...d.data() } as UserData))
        .filter((user) => {
            if (!user.createdAt) return false;
            const createdTime = user.createdAt.seconds * 1000;
            return createdTime >= start && createdTime <= end;
        });
}

/**
 * Mark users as exported
 */
export async function markUsersAsExported(userIds: string[]): Promise<void> {
    if (userIds.length === 0) return;
    
    const batch = writeBatch(db);
    const now = Timestamp.now();
    
    userIds.forEach((userId) => {
        batch.update(doc(db, "users", userId), {
            isExported: true,
            exportedAt: now
        });
    });
    
    await batch.commit();
}

/**
 * Export users to CSV format
 */
export function exportUsersToCSV(users: UserData[]): string {
    const headers = ["Name", "Email", "Phone", "Address", "City", "Message", "Created At"];
    const rows = users.map((user) => [
        user.name,
        user.email,
        user.phone,
        user.address || "",
        user.city || "",
        user.message || "",
        user.createdAt ? new Date(user.createdAt.seconds * 1000).toLocaleString("en-IN") : ""
    ]);
    
    const csvContent = [
        headers.join(","),
        ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))
    ].join("\n");
    
    return csvContent;
}

/**
 * Download CSV file
 */
export function downloadCSV(csvContent: string, filename: string): void {
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Delete all users from the database
 */
export async function deleteAllUsers(): Promise<void> {
    const q = query(collection(db, "users"));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return;

    const batch = writeBatch(db);
    snapshot.docs.forEach((d) => {
        batch.delete(doc(db, "users", d.id));
    });

    await batch.commit();
}
