import axios from 'axios'
import { Pokemon } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'

interface ResponseType {
  pokemons: Pokemon[]
  nextPage: number
}

const fetchPokemons = async ({ pageParam = 0 }): Promise<ResponseType> => {
  const response = await axios.get<ResponseType>(
    `${import.meta.env.VITE_API as string}/pokemons?page=${pageParam}`
  )
  return response.data
}

export const usePokemonsQuery = () => {
  return useInfiniteQuery({
    getNextPageParam: (lastPageData) => lastPageData.nextPage,
    cacheTime: 1000 * 60 * 60 * 24, // 24h
    staleTime: 1000 * 60 * 60 * 24, // 24h
    refetchOnWindowFocus: false,
    queryFn: fetchPokemons,
    queryKey: ['pokemons'],
  })
}
