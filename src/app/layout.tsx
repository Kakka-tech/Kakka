import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kakkatech.com"),
  title: {
    default: "Kakka — Website Design, Branding & Digital Growth",
    template: "%s | Kakka",
  },
  description:
    "Kakka is a digital agency providing website design, development, branding and growth solutions for businesses. Fast delivery, modern UI, and proven results.",

  keywords: [
    "Kakka",
    "Kakkatech",
    "website design Nigeria",
    "web development agency",
    "branding agency",
    "digital marketing Nigeria",
    "business websites",
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Kakka — Website Design & Digital Growth Agency",
    description: "We build modern websites, branding and digital experiences.",
    url: "https://kakkatech.com",
    siteName: "Kakka",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kakka — Your Growth Partner",
    description: "Creative digital solutions for modern businesses.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9FAFB] text-[#131927]`}
      >
        <Header />
        <main className="py-10 bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
