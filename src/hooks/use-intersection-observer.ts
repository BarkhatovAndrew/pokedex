import { useEffect, RefObject } from 'react'

interface IntersectionObserverOptions {
  threshold?: number[] | number
  root?: Element | null
  rootMargin?: string
}

export function useIntersectionObserver<T extends HTMLElement>(
  ref: RefObject<T>,
  options: IntersectionObserverOptions,
  fetchMore: () => void,
  hasNextPage: boolean
): void {
  useEffect(() => {
    if (!ref.current || !hasNextPage) {
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchMore()
      }
    }, options)

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, options, fetchMore, hasNextPage])
}
