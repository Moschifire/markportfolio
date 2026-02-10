import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { contactInfo } from "../data/projects";

export const metadata: Metadata = {
  title: {
    default: `${contactInfo.name} | Full-Stack Developer`,
    template: `%s | ${contactInfo.name}`
  },
  description: "Specializing in luxury e-commerce (AURAÉ), secure testing platforms, and industrial landing pages.",
  keywords: ["Full-stack Developer", "Next.js", "React", "Portfolio", "AURAÉ Luxury", "SEMAFC", "Software Engineer"],
  authors: [{ name: contactInfo.name }],
  creator: contactInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://markportfolio-delta.vercel.app/",
    title: `${contactInfo.name} | Portfolio`,
    description: "Showcasing Aurae, SEMAFC, and advanced web applications.",
    siteName: `${contactInfo.name} Portfolio`,
    images: [
      {
        url: "/og-image.png", // Create a 1200x630 image and put it in public/
        width: 1200,
        height: 630,
        alt: `${contactInfo.name} Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${contactInfo.name} | Portfolio`,
    description: "Full-stack solutions for security, luxury, and industry.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico", // Ensure you have a favicon in your public folder
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}