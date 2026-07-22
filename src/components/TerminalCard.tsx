import { projects } from "@/data/projects";

/**
 * Decorative hero terminal. Purely presentational (aria-hidden) — but the
 * numbers in it are computed from the real project data, so it can never
 * drift out of sync with the claims beside it.
 */
const TerminalCard = () => {
  const production = projects.filter((p) => p.status === "Production");
  const mvps = projects.filter((p) => p.status === "MVP").length;

  return (
    <div aria-hidden="true" className="relative hidden lg:block">
      {/* Glow bed behind the window. */}
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(60%_60%_at_50%_40%,hsl(var(--accent)/0.14),transparent_70%)]" />

      <div className="rotate-[1.2deg] rounded-xl border border-line bg-[hsl(var(--bg-subtle))] shadow-[0_24px_64px_-24px_hsl(0_0%_0%/0.6)] transition-transform duration-300 hover:rotate-0">
        {/* Window chrome. Neutral dots — the accent stays reserved. */}
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="mono ml-2 text-[11px] text-ink-tertiary">boopathi@dev — zsh</span>
        </div>

        <div className="mono space-y-2 p-5 text-[13px] leading-relaxed">
          <p>
            <span className="text-accent">$</span>{" "}
            <span className="text-ink">whoami</span>
          </p>
          <p className="text-ink-secondary">boopathi · full-stack &amp; AI engineer</p>

          <p className="pt-2">
            <span className="text-accent">$</span>{" "}
            <span className="text-ink">ls ~/production</span>
          </p>
          {production.map((p) => (
            <p key={p.slug} className="flex items-baseline justify-between gap-4">
              <span className="text-ink-secondary">{p.slug}</span>
              <span className="text-[11px] text-[hsl(var(--status-production))]">● live</span>
            </p>
          ))}

          <p className="pt-2">
            <span className="text-accent">$</span>{" "}
            <span className="text-ink">stats --short</span>
          </p>
          <p className="text-ink-secondary">
            {projects.length} built · {mvps} MVPs · 0 slide decks
          </p>

          <p className="pt-2">
            <span className="text-accent">$</span>{" "}
            <span className="animate-blink text-ink">▌</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerminalCard;
