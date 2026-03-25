import { emergencyTicker } from "../../data/siteConfig";

export default function Ticker() {
  return (
    <div
      className="w-full overflow-hidden bg-white border-b border-brand-sage/20"
      role="marquee"
      aria-label="Emergency helpline information"
    >
      <div className="flex animate-marquee whitespace-nowrap py-2">
        {/* Duplicate content for seamless infinite loop */}
        {[0, 1].map((i) => (
          <span
            key={i}
            className="mx-8 text-xs font-medium text-brand-charcoal/80 sm:text-sm"
          >
            {emergencyTicker}
          </span>
        ))}
      </div>
    </div>
  );
}
