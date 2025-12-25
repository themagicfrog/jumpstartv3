import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jumpstart v3 - Hack Club",
  description: "Build games, earn prizes. Jan 1 - Feb 1",
  icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: '#142B70' }}>
      <body style={{ backgroundColor: '#142B70', color: 'white' }}>
        {children}
      </body>
    </html>
  );
}
