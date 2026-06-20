import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/data/posts";

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

function Blog() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold">blog</h1>
      <p className="mt-3 text-muted-foreground">
        rough notes, deep dives, and short rants. unedited & opinionated.
      </p>

      <ul className="mt-12 divide-y divide-border">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group block py-6 transition-colors"
            >
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                <time>{p.date}</time>
                <span>·</span>
                <span>{p.read}</span>
              </div>
              <h2 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
