import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import type { Project } from "@/data/projects";

/**
 * A project in the grid.
 *
 * The whole card is one stretched link to the case study; the live link sits
 * above it (z-10) so it stays independently reachable by keyboard rather than
 * nesting interactive elements.
 */
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="surface-card card-lift group relative flex flex-col p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          <span className="mono text-[11px] text-ink-tertiary">{project.category}</span>
        </div>
        <span className="mono text-[11px] text-ink-tertiary">{project.year}</span>
      </div>

      <h3 className="font-display text-xl font-semibold text-ink transition-colors duration-200 group-hover:text-accent">
        {/* Stretched link: the card is the hit area, but only one link owns it. */}
        <Link
          to={`/work/${project.slug}`}
          className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          {project.name}
        </Link>
      </h3>

      <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-secondary">
        {project.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="mono px-1 py-0.5 text-[11px] text-ink-tertiary">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="mono flex items-center gap-1 text-xs text-ink-secondary transition-colors group-hover:text-accent">
          Case study
          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>

        {project.liveUrl && (
          /* z-10 lifts this above the stretched link so it stays clickable. */
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
    </article>
  );
};

export default ProjectCard;
