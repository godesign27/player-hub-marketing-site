
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SearchBar from "@/components/players/SearchBar";
import FilterButton from "@/components/players/FilterButton";
import PlayerCard from "@/components/players/PlayerCard";
import CreateProfileCTA from "@/components/players/CreateProfileCTA";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

import { fetchPlayers, type PlayerFilters } from "@/services/playerService";

const Players = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<PlayerFilters>({});
  const pageSize = 12;

  // Update filters when search query changes
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setFilters(prev => ({ ...prev, search: query }));
    setPage(1); // Reset to first page on new search
  };

  // Apply filters from the filter drawer
  const handleFilterApply = (newFilters: PlayerFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setPage(1); // Reset to first page on new filters
  };
  
  // Fetch players with react-query
  const { data, isLoading, isError } = useQuery({
    queryKey: ['players', page, pageSize, filters],
    queryFn: fetchPlayers,
  });

  // Calculate the total number of pages
  const totalPages = data?.totalCount ? Math.ceil(data.totalCount / pageSize) : 0;
  
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if we have less than maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate range around current page
      const startPage = Math.max(2, page - 1);
      const endPage = Math.min(totalPages - 1, page + 1);
      
      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push('ellipsis');
      }
      
      // Add pages around current page
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push('ellipsis');
      }
      
      // Always show last page if we have pages
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-grow mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center mb-4">
            {t('playerJourney.section1.title')}
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
            {t('playerJourney.section1.description')}
          </p>
          
          {/* Search and filter bar */}
          <div className="flex flex-wrap gap-4 mb-8 items-center">
            <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchChange} />
            <FilterButton onApplyFilters={handleFilterApply} />
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow animate-pulse">
                  <div className="h-64 bg-gray-300" />
                  <div className="p-4">
                    <div className="h-4 bg-gray-300 rounded mb-2 w-3/4" />
                    <div className="h-4 bg-gray-300 rounded mb-2 w-1/2" />
                    <div className="h-4 bg-gray-300 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : isError ? (
            <div className="text-center py-10">
              <p className="text-lg text-red-500">Error loading players. Please try again later.</p>
            </div>
          ) : data?.players.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">No players found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data?.players.map(player => (
                  <PlayerCard
                    key={player.id}
                    id={player.id}
                    name={player.name}
                    number={player.number}
                    team={player.team}
                    position={player.position}
                    imageUrl={player.imageUrl}
                  />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {getPageNumbers().map((pageNum, idx) => (
                      pageNum === 'ellipsis' ? (
                        <PaginationItem key={`ellipsis-${idx}`}>
                          <span className="px-4 py-2">...</span>
                        </PaginationItem>
                      ) : (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            isActive={page === pageNum}
                            onClick={() => setPage(Number(pageNum))}
                            className="cursor-pointer"
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        className={page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
          
          {/* CTA to create a player profile */}
          <CreateProfileCTA className="mt-12" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Players;
