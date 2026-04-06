import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A2Z Nexus Consultancy | Enterprise Solutions & Digital Transformation",
  description:
    "From AI to Investment — We Build Every Solution Your Business Needs. Software development, AI automation, legal advisory, financial consulting, and more. Based in Bangladesh, serving globally.",
  keywords: [
    "consultancy", "software development", "AI solutions", "Bangladesh",
    "enterprise", "digital transformation", "fintech", "legal advisory",
    "investment consulting", "study abroad"
  ],
  openGraph: {
    title: "A2Z Nexus Consultancy | Enterprise Solutions & Digital Transformation",
    description: "Software. Legal. Finance. AI. Advisory. Operations. One strategic partner.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body
        className="min-h-screen flex flex-col"
        style={{
          background: "var(--color-bg-primary)",
          color: "var(--color-text-primary)",
          fontFamily: "var(--font-body)",
        }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
