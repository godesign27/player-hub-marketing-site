
import { useState } from "react"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import FilterDrawer from "./FilterDrawer"
import { PlayerFilters } from "@/services/playerService"

interface FilterButtonProps {
  onApplyFilters: (filters: PlayerFilters) => void;
}

const FilterButton = ({ onApplyFilters }: FilterButtonProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={() => setOpen(true)}
      >
        <Filter className="h-4 w-4" />
        Filter
      </Button>
      <FilterDrawer 
        open={open} 
        onOpenChange={setOpen} 
        onApplyFilters={onApplyFilters}
      />
    </>
  )
}

export default FilterButton
