import React from "react"
import { TiEdit } from "react-icons/ti"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ItemCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        Change charts javascript
        <TiEdit className="h-5 w-5 text-gray-600 hover:cursor-pointer" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardDescription>
          The height at which great men reach today was not attained by sudden
          flight
        </CardDescription>
        <div className="flex flex-row items-center justify-between">
          <div className="flex-1"></div>
          <span className="inline-flex items-center rounded border border-blue-400 bg-blue-200 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400">
            <svg
              className="me-1.5 h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
            </svg>
            2 Days left
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export default ItemCard
