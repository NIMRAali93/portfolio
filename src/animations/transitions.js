import { ease } from './gsapSetup'

export const revealFrom = {
  fadeUp: { opacity: 0, y: 28, filter: 'blur(4px)' },
  fadeUpSm: { opacity: 0, y: 16 },
  clipImage: { clipPath: 'inset(12% 12% 12% 12% round 4px)', scale: 1.06 },
}

export const revealTo = {
  fadeUp: { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: ease.out },
  fadeUpSm: { opacity: 1, y: 0, duration: 0.7, ease: ease.out },
  clipImage: {
    clipPath: 'inset(0% 0% 0% 0% round 0px)',
    scale: 1,
    duration: 1.15,
    ease: ease.out,
  },
}

export const stagger = {
  xs: 0.08,
  sm: 0.12,
  md: 0.16,
}
