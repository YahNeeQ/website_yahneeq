import { Link } from "@tanstack/react-router";
import logo from "@/assets/yahneeq-logo.png";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center" aria-label="YahNeeQ home">
          <img src={logo} alt="YahNeeQ" className="-my-5 -ml-3 h-20 w-auto" />
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/projects", label: "Projects" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
