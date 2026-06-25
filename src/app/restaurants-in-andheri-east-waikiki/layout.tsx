import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurants in Andheri East | Dining & Cocktails at Waikiki",
  description:
    "Discover why Waikiki is among the top restaurants in Andheri East. Enjoy premium dining, handcrafted cocktails, vibrant nightlife, and exceptional hospitality.",
  alternates: {
    canonical: "https://waikikiexperience.com/restaurants-in-andheri-east-waikiki",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://waikikiexperience.com/restaurants-in-andheri-east-waikiki",
    siteName: "Waikiki Experience",
    title: "Restaurants in Andheri East | Dining & Cocktails at Waikiki",
    description:
      "Discover why Waikiki is among the top restaurants in Andheri East. Enjoy premium dining, handcrafted cocktails, vibrant nightlife, and exceptional hospitality.",
    images: [
      {
        url: "/new/Waikiki_001.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurants in Andheri East — Waikiki Dining & Cocktails",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurants in Andheri East | Dining & Cocktails at Waikiki",
    description:
      "Discover why Waikiki is among the top restaurants in Andheri East. Enjoy premium dining, handcrafted cocktails, vibrant nightlife, and exceptional hospitality.",
    images: ["/new/Waikiki_001.jpg"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Waikiki one of the top restaurants in Andheri East?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki offers a unique combination of exceptional cuisine, handcrafted cocktails, vibrant ambiance, and premium hospitality. Its immersive dining experience makes it a preferred choice among guests looking for top restaurants in Andheri East.",
      },
    },
    {
      "@type": "Question",
      name: "Does Waikiki offer vegetarian and non-vegetarian menu options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Waikiki features a diverse menu with both vegetarian and non-vegetarian dishes, ensuring a memorable dining experience for every guest.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Waikiki considered one of the best cocktail bars in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki is known for its expertly crafted cocktails, premium spirits, innovative mixology, and lively atmosphere. These elements have helped establish its reputation as one of the best cocktail bars in Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waikiki suitable for celebrations and special occasions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Whether it's a birthday celebration, anniversary, corporate gathering, or a night out with friends, Waikiki provides the perfect setting for memorable occasions.",
      },
    },
    {
      "@type": "Question",
      name: "Are reservations recommended at Waikiki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, reservations are highly recommended, especially on weekends and during special events, to ensure availability and a seamless dining experience.",
      },
    },
    {
      "@type": "Question",
      name: "What type of cuisine can guests expect at Waikiki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waikiki offers a carefully curated menu featuring a variety of global flavors, signature dishes, sharing platters, and innovative culinary creations designed to suit diverse tastes.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waikiki among the popular bars in Andheri East?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Waikiki has become a popular destination among guests looking for premium bars in Andheri East, offering a sophisticated nightlife experience with great music, cocktails, and ambiance.",
      },
    },
    {
      "@type": "Question",
      name: "Has Waikiki been featured in any reputed publications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Waikiki has been featured by leading lifestyle and food publications including Femina, highlighting its growing recognition in Mumbai's hospitality and dining scene.",
      },
    },
    {
      "@type": "Question",
      name: "Can Waikiki host private events and corporate gatherings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Waikiki is an excellent venue for private celebrations, social gatherings, corporate events, and special occasions, offering customized experiences based on guest requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How can I book a table at Waikiki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guests can reserve a table through the Waikiki website, contact the reservations team directly, or reach out via the restaurant's social media channels for booking assistance.",
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
