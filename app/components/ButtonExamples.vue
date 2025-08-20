<template>
    <div ref="buttonSection" class="space-y-4 gsap-loading">
        <h4 ref="buttonTitle" class="text-lg font-semibold text-gray-900 dark:text-white">{{ $t('examples.buttons.title') }}</h4>
        <div ref="buttonGrid" class="flex flex-wrap gap-2">
            <UButton data-cursor-pointer>{{ $t('examples.buttons.default') }}</UButton>
            <UButton color="primary" variant="solid" data-cursor-pointer>{{ $t('examples.buttons.primary') }}</UButton>
            <UButton color="neutral" variant="soft" data-cursor-pointer>{{ $t('examples.buttons.softNeutral') }}
            </UButton>
            <UButton color="error" variant="outline" data-cursor-pointer>{{ $t('examples.buttons.outlineError') }}
            </UButton>
            <UButton variant="ghost" data-cursor-pointer>{{ $t('examples.buttons.ghost') }}</UButton>
            <UButton variant="link" data-cursor-pointer>{{ $t('examples.buttons.link') }}</UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
// Button examples showcasing different variants with GSAP animations

const buttonSection = ref<HTMLElement>()
const buttonTitle = ref<HTMLElement>()
const buttonGrid = ref<HTMLElement>()

onMounted(() => {
  if (buttonSection.value && buttonTitle.value && buttonGrid.value) {
    const { $animationUtils } = useNuxtApp()
    
    if ($animationUtils && typeof $animationUtils === 'object') {
      const utils = $animationUtils as any
      
      // Remove loading class
      buttonSection.value.classList.remove('gsap-loading')
      
      // Animate title
      if ('fadeInUp' in utils) {
        utils.fadeInUp(buttonTitle.value, {
          scrollTrigger: {
            trigger: buttonSection.value,
            start: 'top 85%'
          }
        })
      }

      // Animate buttons with stagger
      if ('scaleIn' in utils) {
        const buttons = buttonGrid.value.querySelectorAll('button')
        utils.scaleIn(Array.from(buttons), {
          scrollTrigger: {
            trigger: buttonGrid.value,
            start: 'top 80%'
          },
          stagger: 0.1,
          scale: 0.9
        })
      }

      // Add magnetic effect to buttons
      if ('addMagneticEffect' in utils) {
        nextTick(() => {
          const buttons = buttonGrid.value.querySelectorAll('button')
          utils.addMagneticEffect(Array.from(buttons))
        })
      }
    }
  }
})
</script>
