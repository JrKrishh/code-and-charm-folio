import { ExternalLink, Github } from "lucide-react";
import projectAiChat from "@/assets/project-ai-chat.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectMusic from "@/assets/project-music.jpg";
import projectCode from "@/assets/project-code.jpg";

const projects = [
  {
    title: "AI Chat Buddy",
    description: "A friendly chat companion that answers questions with personality and flair.",
    tags: ["React", "AI", "TypeScript"],
    image: projectAiChat,
    color: "bg-cartoon-mint",
    rotate: "-rotate-1",
  },
  {
    title: "Happy Dashboard",
    description: "Data viz that doesn't make you sleepy. Charts with smiles included.",
    tags: ["Next.js", "D3.js", "Charts"],
    image: projectDashboard,
    color: "bg-cartoon-blue",
    rotate: "rotate-1",
  },
  {
    title: "Vibe Music App",
    description: "AI-curated playlists that match your mood. Drop the beat 🎧",
    tags: ["React Native", "Spotify", "ML"],
    image: projectMusic,
    color: "bg-cartoon-purple",
    rotate: "-rotate-1",
  },
  {
    title: "Code Pal",
    description: "Pair programming with an AI that actually gets your jokes.",
    tags: ["WebSockets", "GPT-4", "Monaco"],
    image: projectCode,
    color: "bg-cartoon-peach",
    rotate: "rotate-1",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-cartoon-yellow border-cartoon-thick shadow-chunky-sm rounded-full px-5 py-1.5 mb-4 font-bold text-sm">
            ✨ My Stuff
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-3">
            Cool <span className="bg-primary text-primary-foreground px-3 rounded-2xl border-cartoon-thick shadow-chunky inline-block -rotate-1">Projects</span>
          </h2>
          <p className="font-hand text-2xl text-muted-foreground mt-4">things I built and actually like!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-3xl bg-card border-cartoon-thick shadow-chunky-lg hover-press overflow-hidden ${project.rotate} hover:rotate-0`}
            >
              {/* Image area */}
              <div className={`relative h-56 ${project.color} border-b-[4px] border-foreground flex items-center justify-center overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-44 h-44 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex gap-2 shrink-0">
                    <a className="w-9 h-9 rounded-xl bg-muted border-cartoon flex items-center justify-center hover:bg-cartoon-yellow transition-colors cursor-pointer" aria-label="GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                    <a className="w-9 h-9 rounded-xl bg-muted border-cartoon flex items-center justify-center hover:bg-cartoon-yellow transition-colors cursor-pointer" aria-label="Live link">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-cartoon-yellow border-cartoon font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
