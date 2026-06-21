import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { RichText } from "@/components/RichText";
import { getPost, getPosts } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const [post, posts] = await Promise.all([getPost({ data: params.slug }), getPosts()]);
    if (!post) throw notFound();
    return { post, posts };
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
      <Link
        to="/blog"
        className="mt-6 inline-block text-sm text-muted-foreground hover:text-primary"
      >
        ← back to blog
      </Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post, posts } = Route.useLoaderData();
  const index = posts.findIndex((item) => item.slug === post.slug);
  const next = posts.length > 1 ? posts[(index + 1) % posts.length] : undefined;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link to="/blog" className="font-mono text-xs text-muted-foreground hover:text-primary">
        ← blog
      </Link>

      <div className="mt-6 flex items-center gap-3 font-mono text-xs text-muted-foreground">
        <time>{post.date}</time>
        <span>·</span>
        <span>{post.read}</span>
      </div>

      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">{post.title}</h1>

      {post.mainImage && (
        <img
          src={post.mainImage.url}
          alt={post.mainImage.alt ?? post.title}
          className="mt-8 w-full rounded-lg border border-border object-cover"
        />
      )}

      <div className="mt-12 space-y-5 leading-relaxed text-foreground/90">
        <RichText value={post.body} />
      </div>

      {next && (
        <div className="mt-16 border-t border-border pt-6 text-sm">
          <span className="text-muted-foreground">next →</span>{" "}
          <Link
            to="/blog/$slug"
            params={{ slug: next.slug }}
            className="text-primary hover:underline"
          >
            {next.title}
          </Link>
        </div>
      )}
    </article>
  );
}
