import { useEffect, useMemo, useState } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import {
  CATEGORIES,
  projects,
  STATUS_META,
  type ProjectCategory,
  type ProjectStatus,
} from "@/data/projects";

/**
 * The registry — the Work page as the full system of record.
 *
 * Filters hide; an index navigates. Every project is always on the page,
 * grouped into numbered category sections, with a sticky section nav instead
 * of filter pills. Cards carry their registry № so the ledger numbering from
 * the hero continues here.
 */

const sectionId = (category: ProjectCategory) =>
  category.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const Work = () => {
  const sections = useMemo(
    () =>
      CATEGORIES.map((category) => ({
        category,
        id: sectionId(category),
        items: projects.filter((p) => p.category === category),
      })).filter((s) => s.items.length > 0),
    [],
  );

  const statusCounts = useMemo(
    () =>
      (Object.keys(STATUS_META) as ProjectStatus[]).map((status) => ({
        status,
        count: projects.filter((p) => p.status === status).length,
      })),
    [],
  );

  /** 1-based registry number, continuous across sections. */
  const registryIndex = useMemo(() => {
    const map = new Map<string, number>();
    let n = 0;
    for (const section of sections) for (const p of section.items) map.set(p.slug, ++n);
    return map;
  }, [sections]);

  // Scrollspy for the sticky index — highlights the section in view.
  const [activeSection, setActiveSection] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      // A narrow band around the upper third: exactly one section matches.
      { rootMargin: "-35% 0px -60% 0px" },
    );
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-dvh">
      <SiteNav />

      <main id="main" className="pt-32 pb-24">
        <div className="container-page">
          <Reveal>
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
                The registry — every project on record
              </p>
              <p className="mono hidden text-[11px] uppercase tracking-[0.18em] text-ink-tertiary sm:block">
                {projects.length} entries
              </p>
            </div>

            <h1 className="mt-8 max-w-3xl text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
              Everything here is built.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-ink-secondary">
              Nothing is hidden behind a filter — the whole record is on this
              page, labelled with how far each project actually got.
            </p>

            {/* Status legend — the honest-labelling key, stated once. */}
            <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {statusCounts.map(({ status, count }) => (
                <div key={status} className="mono flex items-center gap-2 text-xs text-ink-secondary">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full"
                    style={{ backgroundColor: `hsl(var(${STATUS_META[status].colorVar}))` }}
                  />
                  <dt className="inline">{STATUS_META[status].label}</dt>
                  <dd className="inline text-ink-tertiary">×{count}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Sticky section index — navigation, not filtering. */}
          <nav
            aria-label="Sections"
            className="sticky top-16 z-30 -mx-5 mt-10 border-b border-line bg-background/85 px-5 backdrop-blur-md sm:-mx-8 sm:px-8"
          >
            <ul className="flex gap-1 overflow-x-auto py-2">
              {sections.map((section, i) => {
                const active = activeSection === section.id;
                return (
                  <li key={section.id} className="shrink-0">
                    <a
                      href={`#${section.id}`}
                      aria-current={active ? "true" : undefined}
                      className={`mono flex h-11 items-center gap-2 rounded-lg px-3.5 text-xs transition-colors ${
                        active
                          ? "bg-surface-hover text-accent"
                          : "text-ink-secondary hover:bg-surface-subtle hover:text-ink"
                      }`}
                    >
                      <span className="text-ink-tertiary">{String(i + 1).padStart(2, "0")}</span>
                      {section.category}
                      <span className="text-ink-tertiary">×{section.items.length}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {sections.map((section, sectionIndex) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="scroll-mt-36 pt-14"
            >
              <Reveal>
                <div className="mono grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 border-y border-line py-2 text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
                  <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
                  <h2 id={`${section.id}-heading`} className="font-sans text-ink-secondary">
                    {section.category}
                  </h2>
                  <span>×{section.items.length}</span>
                </div>
              </Reveal>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((project, i) => (
                  <Reveal key={project.slug} delay={(i % 3) * 60}>
                    <ProjectCard project={project} index={registryIndex.get(project.slug)} />
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Work;
