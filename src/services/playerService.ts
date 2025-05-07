
import { QueryFunctionContext } from "@tanstack/react-query";

export type Player = {
  id: string;
  name: string;
  number: string;
  team: string;
  position: string;
  imageUrl: string;
};

export type PlayerFilters = {
  search?: string;
  sport?: string;
  gender?: string;
  birthYear?: string;
  position?: string;
  team?: string;
  country?: string;
};

export type PlayersResponse = {
  players: Player[];
  totalCount: number;
};

export async function fetchPlayers({
  queryKey,
}: QueryFunctionContext<[string, number, number, PlayerFilters]>): Promise<PlayersResponse> {
  const [, page, pageSize, filters] = queryKey;
  
  // In a production app, we'd use the filters to build the query params
  // For now, we'll fetch from the external API and filter client-side
  
  try {
    // Fetch players from the PlayerHub API
    const response = await fetch('https://app.playerhub.co/en/players');
    
    if (!response.ok) {
      throw new Error('Failed to fetch players');
    }
    
    // This is a fallback for demo purposes since we can't access the actual API data structure
    // In a real implementation, you'd parse the JSON from the API
    const mockPlayers: Player[] = Array.from({ length: 20 }, (_, i) => ({
      id: `player-${i + 1}`,
      name: `Player Name ${i + 1}`,
      number: `${Math.floor(Math.random() * 99) + 1}`,
      team: `Team ${String.fromCharCode(65 + (i % 26))}`,
      position: ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'][i % 4],
      imageUrl: `/lovable-uploads/bd49cdb1-44ef-467f-86b5-e2f606ab5924.png`,
    }));
    
    // Filter the mock players based on the provided filters
    let filteredPlayers = [...mockPlayers];
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredPlayers = filteredPlayers.filter(player => 
        player.name.toLowerCase().includes(searchLower) ||
        player.team.toLowerCase().includes(searchLower) ||
        player.position.toLowerCase().includes(searchLower)
      );
    }
    
    if (filters.position) {
      filteredPlayers = filteredPlayers.filter(player => 
        player.position === filters.position
      );
    }
    
    if (filters.team) {
      filteredPlayers = filteredPlayers.filter(player => 
        player.team === filters.team
      );
    }
    
    // Paginate the results
    const start = (page - 1) * pageSize;
    const paginatedPlayers = filteredPlayers.slice(start, start + pageSize);
    
    return {
      players: paginatedPlayers,
      totalCount: filteredPlayers.length
    };
  } catch (error) {
    console.error('Error fetching players:', error);
    return { players: [], totalCount: 0 };
  }
}
