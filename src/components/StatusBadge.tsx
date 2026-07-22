import { STATUS_META, type ProjectStatus } from "@/data/projects";

/**
 * Build status, shown as a dot plus a word.
 *
 * The label is never dropped in favour of the colour alone — colour is a
 * secondary cue here, not the meaning (WCAG 1.4.1).
 */
const StatusBadge = ({
  status,
  size = "sm",
}: {
  status: ProjectStatus;
  size?: "sm" | "md";
}) => {
  const meta = STATUS_META[status];

  return (
    <span
      className={`mono inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-subtle font-medium text-ink-secondary ${
        size === "md" ? "px-3 py-1 text-xs" : "px-2.5 py-0.5 text-[11px]"
      }`}
      title={meta.description}
    >
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full"
        style={{ backgroundColor: `hsl(var(${meta.colorVar}))` }}
      />
      {meta.label}
    </span>
  );
};

export default StatusBadge;
