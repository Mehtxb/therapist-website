import { motion } from "framer-motion";
import { fadeUp, defaultTransition } from "../utils/motion";
import Button from "../components/ui/Button";

export default function Support() {
  return (
    <div className="pt-24 pb-20 px-[clamp(20px,6vw,80px)] min-h-[60vh] max-w-4xl mx-auto flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={defaultTransition}
        className="text-center"
      >
        <h1 className="font-heading text-4xl lg:text-5xl text-brand-dark mb-6">
          Need Support?
        </h1>
        <p className="text-brand-charcoal text-base lg:text-lg mb-8 max-w-2xl mx-auto">
          If you are experiencing a medical or psychological emergency, please
          call your local emergency services immediately. For questions about
          therapy sessions, scheduling, or other inquiries, please reach out to
          us.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            className="w-full sm:w-auto py-3 px-8 text-lg"
          >
            Contact Us
          </Button>
          <Button
            variant="whatsapp"
            className="w-full sm:w-auto py-3 px-8 text-lg"
          >
            WhatsApp Us
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
