import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileNav, Nav, ThirdRow, Footer } from "@/component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dream Makers Hub | DMH",
  description: "Bringing Education to the world",
  openGraph: {
    title: "Dream Makers Hub | DMH",
    description: "Bringing Education to the world",
    url: "https://dreammakershub.pages.dev/", // Replace with your actual URL
    images: [
      {
        url: "https://res.cloudinary.com/dtj0krpma/image/upload/v1728693752/Screenshot_2024-10-12_at_1.13.11_AM_qxbxj7.png",
        width: 1200,
        height: 630,
        alt: "Dream Makers Hub Open Graph Image", // Image alt text
      },
    ],
    siteName: "Dream Makers Hub",
  },
  twitter: {
    card: "summary_large_image", // Type of Twitter card
    title: "Dream Makers Hub | DMH",
    description: "Bringing Education to the world",
    images: [
      "https://res.cloudinary.com/dtj0krpma/image/upload/v1728693752/Screenshot_2024-10-12_at_1.13.11_AM_qxbxj7.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* Meta tags will automatically be inserted by Next.js */}</head>
      <body className={inter.className}>
        <div className="mobile-nav">
          <MobileNav />
        </div>
        <Nav />
        <ThirdRow />
        {children}
        <Footer />
      </body>
    </html>
  );
}
