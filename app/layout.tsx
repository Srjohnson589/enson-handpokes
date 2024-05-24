import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

import { Inter, BioRhyme, Space_Grotesk } from 'next/font/google';
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})
 
export const biorhyme = BioRhyme({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-biorhyme'
})

export const space_grotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space'
  })


export const metadata: Metadata = {
  title: "Enson Handpokes",
  description: "Website for Tattoo Artist Enson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${biorhyme.variable} ${space_grotesk.variable}`}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
