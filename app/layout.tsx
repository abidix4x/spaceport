
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";


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
    <html lang="en" className="scroll-smooth">
      {/* <link rel="icon" href="/favicon.png" type="image/x-icon" /> */}
      <body
        className={inter.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
