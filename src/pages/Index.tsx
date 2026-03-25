import NeuralBackground from "@/components/NeuralBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <NeuralBackground />
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
