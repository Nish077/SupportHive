import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Support Hive - support your creators",
  description: "This website is a crowdfunding platform for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]`}
      >
        <SessionWrapper >  {/* Wraps the children with a session check */}
        <Navbar/>
        <div className="min-h-[84vh] ">
        {children}
        </div>
 
        <Footer/>
        </SessionWrapper>
      </body>
    </html>
  );
}
