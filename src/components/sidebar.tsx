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
      <div className="sticky col-span-4 hidden h-screen items-center justify-center rounded-t-2xl bg-white shadow top-[120px] lg:flex xl:col-span-3">
        <div className="mt-10">
          <img
            src="/images/no-pokemon-selected-image.png"
            className="absolute top-[-100px]"
            alt="no pokemon img"
            draggable={false}
          />
          <p className="text-center font-semibold text-gray-500">
            Select a Pokemon <br />
            to display here.
          </p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <>
        <div className="fixed left-1/2 z-20 col-span-4 flex w-full items-center justify-center rounded-t-2xl bg-white shadow h-[100dvh] translate-x-[-50%] top-[120px] lg:sticky lg:translate-x-0 xl:col-span-3">
          <Loader size={74} />
        </div>
        <div className="fixed top-0 left-0 z-10 h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 lg:hidden" />
      </>
    )
  }

  return (
    <>
      <div className="fixed bottom-0 left-1/2 z-20 col-span-4 w-full justify-center rounded-t-2xl bg-white pb-10 shadow translate-x-[-50%] top-[120px] lg:sticky lg:h-screen lg:translate-x-0 xl:col-span-3">
        <img
          className="fixed left-1/2 object-contain w-[160px] h-[160px] translate-x-[-50%] top-[-120px] pixelated lg:absolute"
          src={activePokemon?.animatedImage}
          draggable={false}
          alt=""
        />
        <div className="mt-5 justify-start overflow-y-auto top-5 bottom-5 h-full lg:h-[calc(100vh-140px)] w-full p-5 flex flex-col gap-y-5">
          <p className="text-center text-sm font-semibold text-gray-500">
            #{activePokemon?.number}
          </p>
          <p className="text-center text-2xl font-bold capitalize">
            {activePokemon?.name}
          </p>
          <div className="flex justify-center gap-2">
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

          <p className="text-center font-bold text-md">Pokedex Entry</p>
          <p className="text-center text-gray-500 text-md">
            {activePokemon?.description}
          </p>
          <div className="mt-3 flex justify-between gap-x-4">
            <div className="flex w-1/2 flex-col text-center font-semibold">
              <p>Height</p>
              <div className="mt-3 rounded-full bg-gray-100 px-4 py-1 font-normal">
                {activePokemon?.height}m
              </div>
            </div>
            <div className="flex w-1/2 flex-col text-center font-semibold">
              <p>Weight</p>
              <div className="mt-3 rounded-full bg-gray-100 px-4 py-1 font-normal">
                {activePokemon?.weight}kg
              </div>
            </div>
          </div>

          <p className="text-center font-bold text-md">Abilities</p>
          <div className="flex justify-between gap-x-4">
            <div className="w-1/2 rounded-full bg-gray-100 px-4 py-1 text-center font-normal capitalize">
              {activePokemon?.abilities[0]}
            </div>
            <div className="w-1/2 rounded-full bg-gray-100 px-4 py-1 text-center font-normal capitalize">
              {activePokemon?.abilities[1]}
            </div>
          </div>

          <p className="text-center font-bold text-md">Stats</p>
          <div className="flex justify-between gap-2">
            {activePokemon?.stats.map((stat) => (
              <div className="flex flex-col items-center justify-center gap-y-1 rounded-full bg-gray-100 p-1 font-normal w-">
                <div
                  className={clsx(
                    'flex justify-center items-center rounded-full w-[28px] h-[28px] text-white text-[10px] font-bold',
                    statTypeMap[stat.name].color
                  )}
                >
                  {statTypeMap[stat.name].name}
                </div>
                <p className="mb-1 font-bold text-[12px]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 z-10 h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 lg:hidden" />
      <CloseButton onClose={() => setActivePokemonId(null)} />
    </>
  )
}
