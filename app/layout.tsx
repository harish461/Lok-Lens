import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-devanagari",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Lok Lens News | निष्पक्ष, सटीक और विश्वसनीय | Latest National, World & Business News",
  description:
    "Lok Lens News delivers authoritative breaking news, political analysis, financial markets, technology insights, sports and editorial perspectives from India and across the globe.",
  keywords: [
    "Lok Lens News",
    "लोक लेंस न्यूज़",
    "Hindi News",
    "India Breaking News",
    "National News",
    "Politics",
    "Business",
    "Technology",
    "Sports",
  ],
  authors: [{ name: "Lok Lens News Editorial Bureau" }],
  icons: {
    icon: "/images/loklens-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoDevanagari.variable} antialiased`}>
      <body className="min-h-screen bg-[#F7F8FA] text-[#555555] flex flex-col font-sans selection:bg-[#D71920] selection:text-white">
        {children}
      </body>
    </html>
  );
}
