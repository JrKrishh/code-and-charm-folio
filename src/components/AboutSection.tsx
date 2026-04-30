import avatarImg from "@/assets/avatar.png";
import { Code2, Sparkles, Heart, Coffee, Rocket, Palette } from "lucide-react";

const skills = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Sparkles },
  { name: "AI / ML", icon: Rocket },
  { name: "Node.js", icon: Coffee },
  { name: "UI / UX", icon: Palette },
  { name: "Vibes", icon: Heart },
];

const stats = [
  { value: "3+", label: "Years" },
  { value: "20+", label: "Projects" },
  { value: "10+", label: "AI Tools" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 btn-comic-pill bg-primary text-primary-foreground">
            <span>★ Origin Story ★</span>
          </div>
          <h2 className="title-comic text-6xl sm:text-7xl md:text-8xl">
            MEET THE HERO
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Avatar comic card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative -rotate-2">
              <div className="speech-bubble absolute -top-12 -right-6 z-10 rotate-6 max-w-[200px]">
                Hi! Let's build cool stuff together.
              </div>

              <div className="comic-panel-red w-80 p-3">
                <div className="h-72 rounded-md overflow-hidden border-[3px] border-foreground halftone-yellow">
                  <img
                    src={avatarImg}
                    alt="Boopathi Raja portrait"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 bg-foreground text-background text-center py-2 rounded-md">
                  <p className="font-display text-xl tracking-widest leading-none">BOOPATHI RAJA</p>
                  <p className="font-hand text-sm text-accent">aka The Vibe Coder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 space-y-5">
            <div className="comic-panel p-6">
              <h3 className="font-display text-3xl tracking-wider mb-3 text-primary">CHAPTER 1 — THE SPARK</h3>
              <p className="font-body text-lg leading-relaxed">
                I'm a developer who believes code should be{" "}
                <em className="not-italic font-bold bg-accent px-1.5 rounded">fun</em>,
                interfaces should{" "}
                <em className="not-italic font-bold bg-primary text-primary-foreground px-1.5 rounded">spark joy</em>,
                and every product should feel a little bit alive.
              </p>
            </div>

            <div className="comic-panel-sm p-6">
              <h3 className="font-display text-2xl tracking-wider mb-2 text-foreground/80">CHAPTER 2 — THE METHOD</h3>
              <p className="font-body leading-relaxed text-foreground/75">
                I mix AI tools with human intuition to ship things people actually
                love using. When I'm not coding, you'll find me sketching ideas,
                drinking too much chai, or experimenting with the latest models.
              </p>
            </div>

            {/* Stats — comic counters */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="text-center border-[3px] border-foreground rounded-lg p-4 bg-card hover-pop"
                  style={{
                    boxShadow: `0 5px 0 0 ${i === 0 ? "hsl(var(--comic-red))" : i === 1 ? "hsl(var(--comic-yellow))" : "hsl(var(--comic-navy))"}, 0 5px 0 3px hsl(var(--comic-navy))`,
                  }}
                >
                  <p className="font-display text-4xl text-primary tracking-wider leading-none">{s.value}</p>
                  <p className="font-display text-sm tracking-widest mt-1 text-foreground/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h3 className="title-comic-red text-4xl sm:text-5xl text-center mb-3">
            SUPER POWERS
          </h3>
          <p className="font-hand text-xl text-foreground/70 text-center mb-8">
            — abilities unlocked over the years —
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              const bg = ["bg-accent", "bg-primary text-primary-foreground", "bg-card", "bg-accent", "bg-primary text-primary-foreground", "bg-card"][i];
              return (
                <div
                  key={skill.name}
                  className={`${bg} font-display tracking-widest text-lg uppercase border-[3px] border-foreground rounded-lg px-5 py-3 flex items-center gap-2 hover-wiggle`}
                  style={{ boxShadow: "0 4px 0 0 hsl(var(--comic-navy))" }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
