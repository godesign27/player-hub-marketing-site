
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterCountryProps {
  value?: string;
  onChange: (value: string | undefined) => void;
}

const FilterCountry = ({ value, onChange }: FilterCountryProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="country">Country</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id="country" className="w-full">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent position="popper" className="z-[100]">
          <SelectItem value="usa">United States</SelectItem>
          <SelectItem value="canada">Canada</SelectItem>
          <SelectItem value="mexico">Mexico</SelectItem>
          <SelectItem value="england">England</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FilterCountry
