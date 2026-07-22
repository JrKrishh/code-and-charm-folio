import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import StatusBadge from "@/components/StatusBadge";
import { getProject, STATUS_META } from "@/data/projects";

const Metric = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg border border-line bg-surface-subtle px-4 py-3">
    <dt className="mono text-[11px] uppercase tracking-wider text-ink-tertiary">{label}</dt>
    <dd className="mono mt-1 text-lg font-medium text-ink">{value}</dd>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="border-t border-line py-8">
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

  const m = project.metrics;
  const hasMetrics =
    m && (m.loc != null || m.files != null || m.tests != null || m.commits != null);

  return (
    <div className="min-h-dvh">
      <SiteNav />

      <main id="main" className="pt-28 pb-24">
        <article className="container-page max-w-3xl">
          <Link
            to="/work"
            className="mono inline-flex h-11 items-center gap-2 text-xs text-ink-tertiary transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-3.5" /> All work
          </Link>

          <header className="mt-4">
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

            {project.statusReason && (
              <p className="mono mt-4 text-xs leading-relaxed text-ink-tertiary">
                {STATUS_META[project.status].label}: {project.statusReason}
              </p>
            )}

            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mono inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-[hsl(var(--on-accent))] transition-colors hover:bg-[hsl(var(--accent-hover))]"
                  >
                    Open live site <ArrowUpRight className="size-4" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mono inline-flex h-11 items-center gap-2 rounded-lg border border-line px-5 text-sm text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
                  >
                    <Github className="size-4" /> Source
                  </a>
                )}
              </div>
            )}
          </header>

          <div className="mt-10">
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

            <Section title="Stack">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="mono rounded-md border border-line bg-surface-subtle px-2.5 py-1 text-xs text-ink-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Section>

            {hasMetrics && (
              <Section title="By the numbers">
                <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {m?.loc != null && (
                    <Metric label="Lines" value={m.loc.toLocaleString()} />
                  )}
                  {m?.files != null && <Metric label="Files" value={String(m.files)} />}
                  {m?.tests != null && <Metric label="Test files" value={String(m.tests)} />}
                  {m?.commits != null && <Metric label="Commits" value={String(m.commits)} />}
                </dl>
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
                <p className="text-pretty leading-relaxed text-ink">{project.highlight}</p>
              </Section>
            )}

            {/* Stated plainly rather than hidden. A portfolio that admits limits
                is more trustworthy than one that claims everything is finished. */}
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
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
};

export default CaseStudy;
