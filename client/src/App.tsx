import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import Search from './pages/Search'
import Profile from './pages/Profile'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()

  // Animation variants for page transitions
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 },
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center p-6 gap-6">
      <div className="flex gap-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-20 w-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-20 w-20" alt="React logo" />
        </a>
      </div>

      <nav className="flex gap-4 text-lg font-medium">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/search" className="hover:underline">
          Search
        </Link>
        <Link to="/profile" className="hover:underline">
          Profile
        </Link>
      </nav>

      {/* AnimatePresence enables exit animations on route change */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="w-full"
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/search"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="w-full"
              >
                <Search />
              </motion.div>
            }
          />
          <Route
            path="/profile"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="w-full"
              >
                <Profile />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>

      <div>
        <button
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
