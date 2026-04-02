import { useInView } from '../hooks/useInView'
import { skills, techBadges } from '../data/portfolio'

/**
 * SkillBar — animated progress bar for a single skill
 */
function SkillBar({ name, level, isInView, delay }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-300 font-body">{name}</span>
        <span className="text-xs font-mono text-accent">{level}%</span>
      </div>
      <div
        className="h-1.5 bg-surface-500 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency: ${level}%`}
      >
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

/**
 * Skills — categorized skill cards with progress bars + tech badge cloud
 */
export default function Skills() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 lg:py-32 bg-surface-800/50"
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
              02. Skills
            </p>
            <h2 id="skills-heading" className="section-heading">
              Technical <span className="text-accent">Expertise</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              A snapshot of my core technologies and proficiency levels across the stack.
            </p>
          </div>

          {/* Skill category cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {skills.map((category, catIdx) => (
              <div key={category.category} className="card space-y-4 group hover:shadow-lg hover:shadow-accent/5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                  <h3 className="font-display font-semibold text-gray-100 group-hover:text-accent transition-colors">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.items.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      isInView={isInView}
                      delay={catIdx * 100 + skillIdx * 80}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech badge cloud */}
          <div className="text-center">
            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">
              Also familiar with
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {techBadges.map((tech, i) => (
                <span
                  key={tech}
                  className="tag hover:bg-accent/20 hover:scale-105 transition-all duration-200 cursor-default"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
