import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jennydb.shopandhire.net"),
  title: {
    default: "Jenny Delumen-Buenaobra | Operations & Execution Leader",
    template: "%s | Jenny Delumen-Buenaobra",
  },
  description:
    "Operations and execution leadership focused on diagnosing operational problems, designing stronger operating structures, and carrying improvements through implementation, with practical use of AI where it adds value.",
  alternates: {
    canonical: "https://jennydb.shopandhire.net/",
  },
  authors: [{ name: "Jenny Delumen-Buenaobra", url: "https://jennydb.shopandhire.net/" }],
  creator: "Jenny Delumen-Buenaobra",
  publisher: "Jenny Delumen-Buenaobra",
  category: "Operations leadership",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: "https://jennydb.shopandhire.net/",
    title: "Jenny Delumen-Buenaobra | Operations & Execution Leader",
    description:
      "Operations and execution leadership for stronger operating structures, reliable workflows, clear ownership, and practical AI-enabled operations.",
    siteName: "Jenny Delumen-Buenaobra",
  },
  twitter: {
    card: "summary",
    title: "Jenny Delumen-Buenaobra | Operations & Execution Leader",
    description:
      "Operations and execution leadership for stronger operating structures, reliable workflows, clear ownership, and practical AI-enabled operations.",
  },
  verification: {
    google: "hhyABC3moOr_tzIN5_mD0--gSRh7Yoa9cacA_HNeVqE",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://jennydb.shopandhire.net/#jennifer-delumen-buenaobra",
                  name: "Jenny Delumen-Buenaobra",
                  alternateName: "Jennifer Delumen-Buenaobra",
                  url: "https://jennydb.shopandhire.net/",
                  sameAs: ["https://ph.linkedin.com/in/jennydb"],
                  jobTitle: "Operations and Execution Leader",
                  description:
                    "Operations and execution leader and AI enthusiast focused on operational diagnosis, operating-model design, process improvement, service delivery, accountability, implementation, and practical AI-enabled workflows.",
                  knowsAbout: [
                    "Operations leadership",
                    "Execution systems",
                    "Fractional operations leadership",
                    "Process improvement",
                    "Service delivery operations",
                    "Workflow design",
                    "Standard operating procedures",
                    "Delegation systems",
                    "Management accountability",
                    "Remote team leadership",
                    "AI-enabled operations",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Operations leadership and implementation services",
                    itemListElement: [
                      "Operations diagnostic",
                      "Operations buildout",
                      "Delegation and team readiness",
                      "Fractional operations leadership",
                    ].map((name) => ({
                      "@type": "Offer",
                      itemOffered: { "@type": "Service", name },
                    })),
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://jennydb.shopandhire.net/#website",
                  url: "https://jennydb.shopandhire.net/",
                  name: "Jenny Delumen-Buenaobra",
                  description:
                    "Operations and execution leadership, process improvement, operating structures, implementation, and AI-enabled workflows.",
                  inLanguage: "en",
                  publisher: {
                    "@id": "https://jennydb.shopandhire.net/#jennifer-delumen-buenaobra",
                  },
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://jennydb.shopandhire.net/#profile",
                  url: "https://jennydb.shopandhire.net/",
                  name: "Jenny Delumen-Buenaobra | Operations & Execution Leader",
                  mainEntity: {
                    "@id": "https://jennydb.shopandhire.net/#jennifer-delumen-buenaobra",
                  },
                  isPartOf: { "@id": "https://jennydb.shopandhire.net/#website" },
                  inLanguage: "en",
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
