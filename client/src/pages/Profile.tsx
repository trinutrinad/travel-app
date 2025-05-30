// src/pages/Profile.tsx

import { useTripStore } from '../store/useTripStore'

function Profile() {
  const { destination } = useTripStore()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">User Profile</h2>
      <p className="text-gray-600 dark:text-gray-300">
        Recent destination searched: <strong>{destination || 'None yet'}</strong>
      </p>
    </div>
  )
}

export default Profile
