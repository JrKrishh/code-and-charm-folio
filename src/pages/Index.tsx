import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects, projects } from "@/data/projects";

const Index = () => {
  const featured = featuredProjects();

  return (
    <div className="min-h-dvh">
      {/* Keyboard users land here first and can jump past the nav. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]
                   focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm
                   focus:font-medium focus:text-[hsl(var(--on-accent))]"
      >
        Skip to content
      </a>

      <SiteNav />

      <main id="main">
        <Hero />

        <section className="scroll-mt-24 border-t border-line py-24" id="work">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 className="mt-4 text-balance font-display text-3xl font-bold text-ink sm:text-4xl">
                  Live and in use
                </h2>
                <p className="mt-3 max-w-xl text-pretty leading-relaxed text-ink-secondary">
                  Systems running in real businesses today — each one replaced a
                  paper ledger or a spreadsheet.
                </p>
              </div>

              <Link
                to="/work"
                className="mono inline-flex h-11 items-center gap-2 rounded-lg border border-line px-4 text-xs text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
              >
                All {projects.length} projects
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <AboutSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
