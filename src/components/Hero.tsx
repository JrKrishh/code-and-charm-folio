import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const Hero = () => {
  const shipped = projects.filter((p) => p.status === "Production").length;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient wash. Pointer-events-none so it never intercepts a click. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]
                   bg-[radial-gradient(60%_100%_at_50%_0%,hsl(var(--accent)/0.10),transparent_70%)]"
      />

      <div className="container-page">
        <p className="eyebrow animate-rise">Full-stack &amp; AI engineer · India</p>

        <h1 className="animate-rise mt-5 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.08] text-ink sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "60ms" }}>
          I build software that
          <span className="text-accent"> ships</span> — not slide decks.
        </h1>

        <p className="animate-rise mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-secondary sm:text-lg"
           style={{ animationDelay: "120ms" }}>
          Billing systems running in real shops, AI agents that do real work, and
          inference infrastructure built from first principles. Every project
          below has code behind it and an honest label on how far it got.
        </p>

        <div className="animate-rise mt-9 flex flex-wrap items-center gap-3"
             style={{ animationDelay: "180ms" }}>
          <Link
            to="/work"
            className="mono inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium
                       text-[hsl(var(--on-accent))] transition-colors hover:bg-[hsl(var(--accent-hover))]"
          >
            View the work
            <ArrowRight className="size-4" />
          </Link>
          <a
            href="/#contact"
            className="mono inline-flex h-11 items-center rounded-lg border border-line px-5 text-sm
                       text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
          >
            Get in touch
          </a>
        </div>

        <dl className="animate-rise mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8"
            style={{ animationDelay: "240ms" }}>
          {[
            { label: "In production", value: `${shipped}` },
            { label: "Projects built", value: `${projects.length}` },
            { label: "Years shipping", value: "3+" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="mono text-[11px] uppercase tracking-wider text-ink-tertiary">
                {stat.label}
              </dt>
              <dd className="mono mt-1 text-2xl font-medium text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
