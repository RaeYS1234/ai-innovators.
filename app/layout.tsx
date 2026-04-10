import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "AI Innovators - Empowering K-12 Students with Business & AI Skills",
  description: "Teaching K-12 students entrepreneurship, AI tools, ethics, and business skills through innovative programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
      <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

