import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata: Metadata = {
  title: "Samar — Full Stack Developer",
  description:
    "Full stack developer building across web, mobile, blockchain, and AI. TypeScript, Rust, Solidity.",
  icons: {
    icon: "/samar_pfp.jpeg",
    apple: "/samar_pfp.jpeg",
  },
  openGraph: {
    images: ["/samar_pfp.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/samar_pfp.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
