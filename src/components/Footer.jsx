import { personal } from '../data/portfolio'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'

const socialLinks = [
  { Icon: FiGithub, href: personal.github, label: 'GitHub' },
  { Icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
  { Icon: FiTwitter, href: personal.twitter, label: 'Twitter' },
  { Icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Footer — copyright, nav links, and social icons
 */
export default function Footer() {
  const year = new Date().getFullYear()

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      role="contentinfo"
      className="bg-surface-900 border-t border-surface-600/40 py-12"
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-2xl tracking-tight mb-1">
              <span className="text-accent">{'{'}</span>
              {personal.initials}
              <span className="text-accent">{'}'}</span>
            </div>
            <p className="text-xs font-mono text-gray-500">
              {personal.title}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => handleClick(e, link.href)}
                    className="text-sm text-gray-500 hover:text-accent transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, href, label }) => {
              const safeHref = href ?? ''

              return (
                <a
                  key={safeHref}
                  href={safeHref}
                  target={safeHref.startsWith('http') ? '_blank' : undefined}
                  rel={safeHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-2 rounded-lg text-gray-600 hover:text-accent hover:bg-surface-700 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-surface-700/60 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-600 font-mono flex items-center justify-center gap-1.5 flex-wrap">
            <span>© {year} {personal.name}.</span>
            <span className="text-gray-700">·</span>
            <span className="flex items-center gap-1">
              Built with
              <FiHeart className="w-3 h-3 text-accent" aria-hidden="true" />
              using React &amp; Tailwind CSS
            </span>
            <span className="text-gray-700">·</span>
            <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
