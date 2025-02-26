<<<<<<< HEAD
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';
=======
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/app/_components/navbar/NavigationBar";
import Footer from "./_components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
>>>>>>> origin/main

export const metadata: Metadata = {
  title: 'Classics Revisited',
  description: 'Renovation company website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={cn('mx-auto flex min-h-screen max-w-7xl antialiased')}>
=======
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
>>>>>>> origin/main
        {children}

        <Footer />
      </body>
    </html>
  );
}
