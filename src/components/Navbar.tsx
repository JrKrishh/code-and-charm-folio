import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-6xl mx-auto bg-card border-[3px] border-foreground rounded-xl px-5 py-3 flex items-center justify-between"
        style={{ boxShadow: "0 5px 0 0 hsl(var(--comic-navy))" }}
      >
        <button
          onClick={() => handleClick("#hero")}
          className="flex items-center gap-2"
          aria-label="Home"
        >
          <span className="font-display text-3xl text-primary leading-none" style={{ textShadow: "2px 2px 0 hsl(var(--comic-navy))" }}>
            BOOP
          </span>
          <span className="font-display text-2xl text-foreground leading-none">RAJA</span>
        </button>

        <div className="hidden md:flex gap-2 items-center">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`px-4 py-1.5 rounded-full font-body font-bold text-sm uppercase tracking-wider transition-all ${
                active === item.href
                  ? "bg-primary text-primary-foreground border-[2.5px] border-foreground shadow-[0_3px_0_0_hsl(var(--comic-navy))]"
                  : "text-foreground hover:text-primary hover:-translate-y-0.5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 rounded-lg bg-accent border-[2.5px] border-foreground flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-card border-[3px] border-foreground rounded-xl p-3 flex flex-col gap-2"
          style={{ boxShadow: "0 5px 0 0 hsl(var(--comic-navy))" }}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`px-4 py-2 rounded-lg font-body font-bold uppercase text-sm tracking-wider text-left ${
                active === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
