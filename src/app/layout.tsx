import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    absolute: config.blog.metadata.title.absolute,
    default: config.blog.metadata.title.default,
    template: config.blog.metadata.title.template,
  },
  description: config.blog.metadata.description,
  keywords: [
    "Herman AKUE",
    "MANOS TOURS",
    "guide touristique Bénin",
    "voyage Afrique de l'Ouest",
    "tourisme Togo",
    "voyage Ghana",
    "Cotonou",
    "Grand-Popo",
    "culture africaine",
    "guide professionnel"
  ],
  authors: [{ name: "Herman AKUE" }],
  creator: "Herman AKUE",
  publisher: "MANOS TOURS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(config.baseUrl),
  alternates: {
    canonical: config.baseUrl,
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: config.baseUrl,
    siteName: config.blog.name,
    title: config.blog.metadata.title.default,
    description: config.blog.metadata.description,
    images: [
      {
        url: signOgImageUrl({
          title: config.blog.name,
        }),
        width: 1200,
        height: 630,
        alt: config.blog.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.blog.metadata.title.default,
    description: config.blog.metadata.description,
    creator: "@hermanaakue",
  },
  verification: {
    // Ajoutez ici les codes de vérification Google, Bing, etc. si disponibles
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/manos.jpeg" />
        <link rel="apple-touch-icon" href="/images/manos.jpeg" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-6xl m-auto",
          fontSans.variable
        )}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
