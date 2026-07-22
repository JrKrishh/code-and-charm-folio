import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "hello@boopathiraja.dev";

const channels = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}?subject=Project%20enquiry`,
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/JrKrishh",
    href: "https://github.com/JrKrishh",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Boopathi Raja",
    href: "https://www.linkedin.com/in/boopathi-raja-dev",
    Icon: Linkedin,
  },
];

/**
 * Direct channels only.
 *
 * The previous version of this site rendered a form that showed a success
 * message and then discarded the input — no backend, no table, no email. A
 * link that provably opens the visitor's mail client beats a form that
 * silently drops enquiries. A real form can replace this once a
 * `contact_messages` table with RLS exists to receive it.
 */
const ContactSection = () => (
  <section id="contact" className="scroll-mt-24 border-t border-line py-24">
    <div className="container-page">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold text-ink sm:text-4xl">
            Got something worth building?
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-ink-secondary">
            Available for freelance and contract work — product builds, AI
            integration, and internal tools. I reply within a day.
          </p>

          <a
            href={`mailto:${EMAIL}?subject=Project%20enquiry`}
            className="mono mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-[hsl(var(--on-accent))] transition-colors hover:bg-[hsl(var(--accent-hover))]"
          >
            Start a conversation
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <ul className="space-y-3">
          {channels.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="surface-card group flex items-center gap-4 p-4 hover:border-line-strong hover:bg-surface-hover"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-surface-subtle text-ink-secondary transition-colors group-hover:text-accent">
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="mono block text-[11px] uppercase tracking-wider text-ink-tertiary">
                    {label}
                  </span>
                  <span className="block truncate text-sm text-ink">{value}</span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-ink-tertiary transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ContactSection;
