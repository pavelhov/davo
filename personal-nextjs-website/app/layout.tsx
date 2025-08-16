import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Davit Simonyan | Software Engineer",
  description: "Full-stack Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies. Building scalable applications with clean code and exceptional user experiences.",
  keywords: [
    "Davit Simonyan",
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Yerevan",
    "Armenia",
    "European University"
  ],
  authors: [{ name: "Davit Simonyan" }],
  creator: "Davit Simonyan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davitsimonyan.com",
    title: "Davit Simonyan | Software Engineer",
    description: "Full-stack Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies.",
    siteName: "Davit Simonyan Portfolio",
    images: [
      {
        url: "https://davitsimonyan.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Davit Simonyan - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davit Simonyan | Software Engineer",
    description: "Full-stack Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies.",
    creator: "@davitsimonyan",
    images: ["https://davitsimonyan.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://davitsimonyan.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}