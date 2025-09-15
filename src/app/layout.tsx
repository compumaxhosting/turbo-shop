import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/extras/ClientProvider";

// Only load the font weights you actually need (lighter = faster)
const chakraPetch = Chakra_Petch({
  weight: ["400", "700"], // dropped 300 & 500 unless you really need them
  subsets: ["latin"],
  display: "swap", // improves performance by avoiding invisible text during load
});

export const metadata: Metadata = {
  title: "Turbo Shop",
  description:
    "We specialize in turbocharger rebuilding, replacement, upgrades, and new turbochargers.",
  icons: {
    icon: "/logo-only.png",
    shortcut: "/logo-only.png",
    apple: "/logo-only.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${chakraPetch.className} antialiased`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
