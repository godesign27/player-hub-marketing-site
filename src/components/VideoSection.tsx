import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Player highlight videos
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Upload and share your best moments with recruiters and coaches.
              PlayerHub showcases your key plays and skills with our Smart
              Player system.
            </p>
            <button className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all transform hover:scale-105">
              Get Started
              <Play className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/296e0bf0-5170-4c47-b8e3-195544473e1e.png"
                alt="Soccer player"
                className="w-[590px] h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;