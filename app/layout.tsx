import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHatText = Red_Hat_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dessert",
  description: "Dessert Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redHatText.className}>{children}</body>
    </html>
  );
}
