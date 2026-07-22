import { useMemo, useState } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { CATEGORIES, projects, type ProjectCategory } from "@/data/projects";

type Filter = ProjectCategory | "All";

const Work = () => {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  // Only offer a filter that would actually return something.
  const available = useMemo(
    () => CATEGORIES.filter((c) => projects.some((p) => p.category === c)),
    [],
  );

  return (
    <div className="min-h-dvh">
      <SiteNav />

      <main id="main" className="pt-32 pb-24">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
              Everything here is built.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-ink-secondary">
              Each project is labelled with how far it actually got — production,
              MVP, or prototype. No concepts, no mockups.
            </p>
          </Reveal>

          {/* Filter. Radio semantics, because exactly one option is active.
              Wrapped in a segmented shell so it reads as one control. */}
          <Reveal delay={80}>
            <div
              role="radiogroup"
              aria-label="Filter projects by category"
              className="mt-10 inline-flex max-w-full flex-wrap gap-1 rounded-xl border border-line bg-surface-subtle p-1"
            >
              {(["All", ...available] as Filter[]).map((cat) => {
                const active = filter === cat;
                const count =
                  cat === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setFilter(cat)}
                    className={`mono h-11 rounded-lg px-4 text-xs transition-colors ${
                      active
                        ? "bg-accent font-medium text-[hsl(var(--on-accent))]"
                        : "text-ink-secondary hover:bg-surface-hover hover:text-ink"
                    }`}
                  >
                    {cat}
                    <span className={`ml-1.5 ${active ? "text-[hsl(var(--on-accent)/0.7)]" : "text-ink-tertiary"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <p aria-live="polite" className="sr-only">
            Showing {filtered.length} projects
          </p>

          {/* Keyed by filter so switching categories restarts the stagger. */}
          <div key={filter} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-ink-secondary">
              Nothing in this category yet.
            </p>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Work;
