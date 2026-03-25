import { motion } from "framer-motion";
import { hero } from "../data/siteConfig";
import {
  useMotionSafe,
  fadeUp,
  stagger,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function About() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section className="px-[clamp(20px,6vw,80px)] py-20 bg-white/40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={animate ? stagger(0.15) : {}}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24"
      >
        <motion.div
          variants={v}
          transition={defaultTransition}
          className="space-y-6"
        >
          <div className="inline-flex items-center justify-center p-4 bg-brand-sand rounded-2xl shadow-sm mb-2">
            {/* Heart / Mind icon placeholder */}
            <svg
              className="w-8 h-8 text-brand-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-brand-dark">
            {hero.whomIHelpLabel}
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-brand-charcoal/90">
            {hero.whomIHelpBody}
          </p>
        </motion.div>

        <motion.div
          variants={v}
          transition={defaultTransition}
          className="space-y-6"
        >
          <div className="inline-flex items-center justify-center p-4 bg-brand-mint rounded-2xl shadow-sm mb-2">
            {/* Journey / Path icon placeholder */}
            <svg
              className="w-8 h-8 text-brand-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-brand-dark">
            {hero.journeyLabel}
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-brand-charcoal/90">
            {hero.journeyBody}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
