import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import {
  AboutWaikiki,
  ExperienceGrid,
  CulinaryShowcase,
  TheSpaces,
  CocktailSpotlight,
  InteractiveMenu,
  PrivateDining,
  WeeklyBeats,
  AtmosphereGallery,
  CustomCursor,
  Footer,
} from "@/components/LazySections";
import StickyActions from "@/components/StickyActions";

export default function Home() {
  return (
    <SmoothScroll>
    <main className="relative">
      <CustomCursor />
      <StickyActions />

      {/* Hero */}
      <Hero />

      <Marquee text="Waikiki Experience  ·  Aloha Mumbai  ·  Tiki Culture  ·  Exotic Cocktails  ·  Culinary Journey" />

      {/* About — story, Peninsula Hospitality Group origin */}
      <AboutWaikiki />

      {/* Our Essence — 3 experience pillars */}
      <ExperienceGrid />

      {/* Culinary Journey — Chef Kai, Pan-Asian & Polynesian */}
      <CulinaryShowcase />

      {/* Four Distinct Spaces — Lounge, Tiki Bar, Restaurant, Rooftop */}
      <TheSpaces />

      <Marquee
        text="Late Night Rhythms  ·  Jungle Escapism  ·  Pan Asian Flavors  ·  Mediterranean Twist"
        reverse
        speed={40}
        className="border-t-0"
      />

      {/* Tiki Bar & Signature Cocktails */}
      <CocktailSpotlight />

      {/* Interactive Menu */}
      <InteractiveMenu />

      {/* Private Dining, Events & Rooftop Lounge */}
      <PrivateDining />

      {/* Weekly Beats — DJ lineup */}
      <WeeklyBeats />

      {/* Atmosphere Gallery */}
      <AtmosphereGallery />

      <Footer />
    </main>
    </SmoothScroll>
  );
}
