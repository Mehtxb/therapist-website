import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../../data/testimonials";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % testimonials.length),
    [],
  );
  const prev = useCallback(
    () =>
      setCurrent(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      ),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <div className="relative mx-auto mt-16 max-w-4xl px-4 md:px-8">
      {/* Decorative Quote Icon behind the slides */}
      <div className="absolute -top-12 md:-top-20 -left-4 md:-left-8 z-0 text-[10rem] md:text-[14rem] leading-none text-brand-mint/40 font-serif opacity-70 select-none">
        &ldquo;
      </div>

      <div className="relative z-10 w-full min-h-87.5 md:min-h-75 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-3xl lg:text-4xl leading-snug md:leading-relaxed text-brand-dark/90 font-serif mb-10 tracking-tight">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex flex-col items-center gap-3">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-tr transition-colors from-brand-sage/60 to-brand-mint/60 shadow-sm text-brand-dark font-medium text-lg"
                aria-hidden="true"
              >
                {t.name.charAt(t.name.length - 1)}
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-lg md:text-xl font-semibold tracking-tight text-brand-dark">
                  {t.name}
                </h4>
                <span className="text-sm font-medium uppercase tracking-widest text-brand-charcoal/60 mt-1">
                  {t.label}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modern, soft Controls */}
      <div className="mt-12 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.04)] text-brand-dark transition-all hover:bg-brand-sage hover:scale-105 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] focus:outline-none focus:ring-2 focus:ring-brand-dark/20"
        >
          <svg
            className="w-5 h-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div
          className="flex gap-3 px-6 py-3 rounded-full bg-white/40 border border-white/60 backdrop-blur-xs"
          role="tablist"
          aria-label="Testimonial indicators"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                i === current
                  ? "w-8 bg-brand-dark"
                  : "w-2.5 bg-brand-dark/20 hover:bg-brand-dark/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.04)] text-brand-dark transition-all hover:bg-brand-sage hover:scale-105 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] focus:outline-none focus:ring-2 focus:ring-brand-dark/20"
        >
          <svg
            className="w-5 h-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
