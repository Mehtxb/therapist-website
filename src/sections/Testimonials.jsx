import { motion } from "framer-motion";
import { testimonialsSubtitle } from "../data/siteConfig";
import SectionHeading from "../components/ui/SectionHeading";
import TestimonialSlider from "../components/ui/TestimonialSlider";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function Testimonials() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section id="testimonials" className="px-[clamp(20px,6vw,80px)] py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.15 } } } : {}
        }
      >
        <motion.div
          variants={v}
          transition={defaultTransition}
          className="text-center"
        >
          <SectionHeading
            title="Testimonials"
            subtitle={testimonialsSubtitle}
            className="mx-auto text-center"
          />
        </motion.div>

        <motion.div variants={v} transition={defaultTransition}>
          <TestimonialSlider />
        </motion.div>
      </motion.div>
    </section>
  );
}
