<template>
    <div ref="heroContainer" class="text-center">
        <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            {{ $t('welcome.title') }}
        </h2>
        <p class="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {{ $t('welcome.subtitle') }}
        </p>
    </div>
</template>

<script setup lang="ts">
// Welcome section component with GSAP hero animation

const heroContainer = ref<HTMLElement>()

onMounted(() => {
  if (heroContainer.value) {
    const { $animationUtils } = useNuxtApp()
    // Hero entrance animation
    if ($animationUtils && typeof $animationUtils === 'object' && 'heroEntrance' in $animationUtils) {
      ($animationUtils as any).heroEntrance(heroContainer.value)
    }
  }
})
</script>
