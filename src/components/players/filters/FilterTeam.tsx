import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FilterTeam = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-900 dark:text-white">Team</label>
      <Select>
        <SelectTrigger className="w-full bg-white border-gray-300 hover:border-gray-400 dark:bg-gray-700 dark:border-gray-600">
          <SelectValue placeholder="Select a team" />
        </SelectTrigger>
        <SelectContent className="z-[100]">
          <SelectItem value="team1">FC United Academy II</SelectItem>
          <SelectItem value="team2">Philadelphia Union</SelectItem>
          <SelectItem value="team3">Chicago Fire Academy</SelectItem>
          <SelectItem value="team4">LA Galaxy Academy</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FilterTeam