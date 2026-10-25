import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({ src: [
  { path: "../public/fonts/clash-display-regular.woff2", weight: "400" },
  { path: "../public/fonts/clash-display-semibold.woff2", weight: "600" },
], variable: "--font-display", display: "swap" });
const heading = localFont({ src: "../public/fonts/abhaya-libre-extrabold.ttf", variable: "--font-heading", display: "swap" });
const button = localFont({ src: "../public/fonts/abril-fatface.ttf", variable: "--font-button", display: "swap" });
const handwritten = localFont({ src: "../public/fonts/akaya-telivigala.ttf", variable: "--font-handwritten", display: "swap" });

export const metadata: Metadata = {
  title: "Nidhi Chandrakant Rajyaguru | Computer Engineering Student",
  description: "Personal portfolio of Nidhi Chandrakant Rajyaguru, a Computer Engineering student. View projects, skills, education, and get in touch.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${heading.variable} ${button.variable} ${handwritten.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
