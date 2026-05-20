import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Bar in Mumbai | Waikiki Andheri East",
  description:
    "Discover Waikiki, the Best bar in Mumbai for cocktails, nightlife, rooftop vibes, and late-night parties in Andheri East Mumbai.",
  alternates: {
    canonical: "https://waikikiexperience.com/best-bar-in-mumbai",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://waikikiexperience.com/best-bar-in-mumbai",
    siteName: "Waikiki Experience",
    title: "Best Bar in Mumbai | Waikiki Andheri East",
    description:
      "Discover Waikiki, the Best bar in Mumbai for cocktails, nightlife, rooftop vibes, and late-night parties in Andheri East Mumbai.",
    images: [
      {
        url: "/new/Waikiki_033.jpg",
        width: 1200,
        height: 630,
        alt: "Best Bar in Mumbai — Waikiki Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Bar in Mumbai | Waikiki Andheri East",
    description:
      "Discover Waikiki, the Best bar in Mumbai for cocktails, nightlife, rooftop vibes, and late-night parties in Andheri East Mumbai.",
    images: ["/new/Waikiki_033.jpg"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is Waikiki considered one of the best bars in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki offers premium cocktails, lively ambiance, tropical-inspired nightlife, music, and a social atmosphere that creates unforgettable experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waikiki a good late-night bar in Andheri East Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Waikiki is one of the popular late night bars in Andheri East Mumbai for weekend outings, parties, and after-office gatherings.",
      },
    },
    {
      "@type": "Question",
      name: "Does Waikiki serve signature cocktails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Waikiki is known as a best cocktail bar in Andheri East Mumbai because of its handcrafted cocktails and creative drink menu.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waikiki suitable for parties and celebrations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Waikiki is ideal for birthdays, corporate events, social gatherings, and weekend celebrations.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Waikiki a unique Tiki Cocktails Bar in Andheri East Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki combines tropical-inspired décor, vibrant cocktails, music, and stylish nightlife ambience for a refreshing experience.",
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
