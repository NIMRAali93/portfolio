import { gsap, ease, prefersReducedMotion } from './gsapSetup'

export function initHero(root) {
  if (!root) return () => {}

  const reduced = prefersReducedMotion()
  const ctx = gsap.context(() => {
    const bg = root.querySelector('[data-hero="bg"]')
    const eyebrow = root.querySelector('[data-hero="eyebrow"]')
    const lines = root.querySelectorAll('[data-hero="line"]')
    const copy = root.querySelector('[data-hero="copy"]')
    const actions = root.querySelectorAll('[data-hero="action"]')
    const portrait = root.querySelector('[data-hero="portrait"]')
    const sage = root.querySelectorAll('[data-hero="sage"]')
    const peach = root.querySelectorAll('[data-hero="peach"]')
    const labels = root.querySelectorAll('[data-hero="label"]')

    if (reduced) {
      gsap.set([bg, eyebrow, lines, copy, actions, portrait, sage, peach, labels], {
        clearProps: 'all',
        opacity: 1,
      })
      return
    }

    gsap.set(lines, { y: 40, opacity: 0, rotate: 0.4 })
    gsap.set(copy, { y: 22, opacity: 0 })
    gsap.set(actions, { y: 16, opacity: 0 })
    gsap.set(portrait, { y: 28, scale: 0.97, opacity: 0 })
    gsap.set(sage, { scale: 0.86, opacity: 0 })
    gsap.set(peach, { scale: 0.9, opacity: 0 })
    gsap.set(labels, { y: 10, opacity: 0 })
    gsap.set(eyebrow, { y: 16, opacity: 0 })
    gsap.set(bg, { opacity: 0 })

    const tl = gsap.timeline({ defaults: { ease: ease.out } })
    tl.to(bg, { opacity: 1, duration: 0.7 }, 0)
      .to(eyebrow, { y: 0, opacity: 1, duration: 0.55 }, 0.12)
      .to(lines, { y: 0, opacity: 1, rotate: 0, duration: 0.85, stagger: 0.12 }, 0.18)
      .to(copy, { y: 0, opacity: 1, duration: 0.7 }, 0.58)
      .to(actions, { y: 0, opacity: 1, duration: 0.55, stagger: 0.1 }, 0.68)
      .to(portrait, { y: 0, scale: 1, opacity: 1, duration: 0.95 }, 0.32)
      .to(sage, { scale: 1, opacity: 1, duration: 0.9, stagger: 0.08 }, 0.2)
      .to(peach, { scale: 1, opacity: 1, duration: 0.85, stagger: 0.1 }, 0.28)
      .to(labels, { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 }, 0.82)
  }, root)

  return () => ctx.revert()
}
