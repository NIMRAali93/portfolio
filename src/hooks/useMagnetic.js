import { useEffect } from 'react'
import { gsap, isCoarsePointer, prefersReducedMotion } from '../animations/gsapSetup'

export function useMagnetic(ref, strength = 0.22) {
  useEffect(() => {
    const el = ref.current
    if (!el || isCoarsePointer() || prefersReducedMotion()) return undefined

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      const x = event.clientX - rect.left - rect.width / 2
      const y = event.clientY - rect.top - rect.height / 2
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.35, ease: 'power3.out' })
    }

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.55, ease: 'power3.out' })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [ref, strength])
}
