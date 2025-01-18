import {  RouterProvider } from "react-router-dom";
import React from 'react'
import {allRoutes} from './AllRoutes'
export default function RoutesProvider() {
  return (
    <div>
        <RouterProvider router={allRoutes}/>
    </div>
  )
}
