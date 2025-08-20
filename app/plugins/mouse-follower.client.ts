import MouseFollower from 'mouse-follower'
import { gsap } from 'gsap'

// Extend Window interface
declare global {
    interface Window {
        $cursor?: MouseFollower
        mouseFollower?: MouseFollower
    }
}

export default defineNuxtPlugin(() => {
    if (import.meta.client) {
        // Register GSAP with MouseFollower
        MouseFollower.registerGSAP(gsap)

        // Wait for DOM to be ready
        const initializeMouseFollower = () => {
            try {
                // Initialize cursor with minimal config
                const cursor = new MouseFollower({
                    stateDetection: {
                        '-pointer': 'a, button, [data-cursor-pointer]',
                        '-text': '[data-cursor-text]',
                        '-hidden': '[data-cursor="-hidden"]',
                        '-inverse': '[data-cursor="-inverse"]'
                    }
                })

                // Store globally
                window.$cursor = cursor
                window.mouseFollower = cursor

                return cursor
            } catch (error) {
                console.error('The following error occured:', error)
                return null
            }
        }

        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeMouseFollower)
        } else {
            // DOM is already ready
            setTimeout(initializeMouseFollower, 100)
        }

        // Also try after page load
        window.addEventListener('load', () => {
            if (!window.$cursor) {
                setTimeout(initializeMouseFollower, 500)
            }
        })

        return {
            provide: {
                cursor: null // Will be set later via window.$cursor
            }
        }
    }
})
