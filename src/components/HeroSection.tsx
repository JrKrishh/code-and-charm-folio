import { ArrowDown } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Burst lines behind avatar */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 burst-lines animate-pulse-burst hidden lg:block"
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Text */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Speech bubble intro */}
          <div className="inline-block speech-bubble mb-10 -rotate-2">
            <span className="font-display text-xl tracking-wider">
              HEY THERE, TRUE BELIEVER!
            </span>
          </div>

          <h1 className="mb-6">
            <span className="block title-comic text-5xl sm:text-6xl md:text-7xl mb-2">
              YOUR FRIENDLY
            </span>
            <span className="block title-comic-red text-7xl sm:text-8xl md:text-9xl">
              VIBE CODER!
            </span>
          </h1>

          <p className="font-body text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            I'm <strong>Boopathi Raja</strong> — crafting digital experiences that{" "}
            <span className="sfx text-base">POP!</span> with personality and{" "}
            <span className="sfx text-base" style={{ color: "hsl(var(--comic-navy))", textShadow: "2px 2px 0 hsl(var(--comic-yellow))" }}>ZAP!</span>{" "}
            with energy. Code, coffee, and a sprinkle of AI magic.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-comic-red"
            >
              View My Work
              <ArrowDown className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-comic-outline"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Avatar comic panel */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative">
            {/* SFX badge */}
            <div className="absolute -top-6 -left-6 z-20 px-4 py-2 rounded-lg border-[3px] border-foreground halftone-red font-display text-2xl text-primary-foreground rotate-[-12deg]"
              style={{ boxShadow: "0 4px 0 0 hsl(var(--comic-navy))", textShadow: "2px 2px 0 hsl(var(--comic-navy))" }}
            >
              POW!
            </div>

            {/* Star burst badge */}
            <div className="absolute -bottom-4 -right-4 z-20 w-24 h-24 flex items-center justify-center rotate-12"
              aria-hidden="true"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <polygon
                  points="50,2 60,38 96,38 66,60 78,96 50,72 22,96 34,60 4,38 40,38"
                  fill="hsl(var(--comic-yellow))"
                  stroke="hsl(var(--comic-navy))"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="relative font-display text-foreground text-sm text-center leading-tight">
                NEW<br/>HERE!
              </span>
            </div>

            {/* Panel */}
            <div className="relative comic-panel p-3 rotate-2">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-lg overflow-hidden border-[3px] border-foreground halftone-yellow flex items-center justify-center">
                <img
                  src={avatarImg}
                  alt="Boopathi Raja, comic-style portrait"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name plate */}
              <div className="mt-3 text-center bg-foreground text-background py-2 rounded-md">
                <p className="font-display text-2xl tracking-widest leading-none">BOOPATHI RAJA</p>
                <p className="font-hand text-base text-accent">— THE VIBE CODER —</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
