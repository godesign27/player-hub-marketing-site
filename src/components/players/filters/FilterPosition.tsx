import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FilterPosition = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-900 dark:text-white">Position</label>
      <Select>
        <SelectTrigger className="w-full bg-white border-gray-300 hover:border-gray-400 dark:bg-gray-700 dark:border-gray-600">
          <SelectValue placeholder="Select a position" />
        </SelectTrigger>
        <SelectContent className="z-[60]">
          <SelectItem value="forward">Forward</SelectItem>
          <SelectItem value="midfielder">Midfielder</SelectItem>
          <SelectItem value="defender">Defender</SelectItem>
          <SelectItem value="goalkeeper">Goalkeeper</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FilterPosition