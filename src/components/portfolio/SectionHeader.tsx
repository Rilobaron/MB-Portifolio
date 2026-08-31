export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
          <span className="gold-line" />
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-graphite">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] md:text-base text-ash leading-relaxed">{description}</p>
      )}
    </div>
  );
}
