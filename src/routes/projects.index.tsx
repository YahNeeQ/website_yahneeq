import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — YahNeeQ" },
      { name: "description", content: "Machine learning and computer science projects I've been hacking on." },
      { property: "og:title", content: "Projects — YahNeeQ" },
      { property: "og:description", content: "Machine learning and CS hobby projects." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold">projects</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        things i'm building or have built. click through for notes.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="group relative rounded-lg border border-border bg-card/40 p-6 transition-all hover:border-primary/60 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-primary">[{p.tag}]</span>
              <span className={p.status === "active" ? "text-foreground" : "text-muted-foreground"}>
                {p.status === "active" ? "● active" : "○ archived"}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
              {p.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-4 text-xs text-muted-foreground group-hover:text-primary transition-colors">
              read more →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
