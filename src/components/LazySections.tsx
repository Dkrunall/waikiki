"use client";

import dynamic from "next/dynamic";

// Below-the-fold sections are split into their own chunks so the initial
// bundle only carries the hero. They are still server-rendered, so the
// content stays in the static HTML for SEO.
export const AboutWaikiki = dynamic(() => import("@/components/AboutWaikiki"));
export const ExperienceGrid = dynamic(() => import("@/components/ExperienceGrid"));
export const CulinaryShowcase = dynamic(() => import("@/components/CulinaryShowcase"));
export const TheSpaces = dynamic(() => import("@/components/TheSpaces"));
export const CocktailSpotlight = dynamic(() => import("@/components/CocktailSpotlight"));
export const InteractiveMenu = dynamic(() => import("@/components/InteractiveMenu"));
export const PrivateDining = dynamic(() => import("@/components/PrivateDining"));
export const WeeklyBeats = dynamic(() => import("@/components/WeeklyBeats"));
export const AtmosphereGallery = dynamic(() => import("@/components/AtmosphereGallery"));
export const Footer = dynamic(() => import("@/components/Footer"));

// Cursor effect is pointer-only and purely decorative, so skip SSR.
export const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
