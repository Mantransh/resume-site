import { useInView } from '../hooks/useInView'
import { education, certifications } from '../data/portfolio'
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi'

/**
 * Education — degree info + certifications
 */
export default function Education() {
  const { ref, isInView } = useInView()

  return (
    <section id="education" aria-labelledby="education-heading" className="py-24 lg:py-32">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section header */}
          <div className="mb-16">
            <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">
              05. Education
            </p>
            <h2 id="education-heading" className="section-heading">
              Academic <span className="text-accent">Background</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Degrees */}
            <div>
              <h3 className="font-display font-semibold text-lg text-gray-300 mb-6 flex items-center gap-2">
                <HiAcademicCap className="w-5 h-5 text-accent" aria-hidden="true" />
                Degrees
              </h3>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <article
                    key={i}
                    className="card group hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                      <div>
                        <h4 className="font-display font-bold text-xl text-gray-100 group-hover:text-accent transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-accent font-medium mt-0.5">{edu.school}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-mono text-sm text-gray-400">{edu.duration}</div>
                        <div className="text-xs text-accent/80 mt-1 font-mono">{edu.honors}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <span className="font-mono text-gray-500">GPA:</span>
                      <span className="font-mono text-accent font-semibold">{edu.gpa}</span>
                    </div>

                    <p className="text-gray-400 text-sm mb-4">{edu.description}</p>

                    <div>
                      <p className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
                        Key Coursework
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map(course => (
                          <span key={course} className="tag text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-display font-semibold text-lg text-gray-300 mb-6 flex items-center gap-2">
                <HiBadgeCheck className="w-5 h-5 text-accent" aria-hidden="true" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="card flex items-center justify-between gap-4 group hover:border-accent/30 transition-all duration-200"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors"
                        aria-hidden="true"
                      >
                        <HiBadgeCheck className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-200 text-sm">{cert.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-accent shrink-0">{cert.year}</span>
                  </div>
                ))}
              </div>

              {/* Additional note */}
              <div className="mt-6 p-4 bg-surface-700/50 rounded-xl border border-surface-500/30">
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                  Continuous Learning
                </p>
                <p className="text-sm text-gray-400">
                  Active learner on platforms including Coursera, Pluralsight, and Frontend Masters.
                  Regularly attend JSConf, React Summit, and local meetups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
