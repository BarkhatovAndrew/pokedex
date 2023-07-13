import clsx from 'clsx'
import { PokemonTypeName, Pokemon } from '@/types'
import { colorTypeMap } from '@/helpers/color-type-map.ts'
import { useActivePokemonId } from '@/store/use-active-pokemon-id.ts'

interface PokemonItemProps {
  pokemon: Pokemon
}

export const PokemonItem = (props: PokemonItemProps) => {
  const { pokemon } = props
  const { setActivePokemonId } = useActivePokemonId()

  return (
    <div
      className="group bg-white relative mt-16 h-[150px] flex gap-2 flex-col items-center justify-center shadow-lg rounded-3xl cursor-pointer hover:border-gray-300 hover:border-2 transition"
      onClick={() => setActivePokemonId(pokemon.id)}
      key={pokemon.name}
    >
      <img
        className="absolute top-[-50px] group-hover:scale-125 transition pixelated"
        src={pokemon.smallImage}
        alt=""
      />
      <p className="text-sm text-gray-500 font-semibold">#{pokemon.number}</p>
      <p className="text-lg font-bold capitalize">{pokemon.name}</p>
      <div className="flex gap-2">
        {pokemon.tags.map((item: PokemonTypeName) => (
          <div
            className={clsx(
              'px-2 py-1 font-semibold text-sm rounded-md',
              colorTypeMap[item]
            )}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
