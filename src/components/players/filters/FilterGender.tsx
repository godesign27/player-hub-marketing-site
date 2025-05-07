
import { Label } from "@/components/ui/label"

interface FilterGenderProps {
  value?: string;
  onChange: (value: string | undefined) => void;
}

const FilterGender = ({ value, onChange }: FilterGenderProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="gender">Gender</Label>
      <div className="flex gap-4">
        <label className="flex items-center">
          <input 
            type="radio" 
            name="gender" 
            value="male" 
            className="mr-2" 
            checked={value === "male"}
            onChange={() => onChange("male")}
          />
          Male
        </label>
        <label className="flex items-center">
          <input 
            type="radio" 
            name="gender" 
            value="female" 
            className="mr-2"
            checked={value === "female"}
            onChange={() => onChange("female")}
          />
          Female
        </label>
      </div>
    </div>
  )
}

export default FilterGender
