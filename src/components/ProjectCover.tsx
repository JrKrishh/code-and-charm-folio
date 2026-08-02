import type { Project, ProjectCategory } from "@/data/projects";

/**
 * Cover band — one generated image per project, produced from the same
 * design tokens as this file used to draw live (see generate_covers.py):
 * the real accent/status HSL values, Space Grotesk / JetBrains Mono, and
 * these same four category patterns. A grid of covers still reads as one
 * system because they share a generator, not just a palette.
 *
 * Looked up by slug via import.meta.glob so adding a project's cover is
 * "drop a PNG named after the slug in src/assets/covers" — no import list
 * to maintain here or in the data file.
 */
export const CATEGORY_PATTERN: Record<ProjectCategory, string> = {
  "Client Work": "pattern-diag",
  Product: "pattern-dots",
  "AI Infrastructure": "pattern-mesh",
  "Apps & Games": "pattern-lines",
};

const COVER_IMAGES = import.meta.glob<string>("/src/assets/covers/*.png", {
  eager: true,
  import: "default",
});

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
  const image = COVER_IMAGES[`/src/assets/covers/${project.slug}.png`];

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden rounded-t-[calc(var(--radius)+2px)] border-b border-line bg-surface-subtle ${
        image ? "" : CATEGORY_PATTERN[project.category]
      } ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt=""
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-left transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <>
          {/* Fallback for any project without a generated cover yet. */}
          <div className="absolute -right-10 -top-14 size-44 rounded-full bg-[radial-gradient(closest-side,hsl(var(--accent)/0.12),transparent)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute -bottom-7 right-3 select-none font-display text-8xl font-bold leading-none text-ink opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.12]">
            {project.name.charAt(0)}
          </span>
        </>
      )}

      {index != null && (
        <span className="mono absolute left-4 top-3 text-[11px] text-ink-tertiary">
          № {String(index).padStart(2, "0")}
        </span>
      )}

      {/* Fade into the card body so the band never ends on a hard line. */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-[hsl(var(--surface))]" />
    </div>
  );
};

export default ProjectCover;
