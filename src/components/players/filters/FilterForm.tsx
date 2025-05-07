import { Button } from "@/components/ui/button"
import FilterSport from "./FilterSport"
import FilterGender from "./FilterGender"
import FilterBirthYear from "./FilterBirthYear"
import FilterPosition from "./FilterPosition"
import FilterTeam from "./FilterTeam"
import FilterCountry from "./FilterCountry"

const FilterForm = () => {
  return (
    <>
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <FilterSport />
          <FilterGender />
          <FilterBirthYear />
          <FilterPosition />
          <FilterTeam />
          <FilterCountry />
        </div>
      </div>
      <div className="p-6 border-t">
        <Button className="w-full">Filter</Button>
      </div>
    </>
  )
}

export default FilterForm