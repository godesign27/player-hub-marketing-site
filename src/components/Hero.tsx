import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
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
          <button className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition-all transform hover:scale-105 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="mt-16 animate-fade-up flex justify-center" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-full max-w-[130%] max-w-4xl">
            <img
              src="/lovable-uploads/107115a9-1724-4d7a-8e27-e5c8a1eaab98.png"
              alt="PlayerHub Platform Preview"
              className="w-full rounded-lg scale-130"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;