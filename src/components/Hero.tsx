import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TerminalCard from "@/components/TerminalCard";
import { projects } from "@/data/projects";

const Hero = () => {
  const shipped = projects.filter((p) => p.status === "Production").length;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24">
      {/* Layered backdrop: blueprint grid under an amber wash. Both are
          pointer-events-none so they never intercept a click. */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]
                   bg-[radial-gradient(55%_90%_at_50%_0%,hsl(var(--accent)/0.10),transparent_70%)]"
      />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="animate-rise mono inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs text-ink-secondary backdrop-blur-sm">
              <span aria-hidden="true" className="animate-pulse-dot size-1.5 rounded-full bg-[hsl(var(--status-production))]" />
              Open to freelance &amp; contract work
            </p>

            <h1
              className="animate-rise mt-7 text-balance font-display text-4xl font-bold leading-[1.06] text-ink sm:text-6xl xl:text-7xl"
              style={{ animationDelay: "60ms" }}
            >
              I build software
              <br />
              that{" "}
              <span className="relative inline-block text-accent">
                ships
                {/* Hand-drawn-feeling underline stroke. */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 120 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-accent/70"
                >
                  <path
                    d="M3 9 C 30 3, 90 3, 117 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            <p
              className="animate-rise mt-7 max-w-xl text-pretty text-base leading-relaxed text-ink-secondary sm:text-lg"
              style={{ animationDelay: "120ms" }}
            >
              Billing systems running in real shops, AI agents that do real
              work, and inference infrastructure built from first principles —
              every project labelled honestly with how far it got.
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
              className="animate-rise mt-14 grid max-w-md grid-cols-3 divide-x divide-line border-t border-line pt-7"
              style={{ animationDelay: "240ms" }}
            >
              {[
                { label: "In production", value: `${shipped}` },
                { label: "Projects built", value: `${projects.length}` },
                { label: "Years shipping", value: "3+" },
              ].map((stat, i) => (
                <div key={stat.label} className={i === 0 ? "pr-5" : "px-5"}>
                  <dd className="mono text-3xl font-medium text-ink">{stat.value}</dd>
                  <dt className="mono mt-1 text-[11px] uppercase tracking-wider text-ink-tertiary">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-rise" style={{ animationDelay: "200ms" }}>
            <TerminalCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
