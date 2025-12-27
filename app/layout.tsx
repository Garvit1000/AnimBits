import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LoadingProvider } from "@/components/loading-provider";
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://animbits.dev"),
  title: "Animbits - The Foundation for Interactive UI",
  description: "A curated suite of animations, hooks, and components. Designed to make your applications feel alive. Copy, paste, and ship premium interfaces.",
  applicationName: "Animbits",
  openGraph: {
    title: "Animbits - The Foundation for Interactive UI",
    description: "A curated suite of animations, hooks, and components. Designed to make your applications feel alive. Copy, paste, and ship premium interfaces.",
    siteName: "Animbits",
    images: ["/animbits.png"],
    type: "website",
    url: "https://animbits.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animbits - The Foundation for Interactive UI",
    description: "A curated suite of animations, hooks, and components. Designed to make your applications feel alive. Copy, paste, and ship premium interfaces.",
    images: ["/animbits.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LoadingProvider>
              {children}
            </LoadingProvider>
          </ThemeProvider>
        </RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
