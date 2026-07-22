import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import StatusBadge from "@/components/StatusBadge";
import Reveal from "@/components/Reveal";
import { getProject, projects, STATUS_META } from "@/data/projects";

const Metric = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg border border-line bg-surface-subtle px-3.5 py-3">
    <dd className="mono text-lg font-medium text-ink">{value}</dd>
    <dt className="mono mt-0.5 text-[11px] uppercase tracking-wider text-ink-tertiary">{label}</dt>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="border-t border-line py-8 first:border-t-0 first:pt-0">
    <h2 className="eyebrow mb-4">{title}</h2>
    {children}
  </section>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-dvh">
        <SiteNav />
        <main className="container-page pt-40 pb-24 text-center">
          <h1 className="font-display text-3xl font-bold text-ink">Project not found</h1>
          <p className="mt-3 text-ink-secondary">
            That case study doesn&apos;t exist — it may have been renamed.
          </p>
          <Link
            to="/work"
            className="mono mt-8 inline-flex h-11 items-center gap-2 rounded-lg border border-line px-5 text-sm text-ink-secondary transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" /> All work
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  const m = project.metrics;
  const metricEntries: { label: string; value: string }[] = [
    ...(m?.loc != null ? [{ label: "Lines", value: m.loc.toLocaleString() }] : []),
    ...(m?.files != null ? [{ label: "Files", value: String(m.files) }] : []),
    ...(m?.tests != null ? [{ label: "Test files", value: String(m.tests) }] : []),
    ...(m?.commits != null ? [{ label: "Commits", value: String(m.commits) }] : []),
  ];

  return (
    <div className="min-h-dvh">
      <SiteNav />

      <main id="main" className="pt-28 pb-24">
        <div className="container-page">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mono flex items-center gap-2 text-xs text-ink-tertiary">
              <Link to="/work" className="inline-flex h-11 items-center gap-1.5 transition-colors hover:text-ink">
                <ArrowLeft className="size-3.5" /> All work
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-ink-secondary">{project.name}</span>
            </nav>

            <header className="mt-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={project.status} size="md" />
                <span className="mono text-[11px] text-ink-tertiary">{project.category}</span>
                <span className="mono text-[11px] text-ink-tertiary">· {project.year}</span>
              </div>

              <h1 className="mt-5 text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
                {project.name}
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-secondary">
                {project.tagline}
              </p>
            </header>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_300px]">
            {/* Main narrative. */}
            <Reveal delay={60}>
              <article className="max-w-3xl">
                <Section title="The problem">
                  <p className="text-pretty leading-relaxed text-ink-secondary">{project.problem}</p>
                </Section>

                <Section title="What it does">
                  <ul className="space-y-2.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-3 text-ink-secondary">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </Section>

                {project.architecture && (
                  <Section title="How it's built">
                    <p className="text-pretty leading-relaxed text-ink-secondary">
                      {project.architecture}
                    </p>
                  </Section>
                )}

                {project.evidence && project.evidence.length > 0 && (
                  <Section title="Evidence it works">
                    <ul className="space-y-2">
                      {project.evidence.map((e) => (
                        <li key={e} className="mono text-sm leading-relaxed text-ink-secondary">
                          — {e}
                        </li>
                      ))}
                    </ul>
                  </Section>
                )}

                {project.highlight && (
                  <Section title="Worth noting">
                    <blockquote className="rounded-xl border border-[hsl(var(--accent)/0.25)] bg-[hsl(var(--accent)/0.06)] p-5 text-pretty leading-relaxed text-ink">
                      {project.highlight}
                    </blockquote>
                  </Section>
                )}

                {/* Stated plainly rather than hidden. A portfolio that admits
                    limits is more trustworthy than one that claims everything
                    is finished. */}
                {project.gaps && project.gaps.length > 0 && (
                  <Section title="What's not done">
                    <ul className="space-y-2">
                      {project.gaps.map((g) => (
                        <li key={g} className="text-sm leading-relaxed text-ink-tertiary">
                          — {g}
                        </li>
                      ))}
                    </ul>
                  </Section>
                )}
              </article>
            </Reveal>

            {/* Facts rail — sticky on desktop so status, numbers and the live
                link stay in view while the narrative scrolls. */}
            <Reveal delay={120}>
              <aside className="space-y-4 lg:sticky lg:top-24">
                <div className="surface-card p-5">
                  <h2 className="eyebrow">Status</h2>
                  <div className="mt-3">
                    <StatusBadge status={project.status} size="md" />
                  </div>
                  {project.statusReason && (
                    <p className="mt-3 text-pretty text-xs leading-relaxed text-ink-tertiary">
                      {STATUS_META[project.status].label}: {project.statusReason}
                    </p>
                  )}
                </div>

                {metricEntries.length > 0 && (
                  <div className="surface-card p-5">
                    <h2 className="eyebrow">By the numbers</h2>
                    <dl className="mt-3 grid grid-cols-2 gap-2.5">
                      {metricEntries.map((entry) => (
                        <Metric key={entry.label} label={entry.label} value={entry.value} />
                      ))}
                    </dl>
                  </div>
                )}

                <div className="surface-card p-5">
                  <h2 className="eyebrow">Stack</h2>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mono flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent text-sm font-medium text-[hsl(var(--on-accent))] transition-colors hover:bg-[hsl(var(--accent-hover))]"
                  >
                    Open live site <ArrowUpRight className="size-4" />
                  </a>
                )}
              </aside>
            </Reveal>
          </div>

          {/* Sequential navigation keeps the reader inside the work instead of
              bouncing them back to the grid after every study. */}
          <nav aria-label="More projects" className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                to={`/work/${prev.slug}`}
                className="surface-card card-lift group flex flex-col p-5"
              >
                <span className="mono flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-ink-tertiary">
                  <ArrowLeft className="size-3 transition-transform duration-200 group-hover:-translate-x-0.5" />
                  Previous
                </span>
                <span className="mt-2 font-display text-base font-semibold text-ink transition-colors group-hover:text-accent">
                  {prev.name}
                </span>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
            {next && (
              <Link
                to={`/work/${next.slug}`}
                className="surface-card card-lift group flex flex-col p-5 text-right sm:col-start-2"
              >
                <span className="mono flex items-center justify-end gap-1.5 text-[11px] uppercase tracking-wider text-ink-tertiary">
                  Next
                  <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
                <span className="mt-2 font-display text-base font-semibold text-ink transition-colors group-hover:text-accent">
                  {next.name}
                </span>
              </Link>
            )}
          </nav>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default CaseStudy;
