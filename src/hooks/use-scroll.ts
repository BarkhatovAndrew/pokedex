import { useEffect, useState } from 'react'

export const useScroll = (threshold = window.innerHeight) => {
  const [showUpButton, setShowUpButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > threshold) {
        setShowUpButton(true)
      } else {
        setShowUpButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return showUpButton
}
