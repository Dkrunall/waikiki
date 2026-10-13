import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Japanese Restaurant in Mumbai | Waikiki",
  description:
    "Looking for Japanese food in Mumbai? Discover Waikiki in Andheri East for tropical sushi, Pan-Asian flavours, cocktails and island-inspired dining.",
  alternates: {
    canonical: "https://waikikiexperience.com/best-japanese-restaurant-in-mumbai",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://waikikiexperience.com/best-japanese-restaurant-in-mumbai",
    siteName: "Waikiki Experience",
    title: "Best Japanese Restaurant in Mumbai | Waikiki",
    description:
      "Looking for Japanese food in Mumbai? Discover Waikiki in Andheri East for tropical sushi, Pan-Asian flavours, cocktails and island-inspired dining.",
    images: [
      {
        url: "/new/Waikiki_012.webp",
        width: 1200,
        height: 630,
        alt: "Best Japanese Restaurant in Mumbai — Tropical Sushi at Waikiki",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Japanese Restaurant in Mumbai | Waikiki",
    description:
      "Looking for Japanese food in Mumbai? Discover Waikiki in Andheri East for tropical sushi, Pan-Asian flavours, cocktails and island-inspired dining.",
    images: ["/new/Waikiki_012.webp"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should diners look for when choosing a Japanese restaurant in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diners can consider the freshness of ingredients, quality of sushi, preparation techniques, presentation, menu variety, ambience, service, and the overall dining experience.",
      },
    },
    {
      "@type": "Question",
      name: "Where can guests enjoy sushi in Andheri East?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guests looking for sushi in Andheri East can explore Waikiki, which incorporates tropical sushi and Pan-Asian flavours into its broader island-inspired dining concept.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waikiki a traditional Japanese restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Waikiki is not positioned as a traditional Japanese-only restaurant. It is an island-inspired Pan-Asian and Polynesian restaurant that incorporates tropical sushi and Asian culinary influences into its menu.",
      },
    },
    {
      "@type": "Question",
      name: "What type of cuisine does Waikiki serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki offers Pan-Asian and Polynesian-inspired cuisine, including tropical sushi, seafood, grilled preparations, and other Asian-inspired dishes, complemented by its Tiki cocktail program.",
      },
    },
    {
      "@type": "Question",
      name: "Can guests enjoy sushi and cocktails at the same restaurant in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Waikiki brings tropical sushi and Pan-Asian dining together with handcrafted Tiki and signature cocktails, making it possible to enjoy food and drinks as part of one evening experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waikiki suitable for date nights and group dining?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The combination of tropical interiors, sushi and Pan-Asian dishes, cocktails, music, and different dining spaces makes Waikiki suitable for date nights, group dinners, celebrations, and weekend outings.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Waikiki located in Andheri East?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki is located at Hotel Peninsula Grand in Saki Naka, Andheri East, Mumbai. Guests can contact the venue directly for reservations and enquiries.",
      },
    },
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
