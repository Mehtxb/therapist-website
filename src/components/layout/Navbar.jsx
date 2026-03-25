import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { siteName, siteTagline, whatsappUrl } from "../../data/siteConfig";
import Button from "../ui/Button";
import {
  useMotionSafe,
  fadeDown,
  defaultTransition,
  noMotion,
} from "../../utils/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const animate = useMotionSafe();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={animate ? fadeDown : noMotion}
      transition={defaultTransition}
      className={`sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 px-[clamp(20px,6vw,80px)] py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-white/50 backdrop-blur-md"
      }`}
    >
      {/* Brand */}
      <Link
        to="/"
        className="flex items-center gap-4 hover:opacity-90 transition"
      >
        <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-brand-dark font-heading text-2xl font-semibold text-brand-white shadow-[0_30px_60px_rgba(24,45,41,0.12)]">
          A
        </span>
        <div>
          <p className="font-heading text-xl leading-tight m-0 text-brand-dark">
            {siteName}
          </p>
          <p className="text-sm text-brand-muted mt-1 m-0">{siteTagline}</p>
        </div>
      </Link>

      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 text-brand-dark"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {menuOpen ? (
            <path d="M6 6l12 12M6 18L18 6" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      {/* Nav links */}
      <div
        className={`flex items-center gap-6 text-sm lg:text-base font-medium tracking-[0.05em] ${
          menuOpen
            ? "flex-col w-full items-start pt-4 border-t border-brand-sage/20 lg:flex-row lg:w-auto lg:items-center lg:border-0 lg:pt-0"
            : "hidden lg:flex"
        }`}
      >
        <a
          href={isHome ? "#expertise" : "/#expertise"}
          className="border-b-2 border-transparent transition hover:border-brand-coral pb-1 text-brand-dark"
          onClick={() => setMenuOpen(false)}
        >
          Expertise
        </a>
        <a
          href={isHome ? "#testimonials" : "/#testimonials"}
          className="border-b-2 border-transparent transition hover:border-brand-coral pb-1 text-brand-dark"
          onClick={() => setMenuOpen(false)}
        >
          Stories
        </a>
        <a
          href={isHome ? "#contact" : "/#contact"}
          className="border-b-2 border-transparent transition hover:border-brand-coral pb-1 text-brand-dark"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
        <Button
          variant="whatsapp"
          href={whatsappUrl}
          className="text-sm lg:text-base"
        >
          Book on WhatsApp
        </Button>
      </div>
    </motion.nav>
  );
}
