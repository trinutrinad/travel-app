// src/components/Layout.tsx
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  )
}
