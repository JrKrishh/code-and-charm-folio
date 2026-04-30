import { useState, useEffect } from "react";
import { Menu, X, Star } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero", num: "01" },
  { label: "Work", href: "#projects", num: "02" },
  { label: "About", href: "#about", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((i) => i.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top "newsstand" strip — issue info */}
      <div
        className={`bg-comic-navy text-comic-cream font-display tracking-widest text-xs transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-7 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-5 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Star className="w-3 h-3 fill-comic-yellow text-comic-yellow" />
            ISSUE #047 · VOL. MMXXVI
          </span>
          <span className="hidden sm:inline">★ ONLY ONE OF ITS KIND ★</span>
          <span className="font-body font-bold not-italic">★ FREE!</span>
        </div>
      </div>

      {/* Main masthead */}
      <div
        className={`bg-comic-cream border-b-[3px] border-foreground transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
        style={{ boxShadow: scrolled ? "0 4px 0 0 hsl(var(--comic-yellow)), 0 4px 0 3px hsl(var(--comic-navy))" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-4">
          {/* Logo block — masthead style */}
          <button
            onClick={() => handleClick("#hero")}
            className="flex items-center gap-3 group"
            aria-label="Home"
          >
            {/* Animated ink-stamp badge */}
            <div className="ink-stamp relative w-12 h-12 shrink-0 hidden sm:block">
              {/* Ink bleed splotches — appear on hover */}
              <span className="ink-bleed ink-bleed-1" aria-hidden="true" />
              <span className="ink-bleed ink-bleed-2" aria-hidden="true" />
              <span className="ink-bleed ink-bleed-3" aria-hidden="true" />

              <div className="ink-stamp-face absolute inset-0 rounded-full bg-comic-red border-[3px] border-foreground"
                style={{ boxShadow: "2px 2px 0 0 hsl(var(--comic-navy))" }}
              >
                {/* Faux ink texture overlay */}
                <span className="absolute inset-0 rounded-full opacity-30 mix-blend-multiply pointer-events-none"
                  style={{ backgroundImage: "radial-gradient(hsl(var(--comic-navy)) 0.8px, transparent 1px)", backgroundSize: "4px 4px" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-comic-cream text-[10px] leading-none text-center drop-shadow-[1px_1px_0_hsl(var(--comic-navy))]">
                    BR<br/>★
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start leading-none">
              <span className="font-hand text-[10px] text-comic-navy/70 uppercase tracking-[0.2em] -mb-0.5">
                The Daily
              </span>
              <div className="flex items-baseline gap-1.5">
                <span
                  className="font-display text-3xl md:text-4xl text-primary"
                  style={{ textShadow: "2px 2px 0 hsl(var(--comic-navy))" }}
                >
                  BOOP!
                </span>
                <span className="font-display text-2xl md:text-3xl text-foreground">
                  RAJA
                </span>
              </div>
            </div>
          </button>

          {/* Desktop nav — ticket-stub tabs */}
          <div className="hidden md:flex items-end gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`relative group px-4 pt-2 pb-2.5 border-[2.5px] border-foreground rounded-t-lg border-b-0 font-display uppercase tracking-wider text-sm transition-all duration-150 ${
                    isActive
                      ? "bg-primary text-primary-foreground -translate-y-0.5"
                      : "bg-card text-foreground hover:bg-accent hover:-translate-y-0.5"
                  }`}
                >
                  <span className={`block text-[9px] leading-none mb-0.5 font-body font-black tracking-widest ${
                    isActive ? "text-comic-yellow" : "text-comic-navy/50"
                  }`}>
                    NO.{item.num}
                  </span>
                  <span className="block leading-none">{item.label}</span>
                  {isActive && (
                    <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-comic-yellow border-[2px] border-foreground" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA pill — desktop */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleClick("#contact"); }}
            className="hidden lg:inline-flex items-center gap-1.5 font-display uppercase tracking-wider text-sm px-4 py-2 rounded-full bg-comic-yellow text-comic-navy border-[2.5px] border-foreground transition-all duration-150 hover:-translate-y-0.5"
            style={{ boxShadow: "0 3px 0 0 hsl(var(--comic-navy))" }}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            Hire Me!
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-11 h-11 rounded-lg bg-primary text-primary-foreground border-[2.5px] border-foreground flex items-center justify-center transition-transform active:translate-y-0.5"
            style={{ boxShadow: "0 3px 0 0 hsl(var(--comic-navy))" }}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-comic-cream border-b-[3px] border-foreground"
          style={{ boxShadow: "0 5px 0 0 hsl(var(--comic-navy))" }}
        >
          <div className="max-w-7xl mx-auto px-5 py-3 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border-[2.5px] border-foreground font-display uppercase tracking-wider text-base text-left transition-all ${
                    isActive ? "bg-primary text-primary-foreground" : "bg-card text-foreground"
                  }`}
                >
                  <span className={`font-body font-black text-[10px] tracking-widest px-1.5 py-0.5 rounded border-[1.5px] border-current ${
                    isActive ? "text-comic-yellow border-comic-yellow" : "text-comic-navy/60"
                  }`}>
                    NO.{item.num}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleClick("#contact"); }}
              className="mt-1 inline-flex items-center justify-center gap-1.5 font-display uppercase tracking-wider px-4 py-3 rounded-lg bg-comic-yellow text-comic-navy border-[2.5px] border-foreground"
              style={{ boxShadow: "0 3px 0 0 hsl(var(--comic-navy))" }}
            >
              <Star className="w-4 h-4 fill-current" />
              Hire Me!
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
