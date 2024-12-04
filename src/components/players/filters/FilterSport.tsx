import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FilterSport = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-900 dark:text-white">Sport</label>
      <Select>
        <SelectTrigger className="w-full bg-white border-gray-300 hover:border-gray-400 dark:bg-gray-700 dark:border-gray-600">
          <SelectValue placeholder="Select a sport" />
        </SelectTrigger>
        <SelectContent position="popper" side="top" className="z-[100]">
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