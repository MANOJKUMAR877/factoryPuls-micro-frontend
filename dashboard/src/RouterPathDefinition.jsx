import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/Dashboard'
export default function ReactRouting() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Dashboard/>,
    },
  ]);
  return <RouterProvider router={router} />;
}
