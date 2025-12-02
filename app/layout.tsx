import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Excel Rapidtech - 3D Printing",
  description: "Fast & Precise 3D Printing Services in NCR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17723386843" />
        <Script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17723386843');
  `}
        </Script>
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3LEHRDMCHB" />
        <Script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3LEHRDMCHB');
  `}
        </Script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript)  */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M2NBP8MX"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* End Google Tag Manager (noscript)  */}
        {children}
        <GoogleTagManager gtmId="GTM-M2NBP8MX" />
        <GoogleAnalytics gaId="G-3LEHRDMCHB" />
        <CookieConsent />
      </body>
    </html>
  );
}
