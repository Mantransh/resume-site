import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import ScrollToTop from './components/ScrollToTop'

/**
 * App — root component, wires together all sections
 */
export default function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : 'light'} noise-bg`}>
      {/* Skip to main content — accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] btn-primary text-sm"
      >
        Skip to main content
      </a>

      {/* Sticky navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main content */}
      <main id="main-content">
        {/* Hero */}
        <Hero />

        <SectionDivider />

        {/* About */}
        <About />

        <SectionDivider />

        {/* Skills */}
        <Skills />

        <SectionDivider />

        {/* Experience */}
        <Experience />

        <SectionDivider />

        {/* Projects */}
        <Projects />

        <SectionDivider />

        {/* Education */}
        <Education />

        <SectionDivider />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </div>
  )
}
