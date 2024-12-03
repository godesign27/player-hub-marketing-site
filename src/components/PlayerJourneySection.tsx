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
              Highly Motivated Player
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              As an elite 15-year-old futsal/soccer athlete, my journey in this beautiful game is fueled by passion, dedication, and an unwavering commitment to excellence. With seven years of competitive play under my belt, I have honed my skills on the pitch, embracing every opportunity to grow stronger, faster, and smarter as a player. Through countless hours of training, learning from experienced coaches as a youth player, constantly wanting, and pushing the boundaries of my abilities. Balancing academics with athletics, I strive to excel in both arenas, understanding that discipline and hard work are essential ingredients for long-term success. Off the field, I am just as committed to personal development, engaging in activities that enrich my understanding of the game and foster leadership qualities. My goal is to not only become a professional athlete but also to inspire others with my journey, demonstrating that with perseverance and support, anything is possible.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Master the Basics</h3>
                <p className="text-gray-600">
                  Dedicate focused practice time by honing fundamental skills like dribbling, passing, and shooting, establishing a strong foundation as a stage for advanced techniques and tactics.
                </p>
              </div>
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