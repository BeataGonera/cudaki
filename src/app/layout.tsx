import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cudaki",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <ThemeModeScript />
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
