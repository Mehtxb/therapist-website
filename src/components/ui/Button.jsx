const variants = {
  primary:
    "bg-brand-dark text-brand-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl",
  secondary:
    "bg-white/75 text-brand-dark border border-brand-dark/20 hover:-translate-y-0.5",
  whatsapp:
    "bg-[#25D366] text-white shadow-lg hover:-translate-y-0.5 hover:shadow-[0_0_16px_rgba(37,211,102,0.4)]",
};

export default function Button({
  variant = "primary",
  children,
  href,
  className = "",
  ...props
}) {
  const isTextSized =
    className.includes("text-xs") ||
    className.includes("text-sm") ||
    className.includes("text-base") ||
    className.includes("text-lg") ||
    className.includes("text-xl");
  const isPadded =
    className.includes("px-") ||
    className.includes("py-") ||
    className.includes("p-");
  const base = `inline-flex items-center justify-center rounded-full font-medium cursor-pointer transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-brand-dark/40 focus:ring-offset-2 ${!isTextSized ? "text-sm" : ""} ${!isPadded ? "px-6 py-3" : ""}`;
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
