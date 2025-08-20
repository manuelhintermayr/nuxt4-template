<template>
    <div ref="examplesContainer" class="space-y-6">
        <h3 ref="examplesTitle" class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ $t('examples.title') }}
        </h3>

        <div ref="exampleComponents" class="space-y-8">
            <ButtonExamples />
            <FormExamples />
            <MouseFollowerExamples />
            <DemoAlert />
        </div>
    </div>
</template>

<script setup lang="ts">
// Examples section containing all component demonstrations with GSAP animations

const examplesContainer = ref<HTMLElement>()
const examplesTitle = ref<HTMLElement>()
const exampleComponents = ref<HTMLElement>()

onMounted(() => {
  if (examplesContainer.value && examplesTitle.value && exampleComponents.value) {
    const { $animationUtils } = useNuxtApp()
    
    if ($animationUtils && typeof $animationUtils === 'object') {
      const utils = $animationUtils as any
      
      // Animate title
      if ('fadeInUp' in utils) {
        utils.fadeInUp(examplesTitle.value, {
          scrollTrigger: {
            trigger: examplesContainer.value,
            start: 'top 85%'
          }
        })
      }

      // Each component will handle its own animations through ScrollTrigger
      // This ensures they only animate when they come into view
    }
  }
})
</script>
