import { useRef } from 'react'
import technologies from '../data/technologies'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Technologies() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="skills" className="tech" ref={ref} aria-labelledby="tech-heading">
      <div className="wrap">
        <p className="eyebrow" data-reveal="up">Technologies</p>
        <h2 id="tech-heading" className="serif" data-reveal="up">Tools I use to shape the work.</h2>
        <div className="tech-track" data-stagger>
          {technologies.map((item) => (
            <div className="tech-item" data-stagger-item key={item.name}>
              <b>{item.name}</b>
              <span>{item.hint}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
