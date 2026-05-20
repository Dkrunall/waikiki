// Pure CSS marquee — no GSAP dependency
interface MarqueeProps {
  text: string;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({ text, speed = 50, reverse = false, className = "" }: MarqueeProps) {
  const content = `${text} · `;
  // Repeat enough to fill > 200vw so -50% translateX loops seamlessly
  const repeated = content.repeat(10);
  // Calibrate duration from speed: higher speed = shorter duration
  const duration = Math.round(4000 / speed);

  return (
    <div
      className={`overflow-hidden whitespace-nowrap border-y border-brand-maroon/20 py-2 ${className}`}
    >
      <div
        style={{
          display: "inline-block",
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
        }}
      >
        <span className="inline-block px-4 font-serif text-2xl tracking-widest text-brand-maroon">
          {repeated}{repeated}
        </span>
      </div>
    </div>
  );
}
