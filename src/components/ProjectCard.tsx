import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import type { Project } from "@/data/projects";

/**
 * A project in the grid.
 *
 * The whole card is a link to the case study; the live/repo links sit outside
 * that link so they stay independently reachable by keyboard rather than being
 * nested interactive elements.
 */
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="surface-card group relative flex flex-col p-6 hover:border-line-strong hover:bg-surface-hover">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          <span className="mono text-[11px] text-ink-tertiary">{project.category}</span>
        </div>
        <span className="mono text-[11px] text-ink-tertiary">{project.year}</span>
      </div>

      <h3 className="font-display text-xl font-semibold text-ink">
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
          <span
            key={tech}
            className="mono rounded-md border border-line px-2 py-0.5 text-[11px] text-ink-tertiary"
          >
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

        {/* z-10 lifts these above the stretched link so they remain clickable. */}
        <span className="relative z-10 flex items-center gap-1">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.name} source code on GitHub`}
              className="grid size-11 place-items-center rounded-md text-ink-tertiary transition-colors hover:text-ink"
            >
              <Github className="size-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mono grid h-11 place-items-center rounded-md px-2 text-xs text-accent transition-colors hover:text-[hsl(var(--accent-hover))]"
            >
              Live&nbsp;↗
            </a>
          )}
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;
