import { createFileRoute, Link } from "@tanstack/react-router";

import { GitHubButton } from "@/components/GitHubButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YahNeeQ — ML, AI & CS Hobby Projects" },
      {
        name: "description",
        content:
          "I tinker with machine learning, AI systems, and computer science. Here's what I'm building.",
      },
      { property: "og:title", content: "YahNeeQ — ML, AI & CS Hobby Projects" },
      {
        property: "og:description",
        content: "I tinker with machine learning, AI systems, and computer science.",
      },
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
          This is my hobby corner of the internet — a place where I drop experiments, half-finished
          projects, and things I learn about AI, ML, and computer science. No agenda, no newsletter,
          just things I find cool.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            See projects →
          </Link>
        </div>
        <GitHubButton
          href="https://github.com/YahNeeQ"
          label="GitHub.com/YahNeeQ"
          className="mt-6"
        />
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-sm tracking-widest text-muted-foreground">What lives here</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              t: "Experiments",
              d: "Training runs, model tinkering, and weird ideas I wanted to see work.",
            },
            {
              t: "Builds",
              d: "Finished projects, work in progress, and lessons from things that failed.",
            },
            {
              t: "Code",
              d: "Small open repositories — utilities, demos, and reference implementations.",
            },
          ].map((x) => (
            <div
              key={x.t}
              className="group rounded-lg border border-border bg-card/40 p-6 transition-colors hover:border-primary/60"
            >
              <div className="text-xs font-mono text-primary">// {x.t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
