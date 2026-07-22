import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const Hero = () => {
  const shipped = projects.filter((p) => p.status === "Production").length;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Layered backdrop: blueprint grid under an amber wash. Both are
          pointer-events-none so they never intercept a click. */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]
                   bg-[radial-gradient(55%_90%_at_50%_0%,hsl(var(--accent)/0.12),transparent_70%)]"
      />

      <div className="container-page">
        <p className="animate-rise mono inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs text-ink-secondary backdrop-blur-sm">
          <span aria-hidden="true" className="animate-pulse-dot size-1.5 rounded-full bg-[hsl(var(--status-production))]" />
          Open to freelance &amp; contract work
        </p>

        <h1
          className="animate-rise mt-7 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.06] text-ink sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "60ms" }}
        >
          I build software that
          <span className="text-accent"> ships</span> —
          <br className="hidden sm:block" />
          not slide decks.
        </h1>

        <p
          className="animate-rise mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-secondary sm:text-lg"
          style={{ animationDelay: "120ms" }}
        >
          Billing systems running in real shops, AI agents that do real work, and
          inference infrastructure built from first principles. Every project
          below has code behind it and an honest label on how far it got.
        </p>

        <div
          className="animate-rise mt-9 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "180ms" }}
        >
          <Link
            to="/work"
            className="group mono inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium
                       text-[hsl(var(--on-accent))] transition-colors hover:bg-[hsl(var(--accent-hover))]"
          >
            View the work
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <a
            href="/#contact"
            className="mono inline-flex h-12 items-center rounded-lg border border-line bg-surface/40 px-6 text-sm
                       text-ink-secondary backdrop-blur-sm transition-colors hover:border-line-strong hover:text-ink"
          >
            Get in touch
          </a>
        </div>

        <dl
          className="animate-rise mt-16 grid max-w-xl grid-cols-3 divide-x divide-line border-t border-line pt-8"
          style={{ animationDelay: "240ms" }}
        >
          {[
            { label: "In production", value: `${shipped}` },
            { label: "Projects built", value: `${projects.length}` },
            { label: "Years shipping", value: "3+" },
          ].map((stat, i) => (
            <div key={stat.label} className={i === 0 ? "pr-6" : "px-6"}>
              <dd className="mono text-3xl font-medium text-ink">{stat.value}</dd>
              <dt className="mono mt-1 text-[11px] uppercase tracking-wider text-ink-tertiary">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
