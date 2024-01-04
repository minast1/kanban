import React from "react"

import ItemCard from "../components/itemCard"

const TodoDefaultPage = () => {
  return (
    <div className="col-span-4">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">To Do</p>
        <ItemCard />
      </div>
    </div>
  )
}

export default TodoDefaultPage
