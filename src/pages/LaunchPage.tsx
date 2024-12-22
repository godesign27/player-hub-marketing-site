import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Features from "@/components/Features";
import Sports from "@/components/Sports";
import RecruiterFeatures from "@/components/RecruiterFeatures";
import Newsletter from "@/components/Newsletter";
import PlayerJourneySection from "@/components/PlayerJourneySection";
import PlayerJourneySection2 from "@/components/PlayerJourneySection2";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const LaunchPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const launchDate = new Date('2024-02-14T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="relative overflow-hidden bg-accent pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
              An athlete-centric player profile platform
              <br />
              <span className="text-primary">to showcase your story.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Showcase your Player Profile and tell your sports story allowing recruiters, scouts, coaches and peers a detailed glimpse into your sport journey and personal narrative, equipping them with the essential information and tools to kickstart the evaluation journey.
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl font-bold text-gray-900">{timeLeft.days}</span>
                <p className="text-sm text-gray-600">Days</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl font-bold text-gray-900">{timeLeft.hours}</span>
                <p className="text-sm text-gray-600">Hours</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl font-bold text-gray-900">{timeLeft.minutes}</span>
                <p className="text-sm text-gray-600">Minutes</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-3xl font-bold text-gray-900">{timeLeft.seconds}</span>
                <p className="text-sm text-gray-600">Seconds</p>
              </div>
            </div>

            <button 
              className="inline-flex items-center bg-black text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:opacity-90 animate-fade-up cursor-not-allowed" 
              style={{ animationDelay: "0.2s" }}
              disabled
            >
              Coming Soon
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="mt-16 animate-fade-up flex justify-center" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-[130%] max-w-4xl">
              <img
                src="/lovable-uploads/3604b77f-1349-4b19-b7a7-114d60a04209.png"
                alt="PlayerHub Platform Preview"
                className="w-full rounded-lg scale-130"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Sports />
      <PlayerJourneySection />
      <PlayerJourneySection2 />
      <RecruiterFeatures />
      <Newsletter />
      <Footer activePage="home" />
      <CookieConsent />
    </div>
  );
};

export default LaunchPage;