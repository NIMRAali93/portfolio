import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const ease = {
  out: 'power3.out',
  soft: 'power2.out',
  inOut: 'power2.inOut',
  expo: 'expo.out',
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function isCoarsePointer() {
  return window.matchMedia('(hover: none), (pointer: coarse)').matches
}

export function isMobileViewport() {
  return window.matchMedia('(max-width: 768px)').matches
}
