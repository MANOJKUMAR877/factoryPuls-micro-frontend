import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from './pages/DashboardPage'
export default function ReactRouting() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <DashboardPage/>,
    },
  ]);
  return <RouterProvider router={router} />;
}
