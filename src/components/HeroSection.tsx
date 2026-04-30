import { ArrowDown, Sparkles, Star } from "lucide-react";
import heroDoodles from "@/assets/hero-doodles.png";
import avatarImg from "@/assets/avatar.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Floating doodles */}
      <img
        src={heroDoodles}
        alt=""
        width={1280}
        height={1024}
        className="absolute top-20 -left-10 w-72 opacity-90 animate-float pointer-events-none hidden md:block"
      />
      <img
        src={heroDoodles}
        alt=""
        width={1280}
        height={1024}
        className="absolute bottom-10 -right-10 w-72 opacity-90 animate-float pointer-events-none hidden md:block"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        {/* Text */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-cartoon-yellow border-cartoon shadow-chunky-sm font-semibold text-sm">
            <Sparkles className="w-4 h-4" />
            Hi there! I'm a Vibe Coder
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[0.95] mb-6">
            <span className="block">Hey, I'm</span>
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-2xl border-cartoon-thick shadow-chunky -rotate-2">
              Boopathi
            </span>
            <span className="inline-block bg-cartoon-blue text-foreground px-4 py-1 rounded-2xl border-cartoon-thick shadow-chunky rotate-2 mt-3 ml-2">
              Raja
            </span>
            <span className="inline-block ml-2">👋</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            I build playful, useful, and slightly magical things on the web —
            powered by code, coffee, and a sprinkle of AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-primary text-primary-foreground font-bold border-cartoon-thick shadow-chunky hover-pop"
            >
              See My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-card text-foreground font-bold border-cartoon-thick shadow-chunky hover-pop"
            >
              Say Hi 👋
            </button>
          </div>
        </div>

        {/* Avatar card */}
        <div className="lg:col-span-2 flex justify-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-cartoon-mint border-cartoon-thick shadow-chunky-sm flex items-center justify-center animate-bounce-slow">
              <Star className="w-7 h-7 fill-foreground" />
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-2xl bg-cartoon-yellow border-cartoon-thick shadow-chunky-sm font-hand text-xl rotate-6 z-10">
              that's me!
            </div>
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-cartoon-pink border-cartoon-thick shadow-chunky-lg overflow-hidden flex items-center justify-center -rotate-3">
              <img
                src={avatarImg}
                alt="Boopathi Raja avatar"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
