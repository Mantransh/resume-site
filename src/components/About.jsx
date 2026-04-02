import { useInView } from '../hooks/useInView'
import { about, personal } from '../data/portfolio'


export default function About() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 lg:py-32">
      <div className="section-container">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: heading + bio */}
          <div>
            <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">
              01. About
            </p>
            <h2 id="about-heading" className="section-heading text-gray-100 dark:text-gray-100 mb-8">
              A little about{' '}
              <span className="text-accent">me</span>
            </h2>

            <div className="space-y-4">
              {about.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-400 leading-relaxed text-base lg:text-lg"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            
            <div className="mt-8 p-4 bg-surface-700 border-l-2 border-accent rounded-r-xl">
              <p className="text-sm font-mono text-accent mb-1">{'> Currently focused on'}</p>
              <p className="text-gray-300 text-sm">
                Developer experience tooling, AI-augmented workflows, and contributing to the
                open-source ecosystem.
              </p>
            </div>
          </div>

          {/* Right: highlights grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {about.highlights.map(({ value, label }, i) => (
                <div
                  key={label}
                  className="card glow-on-hover group text-center"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="font-display font-extrabold text-4xl text-accent group-hover:scale-110 transition-transform duration-200">
                    {value}
                  </div>
                  <div className="font-body text-sm text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Quick info list */}
            <div className="card space-y-3">
              {[
                ['📍 Location', personal.location],
                ['📧 Email', personal.email],
                ['🏢 Open to', 'Remote / Hybrid / Onsite'],
                ['🌐 Languages', 'English (Native)'],
              ].map(([key, value]) => (
                <div key={key} className="flex items-center justify-between text-sm">
                  <span className="font-mono text-gray-500">{key}</span>
                  <span className="text-gray-300 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
