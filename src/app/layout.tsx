import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Mono, DM_Sans, Fjalla_One } from "next/font/google";
import "./globals.css";

const aeonik = localFont({
  src: [
    { path: "./fonts/Aeonik-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Aeonik-Medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

const aeonikFono = localFont({
  src: [{ path: "./fonts/AeonikFono-Regular.woff", weight: "400", style: "normal" }],
  variable: "--font-aeonik-fono",
  display: "swap",
});

const fkScreamer = localFont({
  src: [{ path: "./fonts/FKScreamer-Upright.otf", weight: "500", style: "normal" }],
  variable: "--font-screamer",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const fjallaOne = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fjalla",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arbitrum.io"),
  title: "Arbitrum - Powering the programmable economy",
  description:
    "Arbitrum is the finance-native blockchain platform providing infrastructure for applications, tokenization, and dedicated blockchain environments.",
  icons: {
    icon: [
      { url: "/seo/favicon.ico", sizes: "64x64" },
      { url: "/seo/icon.ico", sizes: "64x64" },
    ],
    apple: [{ url: "/seo/apple-icon.png", sizes: "64x64" }],
  },
  openGraph: {
    title: "Arbitrum - Powering the programmable economy",
    description:
      "Arbitrum is the finance-native blockchain platform providing infrastructure for applications, tokenization, and dedicated blockchain environments.",
    images: [{ url: "/seo/opengraph-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${aeonik.variable} ${aeonikFono.variable} ${fkScreamer.variable} ${dmMono.variable} ${dmSans.variable} ${fjallaOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black font-medium selection:bg-[#10e1ff]">
        {children}
      </body>
    </html>
  );
}
