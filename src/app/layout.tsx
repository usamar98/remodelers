import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luxecraftkitchenstudio.com"),
  title: {
    default:
      "LuxeCraft Kitchen Studio | Luxury Kitchen Remodeling & Renovation",
    template: "%s | LuxeCraft Kitchen Studio",
  },
  description:
    "Premium luxury kitchen remodeling, kitchen renovation, custom kitchen cabinets, cabinet refacing, countertop installation, kitchen island installation, and free kitchen design consultation.",
  keywords: [
    "luxury kitchen remodeling",
    "kitchen renovation",
    "kitchen remodeler",
    "custom kitchen cabinets",
    "kitchen design consultation",
    "kitchen remodeling contractor",
    "kitchen island installation",
    "countertop installation",
    "cabinet refacing",
    "full kitchen remodel",
    "modern kitchen renovation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "LuxeCraft Kitchen Studio | Luxury Kitchen Remodeling & Renovation",
    description:
      "A dark luxury kitchen showroom website built to convert premium homeowner leads into consultations and quote requests.",
    url: "/",
    siteName: "LuxeCraft Kitchen Studio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LuxeCraft Kitchen Studio luxury kitchen remodeling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Kitchen Remodeling Designed Around Your Lifestyle",
    description:
      "Book a free kitchen design consultation with LuxeCraft Kitchen Studio.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
