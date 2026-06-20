import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YahNeeQ — ML, AI & CS hobby projects" },
      { name: "description", content: "I tinker with machine learning, AI systems, and computer science. Here's what I'm building and writing about." },
      { property: "og:title", content: "YahNeeQ — ML, AI & CS hobby projects" },
      { property: "og:description", content: "I tinker with machine learning, AI systems, and computer science." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" aria-hidden />
      <section className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          currently: training small transformers on a single GPU
        </div>
        <h1 className="mt-6 text-5xl sm:text-7xl font-bold leading-[1.05]">
          hey, i'm <span className="text-primary">YahNeeQ</span>.<br />
          <span className="text-muted-foreground">i build stuff with</span>
          <br /> machine learning & code.
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
          this is my hobby corner of the internet — a place where i drop experiments,
          half-finished projects, and notes on AI, ML, and computer science as i learn.
          no agenda, no newsletter, just things i find cool.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            see projects →
          </Link>
          <Link to="/blog" className="rounded-md border border-border bg-card/40 px-5 py-2.5 text-sm font-medium hover:bg-card/80 transition-colors">
            read the blog
          </Link>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground">what lives here</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { t: "experiments", d: "training runs, model tinkering, weird ideas i wanted to see work." },
            { t: "writing", d: "notes on papers, things that clicked for me, and lessons from failed builds." },
            { t: "code", d: "small open repos — utilities, demos, and reference implementations." },
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
