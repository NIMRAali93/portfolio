import { useEffect } from 'react'
import { gsap, prefersReducedMotion, isMobileViewport } from '../animations/gsapSetup'

export function useParallax(rootRef, layers) {
  useEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      const mobile = isMobileViewport()
      layers.forEach(({ selector, y, x = 0 }) => {
        const nodes = root.querySelectorAll(selector)
        if (!nodes.length) return
        const yAmt = mobile ? y * 0.3 : y
        const xAmt = mobile ? x * 0.2 : x
        if (Math.abs(yAmt) < 2 && Math.abs(xAmt) < 2) return
        gsap.to(nodes, {
          y: yAmt,
          x: xAmt,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [rootRef, layers])
}
