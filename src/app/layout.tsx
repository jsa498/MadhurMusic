import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import OverlayWarning from "@/components/ui/overlay-warning";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Madhur Gurmat Sangeet Vidyala - Traditional Indian Classical Music Academy",
  description: "Learn traditional Indian classical music at Madhur Gurmat Sangeet Vidyala. Expert instructors, comprehensive courses, and a rich musical heritage.",
  keywords: [
    "Indian Classical Music",
    "Music Academy",
    "Gurmat Sangeet",
    "Music Education",
    "Traditional Music",
    "Music Classes",
    "Indian Music School",
  ],
  authors: [{ name: "Madhur Gurmat Sangeet Vidyala" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mgsvidyala.com",
    title: "Madhur Gurmat Sangeet Vidyala",
    description: "Premier institution for traditional Indian classical music education",
    siteName: "Madhur Gurmat Sangeet Vidyala",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhur Gurmat Sangeet Vidyala",
    description: "Premier institution for traditional Indian classical music education",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "index, follow",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <OverlayWarning />
        <Navbar />
        <main className="min-h-screen pt-24 lg:pt-28">{children}</main>
        <footer className="bg-black border-t border-[#C6A355]/20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#DFB87A]">About Us</h3>
                <p className="text-[#C6A355]">
                  Madhur Gurmat Sangeet Vidyala is dedicated to preserving and teaching traditional Indian classical music.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#DFB87A]">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-[#C6A355] hover:text-[#DFB87A] transition-colors">About</Link></li>
                  <li><Link href="/courses" className="text-[#C6A355] hover:text-[#DFB87A] transition-colors">Courses</Link></li>
                  <li><Link href="/register" className="text-[#C6A355] hover:text-[#DFB87A] transition-colors">Register</Link></li>
                  <li><Link href="/contact" className="text-[#C6A355] hover:text-[#DFB87A] transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#DFB87A]">Contact Info</h3>
                <ul className="space-y-2 text-[#C6A355]">
                  <li>Email: info@mgsvidyala.com</li>
                  <li>Phone: +1 (123) 456-7890</li>
                  <li>Address: Your Location</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#DFB87A]">Follow Us</h3>
                <div className="flex space-x-4">
                  {/* Add social media icons/links here */}
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#C6A355]/20 text-center">
              <p className="text-[#C6A355]">&copy; {new Date().getFullYear()} Madhur Gurmat Sangeet Vidyala. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
