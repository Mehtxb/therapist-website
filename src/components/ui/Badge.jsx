export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-full bg-brand-sage/30 px-5 py-2.5 text-sm lg:text-base font-medium text-brand-dark ${className}`}
    >
      {children}
    </span>
  );
}
