
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterPositionProps {
  value?: string;
  onChange: (value: string | undefined) => void;
}

const positions = [
  "Forward",
  "Midfielder",
  "Defender",
  "Goalkeeper",
]

const FilterPosition = ({ value, onChange }: FilterPositionProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="position">Position</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id="position" className="w-full">
          <SelectValue placeholder="Select position" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {positions.map(position => (
              <SelectItem key={position} value={position}>
                {position}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FilterPosition
