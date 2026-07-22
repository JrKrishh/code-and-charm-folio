import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/JrKrishh", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/boopathi-raja-dev", Icon: Linkedin },
  { label: "Email", href: "mailto:hello@boopathiraja.dev", Icon: Mail },
];

const SiteFooter = () => (
  <footer className="border-t border-line py-12">
    <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Link to="/" className="font-display text-sm font-bold text-ink">
          Boopathi Raja<span className="text-accent">.</span>
        </Link>
        <p className="mono mt-1 text-[11px] text-ink-tertiary">
          Full-stack &amp; AI engineer · Building from India
        </p>
      </div>

      <ul className="flex items-center gap-1">
        {socials.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="grid size-11 place-items-center rounded-md text-ink-tertiary transition-colors hover:text-ink"
            >
              <Icon className="size-4" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default SiteFooter;
