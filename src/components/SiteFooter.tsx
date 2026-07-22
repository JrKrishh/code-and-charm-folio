import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/JrKrishh", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/boopathi-raja-dev", Icon: Linkedin },
  { label: "Email", href: "mailto:hello@boopathiraja.dev", Icon: Mail },
];

const nav = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

const SiteFooter = () => (
  <footer className="border-t border-line py-14">
    <div className="container-page">
      <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="font-display text-base font-bold text-ink">
            Boopathi Raja<span className="text-accent">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-pretty text-sm leading-relaxed text-ink-tertiary">
            Full-stack &amp; AI engineer building from India. Real systems for
            real businesses — labelled honestly.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Site</h2>
          <ul className="mt-4 space-y-1">
            {nav.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="mono inline-flex h-9 items-center text-xs text-ink-secondary transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Elsewhere</h2>
          <ul className="mt-4 flex items-center gap-1">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-md border border-transparent text-ink-tertiary transition-colors hover:border-line hover:text-ink"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
        <p className="mono text-[11px] text-ink-tertiary">
          © {new Date().getFullYear()} Boopathi Raja
        </p>
        <p className="mono text-[11px] text-ink-tertiary">
          React · TypeScript · Tailwind
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
