import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from './components/sidebar'
import Header from './components/header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Object Detection",
  description: "A Next.js app for real-time object detection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex antialiased bg-gray-900 text-white`}
      >
        {/* Sidebar */}
        <Sidebar />

        <div className="flex flex-col flex-grow overflow-hidden">
          {/* Header */}
          <Header />
          {/* Main Content */}
          <main className="flex-grow overflow-hidden">{children}</main>
        </div>

        {/* Footer */}
        {/* <footer className="w-full bg-[#11212d] text-white p-4 text-center fixed bottom-0">
      <p className="text-sm">&copy; 2025 AI Assistant Project. All rights reserved.</p>
    </footer> */}
      </body>
    </html>
  );
}
