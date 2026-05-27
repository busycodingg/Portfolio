import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"] 
});

export const metadata = {
  title: "ajay. - Product Designer",
  description: "Portfolio of amajaying - Hybrid Creative based in NIGERIA. Bringing to life through design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
