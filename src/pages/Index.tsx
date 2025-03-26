
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Sports from "@/components/Sports";
import RecruiterFeatures from "@/components/RecruiterFeatures";
import CoachesFeatures from "@/components/CoachesFeatures";
import Newsletter from "@/components/Newsletter";
import PlayerJourneySection from "@/components/PlayerJourneySection";
import PlayerJourneySection2 from "@/components/PlayerJourneySection2";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Banner />
      <Hero />
      <Features />
      <Sports />
      <PlayerJourneySection />
      <PlayerJourneySection2 />
      <RecruiterFeatures />
      <CoachesFeatures />
      <Newsletter />
      <Footer activePage="home" />
    </div>
  );
};

export default Index;
