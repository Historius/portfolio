import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Nav from "@/components/Nav";
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
  title: { default: "Serhii Stets", template: "%s | Serhii Stets" },
  description: "Portfolio",
  openGraph: {
    title: "Serhii Stets",
    description: "Fullstack developer portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-10 border-b border-border bg-background/70 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold tracking-tight">
              Serhii<span className="text-accent">.</span>Stets
            </Link>
            <Nav />
          </div>
        </header>
        <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
