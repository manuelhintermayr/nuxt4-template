<template>
    <div ref="alertContainer" class="gsap-loading">
        <UAlert 
            ref="alertElement"
            class="card-tilt"
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
  if (!alertContainer.value || !alertElement.value) return
  
  const { setupSection, utils } = useAnimations()
  
  // Setup section
  setupSection(alertContainer)
  
  // Animate alert with bounce effect
  if (utils?.scaleIn) {
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
})
</script>
