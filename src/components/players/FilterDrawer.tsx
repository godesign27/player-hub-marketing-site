import { X } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import FilterForm from "./filters/FilterForm"

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
          <FilterForm />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default FilterDrawer