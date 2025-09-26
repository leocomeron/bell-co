import React from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
};

export default function Carousel({
  slides,
  intervalMs = 4000,
  className,
}: {
  slides: Slide[];
  intervalMs?: number;
  className?: string;
}) {
  const [index, setIndex] = React.useState(0);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const total = slides.length;

  React.useEffect(() => {
    if (total <= 1) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [intervalMs, total]);

  const go = (next: number) => {
    setIndex((next + total) % total);
  };

  return (
    <div className={className}>
      <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/60 shadow-lg bg-white/80 backdrop-blur-sm">
        {slides.map((s, i) => (
          <div
            key={s.src}
            aria-hidden={i !== index}
            className={
              "absolute inset-0 transition-opacity duration-700 " +
              (i === index ? "opacity-100" : "opacity-0")
            }
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Controls */}
        {total > 1 && (
          <>
            <button
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 text-white p-2"
              onClick={() => go(index - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 text-white p-2"
              onClick={() => go(index + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir al slide ${i + 1}`}
                  className={
                    "h-2.5 w-2.5 rounded-full transition " +
                    (i === index ? "bg-white" : "bg-white/50 hover:bg-white/70")
                  }
                  onClick={() => go(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
