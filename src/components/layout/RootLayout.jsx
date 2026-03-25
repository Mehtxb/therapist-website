import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Ticker from "../ui/Ticker";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-linear-to-br from-white/70 to-brand-mint/30">
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute -top-40 -right-30 z-0 h-120 w-120 rounded-full bg-brand-sun/50 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute -bottom-30 -left-35 z-0 h-105 w-105 rounded-full bg-brand-sage/35 blur-3xl opacity-50" />

      <Ticker />
      <Navbar />

      <main className="flex-1 flex flex-col z-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
