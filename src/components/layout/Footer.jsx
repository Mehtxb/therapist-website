import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  siteName,
  siteTagline,
  email,
  phone,
  hours,
  address,
} from "../../data/siteConfig";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../../utils/motion";

export default function Footer() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={
        animate ? { visible: { transition: { staggerChildren: 0.1 } } } : {}
      }
      className="grid grid-cols-1 gap-6 bg-brand-dark/90 px-[clamp(20px,6vw,80px)] py-10 pb-14 text-brand-white sm:grid-cols-2 lg:grid-cols-4"
    >
      <motion.div variants={v} transition={defaultTransition}>
        <h3 className="font-heading text-lg mt-0">{siteName}</h3>
        <p className="text-sm text-brand-white/70">{siteTagline}</p>
      </motion.div>

      <motion.div variants={v} transition={defaultTransition}>
        <p className="text-sm">{email}</p>
        <p className="text-sm">{phone}</p>
      </motion.div>

      <motion.div variants={v} transition={defaultTransition}>
        <p className="text-sm">{hours}</p>
        <p className="text-sm">{address}</p>
      </motion.div>

      <motion.div
        variants={v}
        transition={defaultTransition}
        className="space-y-3 flex flex-col items-start"
      >
        <div className="flex gap-4">
          <Link
            to="/privacy"
            className="text-sm underline underline-offset-2 hover:text-brand-coral transition"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-sm underline underline-offset-2 hover:text-brand-coral transition"
          >
            Terms
          </Link>
          <Link
            to="/support"
            className="text-sm underline underline-offset-2 hover:text-brand-coral transition"
          >
            Support
          </Link>
        </div>
        <p className="text-xs text-brand-white/60 leading-relaxed mt-2">
          The information provided shall strictly be used for the purpose of
          counselling and therapy and not otherwise.
        </p>
        <span className="inline-block rounded-full bg-brand-white/15 px-3 py-1 text-xs font-medium">
          DPDPA Compliant — Your Privacy is Guaranteed.
        </span>
      </motion.div>
    </motion.footer>
  );
}
