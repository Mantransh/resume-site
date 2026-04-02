import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'

/**
 * ProjectCard — individual project display
 */
function ProjectCard({ project, index, isInView }) {
  return (
    <article
      className={`relative card group flex flex-col hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      aria-label={project.title}
    >
      {/* Gradient accent header bar */}
      <div
        className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${project.color} opacity-60 group-hover:opacity-100 transition-opacity`}
        aria-hidden="true"
      />

      {/* Top: title + stars + links */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <h3 className="font-display font-bold text-lg text-gray-100 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-xs font-mono px-2 py-0.5 bg-accent/10 text-accent border border-accent/20 rounded-full">
              Featured
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {/* Stars */}
          {project.stars && (
            <span className="flex items-center gap-1 text-xs font-mono text-gray-500">
              <FiStar className="w-3 h-3" aria-hidden="true" />
              {project.stars}
            </span>
          )}
          {/* GitHub link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors"
            aria-label={`${project.title} GitHub repository`}
          >
            <FiGithub className="w-4.5 h-4.5" aria-hidden="true" />
          </a>
          {/* Live link */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <FiExternalLink className="w-4.5 h-4.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-1.5 mt-auto" aria-label="Technologies used">
        {project.techStack.map(tech => (
          <span key={tech} className="tag text-xs">
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}

/**
 * Projects — filterable grid of project cards
 */
export default function Projects() {
  const { ref, isInView } = useInView()
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'featured'
    ? projects.filter(p => p.featured)
    : projects

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 lg:py-32 bg-surface-800/30"
    >
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section header */}
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-sm text-accent tracking-widest uppercase mb-3">
                04. Projects
              </p>
              <h2 id="projects-heading" className="section-heading">
                Things I've <span className="text-accent">Built</span>
              </h2>
            </div>

            {/* Filter buttons */}
            <div
              className="flex gap-2 bg-surface-700 p-1 rounded-xl border border-surface-500"
              role="group"
              aria-label="Filter projects"
            >
              {['all', 'featured'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-body font-medium transition-all duration-200 capitalize ${
                    filter === f
                      ? 'bg-accent text-surface-900'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  aria-pressed={filter === f}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/alexmorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="View all projects on GitHub"
            >
              <FiGithub className="w-4 h-4" aria-hidden="true" />
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
