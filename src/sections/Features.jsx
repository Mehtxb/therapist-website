import { motion } from "framer-motion";
import { features } from "../data/features";
import Card from "../components/ui/Card";
import {
  useMotionSafe,
  fadeUp,
  stagger,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function Features() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section className="mx-[clamp(20px,6vw,80px)] py-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={animate ? stagger(0.08) : {}}
        className="grid grid-cols-1 gap-4 rounded-[30px] bg-linear-to-br from-white/90 to-brand-mint/30 p-5 shadow-[0_30px_60px_rgba(24,45,41,0.12)] sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((f) => (
          <motion.div
            key={f.id}
            variants={v}
            transition={defaultTransition}
            className="rounded-2xl bg-brand-sand/80 p-5"
          >
            <h4 className="text-lg lg:text-xl font-semibold mb-2 text-brand-dark">
              {f.title}
            </h4>
            <p className="text-sm lg:text-base text-brand-muted leading-relaxed">
              {f.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
