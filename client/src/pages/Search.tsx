// src/pages/Search.tsx

import { useTripStore } from '../store/useTripStore'

function Search() {
  const { destination, setDestination } = useTripStore()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Search Trips</h2>

      <input
        type="text"
        placeholder="Enter destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
      />

      <p className="text-gray-600 dark:text-gray-300">
        Searching for: <strong>{destination || '...'}</strong>
      </p>
    </div>
  )
}

export default Search
