import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Passive listener + a boolean flip (not a per-pixel value) so this never
    // becomes a per-frame layout read.
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-line bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="container-page flex h-16 items-center justify-between"
      >
        <Link
          to="/"
          className="font-display text-base font-bold tracking-tight text-ink"
        >
          Boopathi<span className="text-accent">.</span>
        </Link>

        <ul className="flex items-center gap-1">
          {links.map((link) => {
            const isActive =
              link.to.startsWith("/#") ? false : pathname.startsWith(link.to);
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  aria-current={isActive ? "page" : undefined}
                  className={`mono grid h-11 place-items-center rounded-md px-3 text-xs transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-ink-secondary hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default SiteNav;
