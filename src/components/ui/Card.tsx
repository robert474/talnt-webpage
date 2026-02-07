import Image from "next/image";
import Link from "next/link";

/**
 * A flexible card component used for services, roles, locations, and
 * other content blocks throughout the site.
 */

interface CardProps {
  /** Card heading text. */
  title: string;
  /** Supporting description text. */
  description?: string;
  /** Optional image path (relative or absolute URL). */
  image?: string;
  /** Alt text for the image. Falls back to `title` if omitted. */
  imageAlt?: string;
  /** If provided, the entire card becomes a link. */
  href?: string;
  /** Optional icon element rendered above the title when no image is present. */
  icon?: React.ReactNode;
  /** Additional CSS classes for the outer wrapper. */
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  imageAlt,
  href,
  icon,
  className = "",
}: CardProps) {
  const content = (
    <>
      {image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xl">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {icon && !image && (
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green/10 text-green">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-navy group-hover:text-green transition-colors duration-200">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
            {description}
          </p>
        )}
        {href && (
          <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-green" aria-hidden="true">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  const sharedClasses = `group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={sharedClasses} aria-label={`Learn more about ${title}`}>
        {content}
      </Link>
    );
  }

  return <article className={sharedClasses}>{content}</article>;
}
