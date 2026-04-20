"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MarqueeProps {
  text: string;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({ text, speed = 50, reverse = false, className = "" }: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = contentRef.current;

    if (!marquee || !content) return;

    const contentWidth = content.offsetWidth;
    const duration = contentWidth / speed;

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(content, {
      x: reverse ? contentWidth / 2 : -(contentWidth / 2),
      duration: duration,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, [speed, reverse]);

  return (
    <div
      ref={marqueeRef}
      className={`overflow-hidden whitespace-nowrap border-y border-brand-maroon/20 py-2 ${className}`}
    >
      <div ref={contentRef} className="inline-block">
        <span className="inline-block px-4 font-serif text-2xl tracking-widest text-brand-maroon">
          {text} &nbsp; • &nbsp; {text} &nbsp; • &nbsp; {text} &nbsp; • &nbsp; {text} &nbsp; • &nbsp; 
          {text} &nbsp; • &nbsp; {text} &nbsp; • &nbsp; {text} &nbsp; • &nbsp; {text} &nbsp; • &nbsp;
        </span>
      </div>
    </div>
  );
}
