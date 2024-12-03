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
                src="/lovable-uploads/0e0200d7-6bbb-46f3-8147-ab68adf92d02.png"
                alt="Soccer player dribbling the ball during a match"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Play className="h-8 w-8 text-primary ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;