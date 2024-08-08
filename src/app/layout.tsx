import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import Starfield from '../components/starsBackground';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from 'next/head';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: '400', variable: '--font-plus-jakarta-sans' })

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danial Amin",
  description: "Danial Amin's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>
      <body className={`${inter.className} ${plusJakartaSans.variable} plus-jakarta-sans min-h-[155vh] flex flex-col bg-[black] text-white`}>
        <Header />
        {children}  
        <Footer />
      </body>
      <Starfield starCount={2000} starColor={[255, 255, 255]} speedFactor={0.05} backgroundColor="black"/>
    </html>
  );
}
