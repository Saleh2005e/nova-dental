import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova Dental — Gentle Modern Dentistry",
  description: "Nova Dental is a fictional dental clinic concept website.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
