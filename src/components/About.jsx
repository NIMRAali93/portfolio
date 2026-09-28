import { useMemo, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { useParallax } from '../hooks/useParallax'
import { useScrollReveal } from '../hooks/useScrollReveal'

const p = (text) => ['punct', text]
const str = (text) => ['str', `'${text}'`]
const list = (...items) => [
  p('['),
  ...items.flatMap((item, i) => (i ? [p(', '), str(item)] : [str(item)])),
  p(']'),
]
const prop = (key, ...value) => [['plain', '  '], ['key', key], p(': '), ...value, p(',')]

const code = [
  [['kw', 'const'], ['plain', ' '], ['var', 'nimra'], p(' = {')],
  prop('role', str('Frontend & WordPress Developer')),
  prop('experience', str('4+ years')),
  prop('clients', ...list('UK', 'Local businesses')),
  prop('stack', ...list('WordPress', 'React', 'WooCommerce', 'PHP')),
  prop('focus', str('usable, fast websites')),
  prop('habit', str('clean, considered code')),
  prop('available', ['bool', 'true']),
  [p('}')],
  [],
  [['var', 'nimra'], p('.'), ['fn', 'buildYourWebsite'], p('()'), ['plain', ' '], ['comment', '// ✓ Let’s talk']],
]

export default function About() {
  const ref = useRef(null)
  useScrollReveal(ref)
  const layers = useMemo(
    () => [
      { selector: '[data-about="back"]', y: 36 },
      { selector: '[data-about="peach"]', y: -24 },
      { selector: '[data-about="image"]', y: 18 },
    ],
    [],
  )
  useParallax(ref, layers)

  return (
    <section id="about" className="about" ref={ref} aria-labelledby="about-heading">
      <div className="wrap about-grid">
        <div className="about-visual" data-reveal="scale">
          <div className="about-blob" data-about="back" aria-hidden="true" />
          <div className="about-blob about-blob-peach" data-about="peach" aria-hidden="true" />
          <figure
            className="code-card"
            data-about="image"
            role="img"
            aria-label="Code editor showing a JavaScript profile of Nimra: Frontend and WordPress developer, 4+ years of experience, working with UK and local businesses, using WordPress, React, WooCommerce and PHP, currently available for projects."
          >
            <div className="code-card-bar" aria-hidden="true">
              <span className="code-dots"><i /><i /><i /></span>
              <span className="code-tab">nimra.js</span>
            </div>
            <pre className="code-body" aria-hidden="true">
              <code>
                {code.map((tokens, line) => (
                  <span className="code-line" key={line}>
                    {tokens.map(([type, text], i) => (
                      <span className={`tok-${type}`} key={i}>{text}</span>
                    ))}
                    {line === code.length - 1 ? <span className="code-cursor" /> : null}
                  </span>
                ))}
              </code>
            </pre>
          </figure>
        </div>

        <div className="about-text">
          <p className="eyebrow" data-reveal="up">About Me</p>
          <h2 id="about-heading" className="serif" data-reveal="up">
            Front-End &amp; WordPress Developer
          </h2>
          <p className="about-copy" data-reveal="fade">
            I’m Nimra, a Front-End and WordPress developer with 4+ years of
            experience building modern websites for businesses, including taxi,
            airport transfer and service-based companies. I specialise in React,
            WordPress, WooCommerce and responsive website development.
          </p>
          <p className="about-copy" data-reveal="fade">
            I focus on creating websites that are fast, easy to use and designed
            around clear customer journeys.
          </p>

          <div className="about-actions" data-reveal="fade">
            <a className="btn btn-primary" href="/Nimra_Ali_CV_.pdf" download="Nimra-Ali-CV.pdf">
              <FontAwesomeIcon icon={faDownload} aria-hidden="true" />
              Download CV
            </a>
            <a className="btn btn-ghost" href="#contact">
              Start a Project <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
