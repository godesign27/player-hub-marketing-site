import { X } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"

interface FilterDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const FilterDrawer = ({ open, onOpenChange }: FilterDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[90vh]">
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader className="relative">
            <DrawerTitle className="text-lg font-semibold">Filter Players</DrawerTitle>
            <DrawerClose className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DrawerClose>
          </DrawerHeader>
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Sport</label>
                <select className="w-full rounded-lg border border-gray-200 p-2.5">
                  <option>Soccer</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1.5 block">Gender</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="male" className="mr-2" defaultChecked />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="female" className="mr-2" />
                    Female
                  </label>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Birth Year</label>
                <select className="w-full rounded-lg border border-gray-200 p-2.5">
                  <option>2009</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Position</label>
                <select className="w-full rounded-lg border border-gray-200 p-2.5">
                  <option>Select</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Team</label>
                <select className="w-full rounded-lg border border-gray-200 p-2.5">
                  <option>Select</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Country</label>
                <select className="w-full rounded-lg border border-gray-200 p-2.5">
                  <option>United States</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-6 border-t">
            <Button className="w-full">Filter</Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default FilterDrawer