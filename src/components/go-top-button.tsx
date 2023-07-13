import clsx from 'clsx'
import { FiArrowUp } from 'react-icons/fi'
import { useActivePokemonId } from '@/store/use-active-pokemon-id.ts'

export const GoTopButton = () => {
  const { activePokemonId } = useActivePokemonId()

  const scrollToTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  return (
    <div
      className={clsx(
        'z-20 flex w-[48px] h-[48px] lg:flex bg-purple-200 hover:shadow group transition fixed bottom-5 right-5 rounded-xl cursor-pointer items-center justify-center',
        { hidden: activePokemonId }
      )}
      onClick={scrollToTop}
    >
      <FiArrowUp
        className="text-gray-800 group-hover:text-white transition"
        size={36}
      />
    </div>
  )
}
