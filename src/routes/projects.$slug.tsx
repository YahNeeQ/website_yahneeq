import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { RichText } from "@/components/RichText";
import { getProject, getProjects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: async ({ params }) => {
    const [project, projects] = await Promise.all([
      getProject({ data: params.slug }),
      getProjects(),
    ]);
    if (!project) throw notFound();
    return { project, projects };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — YahNeeQ` },
          { name: "description", content: loaderData.project.desc },
          { property: "og:title", content: `${loaderData.project.title} — YahNeeQ` },
          { property: "og:description", content: loaderData.project.desc },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-2 text-3xl font-bold">project not found</h1>
      <Link
        to="/projects"
        className="mt-6 inline-block text-sm text-muted-foreground hover:text-primary"
      >
        ← back to projects
      </Link>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project, projects } = Route.useLoaderData();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : undefined;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link to="/projects" className="font-mono text-xs text-muted-foreground hover:text-primary">
        ← projects
      </Link>

      <div className="mt-6 flex items-center justify-between text-xs">
        <span className="font-mono text-primary">[{project.tag}]</span>
        <span
          className={project.status === "active" ? "text-foreground" : "text-muted-foreground"}
        >
          {project.status === "active" ? "● active" : "○ archived"}
        </span>
      </div>

      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{project.title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{project.desc}</p>

      {project.mainImage && (
        <img
          src={project.mainImage.url}
          alt={project.mainImage.alt ?? project.title}
          className="mt-8 w-full rounded-lg border border-border object-cover"
        />
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded border border-border bg-card/40 px-2 py-1 font-mono text-xs text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-12 space-y-5 leading-relaxed text-foreground/90">
        <RichText value={project.body} />
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {project.gallery.map((image) => (
            <figure key={image.url}>
              <img
                src={image.url}
                alt={image.alt ?? ""}
                className="w-full rounded-lg border border-border"
                loading="lazy"
              />
              {image.caption && (
                <figcaption className="mt-2 text-xs text-muted-foreground">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block text-sm text-primary hover:underline"
        >
          view repository →
        </a>
      )}

      {next && (
        <div className="mt-16 border-t border-border pt-6 text-sm">
          <span className="text-muted-foreground">next →</span>{" "}
          <Link
            to="/projects/$slug"
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
