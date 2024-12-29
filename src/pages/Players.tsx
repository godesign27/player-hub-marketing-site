import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Players = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-grow mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center mb-4">
            Meet the Players, Explore Their Stories — Coming February 14th
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Anyone can search and view players to learn more about their journeys. Recruiters and Coaches, get ready to browse detailed player profiles, manage recruits with personalized boards, and message players directly—all in one seamless platform.
          </p>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/bd49cdb1-44ef-467f-86b5-e2f606ab5924.png"
              alt="Youth soccer players in action during a match"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Players;