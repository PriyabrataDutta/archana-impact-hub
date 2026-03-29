import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import FlagshipSection from "@/components/FlagshipSection";
import ImpactSection from "@/components/ImpactSection";
import CSRSection from "@/components/CSRSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import StorySection from "@/components/StorySection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <TimelineSection />
    <FocusAreasSection />
    <FlagshipSection />
    <ImpactSection />
    <CSRSection />
    <WhyPartnerSection />
    <StorySection />
    <PartnerSection />
    <Footer />
  </div>
);

export default Index;
