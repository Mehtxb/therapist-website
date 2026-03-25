import { motion } from "framer-motion";

export default function TherapeuticLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-brand-bg/80 backdrop-blur-sm"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-24 w-24 rounded-full bg-brand-sage/40 flex items-center justify-center shadow-[0_0_40px_rgba(150,184,173,0.6)]"
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="h-12 w-12 rounded-full bg-brand-mint/60"
        />
      </motion.div>
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="mt-6 font-heading text-xl text-brand-dark/80 tracking-wide"
      >
        Take a deep breath...
      </motion.p>
    </motion.div>
  );
}
