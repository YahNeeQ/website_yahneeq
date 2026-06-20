import { createFileRoute } from "@tanstack/react-router";

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

const projects = [
  { title: "nano-transformer", tag: "ML", desc: "A from-scratch transformer trained on tiny shakespeare. Single file, no frameworks beyond pytorch.", status: "active" },
  { title: "diffusion playground", tag: "AI", desc: "Interactive notebook for visualizing the forward/reverse process of DDPMs on toy datasets.", status: "active" },
  { title: "vector-db-lite", tag: "CS", desc: "Tiny in-memory vector store with HNSW indexing — built to understand ANN search.", status: "archived" },
  { title: "tokenizer-lab", tag: "ML", desc: "Comparing BPE, WordPiece and Unigram tokenizers on multilingual corpora.", status: "active" },
];

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold">projects</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        things i'm building or have built. most live on GitHub — click through for code & notes.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href="#"
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
              view repo →
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
