import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Chat Interface",
    description: "A conversational AI platform with real-time streaming responses and context-aware interactions.",
    tags: ["React", "AI", "TypeScript"],
    color: "primary",
  },
  {
    title: "Neural Dashboard",
    description: "Data visualization dashboard with live analytics, powered by machine learning predictions.",
    tags: ["Next.js", "Python", "D3.js"],
    color: "secondary",
  },
  {
    title: "Vibe Music App",
    description: "AI-curated music discovery platform that learns your taste and generates personalized playlists.",
    tags: ["React Native", "Spotify API", "ML"],
    color: "primary",
  },
  {
    title: "Code Synapse",
    description: "Collaborative coding environment with AI pair programming and real-time code suggestions.",
    tags: ["WebSockets", "GPT-4", "Monaco"],
    color: "secondary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:box-glow"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40 rounded-br-lg" />

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <Github className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                  <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-primary/20 text-primary/80 bg-primary/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Pulse dot */}
              <div
                className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${
                  project.color === "primary" ? "bg-primary" : "bg-secondary"
                } animate-pulse-glow`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
