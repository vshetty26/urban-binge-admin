"use client";

import { useState, useEffect } from "react";
import { 
    subscribeToVisibleUsers,
    subscribeToOrdersAndSyncUsers,
    getUsersByTimeRange,
    markUsersAsExported,
    exportUsersToCSV,
    downloadCSV,
    UserData 
} from "@/lib/users";
import { FaUsers, FaUser, FaPhone, FaAt, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import AdminNavbar from "@/components/AdminNavbar";
import StoreStatusToggle from "@/components/StoreStatusToggle";

type FilterType = "all" | "7days" | "1month" | "1week";

export default function UsersPage() {
    const [visibleUsers, setVisibleUsers] = useState<UserData[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);
    const [loading, setLoading] = useState(true);
    const [exporting, setExporting] = useState(false);
    const [filter, setFilter] = useState<FilterType>("all");

    // Subscribe to visible users (24-hour rule) and sync orders to users
    useEffect(() => {
        // Subscribe to orders and auto-create users from them
        const unsubOrders = subscribeToOrdersAndSyncUsers();
        
        // Subscribe to visible users (24-hour rule)
        const unsubUsers = subscribeToVisibleUsers((data) => {
            setVisibleUsers(data);
            setFilteredUsers(data);
            setLoading(false);
        });
        
        return () => {
            unsubOrders();
            unsubUsers();
        };
    }, []);

    // Apply filter when filter changes
    useEffect(() => {
        const applyFilter = async () => {
            if (filter === "all") {
                setFilteredUsers(visibleUsers);
            } else {
                let days = 7;
                if (filter === "1week") days = 7;
                else if (filter === "1month") days = 30;
                else if (filter === "7days") days = 7;

                const filtered = await getUsersByTimeRange(days);
                // Only show users that are not exported and within 24 hours
                const now = Date.now();
                const visible = filtered.filter((user) => {
                    if (!user.createdAt || user.isExported) return false;
                    const ageInHours = (now - user.createdAt.seconds * 1000) / (1000 * 60 * 60);
                    return ageInHours < 24;
                });
                setFilteredUsers(visible);
            }
        };
        applyFilter();
    }, [filter, visibleUsers]);

    const handleExport = async () => {
        if (filteredUsers.length === 0) {
            alert("No users to export");
            return;
        }

        if (!confirm(`Export ${filteredUsers.length} user(s)?`)) {
            return;
        }

        setExporting(true);
        try {
            // Generate CSV
            const csv = exportUsersToCSV(filteredUsers);
            const timestamp = new Date().toISOString().split("T")[0];
            downloadCSV(csv, `urban-binge-users-${timestamp}.csv`);

            // Mark as exported (but keep visible in dashboard)
            const userIds = filteredUsers.map((u) => u.id!).filter(Boolean);
            await markUsersAsExported(userIds);

            alert("Users exported successfully!");
            // Users remain visible - no need to clear filtered view
        } catch (error) {
            console.error("Export error:", error);
            alert("Error exporting users");
        } finally {
            setExporting(false);
        }
    };

    const getFilterLabel = () => {
        switch (filter) {
            case "7days":
                return "Last 7 Days";
            case "1week":
                return "Last Week";
            case "1month":
                return "Last Month";
            default:
                return "All (24 Hours)";
        }
    };

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <FaUsers className="text-blue-600 text-xl" />
                        <div>
                            <h1 className="text-lg font-bold text-gray-900">Urban Binge Admin</h1>
                            <p className="text-xs text-gray-400">User Management</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <StoreStatusToggle />
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{filteredUsers.length} visible</p>
                            <p className="text-xs text-gray-400">24-hour window</p>
                        </div>
                    </div>
                </div>
            </header>

            <AdminNavbar />

            {/* Filter and Export Section */}
            <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setFilter("all")}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                                    filter === "all"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                All (24h)
                            </button>
                            <button
                                onClick={() => setFilter("7days")}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                                    filter === "7days"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                Last 7 Days
                            </button>
                            <button
                                onClick={() => setFilter("1week")}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                                    filter === "1week"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                Last Week
                            </button>
                            <button
                                onClick={() => setFilter("1month")}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                                    filter === "1month"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                Last Month
                            </button>
                        </div>
                        <button
                            onClick={handleExport}
                            disabled={filteredUsers.length === 0 || exporting}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                        >
                            <FaDownload size={14} />
                            {exporting ? "Exporting..." : `Export (${filteredUsers.length})`}
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <p className="text-gray-500 font-medium">Loading users...</p>
                    </div>
                ) : filteredUsers.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm mt-4">
                        <FaUsers className="text-5xl text-gray-300 mx-auto mb-4" />
                        <h2 className="text-xl font-bold text-gray-700 mb-2">No users in this period</h2>
                        <p className="text-gray-500">
                            {filter === "all"
                                ? "Users appear here for 24 hours after submission. After that, they're archived but still in the database."
                                : `No users found in the selected time range.`}
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-4 mt-6">
                        {filteredUsers.map((user) => (
                            <div key={user.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-3 border-b border-gray-100 pb-3">
                                    <div className="space-y-2 flex-1">
                                        <div className="flex items-center gap-2">
                                            <FaUser className="text-gray-400" />
                                            <span className="font-bold text-gray-900">{user.name}</span>
                                            {user.isExported && (
                                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
                                                    ✓ Exported
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaAt className="text-gray-400" />
                                            <span className="text-sm text-gray-600">{user.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaPhone className="text-gray-400" />
                                            <span className="text-sm text-gray-600">{user.phone}</span>
                                        </div>
                                        {user.address && (
                                            <div className="flex items-center gap-2">
                                                <FaMapMarkerAlt className="text-gray-400" />
                                                <span className="text-sm text-gray-600">
                                                    {user.address}
                                                    {user.city && `, ${user.city}`}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    {user.createdAt && (
                                        <div className="text-right">
                                            <span className="text-xs text-gray-400 whitespace-nowrap bg-gray-50 px-2 py-1 rounded border border-gray-200 block mb-2">
                                                {new Date(user.createdAt.seconds * 1000).toLocaleString("en-IN", {
                                                    dateStyle: "medium",
                                                    timeStyle: "short"
                                                })}
                                            </span>
                                            {user.orderId && (
                                                <span className="text-xs text-purple-600 font-medium block mb-1">
                                                    Order: {user.orderId.substring(0, 8)}...
                                                </span>
                                            )}
                                            <span className="text-xs text-blue-600 font-medium">
                                                {(() => {
                                                    const now = Date.now();
                                                    const ageInHours = (now - user.createdAt.seconds * 1000) / (1000 * 60 * 60);
                                                    const hoursLeft = Math.max(0, Math.floor(24 - ageInHours));
                                                    return `${hoursLeft}h remaining`;
                                                })()}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                {user.message && (
                                    <div className="mt-3">
                                        <p className="text-gray-700 text-sm whitespace-pre-wrap">{user.message}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
