import { useRef } from 'react'
import services from '../data/services'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Services() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="services" className="services" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow" data-reveal="up">What I do</p>
            <h2 className="serif" data-reveal="up">Front-End, WordPress &amp; WooCommerce Development</h2>
          </div>
          <p className="section-intro" data-reveal="fade">
            I create modern, responsive websites that combine thoughtful design, clean
            development and a clear user experience. From custom WordPress websites to React
            interfaces and WooCommerce stores, every project is built around the needs of the
            business and its customers.
          </p>
        </div>
        <div className="service-list" data-stagger>
          {services.map((service) => (
            <article className="service-item" data-stagger-item key={service.number}>
              <span className="service-icon" aria-hidden="true">
                {service.number}
              </span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
              <span className="service-arrow" aria-hidden="true">→</span>
              <span className="service-accent" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
