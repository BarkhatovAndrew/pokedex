import { FiArrowUp } from 'react-icons/fi'

export const GoTopButton = () => {
  const scrollToTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  return (
    <div
      className="flex w-[48px] h-[48px] bg-purple-200 hover:shadow group transition fixed bottom-5 right-5 rounded-xl
    cursor-pointer items-center justify-center"
      onClick={scrollToTop}
    >
      <FiArrowUp
        className="text-gray-800 group-hover:text-white transition"
        size={36}
      />
    </div>
  )
}
