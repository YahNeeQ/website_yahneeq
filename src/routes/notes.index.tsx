import { createFileRoute, Link } from "@tanstack/react-router";

import { getPosts } from "@/data/posts";

export const Route = createFileRoute("/notes/")({
  head: () => ({
    meta: [
      { title: "Notes — YahNeeQ" },
      {
        name: "description",
        content: "Notes and writing on machine learning, AI, and CS.",
      },
      { property: "og:title", content: "Notes — YahNeeQ" },
      { property: "og:description", content: "Notes on ML, AI, and CS." },
    ],
  }),
  loader: () => getPosts(),
  component: Notes,
});

function Notes() {
  const posts = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-4xl font-bold sm:text-5xl">Notes</h1>
      <p className="mt-3 text-muted-foreground">
        Rough notes, deep dives, and short rants. Unedited and opinionated.
      </p>

      <ul className="mt-12 divide-y divide-border">
        {posts.length === 0 && (
          <li className="py-6 text-sm text-muted-foreground">No notes published yet.</li>
        )}
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to="/notes/$slug"
              params={{ slug: post.slug }}
              className="group block py-6 transition-colors"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.read}</span>
              </div>
              <h2 className="mt-2 text-xl font-semibold transition-colors group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
