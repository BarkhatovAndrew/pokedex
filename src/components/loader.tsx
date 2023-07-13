import { MdCatchingPokemon } from 'react-icons/md'

export const Loader = ({ size }: { size: number }) => {
  return (
    <MdCatchingPokemon
      className="animate-spin text-gray-300 z-40"
      size={size}
    />
  )
}
