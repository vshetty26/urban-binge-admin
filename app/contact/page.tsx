"use client";

import { useState } from "react";
import { collection, addDoc, Timestamp, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { verifyCustomerOrder } from "@/lib/users";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaExclamationCircle, FaCheckCircle } from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [verifying, setVerifying] = useState(false);
    const [orderVerified, setOrderVerified] = useState(false);
    const [orderId, setOrderId] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleVerifyOrder = async () => {
        if (!formData.phone) {
            setError("Please enter your phone number first");
            return;
        }

        setVerifying(true);
        setError("");

        try {
            const foundOrderId = await verifyCustomerOrder(formData.phone);
            
            if (!foundOrderId) {
                setError("No orders found with this phone number. Please place an order first to submit your details.");
                setOrderVerified(false);
                setOrderId(null);
            } else {
                setOrderVerified(true);
                setOrderId(foundOrderId);
                setError("");
            }
        } catch (err) {
            console.error("Error verifying order:", err);
            setError("Error verifying order. Please try again.");
            setOrderVerified(false);
        } finally {
            setVerifying(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!orderVerified || !orderId) {
            setError("Please verify your order first");
            return;
        }

        setLoading(true);

        try {
            // Validate required fields
            if (!formData.name || !formData.email || !formData.phone) {
                setError("Please fill in all required fields");
                setLoading(false);
                return;
            }

            console.log("📤 Submitting user data:", {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                orderId: orderId,
                isExported: false,
                createdAt: new Date().toISOString()
            });

            // Check if user already exists for this phone number
            const existingUserQuery = query(
                collection(db, "users"),
                where("phone", "==", formData.phone)
            );
            const existingSnapshot = await getDocs(existingUserQuery);

            let docRef;
            if (!existingSnapshot.empty) {
                // Update existing user
                const existingUserId = existingSnapshot.docs[0].id;
                await updateDoc(doc(db, "users", existingUserId), {
                    name: formData.name,
                    email: formData.email,
                    address: formData.address || "",
                    city: formData.city || "",
                    message: formData.message || "",
                    orderId: orderId,
                    isExported: false
                });
                console.log("✅ User updated successfully with ID:", existingUserId);
                docRef = { id: existingUserId };
            } else {
                // Create new user
                docRef = await addDoc(collection(db, "users"), {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address || "",
                    city: formData.city || "",
                    message: formData.message || "",
                    orderId: orderId,
                    createdAt: Timestamp.now(),
                    isExported: false
                });
                console.log("✅ User created successfully with ID:", docRef.id);
            }

            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                address: "",
                city: "",
                message: ""
            });
            setOrderVerified(false);
            setOrderId(null);

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            console.error("❌ Error submitting form:", err);
            setError("Error submitting form. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="text-3xl font-bold text-orange-600">🍜</div>
                        <h1 className="text-2xl font-bold text-gray-900">Urban Binge</h1>
                    </div>
                    <p className="text-gray-600">Pure Veg | Indian | Asian</p>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                            <p className="text-gray-600 text-lg">
                                Have questions or want to know more about Urban Binge? Fill out the form and we'll get back to you soon!
                            </p>
                            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <p className="text-sm text-blue-800">
                                    <strong>Note:</strong> You must have placed an order with us to submit your details. We verify your phone number against our order history.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                                        <FaPhone className="text-lg" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                                    <p className="text-gray-600 mt-1">+91 79001 98888</p>
                                    <p className="text-gray-600">+91 7385554255</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                                        <FaEnvelope className="text-lg" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                    <p className="text-gray-600 mt-1">contact@urbanbinge.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                                        <FaMapMarkerAlt className="text-lg" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Location</h3>
                                    <p className="text-gray-600 mt-1">Mumbai, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                            <p className="text-sm text-gray-700">
                                <strong>Free Home Deliveries!</strong> Order now and enjoy our delicious food at your doorstep.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-12">
                                <div className="text-5xl mb-4">✅</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                <p className="text-gray-600 text-center">
                                    We've received your information and will contact you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h3>

                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                                        <FaExclamationCircle className="mt-0.5 flex-shrink-0" />
                                        <span>{error}</span>
                                    </div>
                                )}

                                {orderVerified && (
                                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                                        <FaCheckCircle className="mt-0.5 flex-shrink-0" />
                                        <span>Order verified! You can now submit your details.</span>
                                    </div>
                                )}

                                {/* Phone - Verification Step */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone <span className="text-red-600">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your phone number"
                                            disabled={orderVerified}
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition disabled:bg-gray-100"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleVerifyOrder}
                                            disabled={!formData.phone || verifying || orderVerified}
                                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                                        >
                                            {verifying ? "Verifying..." : orderVerified ? "Verified" : "Verify"}
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">
                                        We'll check if you've placed an order with this number
                                    </p>
                                </div>

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        disabled={!orderVerified}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition disabled:bg-gray-100"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        disabled={!orderVerified}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition disabled:bg-gray-100"
                                    />
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Street address (optional)"
                                        disabled={!orderVerified}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition disabled:bg-gray-100"
                                    />
                                </div>

                                {/* City */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="City (optional)"
                                        disabled={!orderVerified}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition disabled:bg-gray-100"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us more... (optional)"
                                        rows={4}
                                        disabled={!orderVerified}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none disabled:bg-gray-100"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading || !orderVerified}
                                    className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    {loading ? "Submitting..." : "Send Message"}
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    We'll get back to you within 24 hours.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
