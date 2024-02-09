import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sarthak Raina",
  description: "First attempt at making a portfolio",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'sr_icon.png',
        href: 'sr_icon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'sr_icon.png',
        href: 'sr_icon.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
