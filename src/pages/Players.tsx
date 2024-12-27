import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Players = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-grow mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center mb-4">
            On February 14th you will find players here to view and learn about their stories.
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Recruiters and Coaches can find players, create player boards and message players.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Players;