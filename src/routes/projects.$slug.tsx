import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
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
      <Link to="/projects" className="mt-6 inline-block text-sm text-muted-foreground hover:text-primary">
        ← back to projects
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
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link to="/projects" className="font-mono text-xs text-muted-foreground hover:text-primary">
        ← projects
      </Link>

      <div className="mt-6 flex items-center justify-between text-xs">
        <span className="font-mono text-primary">[{project.tag}]</span>
        <span className={project.status === "active" ? "text-foreground" : "text-muted-foreground"}>
          {project.status === "active" ? "● active" : "○ archived"}
        </span>
      </div>

      <h1 className="mt-3 text-4xl sm:text-5xl font-bold">{project.title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{project.desc}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="rounded border border-border bg-card/40 px-2 py-1 font-mono text-xs text-muted-foreground">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-12 space-y-5 text-foreground/90 leading-relaxed">
        {project.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-6 text-sm">
        <span className="text-muted-foreground">next →</span>{" "}
        <Link to="/projects/$slug" params={{ slug: next.slug }} className="text-primary hover:underline">
          {next.title}
        </Link>
      </div>
    </article>
  );
}
