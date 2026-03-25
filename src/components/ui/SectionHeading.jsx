export default function SectionHeading({ title, subtitle, className = "" }) {
  return (
    <div className={`max-w-2xl mb-8 ${className}`}>
      <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-4 text-brand-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base lg:text-xl text-brand-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
