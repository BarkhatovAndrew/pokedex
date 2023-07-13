import { useEffect, useState } from 'react'

import { useActivePokemonId } from '@/store/use-active-pokemon-id.ts'

export function useScrollLock() {
  const { activePokemonId } = useActivePokemonId()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const updateWindowDimensions = () => {
    const newIsMobile = window.innerWidth <= 1024
    setIsMobile(newIsMobile)
  }

  useEffect(() => {
    updateWindowDimensions()

    window.addEventListener('resize', updateWindowDimensions)

    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  useEffect(() => {
    if (isMobile && activePokemonId !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMobile, activePokemonId])
}
