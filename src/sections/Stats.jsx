import { motion } from "framer-motion";
import { stats } from "../data/stats";
import {
  useMotionSafe,
  fadeUp,
  stagger,
  defaultTransition,
  noMotion,
} from "../utils/motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ target }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const num = parseInt(target, 10);
          if (isNaN(num)) {
            setDisplay(target);
            return;
          }
          let current = 0;
          const step = Math.max(1, Math.floor(num / 30));
          const timer = setInterval(() => {
            current += step;
            if (current >= num) {
              current = num;
              clearInterval(timer);
            }
            setDisplay(String(current));
          }, 40);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

export default function Stats() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section className="px-[clamp(20px,6vw,80px)] py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={animate ? stagger(0.12) : {}}
        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
      >
        {stats.map((s) => (
          <motion.div key={s.id} variants={v} transition={defaultTransition}>
            <h3 className="font-heading text-2xl mb-1">
              {s.value ? (
                <>
                  <CountUp target={s.value} />+ {s.label}
                </>
              ) : (
                s.label
              )}
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              {s.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
