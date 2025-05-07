const FilterGender = () => {
  return (
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
  )
}

export default FilterGender