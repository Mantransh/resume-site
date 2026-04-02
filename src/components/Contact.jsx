import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { personal } from '../data/portfolio'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

/**
 * Contact — contact form + info cards + social links
 */
export default function Contact() {
  const { ref, isInView } = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const contactDetails = [
    { Icon: FiMail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { Icon: FiPhone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { Icon: FiMapPin, label: 'Location', value: personal.location, href: null },
  ]

  const socialLinks = [
    { Icon: FiGithub, href: personal.github, label: 'GitHub' },
    { Icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
    { Icon: FiTwitter, href: personal.twitter, label: 'Twitter' },
  ]

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 lg:py-32 bg-surface-800/40"
    >
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">
              06. Contact
            </p>
            <h2 id="contact-heading" className="section-heading">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto">
              I'm currently open to new roles and interesting collaborations. My inbox is always open — hello!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left — contact info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact detail cards */}
              {contactDetails.map(({ Icon, label, value, href }, index) => (
                <div
                  key={label + index}
                  className="card flex items-center gap-4 group hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-200 text-sm hover:text-accent transition-colors mt-0.5 block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-200 text-sm mt-0.5">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="card">
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
                  Find me online
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ Icon, href, label }, index) => (
                    <a
                      key={href || label || index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-surface-500 text-gray-400 hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 text-sm font-medium"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:block">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="card space-y-5"
                aria-label="Contact form"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-surface-600 border border-surface-500 rounded-xl text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 bg-surface-600 border border-surface-500 rounded-xl text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-surface-600 border border-surface-500 rounded-xl text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, role, or just say hi..."
                    className="w-full px-4 py-3 bg-surface-600 border border-surface-500 rounded-xl text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className={`btn-primary w-full justify-center text-sm py-3.5 disabled:opacity-60 disabled:cursor-not-allowed ${
                    status === 'sent' ? 'bg-green-500/80' : ''
                  }`}
                  aria-live="polite"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="animate-spin rounded-full w-4 h-4 border-2 border-surface-900 border-t-transparent" aria-hidden="true" />
                      Sending...
                    </>
                  ) : status === 'sent' ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'sent' && (
                  <p className="text-center text-sm text-green-400 font-mono" role="status">
                    Thanks! I'll get back to you within 24 hours.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
