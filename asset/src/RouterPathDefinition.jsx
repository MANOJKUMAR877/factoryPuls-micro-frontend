import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AssetPage from "./pages/AssetPage";

export default function ReactRouting() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AssetPage />,
    },
   
  ]);
  return <RouterProvider router={router} />;
}
