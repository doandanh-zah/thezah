import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import NoiseOverlay from "@/components/NoiseOverlay";
import LoadingScreen from "@/components/LoadingScreen";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Zah | Solana Developer Portfolio",
  description: "Đoàn Đỗ Thành Danh (Zah) - Passionate Solana Buidler, Blockchain Developer, and Community Builder. Building decentralized applications on Solana.",
  keywords: ["Solana", "Blockchain", "Web3", "Developer", "Anchor", "Rust", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Đoàn Đỗ Thành Danh", url: "https://github.com/lilzahs" }],
  icons: {
    icon: "/assets/zahnft.png",
    apple: "/assets/zahnft.png",
  },
  openGraph: {
    title: "Zah | Solana Developer Portfolio",
    description: "Passionate Solana Buidler, Blockchain Developer, and Community Builder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zah | Solana Developer Portfolio",
    description: "Passionate Solana Buidler, Blockchain Developer, and Community Builder",
    creator: "@doandanh_zah",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-black text-pure-white antialiased">
        <LanguageProvider>
          <LoadingScreen />
          <CustomCursor />
          <NoiseOverlay />
          <Navbar />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
