import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

/**
 * "The Shipping Ledger" — see design/HERO-BRIEF.md.
 *
 * The subject builds systems of record, so the hero IS one: a manifest of
 * real production software. No split columns, no badge, no CTA pair, no stat
 * tiles — the ledger rows are the proof, the numbers, and the calls to
 * action all at once. Availability is the last open row, not a pill.
 */

/** Client descriptors for the "built for" column — presentation-only. */
const BUILT_FOR: Record<string, string> = {
  "steel-flow": "steel trading co.",
  "womens-zone": "clothing retailer",
  "the-signature": "cakes & pastries shop",
  prepli: "govt-exam aspirants",
};

const Hero = () => {
  const production = projects.filter((p) => p.status === "Production");

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* Near-flat backdrop: one faint amber wash, no texture — the ruled
          ledger lines below are the texture. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[380px]
                   bg-[radial-gradient(50%_80%_at_50%_0%,hsl(var(--accent)/0.06),transparent_70%)]"
      />

      <div className="container-page">
        {/* Document header — marginalia, like the top rule of a ledger page. */}
        <div className="animate-rise flex items-baseline justify-between gap-4 border-b border-line pb-3">
          <p className="mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
            Boopathi Raja — Full-stack &amp; AI engineer
          </p>
          <p className="mono hidden text-[11px] uppercase tracking-[0.18em] text-ink-tertiary sm:block">
            India · IST (UTC+05:30)
          </p>
        </div>

        {/* The statement. */}
        <h1
          className="animate-rise mt-10 font-display font-bold leading-[0.98] text-ink"
          style={{ animationDelay: "60ms", fontSize: "clamp(3rem, 8.5vw, 7rem)" }}
        >
          I build software
          <br />
          <span className="whitespace-nowrap">
            <span className="text-accent">that ships.</span>
            {production.length > 0 && (
              <span
                aria-hidden="true"
                className="animate-stamp mono ml-4 inline-block -translate-y-3 rounded
                           border-2 border-[hsl(var(--status-production)/0.8)] px-2.5 py-1 align-middle
                           text-[clamp(10px,1.1vw,13px)] font-medium uppercase tracking-[0.14em]
                           text-[hsl(var(--status-production))] sm:ml-6"
              >
                In production ×{production.length}
              </span>
            )}
          </span>
        </h1>

        {/* Margin note — the one deliberate alignment break on the page. */}
        <p
          className="animate-rise ml-auto mt-8 max-w-[34ch] text-pretty text-[17px] leading-relaxed
                     text-ink-secondary lg:text-right"
          style={{ animationDelay: "120ms" }}
        >
          Billing systems in real shops, AI agents that do real work, inference
          infrastructure from first principles — each entry below labelled
          honestly with how far it got.
        </p>

        {/* The ledger. */}
        <div className="mt-10">
          <div
            className="animate-rise mono grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 border-y
                       border-line py-2 text-[11px] uppercase tracking-[0.18em] text-ink-tertiary
                       md:grid-cols-[2.5rem_1fr_12rem_9rem_2rem]"
            style={{ animationDelay: "180ms" }}
          >
            <span>№</span>
            <span>System</span>
            <span className="hidden md:block">Built for</span>
            <span className="hidden md:block">Status</span>
            <span aria-hidden="true" />
          </div>

          <ul>
            {production.map((project, i) => (
              <li key={project.slug} className="animate-rise" style={{ animationDelay: `${220 + i * 40}ms` }}>
                <Link
                  to={`/work/${project.slug}`}
                  aria-label={`${project.name} — ${project.tagline} — in production`}
                  className="group grid min-h-[3.5rem] grid-cols-[2.5rem_1fr_2rem] items-center gap-x-4
                             border-b border-line py-3 transition-colors hover:bg-surface-subtle
                             focus-visible:bg-surface-subtle md:grid-cols-[2.5rem_1fr_12rem_9rem_2rem]"
                >
                  <span className="mono text-sm text-ink-tertiary">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="flex min-w-0 items-baseline gap-4">
                    <span className="shrink-0 font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent sm:text-xl">
                      {project.name}
                    </span>
                    {/* Receipt leader — needs width to mean anything, so md+ only. */}
                    <span aria-hidden="true" className="leader-dots hidden h-0.5 flex-1 self-center md:block" />
                  </span>

                  <span className="mono hidden text-xs text-ink-tertiary md:block">
                    {BUILT_FOR[project.slug] ?? project.category.toLowerCase()}
                  </span>

                  <span className="mono hidden items-center gap-1.5 text-xs text-ink-secondary md:flex">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-[hsl(var(--status-production))]" />
                    production
                  </span>

                  <ArrowRight className="size-4 justify-self-end text-ink-tertiary transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent" />

                  {/* Mobile second line: descriptor + status, indented under the name. */}
                  <span className="col-start-2 mono flex items-center gap-3 text-[11px] text-ink-tertiary md:hidden">
                    {BUILT_FOR[project.slug] ?? project.category.toLowerCase()}
                    <span className="flex items-center gap-1.5 text-ink-secondary">
                      <span aria-hidden="true" className="size-1 rounded-full bg-[hsl(var(--status-production))]" />
                      production
                    </span>
                  </span>
                </Link>
              </li>
            ))}

            {/* The open slot — availability as a ledger entry, not a badge. */}
            <li className="animate-rise" style={{ animationDelay: `${220 + production.length * 40}ms` }}>
              <a
                href="/#contact"
                aria-label="Your project — open slot — currently accepting work — go to contact"
                className="group grid min-h-[3.5rem] grid-cols-[2.5rem_1fr_2rem] items-center gap-x-4
                           border-b border-line py-3 transition-colors hover:bg-surface-subtle
                           focus-visible:bg-surface-subtle md:grid-cols-[2.5rem_1fr_12rem_9rem_2rem]"
              >
                <span className="mono text-sm text-ink-tertiary">
                  {String(production.length + 1).padStart(2, "0")}
                </span>

                <span className="flex min-w-0 items-baseline gap-4">
                  <span className="shrink-0 font-display text-lg font-semibold text-ink-secondary transition-colors group-hover:text-accent sm:text-xl">
                    Your project
                  </span>
                  <span aria-hidden="true" className="leader-dots hidden h-0.5 flex-1 self-center md:block" />
                </span>

                <span className="mono hidden text-xs text-ink-tertiary md:block">open slot</span>

                <span className="mono hidden items-center gap-1.5 text-xs text-accent md:flex">
                  <span aria-hidden="true" className="animate-pulse-dot size-1.5 rounded-full bg-accent" />
                  accepting work
                </span>

                <ArrowRight className="size-4 justify-self-end text-ink-tertiary transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent" />

                <span className="col-start-2 mono flex items-center gap-3 text-[11px] text-ink-tertiary md:hidden">
                  open slot
                  <span className="flex items-center gap-1.5 text-accent">
                    <span aria-hidden="true" className="animate-pulse-dot size-1 rounded-full bg-accent" />
                    accepting work
                  </span>
                </span>
              </a>
            </li>
          </ul>

          <div
            className="animate-rise mt-4 flex justify-end"
            style={{ animationDelay: `${260 + production.length * 40}ms` }}
          >
            <Link
              to="/work"
              className="group mono inline-flex h-11 items-center gap-1.5 text-xs text-ink-secondary transition-colors hover:text-ink"
            >
              browse all {projects.length} projects
              <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
