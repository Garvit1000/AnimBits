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
  title: "Animbits - Animation Registry for UI",
  description: "Production-ready animation components for React",
  openGraph: {
    title: "Animbits - Animation Registry for UI",
    description: "Production-ready animation components for React",
    images: ["/animbits.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animbits - Animation Registry for UI",
    description: "Production-ready animation components for React",
    images: ["/animbits.png"],
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
