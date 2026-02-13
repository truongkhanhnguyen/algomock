import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "AlgoMock - AI Trading Code Generator",
  description: "Natural Language to PineScript and MQL5. Build trading strategies in seconds, not hours.",
  keywords: ["trading", "algorithmic trading", "pinescript", "mql5", "AI", "code generation"],
  openGraph: {
    title: "AlgoMock - AI Trading Code Generator",
    description: "Turn trading ideas into executable code in seconds",
    type: "website",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0b0f19]`}
      >
        {children}
      </body>
    </html>
  );
}
