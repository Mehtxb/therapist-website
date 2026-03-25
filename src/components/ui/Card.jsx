export default function Card({ children, className = "", highlight = false }) {
  const base = "rounded-3xl p-6 shadow-[0_30px_60px_rgba(24,45,41,0.12)]";
  const bg = highlight
    ? "bg-gradient-to-br from-brand-dark/90 to-brand-dark/80 text-brand-white"
    : "bg-white/90";

  return <div className={`${base} ${bg} ${className}`}>{children}</div>;
}
