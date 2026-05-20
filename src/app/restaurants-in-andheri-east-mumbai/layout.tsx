import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurants in Andheri East | Waikiki Mumbai",
  description:
    "Explore Waikiki, one of the top Restaurants in Andheri East for Japanese cuisine, cocktails, nightlife, and premium dining experiences in Mumbai.",
  alternates: {
    canonical: "https://waikikiexperience.com/restaurants-in-andheri-east-mumbai",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://waikikiexperience.com/restaurants-in-andheri-east-mumbai",
    siteName: "Waikiki Experience",
    title: "Restaurants in Andheri East | Waikiki Mumbai",
    description:
      "Explore Waikiki, one of the top Restaurants in Andheri East for Japanese cuisine, cocktails, nightlife, and premium dining experiences in Mumbai.",
    images: [
      {
        url: "/new/Waikiki_013.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurants in Andheri East Mumbai — Waikiki Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurants in Andheri East | Waikiki Mumbai",
    description:
      "Explore Waikiki, one of the top Restaurants in Andheri East for Japanese cuisine, cocktails, nightlife, and premium dining experiences in Mumbai.",
    images: ["/new/Waikiki_013.jpg"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Waikiki one of the popular Restaurants in Andheri East?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Waikiki is known for its lively ambiance, premium dining experience, and vibrant nightlife scene in Andheri East.",
      },
    },
    {
      "@type": "Question",
      name: "Does Waikiki serve Japanese cuisine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki offers Asian-inspired dishes and is a great option for people looking for a modern japanese restaurant in mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Waikiki different from other restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki combines food, music, cocktails, ambience, and hospitality to create a complete social dining experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waikiki good for celebrations and parties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Waikiki is a popular venue for birthdays, corporate gatherings, weekend outings, and special occasions.",
      },
    },
    {
      "@type": "Question",
      name: "Why do people consider Waikiki among the best restaurants in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guests love Waikiki for its energetic atmosphere, stylish interiors, quality food, and memorable nightlife experience.",
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
