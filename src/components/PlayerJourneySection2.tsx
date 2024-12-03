const PlayerJourneySection2 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Player highlight videos
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Upload and share your best moments with recruiters and coaches. PlayerHub showcases your key plays and skills with our Smart Player system.
            </p>
          </div>
          <div className="w-full">
            <img
              src="/lovable-uploads/5f259a50-4c80-4797-958d-2c652fc93ccf.png"
              alt="Soccer player in action"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerJourneySection2;