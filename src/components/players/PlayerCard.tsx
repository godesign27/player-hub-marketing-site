import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PlayerCardProps {
  id: string;
  name: string;
  number: string;
  team: string;
  position: string;
  imageUrl: string;
}

const PlayerCard = ({ id, name, number, team, position, imageUrl }: PlayerCardProps) => {
  return (
    <Link to={`/players/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <AspectRatio ratio={1 / 1} className="bg-muted">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = "/placeholder.svg";
            }}
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
        </AspectRatio>
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <span className="text-sm font-medium text-gray-600">{number}</span>
          </div>
          <p className="text-sm text-gray-600 mb-1">{team}</p>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </Link>
  );
};

export default PlayerCard;