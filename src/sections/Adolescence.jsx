import { motion } from "framer-motion";
import { adolescenceTags } from "../data/adolescenceTags";
import { adolescenceIntro, calmingImages } from "../data/siteConfig";
import SectionHeading from "../components/ui/SectionHeading";
import Badge from "../components/ui/Badge";
import { useMotionSafe, springPop, stagger, noMotion } from "../utils/motion";

export default function Adolescence() {
  const animate = useMotionSafe();
  const v = animate ? springPop : noMotion;

  return (
    <section
      id="expertise"
      className="px-[clamp(20px,6vw,80px)] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={
            animate
              ? {
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }
              : {}
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="order-2 lg:order-1 relative"
        >
          {/* Main image with untangle-style framing */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(24,45,41,0.15)] aspect-4/5 lg:aspect-square group">
            <img
              src={calmingImages[0]}
              alt="Calming nature pathway"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-dark/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-white/90 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-xl">
              <h4 className="font-heading text-xl lg:text-2xl text-brand-dark mb-2">
                Navigating the In-Between
              </h4>
              <p className="text-base text-brand-charcoal/80 leading-relaxed">
                Providing a compassionate anchor during the turbulent years of
                growth and discovery.
              </p>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-sand rounded-full -z-10 blur-xl opacity-60"></div>
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-brand-mint rounded-full -z-10 blur-2xl opacity-60"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={
            animate
              ? { visible: { transition: { staggerChildren: 0.08 } } }
              : {}
          }
          className="order-1 lg:order-2"
        >
          <motion.div variants={v}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/20 text-brand-dark text-sm lg:text-base font-semibold mb-6">
              Area of Expertise
            </span>
          </motion.div>
          <SectionHeading
            title="Adolescence Counselling"
            subtitle={adolescenceIntro}
          />
          <div className="flex flex-wrap gap-3 mt-8">
            {adolescenceTags.map((tag) => (
              <motion.div
                key={tag}
                variants={v}
                transition={
                  animate
                    ? { type: "spring", stiffness: 300, damping: 20 }
                    : { duration: 0 }
                }
              >
                <Badge className="bg-white border border-brand-dark/10 shadow-sm hover:shadow-md transition-shadow py-3 px-6 text-base lg:text-lg">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
