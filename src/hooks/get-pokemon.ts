import axios from 'axios'
import { Pokemon } from '@/types'
import { useQuery } from '@tanstack/react-query'

const fetchPokemon = async (id: number | null) => {
  if (id) {
    const response = await axios.get<Pokemon>(
      `http://localhost:3000/pokemon/${id}`
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
