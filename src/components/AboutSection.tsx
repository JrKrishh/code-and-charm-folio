import avatarImg from "@/assets/avatar.png";
import { Code2, Sparkles, Heart, Coffee, Rocket, Palette } from "lucide-react";

const skills = [
  { name: "React", icon: Code2, color: "bg-cartoon-blue" },
  { name: "TypeScript", icon: Sparkles, color: "bg-cartoon-mint" },
  { name: "AI / ML", icon: Rocket, color: "bg-cartoon-pink" },
  { name: "Node.js", icon: Coffee, color: "bg-cartoon-yellow" },
  { name: "UI / UX", icon: Palette, color: "bg-cartoon-purple" },
  { name: "Vibes", icon: Heart, color: "bg-cartoon-peach" },
];

const stats = [
  { value: "3+", label: "Years", color: "bg-cartoon-pink" },
  { value: "20+", label: "Projects", color: "bg-cartoon-blue" },
  { value: "10+", label: "AI Tools", color: "bg-cartoon-mint" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-cartoon-mint border-cartoon-thick shadow-chunky-sm rounded-full px-5 py-1.5 mb-4 font-bold text-sm">
            🙋 About Me
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold">
            A Lil Bit <span className="bg-cartoon-blue px-3 rounded-2xl border-cartoon-thick shadow-chunky inline-block rotate-1">About Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Avatar card */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 px-3 py-1 rounded-2xl bg-cartoon-yellow border-cartoon-thick shadow-chunky-sm font-hand text-lg -rotate-6 z-10">
                hello!
              </div>
              <div className="w-80 bg-card border-cartoon-thick rounded-3xl shadow-chunky-lg overflow-hidden">
                <div className="h-72 bg-cartoon-pink flex items-center justify-center border-b-[4px] border-foreground">
                  <img
                    src={avatarImg}
                    alt="Boopathi Raja"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-64 h-64 object-contain"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-2xl font-bold">Boopathi Raja</h3>
                  <p className="font-hand text-xl text-muted-foreground">Vibe Coder ✨</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5">
            <div className="bg-card border-cartoon-thick rounded-3xl shadow-chunky p-6">
              <p className="text-lg leading-relaxed">
                I'm a developer who believes code should be{" "}
                <span className="bg-cartoon-yellow px-2 rounded-lg font-bold">fun</span>,
                interfaces should{" "}
                <span className="bg-cartoon-pink text-primary-foreground px-2 rounded-lg font-bold">spark joy</span>,
                and every product should feel a little bit alive.
              </p>
            </div>

            <div className="bg-card border-cartoon-thick rounded-3xl shadow-chunky p-6">
              <p className="leading-relaxed text-muted-foreground">
                I mix AI tools with human intuition to ship things people actually
                love using. When I'm not coding, you'll find me sketching ideas,
                drinking too much chai, or experimenting with the latest models.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={`${s.color} border-cartoon-thick rounded-2xl shadow-chunky-sm p-4 text-center hover-bounce cursor-default`}
                >
                  <p className="text-3xl font-bold">{s.value}</p>
                  <p className="text-sm font-semibold">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-8">
            Things I <span className="font-hand text-cartoon-pink text-4xl">love</span> ❤️
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`${skill.color} border-cartoon-thick rounded-2xl shadow-chunky px-5 py-3 flex items-center gap-2 hover-wiggle cursor-default ${
                    i % 2 === 0 ? "-rotate-2" : "rotate-2"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-bold">{skill.name}</span>
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
