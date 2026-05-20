"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StickyActions from "@/components/StickyActions";
import Marquee from "@/components/Marquee";

const POSTS = [
  {
    slug: "/best-restaurants-in-andheri-east",
    title: "Best Restaurants in Andheri East: Where to Dine, Drink & Experience the Best of Mumbai",
    excerpt:
      "Andheri East has quickly become one of Mumbai's most exciting dining and nightlife destinations. Explore sushi, tiki cocktails, rooftop lounges and Pan-Asian cuisine.",
    image: "/new/Waikiki_022.jpg",
    tag: "Dining Guide",
    readTime: "6 min read",
  },
  {
    slug: "/best-restaurants-in-mumbai-sushi-japanese",
    title: "Best Restaurants in Mumbai for Dining, Sushi & Japanese Cuisine Experiences",
    excerpt:
      "Mumbai is one of India's most vibrant culinary capitals. Discover where to find the best sushi, Japanese dining, craft cocktails and immersive nightlife in the city.",
    image: "/new/Waikiki_028.jpg",
    tag: "Sushi & Japanese",
    readTime: "7 min read",
  },
];

export default function BlogIndex() {
  return (
    <main className="relative bg-brand-beige text-brand-maroon min-h-screen">
      <CustomCursor />
      <StickyActions />

      {/* ── HERO ── */}
      <section className="relative pt-32 sm:pt-44 pb-16 sm:pb-24 overflow-hidden hero-vignette">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
          <Image src="/tiki-pattern-dark.png" alt="" fill className="object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Waikiki</span>
            <div className="h-px flex-1 max-w-[60px] bg-brand-maroon/20" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-maroon/30">Mumbai Guides</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-[18vw] sm:text-[12vw] lg:text-[8vw] leading-[0.88] tracking-tighter uppercase"
          >
            The
            <br />
            <span className="italic text-brand-maroon/50">Journal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-sans text-xs sm:text-sm text-brand-maroon/50 tracking-[0.2em] max-w-md"
          >
            Dining guides, nightlife insights &amp; culinary stories from Mumbai's tropical sanctuary.
          </motion.p>
        </div>
      </section>

      <Marquee
        text="Dining · Sushi · Japanese Cuisine · Cocktails · Nightlife · Andheri East · Mumbai"
        speed={35}
      />

      {/* ── POSTS GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={post.slug} className="group block bg-brand-beige h-full">
                {/* Image */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="font-sans text-[9px] uppercase tracking-[0.4em] bg-brand-beige text-brand-maroon px-3 py-1.5">
                      {post.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-5">
                    <span className="font-sans text-[9px] uppercase tracking-widest text-brand-beige/60">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 space-y-4">
                  <h2 className="font-serif text-2xl sm:text-3xl leading-tight tracking-tight group-hover:text-brand-maroon/70 transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-sans text-sm text-brand-maroon/60 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 pt-2 text-brand-maroon font-sans text-[10px] uppercase tracking-[0.3em] group-hover:gap-3 transition-all">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative bg-brand-maroon text-brand-beige overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
          <Image src="/tiki-pattern-light.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-beige/40">Visit Us</span>
            <h2 className="font-serif text-5xl sm:text-6xl leading-[0.9] tracking-tighter">
              Experience
              <br />
              <span className="italic text-brand-beige/70">Waikiki</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-sans text-sm text-brand-beige/60 leading-relaxed"
          >
            Hotel Peninsula Grand, Saki Naka, Andheri East · Tue–Sun, 6 PM – 3 AM
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+918150000345"
              className="group flex items-center gap-2 bg-brand-beige text-brand-maroon font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors"
            >
              <span>Book a Table</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://share.google/e3c0MaDRDKot85D9s"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border border-brand-beige/30 text-brand-beige font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:border-brand-beige/60 transition-colors"
            >
              <span>View Reviews</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
