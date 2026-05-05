"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function DebugPage() {
    const [users, setUsers] = useState<any[]>([]);
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("🔍 Fetching data from Firestore...");

                // Fetch users
                const usersSnapshot = await getDocs(collection(db, "users"));
                const usersList = usersSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log("👥 Users found:", usersList.length, usersList);
                setUsers(usersList);

                // Fetch orders
                const ordersSnapshot = await getDocs(collection(db, "orders"));
                const ordersList = ordersSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log("📦 Orders found:", ordersList.length, ordersList);
                setOrders(ordersList);

                setLoading(false);
            } catch (err) {
                console.error("❌ Error fetching data:", err);
                setError(String(err));
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">🔍 Debug Dashboard</h1>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-8">
                        <p className="font-bold">Error:</p>
                        <p>{error}</p>
                    </div>
                )}

                {loading ? (
                    <p className="text-gray-500">Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Users Section */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-2xl font-bold mb-4">👥 Users Collection</h2>
                            <p className="text-gray-600 mb-4">Total: {users.length}</p>

                            {users.length === 0 ? (
                                <p className="text-gray-500 italic">No users found</p>
                            ) : (
                                <div className="space-y-4">
                                    {users.map((user) => (
                                        <div
                                            key={user.id}
                                            className="bg-gray-50 p-4 rounded border border-gray-200"
                                        >
                                            <p className="font-bold text-sm text-gray-600 mb-2">
                                                ID: {user.id}
                                            </p>
                                            <div className="space-y-1 text-sm">
                                                <p>
                                                    <strong>Name:</strong> {user.name}
                                                </p>
                                                <p>
                                                    <strong>Email:</strong> {user.email}
                                                </p>
                                                <p>
                                                    <strong>Phone:</strong> {user.phone}
                                                </p>
                                                <p>
                                                    <strong>Order ID:</strong> {user.orderId}
                                                </p>
                                                <p>
                                                    <strong>Exported:</strong>{" "}
                                                    {user.isExported ? "Yes" : "No"}
                                                </p>
                                                <p>
                                                    <strong>Created:</strong>{" "}
                                                    {user.createdAt
                                                        ? new Date(
                                                              user.createdAt.seconds * 1000
                                                          ).toLocaleString("en-IN")
                                                        : "N/A"}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Orders Section */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-2xl font-bold mb-4">📦 Orders Collection</h2>
                            <p className="text-gray-600 mb-4">Total: {orders.length}</p>

                            {orders.length === 0 ? (
                                <p className="text-gray-500 italic">No orders found</p>
                            ) : (
                                <div className="space-y-4">
                                    {orders.map((order) => (
                                        <div
                                            key={order.id}
                                            className="bg-gray-50 p-4 rounded border border-gray-200"
                                        >
                                            <p className="font-bold text-sm text-gray-600 mb-2">
                                                ID: {order.id}
                                            </p>
                                            <div className="space-y-1 text-sm">
                                                <p>
                                                    <strong>Customer:</strong>{" "}
                                                    {order.customerName}
                                                </p>
                                                <p>
                                                    <strong>Phone:</strong>{" "}
                                                    {order.customerPhone}
                                                </p>
                                                <p>
                                                    <strong>Email:</strong>{" "}
                                                    {order.customerEmail || "N/A"}
                                                </p>
                                                <p>
                                                    <strong>Status:</strong> {order.status}
                                                </p>
                                                <p>
                                                    <strong>Total:</strong> ₹{order.total}
                                                </p>
                                                <p>
                                                    <strong>Created:</strong>{" "}
                                                    {order.createdAt
                                                        ? new Date(
                                                              order.createdAt.seconds * 1000
                                                          ).toLocaleString("en-IN")
                                                        : "N/A"}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Instructions */}
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-4">📋 Instructions</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>Check if orders appear in the Orders section</li>
                        <li>Check if users appear in the Users section</li>
                        <li>Verify phone numbers match between orders and users</li>
                        <li>Check that users have orderId field</li>
                        <li>Check that isExported is false for visible users</li>
                        <li>Check that createdAt timestamp exists</li>
                    </ol>
                </div>

                {/* Links */}
                <div className="mt-8 space-y-2">
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Go to Contact Form
                    </a>
                    <a
                        href="/users"
                        className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ml-2"
                    >
                        Go to Users Dashboard
                    </a>
                </div>
            </div>
        </main>
    );
}
