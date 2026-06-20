import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, posts } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — YahNeeQ` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: `${loaderData.post.title} — YahNeeQ` },
          { property: "og:description", content: loaderData.post.excerpt },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-2 text-3xl font-bold">post not found</h1>
      <Link to="/blog" className="mt-6 inline-block text-sm text-muted-foreground hover:text-primary">
        ← back to blog
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-2xl font-bold">something broke</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 text-sm text-primary hover:underline">try again</button>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const idx = posts.findIndex((p) => p.slug === post.slug);
  const next = posts[(idx + 1) % posts.length];

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link to="/blog" className="font-mono text-xs text-muted-foreground hover:text-primary">
        ← blog
      </Link>

      <div className="mt-6 flex items-center gap-3 text-xs font-mono text-muted-foreground">
        <time>{post.date}</time>
        <span>·</span>
        <span>{post.read}</span>
      </div>

      <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">{post.title}</h1>

      <div className="mt-12 space-y-5 text-foreground/90 leading-relaxed">
        {post.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-6 text-sm">
        <span className="text-muted-foreground">next →</span>{" "}
        <Link to="/blog/$slug" params={{ slug: next.slug }} className="text-primary hover:underline">
          {next.title}
        </Link>
      </div>
    </article>
  );
}
