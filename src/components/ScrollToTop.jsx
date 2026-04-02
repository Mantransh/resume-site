import { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi'

/**
 * ScrollToTop — floating button that appears after scrolling down
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-8 right-8 z-50 p-3 bg-accent text-surface-900 rounded-xl shadow-lg shadow-accent/25 hover:bg-accent-dark hover:shadow-accent/40 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <HiArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  )
}
