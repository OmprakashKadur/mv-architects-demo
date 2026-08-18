import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { studioInfo } from "@/content/studio";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { MobileStickyBar } from "@/components/common/MobileStickyBar";
import { CustomCursor } from "@/components/common/CustomCursor";
import { SmoothScroll } from "@/components/common/SmoothScroll";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omprakashkadur.github.io/mv-architects-demo"),
  title: {
    default: `Interior Designers in ${studioInfo.location.city} | ${studioInfo.name}`,
    template: `%s | ${studioInfo.name}`,
  },
  description:
    "Award-winning architecture and bespoke luxury interior design studio in Bengaluru. Crafting timeless residences, villas, and penthouses.",
  keywords: [
    "Interior Designers in Bengaluru",
    "Luxury Architects Bangalore",
    "Turnkey Home Interiors Indiranagar",
    "Modern Villa Architecture Bangalore",
    "Bespoke Modular Kitchens Bengaluru",
    "Contemporary Architecture India",
  ],
  authors: [{ name: studioInfo.name, url: "https://omprakashkadur.github.io/mv-architects-demo" }],
  creator: studioInfo.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://omprakashkadur.github.io/mv-architects-demo",
    title: `Interior Designers in ${studioInfo.location.city} | ${studioInfo.name}`,
    description: studioInfo.description,
    siteName: studioInfo.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: `${studioInfo.name} - Luxury Architecture and Interior Design`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Interior Designers in ${studioInfo.location.city} | ${studioInfo.name}`,
    description: studioInfo.description,
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=85"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["InteriorDesigner", "HomeAndConstructionBusiness", "LocalBusiness"],
    name: studioInfo.name,
    description: studioInfo.description,
    url: "https://omprakashkadur.github.io/mv-architects-demo",
    telephone: studioInfo.contact.phone,
    email: studioInfo.contact.email,
    priceRange: "₹₹₹₹",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    address: {
      "@type": "PostalAddress",
      streetAddress: studioInfo.location.address,
      addressLocality: studioInfo.location.city,
      addressRegion: studioInfo.location.state,
      postalCode: studioInfo.location.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: studioInfo.location.coordinates.latitude,
      longitude: studioInfo.location.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Bengaluru" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [studioInfo.contact.instagramUrl],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-[var(--color-charcoal)] bg-[var(--color-bone)] selection:bg-[var(--color-clay)] selection:text-[var(--color-bone)]">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
          <MobileStickyBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
