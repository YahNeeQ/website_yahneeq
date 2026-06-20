import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gaming")({
  head: () => ({
    meta: [
      { title: "Gaming — YahNeeQ" },
      { name: "description", content: "Game stats, ranks, and accounts from the games I play." },
      { property: "og:title", content: "Gaming — YahNeeQ" },
      { property: "og:description", content: "Game stats, ranks, and accounts from the games I play." },
    ],
  }),
  component: Gaming,
});

const games = [
  {
    name: "valorant",
    tag: "FPS",
    rank: "immortal 1",
    hours: "1.2k",
    main: "jett / omen",
    kda: "1.18",
    note: "mostly duo queue. peak elo last act.",
  },
  {
    name: "league of legends",
    tag: "MOBA",
    rank: "diamond 4",
    hours: "2.8k",
    main: "mid / jungle",
    kda: "4.2 / 5.1 / 8.9",
    note: "ARAM enjoyer on weekends.",
  },
  {
    name: "counter-strike 2",
    tag: "FPS",
    rank: "faceit 6",
    hours: "900",
    main: "AWP / entry",
    kda: "1.04",
    note: "learning nade lineups the hard way.",
  },
  {
    name: "rocket league",
    tag: "Sports",
    rank: "champ 2",
    hours: "600",
    main: "1s / 2s",
    kda: "—",
    note: " Air-dribble-in-progress.",
  },
];

const accounts = [
  { platform: "steam", handle: "yahneeq", url: "#" },
  { platform: "riot", handle: "yahneeq#001", url: "#" },
  { platform: "epic", handle: "yahneeq.", url: "#" },
  { platform: "discord", handle: "@yahneeq", url: "#" },
];

function Gaming() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold">gaming</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        stats, ranks, and account handles from the games i'm currently grinding. data is updated manually — last refresh: today.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {games.map((g) => (
          <div
            key={g.name}
            className="rounded-lg border border-border bg-card/40 p-5 transition-all hover:border-primary/60 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-primary">[{g.tag}]</span>
              <span className="text-muted-foreground">{g.hours}h</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold">{g.name}</h2>
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">rank</span>
                <span className="font-medium">{g.rank}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">main</span>
                <span className="font-medium">{g.main}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">kda / kdr</span>
                <span className="font-mono">{g.kda}</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{g.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold">accounts</h2>
        <p className="mt-2 text-sm text-muted-foreground">add me or check profiles. links open in a new tab.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {accounts.map((a) => (
            <a
              key={a.platform}
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-card/40 p-4 transition-all hover:border-primary/60 hover:-translate-y-0.5"
            >
              <div>
                <div className="text-xs font-mono uppercase text-muted-foreground">{a.platform}</div>
                <div className="mt-1 font-medium group-hover:text-primary transition-colors">{a.handle}</div>
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">→</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-lg border border-border bg-card/40 p-6">
        <h2 className="text-lg font-semibold">what's next?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          i'm planning to pull live stats via game APIs and show match history here. for now, everything is static and updated by hand.
        </p>
      </div>
    </div>
  );
}
