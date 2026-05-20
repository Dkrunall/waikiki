import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Waikiki Experience | Best Hawaiian Restaurant & Tiki Bar in Andheri East, Mumbai",
  description:
    "Waikiki — Mumbai's finest Hawaiian restaurant & tiki bar in Andheri East, by Peninsula Hospitality Group. Chef Kai's Pan-Asian & Polynesian cuisine, exotic sushi, signature tiki cocktails (Powhiri Picante, Luau), rooftop lounge & nightly DJ. Hotel Peninsula Grand, Saki Naka. Open Tue–Sun 6 PM–3 AM.",
  keywords: [
    // Original keywords
    "restaurants in Andheri East",
    "Japanese restaurant in Mumbai",
    "best restaurants in Mumbai",
    "top restaurants in Andheri East",
    "bars in Andheri East",
    "best bar in Mumbai",
    "best sushi in Mumbai",
    "best Japanese restaurant in Mumbai",
    "nightlife in Mumbai",
    "sushi restaurant Mumbai",
    "best cocktail bar in Mumbai",
    "pubs in Andheri Mumbai",
    "pan Asian restaurant in Mumbai",
    "late night bars in Andheri East Mumbai",
    "best cocktail bar in Andheri East Mumbai",
    "party places in Andheri Mumbai",
    "luxury dining experience Mumbai",
    "signature cocktails Mumbai",
    "best Hawaiian themed restaurant in Mumbai",
    "best rooftop bar in Andheri East Mumbai",
    "tiki cocktails bar in Andheri East Mumbai",
    "best Hawaiian night club in Mumbai",
    "best cocktail bar in Andheri",
    "best bar in Andheri",
    "best oriental restaurant in Mumbai",
    "best Polynesian restaurant in Mumbai",
    "best Pan Asian restaurant Mumbai",
    "best Hawaiian restaurant in Mumbai",
    // New keywords from website content
    "best restaurant in Andheri",
    "best restaurant and bar in Mumbai",
    "best restaurant in Andheri East",
    "Peninsula Hospitality Group restaurant Mumbai",
    "Chef Kai Mumbai",
    "Hawaiian cuisine Mumbai",
    "Polynesian cuisine Mumbai",
    "island inspired restaurant Mumbai",
    "rooftop restaurant Andheri East",
    "rooftop lounge Mumbai",
    "rooftop terrace restaurant Mumbai",
    "rooftop bar Andheri",
    "private events venue Mumbai",
    "private dining Mumbai",
    "intimate dining Mumbai",
    "Mumbai weekend events",
    "Mumbai weekend plans",
    "food and music festival Mumbai",
    "cigar lounge Mumbai",
    "tropical sushi Mumbai",
    "Hawaiian dining experience Mumbai",
    "high energy lounge Mumbai",
    "island inspired decor restaurant Mumbai",
    "Powhiri Picante cocktail Mumbai",
    "Luau cocktail Mumbai",
    "tiki bar Andheri East",
    "DJ bar Andheri East",
    "guest DJ Mumbai",
    "live DJ restaurant Mumbai",
    "Waikiki Mumbai",
    "Waikiki Andheri",
    "tiki bar Mumbai",
    "Hawaiian tiki bar Mumbai",
    "exotic cocktails Mumbai",
    "late night dining Andheri East",
    "tropical restaurant Mumbai",
    "Peninsula Grand restaurant Mumbai",
    "immersive dining Mumbai",
    "Hawaiian inspired restaurant Mumbai",
    "North Pacific cuisine Mumbai",
    "grilled meats restaurant Mumbai",
    "raw seafood restaurant Mumbai",
    "air conditioned restaurant Andheri East",
  ],
  metadataBase: new URL("https://waikikiexperience.com"),
  authors: [{ name: "Waikiki Experience" }],
  creator: "Waikiki Experience",
  publisher: "Peninsula Hospitality Group",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://waikikiexperience.com",
    siteName: "Waikiki Experience",
    title: "Waikiki Experience | Best Hawaiian Restaurant & Tiki Bar in Andheri East, Mumbai",
    description:
      "Mumbai's premier Hawaiian tiki bar & restaurant. Exotic sushi, Pan-Asian cuisine, signature tiki cocktails, and late-night DJ vibes at Hotel Peninsula Grand, Andheri East.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Waikiki Experience — Hawaiian Tiki Bar & Restaurant, Andheri East Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waikiki Experience | Best Hawaiian Restaurant & Tiki Bar in Mumbai",
    description:
      "Escape to a tropical sanctuary in Andheri East. Exotic sushi, tiki cocktails, Pan-Asian cuisine & electrifying nightlife.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://waikikiexperience.com",
  },
  category: "Restaurant & Bar",
};

const websiteJsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Waikiki",
  url: "https://waikikiexperience.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://waikikiexperience.com/{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "BarOrPub", "NightClub"],
  name: "Waikiki Experience",
  description:
    "Established in 2024 by Peninsula Hospitality Group, Waikiki is Mumbai's finest Hawaiian-inspired restaurant, tiki bar and rooftop lounge in Andheri East. Chef Kai's Pan-Asian & Polynesian menu features exotic sushi, grilled meats and raw seafood. Signature cocktails include Powhiri Picante and Luau. Guest DJs nightly. Private events and intimate dining available.",
  url: "https://waikikiexperience.com",
  telephone: "+918150000345",
  email: "mumbaiwaikiki@gmail.com",
  foundingDate: "2024",
  founder: {
    "@type": "Organization",
    name: "Peninsula Hospitality Group",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hotel Peninsula Grand, Lokmanya Tilak Nagar, Saki Naka",
    addressLocality: "Andheri East",
    addressRegion: "Maharashtra",
    postalCode: "400072",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "19.1204722",
    longitude: "72.8732222",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "18:00",
      closes: "03:00",
    },
  ],
  servesCuisine: ["Hawaiian", "Pan-Asian", "Japanese", "Mediterranean", "Polynesian", "Sushi", "Grilled Meats", "Raw Seafood"],
  priceRange: "₹₹₹",
  hasMenu: "https://waikikiexperience.com/#menu",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, UPI",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Tiki Bar", value: true },
    { "@type": "LocationFeatureSpecification", name: "Rooftop Lounge", value: true },
    { "@type": "LocationFeatureSpecification", name: "Live DJ", value: true },
    { "@type": "LocationFeatureSpecification", name: "Cocktail Bar", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private Events", value: true },
    { "@type": "LocationFeatureSpecification", name: "Cigar Lounge", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
  ],
  sameAs: [
    "https://www.instagram.com/waikiki.mumbai",
    "https://www.facebook.com/waikikiexperience",
  ],
};

import FloatingSocials from "@/components/FloatingSocials";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MPWF84RR');`,
          }}
        />
        {/* End Google Tag Manager */}
        <meta name="google-site-verification" content="BbjEDddcbfIEmRZpjT-Cvf1vb0A8KFVASeECiZn3OZM" />
        {/* Preconnect for faster third-party loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2CEG0Y7WBP" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2CEG0Y7WBP');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-beige text-brand-maroon min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPWF84RR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <FloatingSocials />
        {children}
      </body>
    </html>
  );
}
