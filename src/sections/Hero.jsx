import { motion } from "framer-motion";
import { hero, heroImages, whatsappUrl } from "../data/siteConfig";
import { stats } from "../data/stats";
import Button from "../components/ui/Button";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../utils/motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const num = parseInt(target, 10);
          if (isNaN(num)) {
            setCount(target);
            return;
          }
          let current = 0;
          const step = Math.max(1, Math.floor(num / 40));
          const timer = setInterval(() => {
            current += step;
            if (current >= num) {
              current = num;
              clearInterval(timer);
            }
            setCount(current);
          }, 30);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const num = parseInt(target, 10);
  return (
    <span ref={ref}>
      {isNaN(num) ? target : count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section className="relative z-1 px-[clamp(20px,6vw,80px)] pt-28 lg:pt-32 pb-24 flex items-center">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 w-full max-w-7xl mx-auto">
        {/* Copy side */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-col justify-center"
        >
          <motion.p
            variants={v}
            transition={defaultTransition}
            className="text-sm lg:text-base font-semibold uppercase tracking-[0.18em] text-brand-dark mb-4"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={
              animate
                ? {
                    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }
                : noMotion
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading text-[clamp(2.8rem,6vw,5rem)] leading-[1.05] mb-8 text-brand-dark"
          >
            {hero.headline}
          </motion.h1>

          <motion.div
            variants={
              animate
                ? {
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 },
                  }
                : noMotion
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mt-2 mb-12"
          >
            <Button
              variant="whatsapp"
              href={whatsappUrl}
              className="text-base py-4 px-8"
            >
              Book on WhatsApp
            </Button>
            <Button variant="secondary" className="text-base py-4 px-8">
              Call Clinic
            </Button>
          </motion.div>

          {/* Stats inline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3 pt-6 border-t border-brand-dark/10"
          >
            {stats.map((s) => (
              <motion.div
                key={s.id}
                variants={v}
                transition={defaultTransition}
              >
                <h3 className="font-heading text-2xl lg:text-3xl mb-1 text-brand-dark">
                  {s.value ? (
                    <>
                      <CountUp target={s.value} suffix="" /> {s.label}
                    </>
                  ) : (
                    s.label
                  )}
                </h3>
                <p className="text-sm lg:text-base text-brand-muted leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Images side */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid gap-6 relative"
        >
          <motion.div
            variants={v}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-4xl bg-white/80 p-4 shadow-[0_30px_60px_rgba(24,45,41,0.08)] backdrop-blur-sm"
          >
            <img
              src={heroImages.main}
              alt="Therapist in a calm studio"
              className="w-full rounded-3xl h-100 lg:h-120 object-cover"
            />
            <p className="mt-3 text-sm lg:text-base font-medium text-brand-muted text-center">
              Safe, welcoming, and grounded.
            </p>
          </motion.div>
          <motion.div
            variants={v}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="absolute -bottom-12 -left-4 lg:-left-16 rounded-3xl bg-white/90 p-3 shadow-[0_20px_40px_rgba(24,45,41,0.12)] backdrop-blur-md hidden md:block w-64"
          >
            <img
              src={heroImages.secondary}
              alt="Supportive conversation"
              className="w-full rounded-2xl h-45 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
