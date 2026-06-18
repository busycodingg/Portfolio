import { Outfit, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"] 
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Grace Portfolio",
  description: "Portfolio of Grace - a Product Designer I make complexity feel invisible",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} ${playfair.variable}`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
