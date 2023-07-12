import axios from 'axios'
import { Pokemon } from '@/types'
import { useQuery } from '@tanstack/react-query'

const fetchPokemon = async (id: number | null) => {
  if (id) {
    const response = await axios.get<Pokemon>(
      `${import.meta.env.VITE_API as string}/pokemon/${id}`
    )
    return response.data
  }
}

export const usePokemonItemQuery = (id: number | null) => {
  return useQuery({
    queryFn: () => fetchPokemon(id),
    cacheTime: 1000 * 60 * 60 * 24, // 24h
    staleTime: 1000 * 60 * 60 * 24, // 24h
    refetchOnWindowFocus: false,
    queryKey: ['pokemon', id],
    enabled: !!id,
  })
}
