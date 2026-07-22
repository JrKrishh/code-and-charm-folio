import type { Project, ProjectCategory } from "@/data/projects";

/**
 * Generated cover band — visual identity per card without fake screenshots.
 *
 * The pattern is keyed to category (so covers carry information), the ghost
 * monogram gives each project a distinct silhouette, and everything draws
 * from the single accent so a grid of covers still reads as one system.
 */
export const CATEGORY_PATTERN: Record<ProjectCategory, string> = {
  "Client Work": "pattern-diag",
  Product: "pattern-dots",
  "AI Infrastructure": "pattern-mesh",
  "Apps & Games": "pattern-lines",
};

const ProjectCover = ({
  project,
  index,
  className = "h-28",
}: {
  project: Project;
  /** 1-based position in the full registry — printed like a ledger entry №. */
  index?: number;
  className?: string;
}) => {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden rounded-t-[calc(var(--radius)+2px)] border-b border-line bg-surface-subtle ${CATEGORY_PATTERN[project.category]} ${className}`}
    >
      {index != null && (
        <span className="mono absolute left-4 top-3 text-[11px] text-ink-tertiary">
          № {String(index).padStart(2, "0")}
        </span>
      )}
      {/* Accent bloom, brightened slightly by the parent card's hover. */}
      <div className="absolute -right-10 -top-14 size-44 rounded-full bg-[radial-gradient(closest-side,hsl(var(--accent)/0.12),transparent)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Ghost monogram — cropped by the band so it reads as a mark, not a letter. */}
      <span className="absolute -bottom-7 right-3 select-none font-display text-8xl font-bold leading-none text-ink opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.12]">
        {project.name.charAt(0)}
      </span>

      {/* Fade into the card body so the band never ends on a hard line. */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-[hsl(var(--surface))]" />
    </div>
  );
};

export default ProjectCover;
