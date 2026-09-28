import { useEffect, useRef } from 'react'
import { initHero } from '../animations/heroAnimations'
import { useParallax } from '../hooks/useParallax'
import { useMagnetic } from '../hooks/useMagnetic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import portrait from '../assets/my image.png'

export default function Hero() {
  const rootRef = useRef(null)
  const primaryRef = useRef(null)
  const ghostRef = useRef(null)
  const layers = [
    { selector: '[data-hero="bg"]', y: 40 },
    { selector: '[data-hero="sage"]', y: 70 },
    { selector: '[data-hero="peach"]', y: -35, x: 18 },
    { selector: '[data-hero="portrait"]', y: 28 },
    { selector: '[data-hero="label"]', y: -22 },
  ]

  useParallax(rootRef, layers)
  useMagnetic(primaryRef, 0.18)
  useMagnetic(ghostRef, 0.14)

  useEffect(() => {
    return initHero(rootRef.current)
  }, [])

  return (
    <section id="hero" className="hero" ref={rootRef} aria-label="Introduction">
      <div className="hero-bg" data-hero="bg" />
      <div className="blob blob-sage hero-continue" data-hero="sage" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow" data-hero="eyebrow">
            Nimra Ali · Front-End & WordPress Developer
          </p>
          <h1 className="serif">
            <span className="line">
              <span data-hero="line">I Build Modern</span>
            </span>
            <span className="line">
              <span data-hero="line">Websites With</span>
            </span>
            <span className="line">
              <span className="line-accent" data-hero="line">React &amp; WordPress.</span>
            </span>
          </h1>
          <p className="hero-copy" data-hero="copy">
            I’m Nimra Ali, a Front-End and WordPress developer specialising in React, WordPress, WooCommerce and responsive website development. I build fast, user-friendly websites for businesses that want a professional online presence and a better experience for their customers.
          </p>
          <div className="hero-actions">
            <a ref={primaryRef} className="btn btn-primary" href="#work" data-hero="action">
              View My Work <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a ref={ghostRef} className="btn btn-ghost hero-available" href="#contact" data-hero="action">
              <span className="status-dot" aria-hidden="true" />
              Available for new projects
            </a>
          </div>
        </div>

        <div className="hero-stage">
          <div className="blob blob-sage hero-sage-a" data-hero="sage" aria-hidden="true" />
          <div className="blob blob-peach hero-peach-a" data-hero="peach" aria-hidden="true" />
          <figure className="hero-portrait" data-hero="portrait">
            <img src={portrait} alt="Nimra Ali" />
          </figure>
          <span className="float-label float-a" data-hero="label">
            <FontAwesomeIcon icon={faReact} className="float-icon icon-react" aria-hidden="true" />
            React
          </span>
          <span className="float-label float-b" data-hero="label">
            <FontAwesomeIcon icon={faWordpress} className="float-icon icon-wordpress" aria-hidden="true" />
            WordPress
          </span>
          <span className="float-label float-c" data-hero="label">
            <FontAwesomeIcon icon={faCartShopping} className="float-icon icon-woo" aria-hidden="true" />
            WooCommerce
          </span>
        </div>
      </div>
    </section>
  )
}
