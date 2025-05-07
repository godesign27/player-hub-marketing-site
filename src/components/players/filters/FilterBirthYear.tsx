
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterBirthYearProps {
  value?: string;
  onChange: (value: string | undefined) => void;
}

const FilterBirthYear = ({ value, onChange }: FilterBirthYearProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="birthYear">Birth Year</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id="birthYear" className="w-full">
          <SelectValue placeholder="Select birth year" />
        </SelectTrigger>
        <SelectContent position="popper" className="z-[100]">
          <SelectItem value="2009">2009</SelectItem>
          <SelectItem value="2008">2008</SelectItem>
          <SelectItem value="2007">2007</SelectItem>
          <SelectItem value="2006">2006</SelectItem>
          <SelectItem value="2005">2005</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FilterBirthYear
