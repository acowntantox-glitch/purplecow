import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Purple Cow | The clear-headed way to set up and run a company in the UAE",
  description:
    "Purple Cow combines company formation with genuine accounting and tax expertise — a digital-first business setup and compliance partner for the UAE.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body className="relative min-h-full flex flex-col bg-white text-[var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
