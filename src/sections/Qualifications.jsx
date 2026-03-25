import { motion } from "framer-motion";
import {
  qualificationsHeading,
  qualificationsDescription,
  accreditationText,
  clinicalTraining,
} from "../data/qualifications";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import {
  useMotionSafe,
  fadeUp,
  scaleIn,
  stagger,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function Qualifications() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section className="px-[clamp(20px,6vw,80px)] py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.12 } } } : {}
        }
      >
        {/* Compact accreditation badge — positioned above heading */}
        <motion.div
          variants={animate ? scaleIn : noMotion}
          transition={defaultTransition}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-brand-dark/90 to-brand-dark/80 px-6 py-3 text-brand-white shadow-lg">
            <span className="text-base lg:text-lg font-semibold">
              {accreditationText}
            </span>
          </div>
        </motion.div>

        <motion.div variants={v} transition={defaultTransition}>
          <SectionHeading
            title={qualificationsHeading}
            subtitle={qualificationsDescription}
          />
        </motion.div>

        <motion.div
          variants={animate ? stagger(0.08) : {}}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {clinicalTraining.map((item) => (
            <motion.div key={item} variants={v} transition={defaultTransition}>
              <Card>
                <p className="text-base lg:text-lg font-medium">{item}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
