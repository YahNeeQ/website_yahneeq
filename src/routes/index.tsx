import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YahNeeQ — ML, AI & CS Hobby Projects" },
      { name: "description", content: "I tinker with machine learning, AI systems, and computer science. Here's what I'm building and writing about." },
      { property: "og:title", content: "YahNeeQ — ML, AI & CS Hobby Projects" },
      { property: "og:description", content: "I tinker with machine learning, AI systems, and computer science." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" aria-hidden />
      <section className="relative mx-auto max-w-6xl px-6 pt-24 pb-6 sm:pt-32 sm:pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          Currently: working on this website
        </div>
        <h1 className="mt-6 text-5xl sm:text-7xl font-bold leading-[1.05]">
          Hey, I'm <span className="text-primary">YahNeeQ</span>.<br />
          <span className="text-muted-foreground">I build stuff.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
          This is my hobby corner of the internet — a place where I drop experiments,
          half-finished projects, and notes on AI, ML, and computer science as I learn.
          No agenda, no newsletter, just things I find cool.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            See projects →
          </Link>
          <Link to="/notes" className="rounded-md border border-border bg-card/40 px-5 py-2.5 text-sm font-medium hover:bg-card/80 transition-colors">
            Read the notes
          </Link>
        </div>
        <a
          href="https://github.com/YahNeeQ"
          target="_blank"
          rel="noreferrer"
          className="group mt-6 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-black/20 transition-all hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-primary/20"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-5 fill-current"
          >
            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.97a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
          </svg>
          <span>GitHub.com/YahNeeQ</span>
          <span className="transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-sm tracking-widest text-muted-foreground">What lives here</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Experiments", d: "Training runs, model tinkering, and weird ideas I wanted to see work." },
            { t: "Writing", d: "Notes on papers, things that clicked for me, and lessons from failed builds." },
            { t: "Code", d: "Small open repositories — utilities, demos, and reference implementations." },
          ].map((x) => (
            <div key={x.t} className="group rounded-lg border border-border bg-card/40 p-6 transition-colors hover:border-primary/60">
              <div className="text-xs font-mono text-primary">// {x.t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
