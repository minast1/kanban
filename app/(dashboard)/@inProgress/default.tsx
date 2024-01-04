import React from "react"

import ItemCard from "../components/itemCard"

const InProgressDefaultPage = () => {
  return (
    <div className="col-span-4">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">In Progress</p>
        <ItemCard />
      </div>
    </div>
  )
}

export default InProgressDefaultPage
