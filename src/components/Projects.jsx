import { useRef } from 'react'
import projects from '../data/projects'
import ProjectShowcase from './ProjectShowcase'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Projects() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="work" className="work" ref={ref}>
      <div className="wrap">
        <div className="work-head">
          <div>
            <p className="eyebrow" data-reveal="up">Selected work · 01—05</p>
            <h2 className="serif" data-reveal="up">Websites &amp; Digital Experiences Built for Businesses</h2>
          </div>
          <p className="work-intro" data-reveal="fade">
            A selection of websites I’ve designed and developed for businesses across different industries, including airport transfers, taxi services, security and facilities management.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
