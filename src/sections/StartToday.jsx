import { motion } from "framer-motion";
import { startTodayBody, whatsappUrl } from "../data/siteConfig";
import Button from "../components/ui/Button";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function StartToday() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section className="px-4 md:px-8 py-24 mb-10 w-full max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.15 } } } : {}
        }
        className="w-full relative overflow-hidden rounded-[2.5rem] bg-linear-to-b from-brand-sage/20 to-brand-mint/40 border border-white/50 px-6 py-20 text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-xs"
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-sun/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-mint/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2
            variants={v}
            transition={defaultTransition}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-dark tracking-tight mb-6"
          >
            Start Today
          </motion.h2>

          <motion.p
            variants={v}
            transition={defaultTransition}
            className="text-lg md:text-xl text-brand-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {startTodayBody}
          </motion.p>

          <motion.div variants={v} transition={defaultTransition}>
            <Button
              variant="primary"
              href={whatsappUrl}
              className={`text-base lg:text-lg font-medium px-12 py-5 rounded-full shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 ${animate ? "animate-pulse-soft" : ""}`}
            >
              Book Your Session
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
