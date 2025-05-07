
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterTeamProps {
  value?: string;
  onChange: (value: string | undefined) => void;
}

const FilterTeam = ({ value, onChange }: FilterTeamProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="team">Team</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id="team" className="w-full">
          <SelectValue placeholder="Select a team" />
        </SelectTrigger>
        <SelectContent position="popper" className="z-[100]">
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
