import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "iSmile Technologies | Turning Ideas Into Software Solutions",
  description: "Optimize & Scale with Seamless Operations & Advanced Infrastructure Management",
  icons: {
    icon: "/ismile/favicon.png",
    shortcut: "/ismile/favicon.png",
    apple: "/ismile/favicon.png",
  },
  openGraph: {
    title: "iSmile Technologies | Turning Ideas Into Software Solutions",
    description: "Optimize & Scale with Seamless Operations & Advanced Infrastructure Management",
    siteName: "iSmile Technologies",
    images: [
      {
        url: "/ismile/icon.svg",
        width: 512,
        height: 512,
        alt: "iSmile Technologies",
      },
    ],
    type: "website",
  },
};

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
