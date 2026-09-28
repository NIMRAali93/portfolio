import { useEffect } from 'react'
import { initSectionReveals } from '../animations/scrollAnimations'

export function useScrollReveal(ref) {
  useEffect(() => {
    return initSectionReveals(ref.current)
  }, [ref])
}
