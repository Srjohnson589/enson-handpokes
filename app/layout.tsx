import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav/Nav";

import { Inter, Dosis, Space_Grotesk } from 'next/font/google';
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})
 
const dosis = Dosis({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dosis'
})

const space_grotesk = Space_Grotesk({
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
      <body className={`${inter.variable} ${dosis.variable} ${space_grotesk.variable}`}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
