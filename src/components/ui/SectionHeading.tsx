/**
 * SectionHeading provides consistent heading + optional subtitle markup
 * used across landing pages and content sections.
 */

interface SectionHeadingProps {
  /** The primary heading text. */
  title: string;
  /** Optional supporting text rendered beneath the heading. */
  subtitle?: string;
  /** Heading level for the primary text. @default "h2" */
  as?: "h2" | "h3";
  /** Text alignment. @default "center" */
  align?: "center" | "left";
  /** Additional CSS classes applied to the wrapper. */
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  as: Tag = "h2",
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignmentClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-10 md:mb-14 ${alignmentClasses} ${className}`.trim()}>
      <Tag className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl text-balance">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-gray-600 sm:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
