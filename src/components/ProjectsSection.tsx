import { ExternalLink, Github } from "lucide-react";
import projectAiChat from "@/assets/project-ai-chat.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectMusic from "@/assets/project-music.jpg";
import projectCode from "@/assets/project-code.jpg";

const projects = [
  {
    title: "AI Chat Interface",
    description: "A conversational AI platform with real-time streaming responses and context-aware interactions.",
    tags: ["React", "AI", "TypeScript"],
    image: projectAiChat,
  },
  {
    title: "Neural Dashboard",
    description: "Data visualization dashboard with live analytics, powered by machine learning predictions.",
    tags: ["Next.js", "Python", "D3.js"],
    image: projectDashboard,
  },
  {
    title: "Vibe Music App",
    description: "AI-curated music discovery platform that learns your taste and generates personalized playlists.",
    tags: ["React Native", "Spotify API", "ML"],
    image: projectMusic,
  },
  {
    title: "Code Synapse",
    description: "Collaborative coding environment with AI pair programming and real-time code suggestions.",
    tags: ["WebSockets", "GPT-4", "Monaco"],
    image: projectCode,
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
              className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:box-glow overflow-hidden"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Project thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              <div className="p-6 relative">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40 rounded-tr-lg" />

                <div className="flex items-start justify-between mb-3">
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
              </div>

              {/* Pulse dot */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
