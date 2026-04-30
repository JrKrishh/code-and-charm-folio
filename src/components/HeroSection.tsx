import { useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import heroNeural from "@/assets/hero-neural.png";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Ambient radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute left-1/3 top-2/3 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[100px]" />
      </div>

      {/* Hero neural brain illustration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={heroNeural}
          alt=""
          width={1280}
          height={1280}
          className="w-[600px] md:w-[850px] lg:w-[1000px] opacity-40 animate-pulse-glow mix-blend-screen"
        />
      </div>

      <div
        className={`relative text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary/90">
            Available for new neural connections
          </span>
        </div>

        <h1 className="text-6xl sm:text-8xl md:text-[9rem] font-bold tracking-tight leading-[0.9] mb-6">
          <span className="block bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text text-transparent text-glow">
            Boopathi
          </span>
          <span className="block text-foreground/90">Raja</span>
        </h1>

        <div className="flex items-center justify-center gap-3 mt-6 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <p className="text-sm sm:text-base text-muted-foreground tracking-[0.4em] uppercase">
            Vibe Coder
          </p>
          <div className="w-2 h-2 rounded-full bg-secondary animate-synapse-fire" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary" />
        </div>

        <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed mb-12 text-base sm:text-lg">
          Building the future through code, creativity, and AI-powered innovation.
          Every line is a synapse firing in the digital neural network.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold tracking-wide hover:bg-primary/90 transition-all duration-300 animate-glow-pulse"
          >
            Explore My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border/60 text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
