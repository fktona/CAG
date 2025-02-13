import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Changpeng Zhao's Adopted Goat",
  description: "BNB's very own founder pet - The official home of $B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.className} bg-black overflow-x-hidden text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
