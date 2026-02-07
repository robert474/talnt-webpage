/**
 * SchemaScript renders JSON-LD structured data into a <script> tag.
 *
 * This is a server component by default. It safely serialises the
 * provided data object and injects it into the document head via
 * Next.js's built-in <script> support.
 */

interface SchemaScriptProps {
  /** The JSON-LD structured data object to render. */
  data: Record<string, unknown>;
}

export default function SchemaScript({ data }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  );
}
