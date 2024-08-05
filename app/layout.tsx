
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "spaceport",
  description: "The portal to Abidi's space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <StarsCanvas/>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
