import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Animation Feature Flags - central configuration
const animationConfig = {
    enableTiltEffects: true,      // Card tilt effects on hover
    enableFadeInUp: true,         // Fade in from bottom animations
    enableScaleIn: true,          // Scale in animations
    enableHeroEntrance: true,     // Hero section entrance animations
    enableCardHover: true,        // Card hover lift effects
    enableMagneticEffect: true,   // Magnetic button effects
    enableScrollTrigger: true,    // ScrollTrigger-based animations
    enableAutoTiltDetection: true // Automatically detect and add tilt to cards
}

// Central configuration for card selectors to avoid duplication
const CARD_SELECTORS = [
    '.card-tilt',
    '.card',
    '[class*="card"]',
    '[class*="Card"]',
    'article',
    '.feature-card',
    '.glow-on-hover'
] as const

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        // Register ScrollTrigger plugin only if enabled
        if (animationConfig.enableScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger)
        }

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        // Make GSAP available globally
        nuxtApp.provide('gsap', gsap)
        if (animationConfig.enableScrollTrigger) {
            nuxtApp.provide('ScrollTrigger', ScrollTrigger)
        }
        nuxtApp.provide('prefersReducedMotion', prefersReducedMotion)
        nuxtApp.provide('animationConfig', animationConfig)

        // Helper function to create scroll trigger config
        const createScrollTrigger = (start = 'top 85%', toggleActions = 'play none none reverse') => {
            return animationConfig.enableScrollTrigger ? {
                start,
                toggleActions
            } : undefined
        }

        // Global animation utilities
        const animationUtils = {
            // Fade in from bottom with stagger
            fadeInUp: (elements: string | Element | Element[], options = {}) => {
                if (!animationConfig.enableFadeInUp || prefersReducedMotion) {
                    return null
                }

                const defaults = {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.1,
                    scrollTrigger: createScrollTrigger('top 85%')
                }

                const config = { ...defaults, ...options }
                return gsap.from(elements, config)
            },

            // Scale in animation
            scaleIn: (elements: string | Element | Element[], options = {}) => {
                if (!animationConfig.enableScaleIn || prefersReducedMotion) {
                    return null
                }

                const defaults = {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.7,
                    ease: 'back.out(1.4)',
                    scrollTrigger: createScrollTrigger('top 80%')
                }

                const config = { ...defaults, ...options }
                return gsap.from(elements, config)
            },

            // Hero entrance animation
            heroEntrance: (container: string | Element) => {
                if (!animationConfig.enableHeroEntrance || prefersReducedMotion) {
                    return null
                }

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
                if (!animationConfig.enableCardHover || prefersReducedMotion) return

                const cardElements = typeof cards === 'string' ? document.querySelectorAll(cards) :
                    Array.isArray(cards) ? cards : [cards]

                cardElements.forEach((card: Element) => {
                    const cardEl = card as HTMLElement

                    // Apply unified tilt effect only if tilt effects are enabled
                    if (animationConfig.enableTiltEffects) {
                        applyTiltEffect(cardEl, animationConfig.enableTiltEffects)
                    }

                    // Subtle hover lift
                    cardEl.addEventListener('mouseenter', () => {
                        gsap.to(cardEl, {
                            y: -3,
                            duration: 0.3,
                            ease: 'power2.out'
                        })
                    })

                    cardEl.addEventListener('mouseleave', () => {
                        gsap.to(cardEl, {
                            y: 0,
                            duration: 0.4,
                            ease: 'power2.out'
                        })
                    })
                })
            },

            // Auto-detect and add tilt effects to all cards on the page
            addTiltToAllCards: () => {
                if (!animationConfig.enableAutoTiltDetection || !animationConfig.enableTiltEffects || prefersReducedMotion) return

                // Wait for DOM to be ready
                const addTiltEffects = () => {
                    // Use centralized selectors to avoid duplication
                    const allCards = new Set<Element>()

                    CARD_SELECTORS.forEach(selector => {
                        document.querySelectorAll(selector).forEach(el => allCards.add(el))
                    })

                    console.log(`Found ${allCards.size} cards for tilt effects`)

                    allCards.forEach((card: Element) => {
                        const cardEl = card as HTMLElement
                        console.log('Adding tilt to:', cardEl.className)

                        // Apply unified tilt effect
                        applyTiltEffect(cardEl, animationConfig.enableTiltEffects)
                    })
                }

                // Run immediately and on DOM changes
                addTiltEffects()

                // Also run after a short delay to catch dynamically added elements
                setTimeout(addTiltEffects, 500)
                setTimeout(addTiltEffects, 1500)
                setTimeout(addTiltEffects, 3000)
            },

            // Section setup utility - combines common patterns
            setupSection: (sectionElement: string | Element, options = {}) => {
                if (prefersReducedMotion) return null

                const defaults = {
                    removeLoadingClass: true,
                    addTilt: true,
                    fadeInTitle: true,
                    titleSelector: 'h2, h3, .title',
                    animateCards: true,
                    cardSelector: '.card, [class*="card"], .feature-card'
                }

                const config = { ...defaults, ...options }
                const element = typeof sectionElement === 'string' ? 
                    document.querySelector(sectionElement) as HTMLElement : 
                    sectionElement as HTMLElement

                if (!element) return null

                // Remove loading class
                if (config.removeLoadingClass) {
                    element.classList.remove('gsap-loading')
                }

                // Add tilt effects
                if (config.addTilt && animationConfig.enableTiltEffects) {
                    animationUtils.addTiltToAllCards()
                }

                // Fade in title
                if (config.fadeInTitle && animationConfig.enableFadeInUp) {
                    const titles = element.querySelectorAll(config.titleSelector)
                    if (titles.length > 0) {
                        animationUtils.fadeInUp(Array.from(titles), {
                            scrollTrigger: createScrollTrigger('top 85%')
                        })
                    }
                }

                // Animate cards
                if (config.animateCards && animationConfig.enableFadeInUp) {
                    const cards = element.querySelectorAll(config.cardSelector)
                    if (cards.length > 0) {
                        animationUtils.fadeInUp(Array.from(cards), {
                            scrollTrigger: createScrollTrigger('top 80%'),
                            stagger: 0.15
                        })
                    }
                }

                return element
            },

            // Magnetic effect for buttons
            addMagneticEffect: (elements: string | Element | Element[]) => {
                if (!animationConfig.enableMagneticEffect || prefersReducedMotion) return

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

// Utility function to apply tilt effect to a single element
const applyTiltEffect = (cardEl: HTMLElement, enableTiltEffects: boolean = true) => {
    // Skip if tilt effects are disabled or already processed
    if (!enableTiltEffects || cardEl.dataset.tiltAdded) return
    cardEl.dataset.tiltAdded = 'true'

    // Add CSS class for 3D transform support
    cardEl.classList.add('tilt-enabled')

    // Tilt effect - exactly like Alba Emoting
    cardEl.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = cardEl.getBoundingClientRect()
        const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -6
        const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 6

        gsap.to(cardEl, {
            rotateX,
            rotateY,
            transformPerspective: 600,
            transformOrigin: 'center',
            duration: 0.15
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
}