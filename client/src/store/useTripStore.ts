// src/store/useTripStore.ts

import { create } from 'zustand'

interface TripState {
  destination: string
  setDestination: (dest: string) => void
}

export const useTripStore = create<TripState>((set) => ({
  destination: '',
  setDestination: (dest) => set({ destination: dest }),
}))
