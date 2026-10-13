import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Cocktail Bar in Andheri | Waikiki Experience",
  description:
    "Looking for the best cocktail bar in Andheri? Discover handcrafted cocktails, tropical vibes, and an unforgettable nightlife experience at Waikiki.",
  alternates: {
    canonical: "https://waikikiexperience.com/best-cocktail-bar-in-andheri",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://waikikiexperience.com/best-cocktail-bar-in-andheri",
    siteName: "Waikiki Experience",
    title: "Best Cocktail Bar in Andheri | Waikiki Experience",
    description:
      "Looking for the best cocktail bar in Andheri? Discover handcrafted cocktails, tropical vibes, and an unforgettable nightlife experience at Waikiki.",
    images: [
      {
        url: "/new/Waikiki_035.webp",
        width: 1200,
        height: 630,
        alt: "Best Cocktail Bar in Andheri — Waikiki Handcrafted Cocktails",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Cocktail Bar in Andheri | Waikiki Experience",
    description:
      "Looking for the best cocktail bar in Andheri? Discover handcrafted cocktails, tropical vibes, and an unforgettable nightlife experience at Waikiki.",
    images: ["/new/Waikiki_035.webp"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which is the best cocktail bar in Andheri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki is one of the best cocktail bars in Andheri, known for its handcrafted cocktails, tropical ambience, premium hospitality, and vibrant nightlife.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a cocktail bar different from a regular bar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A cocktail bar focuses on expertly crafted drinks made with premium spirits, fresh ingredients, creative recipes, and professional mixology techniques.",
      },
    },
    {
      "@type": "Question",
      name: "Does Waikiki offer handcrafted cocktails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Waikiki serves a curated selection of handcrafted cocktails prepared using premium ingredients, fresh fruits, herbs, and innovative flavor combinations.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waikiki suitable for parties and celebrations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Waikiki is an ideal venue for birthdays, anniversaries, corporate gatherings, weekend outings, and casual celebrations with friends.",
      },
    },
    {
      "@type": "Question",
      name: "Does Waikiki serve food along with cocktails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Guests can enjoy globally inspired cuisine that pairs perfectly with the restaurant's handcrafted cocktail menu.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Andheri popular for nightlife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Andheri is one of Mumbai's leading entertainment hubs, offering premium restaurants, bars, lounges, and live entertainment, making it a favorite destination for nightlife enthusiasts.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Waikiki for cocktails in Andheri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki combines signature cocktails, tropical-inspired interiors, premium service, delicious cuisine, and a lively atmosphere, creating a complete nightlife experience.",
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
