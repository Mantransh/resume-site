import { useInView } from '../hooks/useInView'
import { about, personal } from '../data/portfolio'

export default function About() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-24 lg:py-32 px-4">
      <div className="section-container">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left */}
          <div>
            <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-2 md:mb-3">
              01. About
            </p>

            <h2
              id="about-heading"
              className="section-heading text-gray-100 mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl"
            >
              A little about <span className="text-accent">me</span>
            </h2>

            <div className="space-y-3 md:space-y-4">
              {about.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6 md:mt-8 p-3 md:p-4 bg-surface-700 border-l-2 border-accent rounded-r-xl">
              <p className="text-xs md:text-sm font-mono text-accent mb-1">
                {'> Currently focused on'}
              </p>
              <p className="text-gray-300 text-xs md:text-sm">
                Developer experience tooling, AI-augmented workflows, and contributing to the
                open-source ecosystem.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5 md:space-y-6">

            {/* FIX: responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {about.highlights.map(({ value, label }, i) => (
                <div
                  key={label}
                  className="card glow-on-hover group text-center"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-accent group-hover:scale-110 transition-transform duration-200">
                    {value}
                  </div>
                  <div className="font-body text-xs md:text-sm text-gray-400 mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* FIX: prevent overflow */}
            <div className="card space-y-3">
              {[
                ['📍 Location', personal.location],
                ['📧 Email', personal.email],
                ['🏢 Open to', 'Remote / Hybrid / Onsite'],
                ['🌐 Languages', 'English (Native)'],
              ].map(([key, value]) => (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs md:text-sm gap-1"
                >
                  <span className="font-mono text-gray-500">{key}</span>
                  <span className="text-gray-300 break-words text-left sm:text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}