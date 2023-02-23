import React from 'react'
const DashboardPage = React.lazy(() => import("dashboard/DashboardPage"));
export default function Dashboard() {
  return (
    <div>Dashboard</div>
  )
}
