import { motion } from "framer-motion";
import {
  contactHeading,
  contactSubheading,
  whatsappUrl,
  email,
  calmingImages,
} from "../data/siteConfig";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function Contact() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section id="contact" className="px-[clamp(20px,6vw,80px)] py-24 pb-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.12 } } } : {}
        }
        className="text-center"
      >
        <motion.div variants={v} transition={defaultTransition}>
          <SectionHeading
            title={contactHeading}
            subtitle={contactSubheading}
            className="mx-auto text-center"
          />
        </motion.div>

        <motion.div
          variants={v}
          transition={defaultTransition}
          className="flex flex-wrap items-center justify-center gap-5 mt-6"
        >
          <Button
            variant="whatsapp"
            href={whatsappUrl}
            className="text-base lg:text-lg py-4 px-8"
          >
            Message Me on WhatsApp
          </Button>
          <Button
            variant="secondary"
            className="text-base lg:text-lg py-4 px-8"
          >
            Start a Conversation Form
          </Button>
        </motion.div>

        <motion.p
          variants={v}
          transition={defaultTransition}
          className="mt-8 text-base lg:text-lg text-brand-muted"
        >
          Prefer email? Write to me at:{" "}
          <a
            href={`mailto:${email}`}
            className="underline underline-offset-2 hover:text-brand-dark"
          >
            {email}
          </a>
        </motion.p>

        <motion.div
          variants={v}
          transition={defaultTransition}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <img
            src={calmingImages[1]}
            alt="Meditation by the window"
            className="rounded-2xl h-56 w-full object-cover shadow-[0_30px_60px_rgba(24,45,41,0.12)]"
          />
          <img
            src={calmingImages[2]}
            alt="Soft light and greenery"
            className="rounded-2xl h-56 w-full object-cover shadow-[0_30px_60px_rgba(24,45,41,0.12)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
