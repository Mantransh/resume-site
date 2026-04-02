import { useEffect, useRef, useState } from 'react'

/**
 * useInView — returns true when element enters the viewport
 * Used to trigger entrance animations
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Once animated in, stop observing
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold: 0.1, ...options }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}
