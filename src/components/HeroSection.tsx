import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

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
      <div
        className={`text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Decorative synapse line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 animate-pulse-glow" />

        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Welcome to my neural space
        </p>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4">
          <span className="text-glow text-primary">Boopathi</span>
          <br />
          <span className="text-foreground">Raja</span>
        </h1>

        <div className="flex items-center justify-center gap-3 mt-6 mb-8">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <p className="text-lg sm:text-xl text-muted-foreground tracking-widest uppercase">
            Vibe Coder
          </p>
          <div className="w-2 h-2 rounded-full bg-secondary animate-synapse-fire" />
        </div>

        <p className="max-w-lg mx-auto text-muted-foreground leading-relaxed mb-12">
          Building the future through code, creativity, and AI-powered innovation.
          Every line of code is a synapse firing in the digital neural network.
        </p>

        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
          className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 animate-glow-pulse"
        >
          Explore My Work
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
