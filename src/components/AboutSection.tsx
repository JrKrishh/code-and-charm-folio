import avatarImg from "@/assets/avatar.jpg";
import { Boxes, Bot, Store, Cpu } from "lucide-react";

const capabilities = [
  {
    title: "Product engineering",
    body: "End-to-end builds — schema, API, UI, deploy. React, TypeScript, Next.js, TanStack, Supabase, Postgres.",
    Icon: Boxes,
  },
  {
    title: "AI systems",
    body: "Agents, RAG, and LLM integration that survive contact with real users — plus the eval and guardrail work that keeps them honest.",
    Icon: Bot,
  },
  {
    title: "Business tooling",
    body: "POS, billing, and inventory systems for shops that were running on paper. Built for the counter, not the demo.",
    Icon: Store,
  },
  {
    title: "Infrastructure",
    body: "Inference runtimes, on-device model work, and fine-tuning pipelines — the layer under the product.",
    Icon: Cpu,
  },
];

const AboutSection = () => (
  <section id="about" className="scroll-mt-24 border-t border-line py-24">
    <div className="container-page">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">About</p>

          <div className="mt-5 flex items-center gap-4">
            <img
              src={avatarImg}
              alt="Boopathi Raja"
              width={56}
              height={56}
              loading="lazy"
              className="size-14 rounded-full border border-line object-cover"
            />
            <div>
              <p className="font-display text-base font-semibold text-ink">Boopathi Raja</p>
              <p className="mono text-[11px] text-ink-tertiary">
                Full-stack &amp; AI engineer
              </p>
            </div>
          </div>

          <h2 className="mt-7 text-balance font-display text-3xl font-bold text-ink sm:text-4xl">
            I ship, then I iterate.
          </h2>

          <div className="mt-5 space-y-4 text-pretty leading-relaxed text-ink-secondary">
            <p>
              Most of my work starts the same way: someone is running a real
              operation on spreadsheets and WhatsApp, and it&apos;s costing them
              time they can&apos;t bill for.
            </p>
            <p>
              I build the thing that replaces it, put it in front of the people
              who&apos;ll actually use it, and keep tightening it until it fits
              how they work. The interesting problems are rarely the technical
              ones.
            </p>
            <p>
              Alongside client work I build AI infrastructure — inference
              runtimes, on-device model frameworks, fine-tuning pipelines —
              because understanding the layer underneath makes the layer above
              better.
            </p>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {capabilities.map(({ title, body, Icon }) => (
            <li key={title} className="surface-card card-lift p-5">
              <span className="grid size-10 place-items-center rounded-lg border border-line bg-surface-subtle text-accent">
                <Icon className="size-[18px]" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSection;
