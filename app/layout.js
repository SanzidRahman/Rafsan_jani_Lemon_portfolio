import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Mr. Rafsan jani Lemon | Teacher Portfolio",
  description:
    "Professional portfolio of Mr. Rafsan jani Lemon — Professor of Education, researcher, author, and mentor.",
  keywords: [
    "teacher portfolio",
    "education",
    "research",
    "professor",
    "academic",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
