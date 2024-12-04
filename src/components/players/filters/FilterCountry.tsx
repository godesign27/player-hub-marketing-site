import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FilterCountry = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-900 dark:text-white">Country</label>
      <Select>
        <SelectTrigger className="w-full bg-white border-gray-300 hover:border-gray-400 dark:bg-gray-700 dark:border-gray-600">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent className="z-[100]">
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