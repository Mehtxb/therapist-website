import { motion } from "framer-motion";
import { fadeUp, defaultTransition } from "../utils/motion";

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-20 px-[clamp(20px,6vw,80px)] min-h-[60vh] max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={defaultTransition}
      >
        <h1 className="font-heading text-4xl lg:text-5xl text-brand-dark mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-brand-charcoal text-base lg:text-lg">
          <p>
            Your privacy is extremely important to us. This Privacy Policy
            outlines the types of personal information we receive and collect
            when you use our website and services, as well as some of the steps
            we take to safeguard information.
          </p>
          <h2 className="font-heading text-2xl lg:text-3xl text-brand-dark mt-8 mb-4">
            Information Collection
          </h2>
          <p>
            We collect information when you voluntarily provide it to us. This
            includes when you fill out forms, contact us via WhatsApp, or reach
            out to the clinic directly. The information collected may include
            your name, contact details, and any other details you choose to
            share.
          </p>
          <h2 className="font-heading text-2xl lg:text-3xl text-brand-dark mt-8 mb-4">
            Data Protection
          </h2>
          <p>
            Confidentiality is a cornerstone of therapy. We employ
            industry-standard security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. We do not sell, trade, or otherwise transfer your
            personally identifiable information to outside parties.
          </p>
          <h2 className="font-heading text-2xl lg:text-3xl text-brand-dark mt-8 mb-4">
            Changes to Policy
          </h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Any
            changes will be posted on this page. We encourage you to review this
            policy periodically for any updates.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
