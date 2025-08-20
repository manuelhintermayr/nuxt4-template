import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Make GSAP available globally
    nuxtApp.provide('gsap', gsap)
    nuxtApp.provide('ScrollTrigger', ScrollTrigger)
    nuxtApp.provide('prefersReducedMotion', prefersReducedMotion)

    // Global animation utilities
    const animationUtils = {
      // Fade in from bottom with stagger
      fadeInUp: (elements: string | Element | Element[], options = {}) => {
        const defaults = {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
        
        const config = { ...defaults, ...options }
        
        if (!prefersReducedMotion) {
          return gsap.from(elements, config)
        }
        return null
      },

      // Scale in animation
      scaleIn: (elements: string | Element | Element[], options = {}) => {
        const defaults = {
          scale: 0.8,
          opacity: 0,
          duration: 0.7,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
        
        const config = { ...defaults, ...options }
        
        if (!prefersReducedMotion) {
          return gsap.from(elements, config)
        }
        return null
      },

      // Hero entrance animation
      heroEntrance: (container: string | Element) => {
        if (prefersReducedMotion) return null

        const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.9 } })
        
        tl.from(`${typeof container === 'string' ? container : ''} h2`, {
          y: 40,
          opacity: 0,
          scale: 0.96
        })
        .from(`${typeof container === 'string' ? container : ''} p`, {
          y: 20,
          opacity: 0
        }, '-=0.4')
        
        return tl
      },

      // Card hover effects
      addCardEffects: (cards: string | Element | Element[]) => {
        if (prefersReducedMotion) return

        const cardElements = typeof cards === 'string' ? document.querySelectorAll(cards) : 
                           Array.isArray(cards) ? cards : [cards]

        cardElements.forEach((card: Element) => {
          const cardEl = card as HTMLElement
          
          // Tilt effect
          cardEl.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = cardEl.getBoundingClientRect()
            const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -6
            const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 6
            
            gsap.to(cardEl, {
              rotateX,
              rotateY,
              transformPerspective: 600,
              transformOrigin: 'center',
              duration: 0.15,
              ease: 'power2.out'
            })
          })

          cardEl.addEventListener('mouseleave', () => {
            gsap.to(cardEl, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.4,
              ease: 'power3.out'
            })
          })

          // Hover lift
          cardEl.addEventListener('mouseenter', () => {
            gsap.to(cardEl, {
              y: -5,
              scale: 1.02,
              duration: 0.3,
              ease: 'power2.out'
            })
          })

          cardEl.addEventListener('mouseleave', () => {
            gsap.to(cardEl, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: 'power2.out'
            })
          })
        })
      },

      // Magnetic effect for buttons
      addMagneticEffect: (elements: string | Element | Element[]) => {
        if (prefersReducedMotion) return

        const magnetElements = typeof elements === 'string' ? document.querySelectorAll(elements) : 
                              Array.isArray(elements) ? elements : [elements]

        magnetElements.forEach((el: Element) => {
          const element = el as HTMLElement
          const xTo = gsap.quickTo(element, 'x', { duration: 0.35, ease: 'power3' })
          const yTo = gsap.quickTo(element, 'y', { duration: 0.35, ease: 'power3' })

          element.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = element.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            
            xTo((e.clientX - centerX) * 0.25)
            yTo((e.clientY - centerY) * 0.25)
          })

          element.addEventListener('mouseleave', () => {
            xTo(0)
            yTo(0)
          })
        })
      }
    }

    nuxtApp.provide('animationUtils', animationUtils)
  }
})
