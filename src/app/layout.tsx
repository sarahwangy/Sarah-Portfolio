import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sarah Wang — Full Stack Engineer",
  description: "I build warm, useful AI-powered personal tools.",
  openGraph: {
    title: "Sarah Wang — Full Stack Engineer",
    description: "I build warm, useful AI-powered personal tools.",
    url: "https://sarah.dev",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Wang — Full Stack Engineer",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
