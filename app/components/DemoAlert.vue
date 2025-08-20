<template>
    <div ref="alertContainer" class="gsap-loading">
        <UAlert 
            ref="alertElement"
            icon="i-heroicons-information-circle" 
            :description="$t('examples.alert.description')"
            :title="$t('examples.alert.title')" 
            color="primary" 
            variant="soft" 
        />
    </div>
</template>

<script setup lang="ts">
// Demo alert component with GSAP animation

const alertContainer = ref<HTMLElement>()
const alertElement = ref<HTMLElement>()

onMounted(() => {
  if (alertContainer.value && alertElement.value) {
    const { $animationUtils } = useNuxtApp()
    
    if ($animationUtils && typeof $animationUtils === 'object') {
      const utils = $animationUtils as any
      
      // Remove loading class
      alertContainer.value.classList.remove('gsap-loading')
      
      // Animate alert with bounce effect
      if ('scaleIn' in utils) {
        utils.scaleIn(alertElement.value, {
          scrollTrigger: {
            trigger: alertContainer.value,
            start: 'top 85%'
          },
          scale: 0.9,
          duration: 0.8,
          ease: 'back.out(1.2)'
        })
      }
    }
  }
})
</script>
