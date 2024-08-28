// "use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar, Footer } from "@/components";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcanthony's Portfolio",
  description: "Created by Marcanthony Tumminello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="mx-auto max-w-[1440px]" lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} text-light-color dark:text-dark-color`}
      >
        <Providers>
          <div className="site-container mx-auto flex min-h-screen max-w-[1440px] flex-col bg-gray-100 md:grid md:grid-cols-main-columns md:grid-rows-[1fr_75px]">
            <NavBar />
            {/* <div className="main-container col-[2/3] "> */}
            <main className="col-[2/3]">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
