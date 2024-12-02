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
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Stand out with your talent at a global level and engage in a sporting lifestyle. Players and
            staff in elite sports build their future with us.
          </p>
          <button className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition-all transform hover:scale-105 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative mx-auto max-w-[800px]">
            <img
              src="/lovable-uploads/303a5526-a387-4377-b9d3-1ee09d30a64e.png"
              alt="PlayerHub Platform"
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;