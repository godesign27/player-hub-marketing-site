
import { Button } from "@/components/ui/button"
import FilterSport from "./FilterSport"
import FilterGender from "./FilterGender"
import FilterBirthYear from "./FilterBirthYear"
import FilterPosition from "./FilterPosition"
import FilterTeam from "./FilterTeam"
import FilterCountry from "./FilterCountry"
import { PlayerFilters } from "@/services/playerService"

interface FilterFormProps {
  filters: PlayerFilters;
  onFilterChange: (key: keyof PlayerFilters, value: string | undefined) => void;
  onApply: () => void;
  onReset: () => void;
}

const FilterForm = ({ filters, onFilterChange, onApply, onReset }: FilterFormProps) => {
  return (
    <>
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <FilterSport 
            value={filters.sport}
            onChange={(value) => onFilterChange('sport', value)}
          />
          <FilterGender 
            value={filters.gender}
            onChange={(value) => onFilterChange('gender', value)}
          />
          <FilterBirthYear 
            value={filters.birthYear}
            onChange={(value) => onFilterChange('birthYear', value)}
          />
          <FilterPosition 
            value={filters.position}
            onChange={(value) => onFilterChange('position', value)}
          />
          <FilterTeam 
            value={filters.team}
            onChange={(value) => onFilterChange('team', value)}
          />
          <FilterCountry 
            value={filters.country}
            onChange={(value) => onFilterChange('country', value)}
          />
        </div>
      </div>
      <div className="p-6 border-t">
        <div className="flex gap-4">
          <Button variant="outline" className="flex-1" onClick={onReset}>Reset</Button>
          <Button className="flex-1" onClick={onApply}>Apply Filters</Button>
        </div>
      </div>
    </>
  )
}

export default FilterForm
