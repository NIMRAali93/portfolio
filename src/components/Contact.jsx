import { useEffect, useRef, useState } from 'react'
import { initContactMotion } from '../animations/scrollAnimations'
import { useMagnetic } from '../hooks/useMagnetic'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const CONTACT_EMAIL = 'nimraali.dev@gmail.com'

function validate(values) {
  const errors = {}
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }
  if (!EMAIL.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = 'Please share a little more about the project (at least 20 characters).'
  }
  return errors
}

export default function Contact() {
  const rootRef = useRef(null)
  const btnRef = useRef(null)
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useMagnetic(btnRef, 0.16)

  useEffect(() => {
    return initContactMotion(rootRef.current)
  }, [])

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }))
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="contact" ref={rootRef}>
      <div className="contact-shape" data-contact="shape" aria-hidden="true" />
      <div className="contact-peach" aria-hidden="true" />
      <div className="wrap contact-inner">
        <div>
          <p className="eyebrow" style={{ color: '#b8cdbd' }}>Contact</p>
          <h2 className="serif" data-contact="heading">Have a Project in Mind?</h2>
          <p className="contact-lead" data-contact="copy">
            Let’s build something meaningful together.
          </p>
          <div className="contact-details">
            <p className="contact-label">Email me directly</p>
            <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a
              className="contact-whatsapp"
              href="https://wa.me/923257676105?text=Hello%20Nimra%2C%20I%20want%20to%20talk%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 0325 7676105 <span aria-hidden="true">↗</span>
            </a>
            <p className="contact-reply">
              <span className="status-dot" aria-hidden="true" />
              I usually reply within 24 hours
            </p>
          </div>
        </div>
        <div data-contact="cta">
          {submitted ? (
            <div className="form-success" role="status">
              <h3>Thank you.</h3>
              <p>Your message is ready. I’ll be in touch soon.</p>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              <label className="field">
                <span>Name</span>
                <input
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <p className="field-error">{errors.name}</p> : null}
              </label>
              <label className="field">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? <p className="field-error">{errors.email}</p> : null}
              </label>
              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? <p className="field-error">{errors.message}</p> : null}
              </label>
              <button ref={btnRef} className="btn btn-light" type="submit">
                Get In Touch <span className="arrow" aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
