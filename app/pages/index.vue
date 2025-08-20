<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <AppHeader />

    <main class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="space-y-8">
        <WelcomeSection />
        <FeaturesGrid />
        <ExamplesSection />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Main page with universal card tilt effects

onMounted(() => {
  const { $animationUtils } = useNuxtApp()
  
  if ($animationUtils && typeof $animationUtils === 'object') {
    const utils = $animationUtils as any
    
    // Add tilt effects to all cards on the page
    if ('addTiltToAllCards' in utils) {
      utils.addTiltToAllCards()
    }
  }
})
</script>