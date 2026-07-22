import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectCard from "@/components/ProjectCard";
import SpotlightCard from "@/components/SpotlightCard";
import { getProject, projects } from "@/data/projects";

/**
 * Curated by hand rather than "everything featured": one flagship, then six
 * that show range — production client work, a deployed product, and the
 * infrastructure depth. The full set lives on /work.
 */
const SPOTLIGHT_SLUG = "nexq";
const HOME_GRID_SLUGS = [
  "the-signature",
  "steel-flow",
  "prepli",
  "rakshak-ai",
  "agentserve",
  "sangah",
];

const Index = () => {
  const spotlight = getProject(SPOTLIGHT_SLUG);
  const grid = HOME_GRID_SLUGS.map(getProject).filter(
    (p): p is NonNullable<typeof p> => p != null,
  );

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
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="eyebrow">Selected work</p>
                  <h2 className="mt-4 text-balance font-display text-3xl font-bold text-ink sm:text-4xl">
                    Built, shipped, in use
                  </h2>
                  <p className="mt-3 max-w-xl text-pretty leading-relaxed text-ink-secondary">
                    Client systems running in real businesses, deployed products,
                    and the infrastructure underneath them.
                  </p>
                </div>

                <Link
                  to="/work"
                  className="group mono inline-flex h-11 items-center gap-2 rounded-lg border border-line px-4 text-xs text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
                >
                  All {projects.length} projects
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>

            {spotlight && (
              <Reveal delay={80} className="mt-10">
                <SpotlightCard project={spotlight} />
              </Reveal>
            )}

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {grid.map((project, i) => (
                <Reveal key={project.slug} delay={(i % 3) * 70}>
                  <ProjectCard project={project} />
                </Reveal>
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
