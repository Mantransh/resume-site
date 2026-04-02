import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from 'react-icons/fi'
import { personal } from '../data/portfolio'
import Profile from '../assets/profile.jpg';

/**
 * Hero — above-the-fold section with animated intro, avatar, and CTAs
 */
export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid + glow */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" aria-hidden="true" />

      {/* Floating accent orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse-slow pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/6 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl animate-pulse-slow pointer-events-none"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className={`space-y-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-mono text-accent">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" aria-hidden="true" />
              Available for new opportunities
            </div>

            {/* Name & title */}
            <div>
              <h1 className="font-display text-5xl lg:text-7xl font-extrabold leading-none tracking-tight">
                <span className="block  dark:text-gray-100 text-gray-900 mb-2">
                  {personal.name.split(' ')[0]}
                </span>
                <span className="block text-accent">
                  {personal.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="mt-4 font-mono text-lg text-gray-400 tracking-wide">
                <span className="text-accent/60">{'// '}</span>
                {personal.title}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-lg lg:text-xl text-gray-300 dark:text-gray-300 leading-relaxed max-w-lg font-light">
              {personal.tagline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={personal.resumeUrl}
                download
                className="btn-primary"
                aria-label="Download resume as PDF"
              >
                <FiDownload className="w-4 h-4" aria-hidden="true" />
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="btn-secondary"
                aria-label="Navigate to contact section"
              >
                <FiMail className="w-4 h-4" aria-hidden="true" />
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              {[
                { Icon: FiGithub, href: personal.github, label: 'GitHub profile' },
                { Icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn profile' },
                { Icon: FiTwitter, href: personal.twitter, label: 'Twitter profile' },
                { Icon: FiMail, href: personal.email ? `mailto:${personal.email}` : '', label: 'Send email' },
              ].map(({ Icon, href, label }) => {
                const safeHref = href ?? ''

                return (
                  <a
                    key={safeHref}
                    href={safeHref}
                    target={safeHref.startsWith('http') ? '_blank' : undefined}
                    rel={safeHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="p-3 rounded-xl border border-surface-500 text-gray-400 hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Avatar / visual */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              {/* Rotating border ring */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-transparent to-purple-500 opacity-40 blur-sm"
                style={{ transform: 'scale(1.05)' }}
                aria-hidden="true"
              />
              {/* Dashed orbit ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20 animate-spin"
                style={{ animationDuration: '20s', transform: 'scale(1.15)' }}
                aria-hidden="true"
              />

              {/* Avatar circle */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-accent/20 via-surface-700 to-purple-500/20 border-2 border-surface-500 flex items-center justify-center overflow-hidden shadow-2xl shadow-accent/10">
                {/* Placeholder initials — replace img tag with actual photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface-700 to-surface-800" />
                <img
                src={Profile}
                alt={`Avatar: ${personal.name}`}
                className="relative z-10 w-full h-full object-cover rounded-full overflow-hidden"
                />
              </div>

              {/* Floating tech badges */}
              <div
                className="absolute -top-4 -right-4 bg-surface-700 border border-surface-500 rounded-xl px-3 py-2 text-xs font-mono text-accent animate-float shadow-lg shadow-black/30"
                style={{ animationDelay: '0s' }}
                aria-hidden="true"
              >
                React ⚛️
              </div>
              <div
                className="absolute -bottom-4 -left-8 bg-surface-700 border border-surface-500 rounded-xl px-3 py-2 text-xs font-mono text-accent animate-float shadow-lg shadow-black/30"
                style={{ animationDelay: '2s' }}
                aria-hidden="true"
              >
                Tailwind 💨
              </div>
              <div
                className="absolute top-1/2 -right-12 z-20 -translate-y-1/2 bg-surface-700 border border-surface-500 rounded-xl px-3 py-2 text-xs font-mono text-purple-400 animate-float shadow-lg shadow-black/30"
                style={{ animationDelay: '4s' }}
                aria-hidden="true"
              >
                Node.js 🟢
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
          <span className="font-mono text-xs tracking-widest uppercase">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
