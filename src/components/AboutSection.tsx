import { useEffect, useRef } from "react";
import avatarImg from "@/assets/avatar.png";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "AI/ML", level: 80 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 75 },
  { name: "UI/UX", level: 80 },
];

const SkillNode = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const size = 60 + (level / 100) * 30;

  return (
    <div
      className="flex flex-col items-center gap-2 animate-float"
      style={{ animationDelay: `${index * 0.5}s` }}
    >
      <div
        className="relative rounded-full border border-primary/30 flex items-center justify-center animate-pulse-glow"
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" />
        <span className="relative text-xs font-semibold text-primary">{level}%</span>
      </div>
      <span className="text-xs text-muted-foreground tracking-wide">{name}</span>
    </div>
  );
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.2 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section id="about" className="relative py-32 px-6">
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bio side */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">Boopathi Raja</h3>
              <p className="text-sm text-primary tracking-[0.2em] uppercase">Vibe Coder • AI Enthusiast</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm <span className="text-primary font-semibold">Boopathi Raja</span>, a Vibe Coder
              who thrives at the intersection of creativity and technology. I build digital
              experiences that feel alive — where every interaction pulses with intention.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines AI-powered tools with human intuition to create products
              that are not just functional, but feel like extensions of thought. I believe
              code should flow like neural pathways — elegant, connected, and purposeful.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring the latest in AI, experimenting with
              creative tools, and pushing the boundaries of what's possible in web development.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="px-4 py-2 rounded-lg border border-border/50 bg-muted/30">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-xs text-muted-foreground">Years Exp</p>
              </div>
              <div className="px-4 py-2 rounded-lg border border-border/50 bg-muted/30">
                <p className="text-2xl font-bold text-secondary">20+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
              <div className="px-4 py-2 rounded-lg border border-border/50 bg-muted/30">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-xs text-muted-foreground">AI Tools</p>
              </div>
            </div>
          </div>

          {/* Skill nodes */}
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {skills.map((skill, i) => (
              <SkillNode key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
