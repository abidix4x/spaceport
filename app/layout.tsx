
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abidi Ben Hassen | Frontend Developer & Software Engineer",
  description: "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Building exceptional digital experiences since 2022. Available for hire.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "TypeScript", "Web Development", "Freelance Developer", "Software Engineer", "Abidi Ben Hassen"],
  authors: [{ name: "Abidi Ben Hassen" }],
  creator: "Abidi Ben Hassen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Abidi Ben Hassen | Frontend Developer & Software Engineer",
    description: "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Building exceptional digital experiences since 2022.",
    siteName: "Abidi Ben Hassen Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abidi Ben Hassen - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abidi Ben Hassen | Frontend Developer & Software Engineer",
    description: "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abidi Ben Hassen",
    jobTitle: "Frontend Developer & Software Engineer",
    url: "https://yourportfolio.com",
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description: "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies.",
    knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Frontend Development", "Web Development"],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
