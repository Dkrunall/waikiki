import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Waikiki Experience — Mumbai Dining & Nightlife Guides",
  description:
    "Explore Waikiki's guides on the best restaurants in Mumbai, sushi dining, cocktails and nightlife. Your go-to resource for dining in Andheri East.",
  alternates: {
    canonical: "https://waikikiexperience.com/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://waikikiexperience.com/blog",
    siteName: "Waikiki Experience",
    title: "Blog | Waikiki Experience — Mumbai Dining & Nightlife Guides",
    description:
      "Explore Waikiki's guides on the best restaurants in Mumbai, sushi dining, cocktails and nightlife.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Waikiki Experience Blog" }],
  },
};

export default function BlogIndexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
