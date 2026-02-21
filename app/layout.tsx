import type { Metadata } from "next";
import { ReactNode } from "react";
import ThemeProvider from "@/components/ThemeProvider";
import TopNav from "@/components/TopNav";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prime Estates",
  description: "Premium real estate demo platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
            <TopNav />

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
