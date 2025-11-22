import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Samar",
  description: "Full‑stack Engineer — Next.js, React, TypeScript, React Native,Node.js",
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
      <head>
        {/* put this in the <head> */}
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
            data-enabled="true"
          />
        )}
        {/* rest of your scripts go under */}
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
