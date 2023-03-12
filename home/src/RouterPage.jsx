import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AssetList from "./pages/AssetList";
import Dashboard from "./pages/Dashboard";
export default function ReactRouting() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AssetList />,
    },
    {
      path: "/dashboard/:id",
      element: <Dashboard />,
    },
  ]);
  return (
    <Suspense fallback={<div>Loading....</div>}>
      {" "}
      <RouterProvider router={router} />
    </Suspense>
  );
}
