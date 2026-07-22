import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_PATTERN } from "@/components/ProjectCover";
import StatusBadge from "@/components/StatusBadge";
import type { Project } from "@/data/projects";

/**
 * The flagship treatment: one project rendered wide, with the problem and
 * evidence given room. Everything else uses the compact ProjectCard — one
 * spotlight per page keeps it special.
 */
const SpotlightCard = ({ project }: { project: Project }) => {
  return (
    <article className="surface-card card-lift group relative overflow-hidden p-7 sm:p-9">
      {/* Patterned wash + ghost monogram, matching the grid cards' visual
          language at flagship scale. Fades out leftward so the copy never
          sits on texture. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 w-2/3 ${CATEGORY_PATTERN[project.category]}
                    [-webkit-mask-image:linear-gradient(to_left,black,transparent)]
                    [mask-image:linear-gradient(to_left,black,transparent)]`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full
                   bg-[radial-gradient(closest-side,hsl(var(--accent)/0.10),transparent)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-4 select-none font-display text-[11rem] font-bold leading-none text-ink opacity-[0.05]"
      >
        {project.name.charAt(0)}
      </span>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mono rounded-full border border-[hsl(var(--accent)/0.4)] bg-[hsl(var(--accent)/0.1)] px-2.5 py-0.5 text-[11px] font-medium text-accent">
              Flagship
            </span>
            <StatusBadge status={project.status} />
            <span className="mono text-[11px] text-ink-tertiary">{project.category}</span>
          </div>

          <h3 className="mt-4 font-display text-2xl font-bold text-ink transition-colors duration-200 group-hover:text-accent sm:text-3xl">
            <Link
              to={`/work/${project.slug}`}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            >
              {project.name}
            </Link>
          </h3>

          <p className="mt-2 text-pretty leading-relaxed text-ink-secondary">
            {project.tagline}
          </p>

          <p className="mt-4 hidden text-pretty text-sm leading-relaxed text-ink-tertiary sm:block">
            {project.problem}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 6).map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
            {project.stack.length > 6 && (
              <span className="mono px-1 py-0.5 text-[11px] text-ink-tertiary">
                +{project.stack.length - 6}
              </span>
            )}
          </div>
        </div>

        {project.evidence && (
          <div className="flex flex-col justify-between gap-6 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <ul className="space-y-2.5">
              {project.evidence.slice(0, 4).map((item) => (
                <li key={item} className="mono flex gap-2.5 text-xs leading-relaxed text-ink-secondary">
                  <span aria-hidden="true" className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <span className="mono flex items-center gap-1 text-xs text-ink-secondary transition-colors group-hover:text-accent">
                Full case study
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mono relative z-10 grid h-11 place-items-center rounded-md px-2 text-xs text-accent transition-colors hover:text-[hsl(var(--accent-hover))]"
                >
                  Live&nbsp;↗
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default SpotlightCard;
