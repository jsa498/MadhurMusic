import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-24 lg:pt-28">{children}</main>
        <footer className="bg-black/95 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-gray-300">
                  Madhur Gurmat Sangeet Vidyala is dedicated to preserving and teaching traditional Indian classical music.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                  <li><a href="/courses" className="text-gray-300 hover:text-white">Courses</a></li>
                  <li><a href="/register" className="text-gray-300 hover:text-white">Register</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Email: info@mgsvidyala.com</li>
                  <li>Phone: +1 (123) 456-7890</li>
                  <li>Address: Your Location</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {/* Add social media icons/links here */}
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Madhur Gurmat Sangeet Vidyala. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
