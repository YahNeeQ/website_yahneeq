import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — YahNeeQ" },
      { name: "description", content: "Notes and writing on machine learning, AI, and CS." },
      { property: "og:title", content: "Blog — YahNeeQ" },
      { property: "og:description", content: "Notes on ML, AI, and CS." },
    ],
  }),
  component: Blog,
});

const posts = [
  { title: "why attention still surprises me", date: "2026-06-10", read: "6 min", excerpt: "Re-deriving scaled dot-product attention from scratch and what I noticed the second time around." },
  { title: "small models, big lessons", date: "2026-05-22", read: "9 min", excerpt: "Training a 10M-param LM on my laptop taught me more than any paper I've read this year." },
  { title: "the bitter lesson, revisited", date: "2026-04-03", read: "4 min", excerpt: "A quick take on Sutton's essay after spending a weekend hand-engineering features that compute eventually crushed." },
  { title: "hello world", date: "2026-03-15", read: "2 min", excerpt: "Why I'm starting this site and what to expect (or not)." },
];

function Blog() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold">blog</h1>
      <p className="mt-3 text-muted-foreground">
        rough notes, deep dives, and short rants. unedited & opinionated.
      </p>

      <ul className="mt-12 divide-y divide-border">
        {posts.map((p) => (
          <li key={p.title}>
            <a href="#" className="group block py-6 transition-colors">
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                <time>{p.date}</time>
                <span>·</span>
                <span>{p.read}</span>
              </div>
              <h2 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
