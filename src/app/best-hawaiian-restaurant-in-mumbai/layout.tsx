import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Hawaiian Restaurant in Mumbai | Waikiki Experience",
  description:
    "Experience authentic island flavors at the best Hawaiian restaurant in Mumbai. Discover tropical dining, handcrafted cocktails, and more at Waikiki.",
  alternates: {
    canonical: "https://waikikiexperience.com/best-hawaiian-restaurant-in-mumbai",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://waikikiexperience.com/best-hawaiian-restaurant-in-mumbai",
    siteName: "Waikiki Experience",
    title: "Best Hawaiian Restaurant in Mumbai | Waikiki Experience",
    description:
      "Experience authentic island flavors at the best Hawaiian restaurant in Mumbai. Discover tropical dining, handcrafted cocktails, and more at Waikiki.",
    images: [
      {
        url: "/new/Waikiki_014.jpg",
        width: 1200,
        height: 630,
        alt: "Best Hawaiian Restaurant in Mumbai — Waikiki Tropical Dining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hawaiian Restaurant in Mumbai | Waikiki Experience",
    description:
      "Experience authentic island flavors at the best Hawaiian restaurant in Mumbai. Discover tropical dining, handcrafted cocktails, and more at Waikiki.",
    images: ["/new/Waikiki_014.jpg"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which is the best Hawaiian restaurant in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki is one of the best Hawaiian restaurants in Mumbai, offering authentic island-inspired cuisine, handcrafted cocktails, and a vibrant tropical ambience.",
      },
    },
    {
      "@type": "Question",
      name: "What type of food is served at a Hawaiian restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hawaiian restaurants typically serve island-inspired dishes featuring fresh seafood, grilled specialties, tropical fruits, vibrant salads, and fusion flavors influenced by Polynesian, Japanese, and Asian cuisines.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waikiki suitable for celebrations and special occasions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Waikiki offers a lively tropical atmosphere that's perfect for birthdays, anniversaries, corporate dinners, family gatherings, and weekend celebrations.",
      },
    },
    {
      "@type": "Question",
      name: "Does Waikiki serve handcrafted cocktails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Guests can enjoy a curated selection of handcrafted tropical cocktails and refreshing mocktails that complement the island-inspired menu.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Hawaiian cuisine different from other international cuisines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hawaiian cuisine focuses on fresh ingredients, tropical flavors, balanced seasonings, and a unique blend of Polynesian, Japanese, American, and Asian culinary traditions.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waikiki a good place for first-time visitors to Hawaiian cuisine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Waikiki offers a welcoming environment and a thoughtfully curated menu, making it an excellent introduction to Hawaiian dining.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Waikiki considered one of the best Hawaiian restaurants in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki stands out for its premium hospitality, tropical ambience, authentic flavors, handcrafted beverages, and memorable dining experience, making it a preferred destination for Hawaiian cuisine in Mumbai.",
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
