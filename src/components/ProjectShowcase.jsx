import { useEffect, useRef } from 'react'
import { initProject } from '../animations/projectAnimations'
import ProjectVisual from './ProjectVisual'

function CaseStudy({ study, title }) {
  const steps = [
    { label: 'The challenge', copy: study.problem },
    { label: 'What I built', copy: study.built },
    { label: 'The result', copy: study.result },
  ]

  return (
    <section className="case-study" aria-label={`${title} case study`}>
      <p className="case-study-kicker">Case study</p>
      <ol className="case-steps">
        {steps.map((step) => (
          <li className="case-step" key={step.label}>
            <h4>{step.label}</h4>
            <p>{step.copy}</p>
          </li>
        ))}
      </ol>
      {study.scores?.length ? (
        <div className="case-scores">
          <dl className="case-score-list">
            {study.scores.map((score) => (
              <div className="case-score" key={score.label}>
                <dt>{score.label}</dt>
                <dd className="serif">{score.value}</dd>
              </div>
            ))}
          </dl>
          <p className="case-scores-note">Measured with Google PageSpeed Insights</p>
        </div>
      ) : null}
    </section>
  )
}

export default function ProjectShowcase({ project, index }) {
  const ref = useRef(null)

  useEffect(() => {
    return initProject(ref.current, index)
  }, [index])

  const host = new URL(project.liveUrl).hostname.replace(/^www\./, '')

  return (
    <article ref={ref} className={`project-card${index % 2 ? ' is-reverse' : ''}`}>
      <div className="project-media" data-project="media">
        <a
          className="project-image-link"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} website (opens in a new tab)`}
        >
          <span className="project-browser" aria-hidden="true">
            <span className="project-browser-dots"><i /><i /><i /></span>
            <span className="project-browser-url">{host}</span>
          </span>
          <span className="project-shot">
            <ProjectVisual title={project.title} preview={project.preview} />
            <span className="project-image-link-label">View live site <span aria-hidden="true">↗</span></span>
          </span>
        </a>
      </div>
      <div className="project-copy">
        <p className="project-number serif" data-project="number">{project.number}</p>
        <h3 data-project="title">{project.title}</h3>
        <div className="tags">
          {project.technologies.map((tech) => (
            <span className="tag" data-project="tag" key={tech}>{tech}</span>
          ))}
        </div>
        <p data-project="copy">{project.description}</p>
        {project.result ? (
          <p className="project-result">
            <span>Outcome</span>
            {project.result}
          </p>
        ) : null}
        <a
          className="project-cta"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} website (opens in a new tab)`}
          data-project="cta"
        >
          View Website <span className="arrow" aria-hidden="true">↗</span>
        </a>
      </div>
      {project.caseStudy ? <CaseStudy study={project.caseStudy} title={project.title} /> : null}
    </article>
  )
}
