import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({

  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Waikiki Experience | Luxury Tiki Bar & Club Mumbai",
  description: "Experience the ultimate Hawaiian Tiki culture in Mumbai. Pan-Asian & Mediterranean cuisine, exotic cocktails, and late-night vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <body className="bg-brand-beige text-brand-maroon min-h-screen">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
