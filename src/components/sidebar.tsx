import clsx from 'clsx'
import { PokemonTypeName } from '@/types'
import { statTypeMap } from '@/helpers/stat-type-map.ts'
import { useScrollLock } from '@/hooks/use-scroll-lock.ts'
import { colorTypeMap } from '@/helpers/color-type-map.ts'
import { usePokemonItemQuery } from '@/hooks/get-pokemon.ts'
import { useActivePokemonId } from '@/store/use-active-pokemon-id.ts'

import { Loader } from '@/components/loader.tsx'
import { CloseButton } from '@/components/close-button.tsx'

export const Sidebar = () => {
  const { setActivePokemonId, activePokemonId } = useActivePokemonId()
  const { data: activePokemon, isLoading } =
    usePokemonItemQuery(activePokemonId)

  useScrollLock()

  if (!activePokemonId) {
    return (
      <div className="hidden md:flex col-span-4 xl:col-span-3 bg-white shadow rounded-t-2xl h-screen sticky top-[120px] items-center justify-center">
        <div className="mt-10">
          <img
            src="/images/no-pokemon-selected-image.png"
            className="absolute top-[-100px]"
            alt="no pokemon img"
            draggable={false}
          />
          <p className="font-semibold text-gray-500 text-center">
            Select a Pokemon <br />
            to display here.
          </p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="bg-white shadow rounded-t-2xl h-screen col-span-4 xl:col-span-3 sticky top-[120px] flex justify-center items-center">
        <Loader size={74} />
      </div>
    )
  }

  return (
    <>
      <div className="bg-white shadow rounded-t-2xl z-20 h-[100dvh] w-full fixed bottom-0 left-1/2 translate-x-[-50%] lg:translate-x-0 lg:sticky lg:block col-span-4 xl:col-span-3 top-[120px] justify-center">
        <div className="mt-5 justify-center md:w-full p-5 flex flex-col gap-y-5">
          <img
            className="absolute w-[160px] h-[160px] left-1/2 translate-x-[-50%] top-[-120px] pixelated object-contain"
            src={activePokemon?.animatedImage}
            draggable={false}
            alt=""
          />
          <p className="text-sm text-gray-500 font-semibold text-center">
            #{activePokemon?.number}
          </p>
          <p className="text-2xl font-bold capitalize text-center">
            {activePokemon?.name}
          </p>
          <div className="flex gap-2 justify-center">
            {activePokemon?.tags.map((item: PokemonTypeName) => (
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

          <p className="text-md font-bold text-center">Pokedex Entry</p>
          <div className="mt-3 flex justify-between gap-x-4">
            <div className="flex flex-col text-center font-semibold w-1/2">
              <p>Height</p>
              <div className="px-4 py-1 bg-gray-100 rounded-full font-normal mt-3">
                {activePokemon?.height}m
              </div>
            </div>
            <div className="flex flex-col text-center font-semibold w-1/2">
              <p>Weight</p>
              <div className="px-4 py-1 bg-gray-100 rounded-full font-normal mt-3">
                {activePokemon?.weight}kg
              </div>
            </div>
          </div>

          <p className="text-md font-bold text-center">Abilities</p>
          <div className="flex justify-between gap-x-4">
            <div className="px-4 py-1 bg-gray-100 rounded-full font-normal w-1/2 text-center capitalize">
              {activePokemon?.abilities[0]}
            </div>
            <div className="px-4 py-1 bg-gray-100 rounded-full font-normal w-1/2 text-center capitalize">
              {activePokemon?.abilities[1]}
            </div>
          </div>

          <p className="text-md font-bold text-center">Stats</p>
          <div className="flex gap-2 justify-between">
            {activePokemon?.stats.map((stat) => (
              <div className="flex flex-col justify-center items-center p-1 w- bg-gray-100 rounded-full font-normal gap-y-1">
                <div
                  className={clsx(
                    'flex justify-center items-center rounded-full w-[28px] h-[28px] text-white text-[10px] font-bold',
                    statTypeMap[stat.name].color
                  )}
                >
                  {statTypeMap[stat.name].name}
                </div>
                <p className="font-bold text-[12px] mb-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-screen w-screen bg-green-400 lg:hidden top-0 left-0 fixed z-10" />
      <CloseButton onClose={() => setActivePokemonId(null)} />
    </>
  )
}
