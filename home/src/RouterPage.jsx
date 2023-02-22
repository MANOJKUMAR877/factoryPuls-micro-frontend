import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const AssetPage = React.lazy(() => import("asset/AssetPage"));
// import Dashboard from 'dashboard/Dashboard'
// import Tabs from 'dashboard/Tabs'
const Dummy = React.lazy(() => import("dashboard/Dummy"));
export default function ReactRouting() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AssetPage />,
    },
    {
      path: "/dashboard",
      element: <Dummy/>,
    },
  ]);
  return (
    <Suspense fallback={<div>Loading....</div>}>
      {" "}
      <RouterProvider router={router} />
    </Suspense>
  );
}
