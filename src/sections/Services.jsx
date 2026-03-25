import { motion } from "framer-motion";
import { services } from "../data/services";
import { servicesIntro } from "../data/siteConfig";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import {
  useMotionSafe,
  fadeUp,
  stagger,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function Services() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section
      id="services"
      className="px-[clamp(20px,6vw,80px)] py-24 lg:py-32 bg-white/40"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.1 } } } : {}
        }
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            variants={v}
            transition={defaultTransition}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-mint/40 text-brand-dark text-sm lg:text-base font-semibold mb-4 tracking-wide uppercase">
              Our Services
            </span>
            <h2 className="font-heading text-4xl lg:text-6xl text-brand-dark mb-6 leading-tight">
              A Safe Space to <br className="hidden lg:block" /> Untangle Your
              Thoughts.
            </h2>
            <p className="text-lg lg:text-xl text-brand-charcoal/80 leading-relaxed max-w-xl">
              {servicesIntro}
            </p>
          </motion.div>
          <motion.div
            variants={v}
            transition={defaultTransition}
            className="hidden lg:block pb-2"
          >
            <div className="h-0.5 w-24 bg-brand-dark/20"></div>
          </motion.div>
        </div>

        <motion.div
          variants={animate ? stagger(0.1) : {}}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, index) => (
            <motion.div key={s.id} variants={v} transition={defaultTransition}>
              <div
                className={`h-full group relative overflow-hidden rounded-4xl bg-white p-8 transition-shadow duration-500 hover:shadow-[0_40px_80px_rgba(24,45,41,0.08)] border border-brand-dark/5 ${index === 1 ? "lg:-translate-y-8" : ""}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-mint/20 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
                <h3 className="relative z-10 text-2xl lg:text-3xl font-heading mt-0 mb-4 text-brand-dark">
                  {s.title}
                </h3>
                <p className="relative z-10 text-base lg:text-lg text-brand-charcoal/80 leading-relaxed mb-8 min-h-20">
                  {s.description}
                </p>
                <ul className="relative z-10 space-y-4">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start text-base lg:text-lg text-brand-charcoal/80"
                    >
                      <svg
                        className="w-6 h-6 mr-3 text-brand-coral shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
