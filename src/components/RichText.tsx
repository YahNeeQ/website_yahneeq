import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import type { ContentBlock } from "@/data/projects";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure>
        <img
          src={value.url}
          alt={value.alt ?? ""}
          className="w-full rounded-lg border border-border"
          loading="lazy"
        />
        {value.caption && (
          <figcaption className="mt-2 text-xs text-muted-foreground">{value.caption}</figcaption>
        )}
      </figure>
    ),
  },
};

export function RichText({ value }: { value: ContentBlock[] | string[] }) {
  if (value.length === 0) return null;

  if (typeof value[0] === "string") {
    return value.map((paragraph, index) => <p key={index}>{paragraph as string}</p>);
  }

  return (
    <PortableText
      value={value as unknown as PortableTextBlock[]}
      components={components}
    />
  );
}
