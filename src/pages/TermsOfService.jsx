import { motion } from "framer-motion";
import { fadeUp, defaultTransition } from "../utils/motion";

export default function TermsOfService() {
  return (
    <div className="pt-24 pb-20 px-[clamp(20px,6vw,80px)] min-h-[60vh] max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={defaultTransition}
      >
        <h1 className="font-heading text-4xl lg:text-5xl text-brand-dark mb-8">
          Terms of Service
        </h1>
        <div className="space-y-6 text-brand-charcoal text-base lg:text-lg">
          <p>
            Welcome to our website. By accessing or using our website and
            services, you agree to be bound by these Terms of Service and all
            applicable laws and regulations.
          </p>
          <h2 className="font-heading text-2xl lg:text-3xl text-brand-dark mt-8 mb-4">
            Use of Services
          </h2>
          <p>
            Our services are provided for personal, non-commercial use. You
            agree not to use the services for any unlawful purpose or in any way
            that might harm, damage, or disparage any other party. Therapy and
            counseling are professional services and require mutual respect and
            commitment.
          </p>
          <h2 className="font-heading text-2xl lg:text-3xl text-brand-dark mt-8 mb-4">
            Appointments and Cancellations
          </h2>
          <p>
            When you book an appointment, please be considerate of the scheduled
            time. Cancellations must be made at least 24 hours in advance.
            Failure to do so may result in a cancellation fee, as that time was
            specifically reserved for you.
          </p>
          <h2 className="font-heading text-2xl lg:text-3xl text-brand-dark mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p>
            The content on this website is for informational purposes only and
            does not constitute medical advice. In no event shall we be liable
            for any direct, indirect, incidental, consequential, or punitive
            damages arising out of your access to, or use of, the website and
            our services.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
