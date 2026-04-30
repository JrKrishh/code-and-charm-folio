import { Lightbulb } from "lucide-react";

const timeline = [
  {
    no: "01",
    title: "Steel Flow",
    when: "The Origin Story",
    sfx: "BOOM!",
    color: "hsl(var(--comic-red))",
    rotate: -2,
    lesson:
      "Built my first real-world POS — learned how invoicing, stock math & PDF printing tie together end-to-end.",
  },
  {
    no: "02",
    title: "Women's Zone",
    when: "Level Up",
    sfx: "ZAP!",
    color: "hsl(var(--comic-yellow))",
    rotate: 1.5,
    lesson:
      "Cracked responsive POS UX for non-tech shopkeepers. Big keys, fewer clicks, zero confusion.",
  },
  {
    no: "03",
    title: "The Signature",
    when: "Boss Fight",
    sfx: "SIZZLE!",
    color: "hsl(var(--comic-navy))",
    rotate: -1.5,
    lesson:
      "Wired up KOT thermal printing & live stock — learned hardware quirks and real kitchen-floor edge cases.",
  },
  {
    no: "04",
    title: "Prepli",
    when: "New Powers Unlocked",
    sfx: "AHA!",
    color: "hsl(var(--comic-red))",
    rotate: 2,
    lesson:
      "Jumped from POS to EdTech — designed quiz engines, AI-assisted explanations & learner streaks.",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 btn-comic-pill bg-accent">
            <span>★ Origin Story ★</span>
          </div>
          <h2 className="title-comic-red text-5xl sm:text-6xl md:text-7xl">
            THE BUILD ORDER
          </h2>
          <p className="font-hand text-2xl text-foreground/70 mt-4">
            chapter by chapter — what each project taught me —
          </p>
        </div>

        {/* Timeline rail */}
        <div className="relative">
          {/* Center dashed rail (md+) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, hsl(var(--comic-navy)) 0 10px, transparent 10px 18px)",
            }}
          />

          <ol className="space-y-10 md:space-y-16">
            {timeline.map((item, idx) => {
              const left = idx % 2 === 0;
              return (
                <li key={item.no} className="relative md:grid md:grid-cols-2 md:gap-10 items-center">
                  {/* Center node */}
                  <div
                    aria-hidden="true"
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-comic-cream border-[3px] border-foreground items-center justify-center font-display text-lg z-10"
                    style={{ boxShadow: "3px 3px 0 0 hsl(var(--comic-navy))" }}
                  >
                    {item.no}
                  </div>

                  {/* Spacer for opposite column on desktop */}
                  {!left && <div aria-hidden="true" className="hidden md:block" />}

                  {/* Panel */}
                  <article
                    className={`relative bg-card border-[3px] border-foreground rounded-xl p-6 ${
                      left ? "md:mr-10 md:text-right" : "md:ml-10"
                    }`}
                    style={{
                      transform: `rotate(${item.rotate}deg)`,
                      boxShadow: `6px 6px 0 0 ${item.color}, 6px 6px 0 3px hsl(var(--comic-navy))`,
                    }}
                  >
                    {/* Mobile chapter badge */}
                    <div className="md:hidden inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-comic-cream border-[2.5px] border-foreground font-display tracking-widest text-xs">
                      CHAPTER {item.no}
                    </div>

                    {/* SFX */}
                    <div
                      className={`absolute -top-5 ${
                        left ? "md:-left-5 -right-3 md:right-auto" : "-right-3 md:-right-5"
                      } font-display text-2xl md:text-3xl px-3 py-1 bg-comic-yellow border-[3px] border-foreground rounded-lg`}
                      style={{
                        transform: `rotate(${left ? -8 : 8}deg)`,
                        color: "hsl(var(--comic-red))",
                        textShadow: "1.5px 1.5px 0 hsl(var(--comic-navy))",
                      }}
                    >
                      {item.sfx}
                    </div>

                    <p className="font-hand text-base text-comic-navy/70 uppercase tracking-widest mb-1">
                      {item.when}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl tracking-wide leading-none text-foreground mb-3">
                      {item.title}
                    </h3>

                    <div
                      className={`flex items-start gap-2 ${
                        left ? "md:flex-row-reverse md:text-right" : ""
                      }`}
                    >
                      <span
                        className="shrink-0 w-8 h-8 rounded-full bg-accent border-[2.5px] border-foreground flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </span>
                      <p className="font-body text-foreground/80 leading-relaxed">
                        {item.lesson}
                      </p>
                    </div>
                  </article>

                  {left && <div aria-hidden="true" className="hidden md:block" />}
                </li>
              );
            })}
          </ol>
        </div>

        {/* Closing speech bubble */}
        <div className="mt-16 text-center">
          <div
            className="inline-block bg-comic-yellow border-[3px] border-foreground rounded-2xl px-6 py-3 font-display text-xl tracking-wide"
            style={{ boxShadow: "5px 5px 0 0 hsl(var(--comic-navy))" }}
          >
            …TO BE CONTINUED ★
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
