const PlayerJourneySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <img
              src="/lovable-uploads/296e0bf0-5170-4c47-b8e3-195544473e1e.png"
              alt="Soccer player"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Showcase Your Journey, Capture Attention, Get Traction
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Your story is more than just stats and highlights—it's a journey of dedication, growth, and ambition. Our platform empowers you to create a compelling player profile that resonates with coaches and recruiters. Share your personal journey, highlight your achievements, and let your passion shine through. Whether it's on the field or off, your story deserves to be told in a way that truly reflects who you are as an athlete and as a person. Stand out, be noticed, and take control of your athletic future.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Embrace Teamwork and Communication</h3>
                <p className="text-gray-600">
                  Success is a team sport. Learn the importance of communication, understanding positioning, supporting teammates and maintaining and working together towards a common goal.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Develop Tactical Understanding</h3>
                <p className="text-gray-600">
                  Start learning soccer tactics and strategies. Understanding patterns, formations, and the roles of different players on the field opens whole new game intelligence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultivate Physical Fitness</h3>
                <p className="text-gray-600">
                  Keep the peak physical condition through regular training, including endurance exercises and strength work. A high level of fitness is crucial for performance and injury prevention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerJourneySection;