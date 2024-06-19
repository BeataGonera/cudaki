import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import Footer from "@/components/organisms/Footer";
import Navigation from "@/components/organisms/Navigation";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cudaki",
  description:
    "Naszą misją jest zwiększanie wiedzy, jak również docieranie do grup dzieci i młodzieży, zainteresowanych światem cyfrowym.",
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
      <body className={`${raleway.className}  bg-beige-bg`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
