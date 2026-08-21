import { Outfit, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import CustomCursor from "@/components/CustomCursor";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Grace — Product Designer",
    template: "%s",
  },
  description: "Portfolio of Grace, a Product Designer who makes complexity feel invisible.",
  openGraph: {
    title: "Grace — Product Designer",
    description: "Portfolio of Grace, a Product Designer who makes complexity feel invisible.",
    siteName: "Grace Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace — Product Designer",
    description: "Portfolio of Grace, a Product Designer who makes complexity feel invisible.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} ${playfair.variable}`} suppressHydrationWarning>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
