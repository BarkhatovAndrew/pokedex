import { useEffect } from 'react'

import { IoMdClose } from 'react-icons/io'

interface CloseButtonProps {
  onClose: () => void
}

export const CloseButton = (props: CloseButtonProps) => {
  const { onClose } = props

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div
      className="flex w-[48px] h-[48px] lg:hidden bg-white hover:shadow group transition fixed top-5 right-5 rounded-xl
    cursor-pointer items-center justify-center z-30"
      onClick={onClose}
    >
      <IoMdClose
        className="text-gray-800 group-hover:text-gray-600 transition"
        size={36}
      />
    </div>
  )
}
