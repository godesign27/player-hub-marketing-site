import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Player {
  id: string;
  name: string;
  number: string;
  team: string;
  position: string;
  imageUrl: string;
}

const MOCK_PLAYERS: Player[] = [
  {
    id: "1",
    name: "Bodhi McGuire",
    number: "#4",
    team: "FC United Academy II",
    position: "Striker / Winger",
    imageUrl: "/lovable-uploads/41219820-e099-45b0-907c-b254274886df.png"
  },
  {
    id: "2",
    name: "Cavan Sullivan",
    number: "#11",
    team: "Philadelphia Union / MLS Next",
    position: "Striker / Winger",
    imageUrl: "/lovable-uploads/41219820-e099-45b0-907c-b254274886df.png"
  }
];

const Players = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [players] = useState<Player[]>(MOCK_PLAYERS);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          {/* Search and Filter Section */}
          <div className="flex items-center space-x-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search players..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Players Count */}
          <div className="text-sm text-gray-600">
            All Players ({players.length})
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {players.map((player) => (
              <Link
                key={player.id}
                to={`/players/${player.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-square">
                    <img
                      src={player.imageUrl}
                      alt={player.name}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-900">
                        {player.name}
                      </h3>
                      <span className="text-sm font-medium text-gray-600">
                        {player.number}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{player.team}</p>
                    <p className="text-sm text-gray-500">{player.position}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Create Profile CTA */}
          <div className="bg-gray-100 rounded-lg p-8 text-center mt-8">
            <h2 className="text-2xl font-bold mb-2">
              Create your Player Profile today
            </h2>
            <p className="text-gray-600 mb-4">Share your player story.</p>
            <Button asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Players;