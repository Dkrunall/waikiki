import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Restaurants in Andheri East for Dining & Nightlife Mumbai",
  description:
    "Discover the best restaurants in Andheri East Mumbai for dining, sushi, cocktails and nightlife. Visit Waikiki for Pan Asian cuisine, DJ nights and rooftop vibes.",
  alternates: {
    canonical: "https://waikikiexperience.com/best-restaurants-in-andheri-east",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://waikikiexperience.com/best-restaurants-in-andheri-east",
    siteName: "Waikiki Experience",
    title: "Best Restaurants in Andheri East for Dining & Nightlife Mumbai",
    description:
      "Discover the best restaurants in Andheri East Mumbai for dining, sushi, cocktails and nightlife. Visit Waikiki for Pan Asian cuisine, DJ nights and rooftop vibes.",
    images: [
      {
        url: "/new/Waikiki_022.jpg",
        width: 1200,
        height: 630,
        alt: "Best restaurants in Andheri East Mumbai — Waikiki Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Restaurants in Andheri East for Dining & Nightlife Mumbai",
    description:
      "Discover the best restaurants in Andheri East Mumbai for dining, sushi, cocktails and nightlife. Visit Waikiki.",
    images: ["/new/Waikiki_022.jpg"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
