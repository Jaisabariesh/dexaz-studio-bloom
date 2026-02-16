import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import ImpactSection from "@/components/ImpactSection";
import UpdatesSection from "@/components/UpdatesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-primary-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MissionSection />
      <ImpactSection />
      <UpdatesSection />
      <CTASection />
      <Footer />
    </main>);

};

export default Index;