import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Cocktail Bar in Mumbai | Waikiki Experience",
  description:
    "Discover Waikiki, an island-inspired cocktail destination in Mumbai with Tiki cocktails, Pan-Asian cuisine, rooftop vibes and late-night energy.",
  alternates: {
    canonical: "https://waikikiexperience.com/best-cocktail-bar-in-mumbai",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://waikikiexperience.com/best-cocktail-bar-in-mumbai",
    siteName: "Waikiki Experience",
    title: "Best Cocktail Bar in Mumbai | Waikiki Experience",
    description:
      "Discover Waikiki, an island-inspired cocktail destination in Mumbai with Tiki cocktails, Pan-Asian cuisine, rooftop vibes and late-night energy.",
    images: [
      {
        url: "/new/Waikiki_038.webp",
        width: 1200,
        height: 630,
        alt: "Best Cocktail Bar in Mumbai — Tiki Cocktails at Waikiki",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Cocktail Bar in Mumbai | Waikiki Experience",
    description:
      "Discover Waikiki, an island-inspired cocktail destination in Mumbai with Tiki cocktails, Pan-Asian cuisine, rooftop vibes and late-night energy.",
    images: ["/new/Waikiki_038.webp"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes a cocktail bar one of the best in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standout cocktail bar combines creative mixology, quality ingredients, distinctive ambience, attentive hospitality, good food, and an atmosphere that makes the overall evening memorable.",
      },
    },
    {
      "@type": "Question",
      name: "Where can guests enjoy Tiki cocktails in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guests looking for Tiki cocktails in Mumbai can explore Waikiki in Andheri East. Its island-inspired Tiki bar features tropical and signature cocktails designed around bold, layered flavours.",
      },
    },
    {
      "@type": "Question",
      name: "Which are the best cocktail bars in Andheri East for a night out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best cocktail bars in Andheri East typically combine quality drinks with food, music, ambience, and an engaging nightlife experience. Waikiki offers this combination through its Tiki cocktails, Pan-Asian cuisine, lounge atmosphere, rooftop setting, and late-night experience.",
      },
    },
    {
      "@type": "Question",
      name: "What are Tiki cocktails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tiki cocktails are tropical-style drinks traditionally associated with Polynesian-inspired bar culture. They often use rum or other spirits alongside citrus, tropical fruits, spices, syrups, bitters, and creative presentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can guests enjoy dinner and cocktails at the same place in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Waikiki combines Pan-Asian and Polynesian-inspired dining with a dedicated Tiki cocktail experience, allowing guests to enjoy dinner, drinks, music, and nightlife in one destination.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waikiki suitable for dates, celebrations and group outings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Its combination of dining, cocktails, music, tropical interiors, rooftop space, and late-night atmosphere makes it suitable for date nights, birthdays, group gatherings, celebrations, and casual evenings out.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Waikiki located in Mumbai?",
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
