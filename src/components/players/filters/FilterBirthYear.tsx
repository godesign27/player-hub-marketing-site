import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FilterBirthYear = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-900 dark:text-white">Birth Year</label>
      <Select>
        <SelectTrigger className="w-full bg-white border-gray-300 hover:border-gray-400 dark:bg-gray-700 dark:border-gray-600">
          <SelectValue placeholder="Select birth year" />
        </SelectTrigger>
        <SelectContent className="z-[60]">
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