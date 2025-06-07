// "use client";

import type { Metadata } from "next";
import { Inter, DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { NavBar, Footer } from "@/components";

import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans"
})
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ['300', '400', '500']
})

export const metadata: Metadata = {
  title: {
    default: "Marcanthony Tumminello | React & Next.js Developer",
    template: "%s | Marcanthony Tumminello",
  },
  description:
    "Portfolio site showcasing the work and experience of Marcanthony Tumminello.",
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
    "Marcanthony Tumminello",
  ],
  authors: [{ name: "Marcanthony Tumminello" }],
  creator: "Marcanthony Tumminello",
  openGraph: {
    title: "Marcanthony Tumminello | React & Next.js Developer",
    description:
      "Portfolio site showcasing the work and experience of Marcanthony Tumminello.",
    siteName: "Marcanthony's Portfolio",
    images: [
      {
        url: "/images/cropped-headshot.png",
        width: 1200,
        height: 630,
        alt: "Marcanthony Tumminello",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/MT-logo-bold.png",
  },
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
        className={`${inter.variable} ${dmSans.variable} ${poppins.variable} text-light-color dark:text-dark-color`}
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
