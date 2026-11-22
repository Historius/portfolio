import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

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
        <div className="mx-auto w-full max-w-3xl px-4 py-8">
          <Nav />
          {children}
          <footer className="mt-12 flex flex-wrap gap-4 border-t border-foreground/20 pt-4 text-sm opacity-80">
            <a
              href="https://github.com/Historius"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://t.me/SerGrey2033"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a href="mailto:stets.2033@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/serhii-stets-068400268/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
