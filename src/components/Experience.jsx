import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faCode, faPenRuler, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import steps from '../data/process'
import { useScrollReveal } from '../hooks/useScrollReveal'

const icons = {
  compass: faCompass,
  ruler: faPenRuler,
  code: faCode,
  sparkles: faWandMagicSparkles,
}

export default function Experience() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="experience" className="process" ref={ref} aria-labelledby="process-heading">
      <div className="wrap">
        <p className="eyebrow" data-reveal="up">How I work</p>
        <div className="process-heading-row">
          <h2 id="process-heading" className="serif" data-reveal="up">A Clear Website Development Process From Idea to Launch</h2>
          <p data-reveal="fade">Every website project starts by understanding the business and ends with a carefully tested digital experience. The process keeps communication clear while giving each stage the attention it needs.</p>
        </div>
        <div className="process-list" data-stagger>
          {steps.map((step) => (
            <article className="process-item" data-stagger-item key={step.number}>
              <div className="process-top">
                <span className="process-number">{step.number}</span>
                <span className="process-icon" aria-hidden="true"><FontAwesomeIcon icon={icons[step.icon]} /></span>
              </div>
              <div className="process-body">
                <span className="process-step-label">Step {step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
              <span className="process-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
