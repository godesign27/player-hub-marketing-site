import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SearchBar from "@/components/players/SearchBar";
import FilterButton from "@/components/players/FilterButton";
import PlayerCard from "@/components/players/PlayerCard";
import CreateProfileCTA from "@/components/players/CreateProfileCTA";

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
    imageUrl: "/lovable-uploads/b911c675-f1be-49a0-bc81-9d2a02e4a0cb.png"
  },
  {
    id: "2",
    name: "Cavan Sullivan",
    number: "#11",
    team: "Philadelphia Union / MLS Next",
    position: "Striker / Winger",
    imageUrl: "/lovable-uploads/b911c675-f1be-49a0-bc81-9d2a02e4a0cb.png"
  },
  {
    id: "3",
    name: "Lucas Martinez",
    number: "#7",
    team: "Chicago Fire Academy",
    position: "Midfielder",
    imageUrl: "/lovable-uploads/303a5526-a387-4377-b9d3-1ee09d30a64e.png"
  },
  {
    id: "4",
    name: "Alex Thompson",
    number: "#23",
    team: "LA Galaxy Academy",
    position: "Defender",
    imageUrl: "/lovable-uploads/41219820-e099-45b0-907c-b254274886df.png"
  }
];

const Players = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [players] = useState<Player[]>(MOCK_PLAYERS);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-grow mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <FilterButton />
          </div>

          <div className="text-sm text-gray-600">
            All Players ({players.length})
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {players.map((player) => (
              <PlayerCard key={player.id} {...player} />
            ))}
          </div>

          <CreateProfileCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Players;