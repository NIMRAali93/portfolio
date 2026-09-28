import { gsap, ease, prefersReducedMotion } from './gsapSetup'

const variants = ['clip-up', 'clip-side', 'inset', 'wipe', 'scale-mask']

export function initProject(root, index = 0) {
  if (!root) return () => {}
  const reduced = prefersReducedMotion()
  const variant = variants[index % variants.length]
  const ctx = gsap.context(() => {
    const media = root.querySelector('[data-project="media"]')
    const number = root.querySelector('[data-project="number"]')
    const title = root.querySelector('[data-project="title"]')
    const tags = root.querySelectorAll('[data-project="tag"]')
    const copy = root.querySelector('[data-project="copy"]')
    const cta = root.querySelector('[data-project="cta"]')

    if (reduced) {
      gsap.set([media, number, title, tags, copy, cta], {
        clearProps: 'all',
        opacity: 1,
      })
      return
    }

    const imageFrom = {
      'clip-up': { clipPath: 'inset(18% 0% 0% 0%)', scale: 1.06, y: 24 },
      'clip-side': { clipPath: 'inset(0% 0% 0% 22%)', scale: 1.05, x: 18 },
      inset: { clipPath: 'inset(10% 10% 10% 10%)', scale: 1.08 },
      wipe: { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.04 },
      'scale-mask': { clipPath: 'inset(8% 4% 14% 4%)', scale: 1.1, y: 16 },
    }[variant]

    gsap.fromTo(media, imageFrom, {
      clipPath: 'inset(0% 0% 0% 0%)',
      scale: 1,
      x: 0,
      y: 0,
      duration: 1.15,
      ease: ease.out,
      clearProps: 'clipPath,transform',
      scrollTrigger: { trigger: root, start: 'top 78%', once: true },
    })

    gsap.from(number, {
      opacity: 0,
      y: 12,
      duration: 0.7,
      ease: ease.soft,
      scrollTrigger: { trigger: root, start: 'top 76%', once: true },
    })

    gsap.from(title, {
      opacity: 0,
      y: 30,
      filter: 'blur(4px)',
      duration: 0.9,
      ease: ease.out,
      scrollTrigger: { trigger: root, start: 'top 74%', once: true },
    })

    gsap.from(tags, {
      opacity: 0,
      y: 12,
      duration: 0.5,
      stagger: 0.08,
      delay: 0.12,
      ease: ease.out,
      scrollTrigger: { trigger: root, start: 'top 72%', once: true },
    })

    gsap.from(copy, {
      opacity: 0,
      y: 20,
      duration: 0.75,
      delay: 0.16,
      ease: ease.out,
      scrollTrigger: { trigger: root, start: 'top 70%', once: true },
    })

    gsap.from(cta, {
      opacity: 0,
      y: 14,
      duration: 0.6,
      delay: 0.22,
      ease: ease.out,
      scrollTrigger: { trigger: root, start: 'top 68%', once: true },
    })
  }, root)

  return () => ctx.revert()
}
