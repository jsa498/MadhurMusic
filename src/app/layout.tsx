import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Link from "next/link";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Madhur Gurmat Sangeet Vidyala - Traditional Indian Classical Music Academy",
  description: "Learn traditional Indian classical music at Madhur Gurmat Sangeet Vidyala. Expert instructors, comprehensive courses in Gurmat Kirtan, Tanti Saaj, and Tabla. Join our vibrant musical community in Surrey, BC.",
  keywords: [
    "Indian Classical Music",
    "Music Academy",
    "Gurmat Sangeet",
    "Music Education",
    "Traditional Music",
    "Music Classes",
    "Indian Music School",
    "Kirtan Classes",
    "Tabla Classes",
    "Surrey Music School",
    "BC Music Academy",
    "Classical Music Training"
  ],
  authors: [{ name: "Madhur Gurmat Sangeet Vidyala" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mgsvidyala.ca",
    title: "Madhur Gurmat Sangeet Vidyala",
    description: "Premier institution for traditional Indian classical music education",
    siteName: "Madhur Gurmat Sangeet Vidyala",
    images: [
      {
        url: "https://mgsvidyala.ca/logo.png",
        width: 800,
        height: 600,
        alt: "Madhur Gurmat Sangeet Vidyala Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhur Gurmat Sangeet Vidyala",
    description: "Premier institution for traditional Indian classical music education",
    images: ["https://mgsvidyala.ca/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add this
  },
  alternates: {
    canonical: 'https://mgsvidyala.ca'
  }
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
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicSchool",
              "name": "Madhur Gurmat Sangeet Vidyala",
              "description": "Traditional Indian classical music academy offering comprehensive courses in Gurmat Kirtan, Tanti Saaj, and Tabla.",
              "url": "https://mgsvidyala.ca",
              "telephone": "+1 (604) 700-7466",
              "email": "mgsvidyala@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surrey",
                "addressRegion": "BC",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "49.1267",
                "longitude": "-122.8777"
              },
              "sameAs": [
                "https://www.instagram.com/mgsvidyala"
              ],
              "offers": {
                "@type": "Offer",
                "category": "Music Lessons"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-24 lg:pt-28">{children}</main>
        <footer className="bg-black border-t border-[#333333]">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left side - Mission with subtle gradient */}
              <div className="relative group cursor-default">
                <p className="text-gray-200 text-base relative z-10 transition-colors duration-300 group-hover:text-[#DFB87A]">
                  Preserving and teaching traditional Indian classical music.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-[#DFB87A]/0 via-[#DFB87A]/0 to-[#DFB87A]/0 group-hover:via-[#DFB87A]/5 transition-all duration-500 rounded-lg -z-10" />
              </div>

              {/* Right side - Contact & Social */}
              <div className="flex items-center gap-8 mt-6 md:mt-0">
                {/* Contact Links */}
                <div className="flex items-center gap-8">
                  <a 
                    href="mailto:mgsvidyala@gmail.com" 
                    className="text-gray-200 hover:text-[#DFB87A] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    mgsvidyala@gmail.com
                  </a>
                  <a 
                    href="tel:+16047007466" 
                    className="text-gray-200 hover:text-[#DFB87A] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    +1 (604) 700-7466
                  </a>
                </div>

                {/* Instagram with hover effect */}
                <Link 
                  href="https://www.instagram.com/mgsvidyala?igsh=MTVlZGFkY3A0NTFraA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group p-2"
                >
                  <div className="absolute inset-0 bg-[#DFB87A]/0 group-hover:bg-[#DFB87A]/10 rounded-full transition-all duration-300" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-gray-200 group-hover:text-[#DFB87A] transition-colors duration-300"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Copyright with gradient line */}
            <div className="relative mt-6 pt-6 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#333333] to-transparent" />
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Madhur Gurmat Sangeet Vidyala. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
