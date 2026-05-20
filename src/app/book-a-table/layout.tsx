import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Table | Waikiki Experience — Reserve Your Table in Andheri East, Mumbai",
  description:
    "Reserve your table at Waikiki — Mumbai's premier Hawaiian tiki bar & restaurant in Andheri East. Book online for dinner, DJ nights or private dining.",
  alternates: {
    canonical: "https://waikikiexperience.com/book-a-table",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://waikikiexperience.com/book-a-table",
    siteName: "Waikiki Experience",
    title: "Book a Table | Waikiki Experience",
    description:
      "Reserve your table at Waikiki — Mumbai's premier Hawaiian tiki bar & restaurant in Andheri East.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Book a Table at Waikiki" }],
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
