import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileNav, Nav, ThirdRow, Footer } from "@/component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dream Makers Hub | DMH",
  description: "Bringing Education to the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
