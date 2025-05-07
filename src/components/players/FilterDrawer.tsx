
import { useState } from "react"
import { X } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import FilterSport from "./filters/FilterSport"
import FilterGender from "./filters/FilterGender"
import FilterBirthYear from "./filters/FilterBirthYear"
import FilterPosition from "./filters/FilterPosition"
import FilterTeam from "./filters/FilterTeam"
import FilterCountry from "./filters/FilterCountry"
import { PlayerFilters } from "@/services/playerService"

interface FilterDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onApplyFilters: (filters: PlayerFilters) => void
}

const FilterDrawer = ({ open, onOpenChange, onApplyFilters }: FilterDrawerProps) => {
  const [filters, setFilters] = useState<PlayerFilters>({})

  const handleFilterChange = (key: keyof PlayerFilters, value: string | undefined) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleApply = () => {
    onApplyFilters(filters)
    onOpenChange(false)
  }

  const handleReset = () => {
    setFilters({})
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[90vh] z-50">
        <div className="mx-auto w-full max-w-lg relative z-50">
          <DrawerHeader className="relative">
            <DrawerTitle className="text-lg font-semibold">Filter Players</DrawerTitle>
            <DrawerClose className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DrawerClose>
          </DrawerHeader>
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <FilterSport 
                value={filters.sport}
                onChange={(value) => handleFilterChange('sport', value)}
              />
              <FilterGender 
                value={filters.gender}
                onChange={(value) => handleFilterChange('gender', value)}
              />
              <FilterBirthYear 
                value={filters.birthYear}
                onChange={(value) => handleFilterChange('birthYear', value)}
              />
              <FilterPosition 
                value={filters.position}
                onChange={(value) => handleFilterChange('position', value)}
              />
              <FilterTeam 
                value={filters.team}
                onChange={(value) => handleFilterChange('team', value)}
              />
              <FilterCountry 
                value={filters.country}
                onChange={(value) => handleFilterChange('country', value)}
              />
            </div>
          </div>
          <div className="p-6 border-t flex gap-4">
            <Button variant="outline" className="flex-1" onClick={handleReset}>Reset</Button>
            <Button className="flex-1" onClick={handleApply}>Apply Filters</Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default FilterDrawer
