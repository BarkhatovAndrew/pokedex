import { create } from 'zustand'

interface ActivePokemonState {
  setActivePokemonId: (id: number) => void
  activePokemonId: number | null
}

export const useActivePokemonId = create<ActivePokemonState>((set) => ({
  setActivePokemonId: (id) => set({ activePokemonId: id }),
  activePokemonId: null,
}))
