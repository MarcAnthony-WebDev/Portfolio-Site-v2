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
    <html className="mx-auto" lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/MT-logo-bold.png"></link>
      </head>
      <body
        className={`${inter.className} text-light-colordark:text-dark-color`}
      >
        <Providers>
          <div className="site-container mx-auto flex min-h-screen flex-col bg-light-bg transition duration-200 dark:bg-dark-bg md:grid md:grid-cols-main-columns md:grid-rows-[1fr_75px]">
            <NavBar />
            {/* <div className="main-container col-[2/3] "> */}
            <main className="col-[2/3] flex min-h-[100dvh] w-full max-w-[1440px] justify-self-center">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
