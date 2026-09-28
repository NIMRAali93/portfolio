import { gsap, ease, prefersReducedMotion, isMobileViewport } from './gsapSetup'

export function initSectionReveals(root) {
  if (!root) return () => {}

  const reduced = prefersReducedMotion()
  const ctx = gsap.context(() => {
    root.querySelectorAll('[data-reveal]').forEach((el) => {
      const type = el.getAttribute('data-reveal')
      if (reduced) {
        gsap.set(el, { clearProps: 'all', opacity: 1 })
        return
      }

      const from = {
        fade: { opacity: 0, y: 24 },
        up: { opacity: 0, y: 32, filter: 'blur(4px)' },
        left: { opacity: 0, x: -24 },
        right: { opacity: 0, x: 24 },
        scale: { opacity: 0, scale: 0.96 },
      }[type] || { opacity: 0, y: 24 }

      gsap.fromTo(el, from, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.85,
        ease: ease.out,
        scrollTrigger: {
          trigger: el,
          start: 'top 86%',
          once: true,
        },
      })
    })

    root.querySelectorAll('[data-stagger]').forEach((group) => {
      const items = group.querySelectorAll('[data-stagger-item]')
      if (!items.length) return
      if (reduced) {
        gsap.set(items, { clearProps: 'all', opacity: 1 })
        return
      }
      gsap.fromTo(
        items,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: ease.out,
          stagger: 0.12,
          scrollTrigger: {
            trigger: group,
            start: 'top 82%',
            once: true,
          },
        },
      )
    })
  }, root)

  return () => ctx.revert()
}

export function initNavScroll(nav) {
  if (!nav) return () => {}
  const reduced = prefersReducedMotion()
  const onScroll = () => {
    nav.classList.toggle('is-compact', window.scrollY > 24)
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  const ctx = gsap.context(() => {
    if (!reduced) {
      gsap.from(nav, {
        y: -16,
        opacity: 0,
        duration: 0.7,
        delay: 0.08,
        ease: ease.out,
      })
    }
  }, nav)

  return () => {
    window.removeEventListener('scroll', onScroll)
    ctx.revert()
  }
}

export function initContactMotion(root) {
  if (!root) return () => {}
  const reduced = prefersReducedMotion()
  const ctx = gsap.context(() => {
    const shape = root.querySelector('[data-contact="shape"]')
    const heading = root.querySelector('[data-contact="heading"]')
    const copy = root.querySelector('[data-contact="copy"]')
    const cta = root.querySelector('[data-contact="cta"]')

    if (reduced) return

    if (shape) {
      gsap.fromTo(
        shape,
        { scale: 0.72, opacity: 0.35 },
        {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 0.6,
          },
        },
      )
    }

    gsap.from([heading, copy], {
      y: 28,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: ease.out,
      scrollTrigger: { trigger: root, start: 'top 72%', once: true },
    })

    gsap.from(cta, {
      y: 18,
      opacity: 0,
      duration: 0.7,
      delay: 0.15,
      ease: ease.out,
      scrollTrigger: { trigger: root, start: 'top 72%', once: true },
    })
  }, root)

  return () => ctx.revert()
}

export function getParallaxAmount(desktop, mobile = desktop * 0.35) {
  if (prefersReducedMotion()) return 0
  return isMobileViewport() ? mobile : desktop
}
