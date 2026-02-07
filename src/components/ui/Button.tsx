import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

/**
 * Visual style variants for the Button component.
 */
const variants = {
  primary:
    "bg-green text-white hover:bg-green-dark focus-visible:ring-green/50",
  secondary:
    "bg-navy text-white hover:bg-navy-light focus-visible:ring-navy/50",
  outline:
    "border-2 border-green text-green hover:bg-green hover:text-white focus-visible:ring-green/50",
  ghost:
    "text-navy hover:bg-gray-100 focus-visible:ring-navy/50",
} as const;

/**
 * Size presets.
 */
const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
} as const;

/**
 * Shared base classes applied to every variant and size.
 */
const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

interface CommonProps {
  /** Visual style variant. @default "primary" */
  variant?: Variant;
  /** Size preset. @default "md" */
  size?: Size;
  /** Additional CSS classes. */
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    /** When `href` is omitted the component renders a native <button>. */
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    /** When `href` is provided the component renders a Next.js <Link>. */
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

// ----------------------------------------------------------------
// Component
// ----------------------------------------------------------------

/**
 * A polymorphic button component that renders either a `<button>` or a
 * Next.js `<Link>` depending on whether an `href` prop is supplied.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" href="/contact">
 *   Get Started
 * </Button>
 *
 * <Button variant="outline" onClick={handleClick}>
 *   Learn More
 * </Button>
 * ```
 */
export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    ...rest
  } = props;

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if ("href" in rest && rest.href !== undefined) {
    const { href, children, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { children, ...buttonProps } = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
