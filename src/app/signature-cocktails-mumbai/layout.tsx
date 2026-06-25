import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signature Cocktails Mumbai | Waikiki Andheri East",
  description:
    "Discover signature cocktails Mumbai loves at Waikiki. Experience premium mixology, tiki-inspired vibes, and one of the best cocktail bars in Andheri East.",
  alternates: {
    canonical: "https://waikikiexperience.com/signature-cocktails-mumbai",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://waikikiexperience.com/signature-cocktails-mumbai",
    siteName: "Waikiki Experience",
    title: "Signature Cocktails Mumbai | Waikiki Andheri East",
    description:
      "Discover signature cocktails Mumbai loves at Waikiki. Experience premium mixology, tiki-inspired vibes, and one of the best cocktail bars in Andheri East.",
    images: [
      {
        url: "/new/Waikiki_035.jpg",
        width: 1200,
        height: 630,
        alt: "Signature Cocktails Mumbai — Waikiki Tiki Cocktail Bar Andheri East",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature Cocktails Mumbai | Waikiki Andheri East",
    description:
      "Discover signature cocktails Mumbai loves at Waikiki. Experience premium mixology, tiki-inspired vibes, and one of the best cocktail bars in Andheri East.",
    images: ["/new/Waikiki_035.jpg"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I find the best signature cocktails in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki offers a curated menu of signature cocktails crafted using premium ingredients, innovative techniques, and tropical inspirations, making it a popular destination for cocktail enthusiasts.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Waikiki a unique Tiki Cocktails Bar in Andheri East Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki combines tropical-inspired interiors, handcrafted cocktails, vibrant music, and exceptional hospitality to create a distinctive tiki-style experience in Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Waikiki considered one of the best cocktail bars in Andheri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guests appreciate Waikiki for its creative cocktail menu, energetic atmosphere, premium beverage selection, and memorable nightlife experience.",
      },
    },
    {
      "@type": "Question",
      name: "Does Waikiki serve food along with cocktails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Waikiki offers a thoughtfully curated food menu designed to complement its signature cocktails and enhance the overall dining experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waikiki suitable for celebrations and private gatherings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Waikiki is a popular choice for birthdays, anniversaries, corporate gatherings, and social celebrations thanks to its lively ambiance and premium hospitality.",
      },
    },
    {
      "@type": "Question",
      name: "What types of cocktails can guests expect at Waikiki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guests can enjoy tropical creations, modern classics, innovative house specials, and expertly crafted signature cocktails designed for a variety of tastes.",
      },
    },
    {
      "@type": "Question",
      name: "Is advance table booking recommended at Waikiki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, reservations are recommended, especially on weekends and special event nights, to ensure the best experience.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Waikiki recognized among the best cocktail bars in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki combines exceptional mixology, immersive ambiance, quality service, and memorable guest experiences, making it a preferred destination for cocktail lovers across Mumbai.",
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
