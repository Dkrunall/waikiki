export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  tag: string;
  readTime: string;
  /** Publish date, YYYY-MM-DD */
  date: string;
};

// Newest first. Posts sharing a date keep the order listed here.
export const POSTS: Post[] = [
  {
    slug: "/best-cocktail-bar-in-mumbai",
    title: "Best Cocktail Bar in Mumbai: A Guide to Tiki Cocktails, Great Food and Late-Night Vibes",
    excerpt:
      "Discover Waikiki, an island-inspired cocktail destination in Mumbai with Tiki cocktails, Pan-Asian cuisine, rooftop vibes and late-night energy.",
    image: "/new/Waikiki_038.webp",
    tag: "Cocktail Guide",
    readTime: "7 min read",
    date: "2026-09-23",
  },
  {
    slug: "/best-japanese-restaurant-in-mumbai",
    title: "Best Japanese Restaurant in Mumbai: Discover Sushi, Pan-Asian Flavours and Island Dining",
    excerpt:
      "Looking for Japanese food in Mumbai? Discover Waikiki in Andheri East for tropical sushi, Pan-Asian flavours, cocktails and island-inspired dining.",
    image: "/new/Waikiki_012.webp",
    tag: "Sushi & Japanese",
    readTime: "7 min read",
    date: "2026-09-23",
  },
  {
    slug: "/best-cocktail-bar-in-andheri",
    title: "Best Cocktail Bar in Andheri: Where Every Sip Tells a Story",
    excerpt:
      "Looking for the best cocktail bar in Andheri? Discover handcrafted cocktails, tropical vibes, and an unforgettable nightlife experience at Waikiki.",
    image: "/new/Waikiki_040.webp",
    tag: "Cocktail Guide",
    readTime: "6 min read",
    date: "2026-08-06",
  },
  {
    slug: "/best-hawaiian-restaurant-in-mumbai",
    title: "Best Hawaiian Restaurant in Mumbai: Where Tropical Flavors Meet an Unforgettable Dining Experience",
    excerpt:
      "Experience authentic island flavors at the best Hawaiian restaurant in Mumbai. Discover tropical dining, handcrafted cocktails, and more at Waikiki.",
    image: "/new/Waikiki_014.webp",
    tag: "Dining Guide",
    readTime: "6 min read",
    date: "2026-08-06",
  },
  {
    slug: "/signature-cocktails-mumbai",
    title: "Where Mumbai Unwinds: Discover Signature Cocktails That Turn Every Evening Into an Experience",
    excerpt:
      "Discover signature cocktails Mumbai loves at Waikiki. Experience premium mixology, tiki-inspired vibes, and one of the best cocktail bars in Andheri East.",
    image: "/new/Waikiki_035.webp",
    tag: "Cocktail Guide",
    readTime: "5 min read",
    date: "2026-06-25",
  },
  {
    slug: "/restaurants-in-andheri-east-waikiki",
    title: "Restaurants in Andheri East: Why Waikiki Is Redefining Mumbai's Dining and Cocktail Scene",
    excerpt:
      "Discover why Waikiki is among the top restaurants in Andheri East. Enjoy premium dining, handcrafted cocktails, vibrant nightlife, and exceptional hospitality.",
    image: "/new/Waikiki_001.webp",
    tag: "Dining Guide",
    readTime: "6 min read",
    date: "2026-06-25",
  },
  {
    slug: "/best-restaurants-in-mumbai-sushi-japanese",
    title: "Best Restaurants in Mumbai for Dining, Sushi & Japanese Cuisine Experiences",
    excerpt:
      "Mumbai is one of India's most vibrant culinary capitals. Discover where to find the best sushi, Japanese dining, craft cocktails and immersive nightlife in the city.",
    image: "/new/Waikiki_028.webp",
    tag: "Sushi & Japanese",
    readTime: "7 min read",
    date: "2026-05-20",
  },
  {
    slug: "/best-restaurants-in-andheri-east",
    title: "Best Restaurants in Andheri East: Where to Dine, Drink & Experience the Best of Mumbai",
    excerpt:
      "Andheri East has quickly become one of Mumbai's most exciting dining and nightlife destinations. Explore sushi, tiki cocktails, rooftop lounges and Pan-Asian cuisine.",
    image: "/new/Waikiki_022.webp",
    tag: "Dining Guide",
    readTime: "6 min read",
    date: "2026-05-20",
  },
  {
    slug: "/restaurants-in-andheri-east-mumbai",
    title: "Your Next Favorite Dining Spot in Mumbai Might Be in Andheri East",
    excerpt:
      "Explore Waikiki, one of the top Restaurants in Andheri East for Japanese cuisine, cocktails, nightlife, and premium dining experiences in Mumbai.",
    image: "/new/Waikiki_013.webp",
    tag: "Dining Guide",
    readTime: "5 min read",
    date: "2026-05-20",
  },
  {
    slug: "/best-bar-in-mumbai",
    title: "Best Bar in Mumbai for Nights You’ll Never Want to End",
    excerpt:
      "Discover Waikiki, the Best bar in Mumbai for cocktails, nightlife, rooftop vibes, and late-night parties in Andheri East Mumbai.",
    image: "/new/Waikiki_033.webp",
    tag: "Nightlife Guide",
    readTime: "5 min read",
    date: "2026-05-20",
  },
];

export function formatPostDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function getPostDate(slug: string) {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown post: ${slug}`);
  return post.date;
}
