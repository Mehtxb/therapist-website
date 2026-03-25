import { motion } from "framer-motion";
import { techniques } from "../data/techniques";
import { techniquesSubtitle } from "../data/siteConfig";
import SectionHeading from "../components/ui/SectionHeading";
import Badge from "../components/ui/Badge";
import { useMotionSafe, springPop, noMotion } from "../utils/motion";

export default function Techniques() {
  const animate = useMotionSafe();
  const v = animate ? springPop : noMotion;

  return (
    <section className="px-[clamp(20px,6vw,80px)] py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.05 } } } : {}
        }
      >
        <SectionHeading
          title="Techniques We Use"
          subtitle={techniquesSubtitle}
        />
        <div className="flex flex-wrap gap-3">
          {techniques.map((t) => (
            <motion.div
              key={t}
              variants={v}
              transition={
                animate
                  ? { type: "spring", stiffness: 300, damping: 20 }
                  : { duration: 0 }
              }
            >
              <Badge className="bg-brand-dark/10 font-semibold text-center">
                {t}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
