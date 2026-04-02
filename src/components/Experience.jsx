import { useInView } from '../hooks/useInView'
import { experience } from '../data/portfolio'
import { HiExternalLink } from 'react-icons/hi'
import { FiBriefcase } from 'react-icons/fi'

/**
 * ExperienceItem — single role in the timeline
 */
function ExperienceItem({ job, index, isInView }) {
  return (
    <div
      className={`relative pl-8 timeline-item transition-all duration-700 ${
        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-surface-900 z-10"
        aria-hidden="true"
      />
      {/* Timeline vertical line */}
      {index < experience.length - 1 && (
        <div
          className="absolute left-[4px] top-7 bottom-0 w-px bg-gradient-to-b from-accent/30 via-surface-500/30 to-transparent"
          aria-hidden="true"
        />
      )}

      <article className="card mb-6 group hover:shadow-xl hover:shadow-accent/5">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-display font-bold text-xl text-gray-100 group-hover:text-accent transition-colors">
              {job.role}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-medium hover:underline flex items-center gap-1"
                aria-label={`${job.company} website`}
              >
                {job.company}
                <HiExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <span className="text-gray-600">·</span>
              <span className="text-xs text-gray-500 bg-surface-600 px-2 py-0.5 rounded-full font-mono">
                {job.type}
              </span>
            </div>
          </div>

          <div className="text-right shrink-0">
            <div className="font-mono text-sm text-accent/80">{job.duration}</div>
            <div className="text-xs text-gray-500 mt-0.5">{job.location}</div>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{job.description}</p>

        <ul className="space-y-2" aria-label={`Key achievements at ${job.company}`}>
          {job.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
              <span className="text-accent mt-0.5 shrink-0 font-mono font-bold">→</span>
              <span className="leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}

/**
 * Experience — vertical timeline of work history
 */
export default function Experience() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 lg:py-32">
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
              03. Experience
            </p>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2 id="experience-heading" className="section-heading">
                Work <span className="text-accent">History</span>
              </h2>
              <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                <FiBriefcase className="w-4 h-4 text-accent" aria-hidden="true" />
                Internship
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl" role="list" aria-label="Work experience timeline">
            {experience.map((job, index) => (
              <ExperienceItem
                key={`${job.company}-${job.role}`}
                job={job}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
