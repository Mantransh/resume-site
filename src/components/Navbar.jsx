import { useState, useEffect } from 'react'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { personal } from '../data/portfolio'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Navbar — sticky, transparent-to-solid on scroll, with mobile drawer
 */
export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Detect scroll to add background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section detection
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    )
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface-900/90 dark:bg-surface-900/90 backdrop-blur-xl border-b border-surface-600/50 shadow-xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="section-container flex items-center justify-between h-16 lg:h-20"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => handleLinkClick(e, '#hero')}
            className="font-display font-bold text-xl tracking-tight hover:text-accent transition-colors duration-200"
            aria-label="Go to top"
          >
            <span className="text-accent">{'{'}</span>
            {personal.initials}
            <span className="text-accent">{'}'}</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => handleLinkClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-body font-medium rounded-lg transition-all duration-200 relative
                    ${activeSection === link.href.slice(1)
                      ? 'text-accent'
                      : 'text-gray-400 hover:text-gray-100 dark:hover:text-gray-100'
                    }`}
                  aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg text-gray-400 hover:text-accent hover:bg-surface-700 transition-all duration-200"
            >
              {isDark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
            </button>

            {/* CTA */}
            <a
              href={personal.resumeUrl}
              download
              className="hidden lg:flex btn-primary text-sm py-2 px-4"
              aria-label="Download resume PDF"
            >
              Resume ↓
            </a>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-accent hover:bg-surface-700 transition-all duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } bg-surface-800/95 backdrop-blur-xl border-t border-surface-600/50`}
          aria-hidden={!mobileOpen}
        >
          <ul className="section-container py-4 flex flex-col gap-1" role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => handleLinkClick(e, link.href)}
                  className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-accent hover:bg-surface-700 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={personal.resumeUrl} download className="btn-primary text-sm w-full justify-center">
                Download Resume ↓
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
