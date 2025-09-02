import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FluidBackground from "@/components/FluidBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geek Room Kiet",
  description: "Official website of Geek Room Kiet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FluidBackground />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
