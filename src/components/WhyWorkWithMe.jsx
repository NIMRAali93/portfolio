import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComments,
  faPenToSquare,
  faLifeRing,
  faMagnifyingGlassChart,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons'
import reasons from '../data/reasons'
import projects from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { gsap, prefersReducedMotion } from '../animations/gsapSetup'

const icons = {
  replies: faComments,
  revisions: faPenToSquare,
  support: faLifeRing,
  seo: faMagnifyingGlassChart,
  responsive: faMobileScreen,
}

const stats = [
  { value: 4, suffix: '+', label: 'Years of Experience' },
  { value: projects.length, suffix: '', label: 'Live Client Sites Featured' },
  { value: 24, suffix: 'h', label: 'Reply Time' },
  { value: 100, suffix: '%', label: 'Mobile-Responsive Builds' },
]

export default function WhyWorkWithMe() {
  const ref = useRef(null)
  useScrollReveal(ref)

  useEffect(() => {
    const root = ref.current
    if (!root || prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      root.querySelectorAll('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count)
        const counter = { value: 0 }
        el.textContent = '0'
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(counter.value))
          },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section id="why" className="why" ref={ref} aria-labelledby="why-heading">
      <div className="why-glow" aria-hidden="true" />

      <div className="why-stats-band">
        <dl className="wrap why-stats" data-stagger>
          {stats.map((stat) => (
            <div className="why-stat" data-stagger-item key={stat.label}>
              <dt>{stat.label}</dt>
              <dd className="serif">
                <span data-count={stat.value}>{stat.value}</span>
                {stat.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="wrap">
        <div className="why-head">
          <div>
            <p className="eyebrow" data-reveal="up">Working together</p>
            <h2 id="why-heading" className="serif" data-reveal="up">
              What you can expect when we <em>work together</em>.
            </h2>
          </div>
          <p className="why-lead" data-reveal="fade">
            No agency layers and no guesswork. You work directly with the person
            designing and building your website, from the first message to launch day.
          </p>
        </div>

        <ul className="why-list" data-stagger>
          {reasons.map((reason) => (
            <li className="why-item" data-stagger-item key={reason.id}>
              <span className="why-icon" aria-hidden="true">
                <FontAwesomeIcon icon={icons[reason.id]} />
              </span>
              <h3 className="serif">{reason.title}</h3>
              <p>{reason.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
