import { useRef } from 'react'

import { usePokemonsQuery } from '@/hooks/get-pokemons.ts'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

import { PokemonItem } from '@/components/pokemon-item.tsx'
import { PokemonsListSkeleton } from '@/components/pokemons-list-skeleton.tsx'

export const PokemonsList = () => {
  const {
    isFetchingNextPage,
    data: pokemons,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetched,
  } = usePokemonsQuery()

  const loadMoreTriggerRef = useRef<HTMLDivElement>(null)

  useIntersectionObserver(
    loadMoreTriggerRef,
    { threshold: 1 },
    () => {
      void fetchNextPage()
    },
    hasNextPage ?? false
  )

  if (isLoading && !isFetched) {
    return (
      <div className="grid grid-cols-3 gap-5">
        <PokemonsListSkeleton />
      </div>
    )
  }

  if (!pokemons) {
    return null
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {pokemons.pages.map((group) =>
          group.pokemons.map((pokemon) => (
            <PokemonItem key={pokemon.name} pokemon={pokemon} />
          ))
        )}
        {isFetchingNextPage && <PokemonsListSkeleton />}
        <div ref={loadMoreTriggerRef} />
      </div>
    </>
  )
}
