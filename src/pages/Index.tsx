import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background dot pattern */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground)) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
