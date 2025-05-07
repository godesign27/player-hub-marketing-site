
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterSportProps {
  value?: string;
  onChange: (value: string | undefined) => void;
}

const FilterSport = ({ value, onChange }: FilterSportProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="sport">Sport</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id="sport" className="w-full">
          <SelectValue placeholder="Select a sport" />
        </SelectTrigger>
        <SelectContent position="popper" className="z-[100]">
          <SelectItem value="soccer">Soccer</SelectItem>
          <SelectItem value="basketball">Basketball</SelectItem>
          <SelectItem value="baseball">Baseball</SelectItem>
          <SelectItem value="football">Football</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FilterSport
