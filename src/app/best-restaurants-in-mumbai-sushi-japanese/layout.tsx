import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Restaurants in Mumbai for Sushi, Japanese & Cocktails",
  description:
    "Explore the best restaurants in Mumbai for sushi, Japanese cuisine and cocktails. Visit Waikiki for Pan Asian dining, nightlife and signature tiki drinks.",
  alternates: {
    canonical: "https://waikikiexperience.com/best-restaurants-in-mumbai-sushi-japanese",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://waikikiexperience.com/best-restaurants-in-mumbai-sushi-japanese",
    siteName: "Waikiki Experience",
    title: "Best Restaurants in Mumbai for Sushi, Japanese & Cocktails",
    description:
      "Explore the best restaurants in Mumbai for sushi, Japanese cuisine and cocktails. Visit Waikiki for Pan Asian dining, nightlife and signature tiki drinks.",
    images: [
      {
        url: "/new/Waikiki_028.jpg",
        width: 1200,
        height: 630,
        alt: "Best restaurants in Mumbai for sushi and Japanese cuisine — Waikiki Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Restaurants in Mumbai for Sushi, Japanese & Cocktails",
    description:
      "Explore the best restaurants in Mumbai for sushi, Japanese cuisine and cocktails. Visit Waikiki.",
    images: ["/new/Waikiki_028.jpg"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which are the best restaurants in Mumbai for sushi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Several Pan Asian restaurants serve sushi, sashimi and Japanese dishes. Waikiki offers sushi along with cocktails and nightlife.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find a Japanese restaurant in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Japanese cuisine is available across Mumbai, especially in premium dining venues offering sushi and Pan Asian menus.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a sushi restaurant in Mumbai stand out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fresh ingredients, creative rolls, ambiance, cocktails and service define the best sushi restaurants.",
      },
    },
    {
      "@type": "Question",
      name: "Are there luxury dining restaurants in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many restaurants offer premium ambiance, curated menus and signature cocktails for luxury dining experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Which restaurants in Mumbai offer sushi and nightlife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Restaurants that combine Pan Asian cuisine, sushi and DJ nights provide a complete experience. Waikiki is one such destination.",
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
