import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Sports from "@/components/Sports";
import VideoSection from "@/components/VideoSection";
import RecruiterFeatures from "@/components/RecruiterFeatures";
import Newsletter from "@/components/Newsletter";
import PlayerJourneySection from "@/components/PlayerJourneySection";
import PlayerJourneySection2 from "@/components/PlayerJourneySection2";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Sports />
      <PlayerJourneySection />
      <PlayerJourneySection2 />
      <VideoSection />
      <RecruiterFeatures />
      <Newsletter />
    </div>
  );
};

export default Index;