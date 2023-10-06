import "./globals.css";
import type { Metadata } from "next";
import { Changa } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const changa = Changa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ekkasit.dev",
  description: "Ekkasit.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={changa.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
