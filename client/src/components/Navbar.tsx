// src/components/Navbar.tsx
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const linkClass = (path: string) =>
    `hover:underline ${location.pathname === path ? 'font-bold underline' : ''}`

  return (
    <nav className="flex gap-6 text-lg font-medium p-4 bg-gray-100 dark:bg-gray-800">
      <Link to="/" className={linkClass('/')}>Home</Link>
      <Link to="/search" className={linkClass('/search')}>Search</Link>
      <Link to="/profile" className={linkClass('/profile')}>Profile</Link>
    </nav>
  )
}
