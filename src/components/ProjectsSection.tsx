import { ExternalLink, Github } from "lucide-react";
import projectSteelflow from "@/assets/project-steelflow.jpg";
import projectWomenszone from "@/assets/project-womenszone.jpg";
import projectSignature from "@/assets/project-signature.jpg";
import projectPrepli from "@/assets/project-prepli.jpg";

const projects = [
  {
    title: "Steel Flow",
    issue: "Issue #01",
    description: "Full-stack steel shop billing & inventory system with invoicing, stock tracking, and reports.",
    tags: ["React", "Lovable Cloud", "POS"],
    image: projectSteelflow,
    sfx: "CLANG!",
    accent: "hsl(var(--comic-yellow))",
    live: "https://billdashpos.lovable.app",
  },
  {
    title: "Women's Zone",
    issue: "Issue #02",
    description: "Billing & inventory platform built for a clothing retail store — fully responsive POS.",
    tags: ["React", "Inventory", "Retail"],
    image: projectWomenszone,
    sfx: "POW!",
    accent: "hsl(var(--comic-red))",
    live: "https://womenszone.lovable.app",
  },
  {
    title: "The Signature",
    issue: "Issue #03",
    description: "Bakery POS with KOT printing & live stock control for Cakes & Pastries shop.",
    tags: ["POS", "KOT", "Bakery"],
    image: projectSignature,
    sfx: "YUM!",
    accent: "hsl(var(--comic-navy))",
    live: "https://thesignaturepos.lovable.app",
  },
  {
    title: "Prepli",
    issue: "Issue #04",
    description: "Learning app for Indian govt exam prep — TNPSC, UPSC, banking & railway aspirants.",
    tags: ["EdTech", "Quiz", "AI"],
    image: projectPrepli,
    sfx: "AHA!",
    accent: "hsl(var(--comic-yellow))",
    live: "https://prepli.lovable.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header — comic strip banner */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 btn-comic-pill bg-accent">
            <span>★ Featured Issues ★</span>
          </div>
          <h2 className="title-comic-red text-6xl sm:text-7xl md:text-8xl">
            COOL PROJECTS
          </h2>
          <p className="font-hand text-2xl text-foreground/70 mt-4">
            collected adventures from the workshop —
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="group relative bg-card border-[3px] border-foreground rounded-xl overflow-hidden hover-press hover:-translate-y-1"
              style={{
                boxShadow: `8px 8px 0 0 ${project.accent}, 8px 8px 0 3px hsl(var(--comic-navy))`,
              }}
            >
              {/* Issue ribbon */}
              <div className="absolute top-3 left-3 z-10 bg-foreground text-background px-2.5 py-1 rounded-sm font-display text-sm tracking-widest">
                {project.issue}
              </div>

              {/* SFX */}
              <div
                className="absolute top-2 right-3 z-10 font-display text-3xl"
                style={{
                  color: "hsl(var(--comic-red))",
                  textShadow: "2px 2px 0 hsl(var(--comic-navy))",
                  transform: `rotate(${idx % 2 ? 8 : -8}deg)`,
                }}
              >
                {project.sfx}
              </div>

              {/* Image panel */}
              <div className="relative h-60 border-b-[3px] border-foreground halftone-cream flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3 gap-3">
                  <h3 className="font-display text-3xl text-foreground tracking-wide leading-none">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href="#"
                      aria-label="GitHub"
                      className="w-9 h-9 rounded-lg bg-accent border-[2.5px] border-foreground flex items-center justify-center hover-wiggle"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Live link"
                      className="w-9 h-9 rounded-lg bg-primary text-primary-foreground border-[2.5px] border-foreground flex items-center justify-center hover-wiggle"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="font-body text-foreground/75 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-display tracking-widest px-3 py-1 rounded-full bg-muted border-[2px] border-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
