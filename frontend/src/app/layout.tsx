import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme';
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/swiper-bundle.css"; 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IZAFA TECH",
  description: "IOS Courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>

  );
}
