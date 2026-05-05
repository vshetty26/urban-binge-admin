import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import AudioNotification from "@/components/AudioNotification";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Urban Binge Admin | Order Management",
    description: "Admin portal for managing Urban Binge restaurant orders and menu.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                <AuthProvider>
                    <AudioNotification />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
