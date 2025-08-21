<template>
    <div ref="gridContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard ref="featureCards" :title="$t('features.nuxt4.title')"
            :description="$t('features.nuxt4.description')" icon="i-heroicons-sparkles" icon-color="text-yellow-500" />

        <FeatureCard ref="featureCards" :title="$t('features.nuxtUI.title')"
            :description="$t('features.nuxtUI.description')" icon="i-heroicons-paint-brush"
            icon-color="text-blue-500" />

        <FeatureCard ref="featureCards" :title="$t('features.mouseFollower.title')"
            :description="$t('features.mouseFollower.description')" icon="i-heroicons-cursor-arrow-rays"
            icon-color="text-green-500" data-cursor-stick />

        <FeatureCard ref="featureCards" :title="$t('features.darkMode.title')"
            :description="$t('features.darkMode.description')" icon="i-heroicons-moon" icon-color="text-indigo-500"
            :has-toggle="true" />
    </div>
</template>

<script setup lang="ts">
// Features grid showcasing the main features with GSAP animations

const gridContainer = ref<HTMLElement>()
const featureCards = ref<HTMLElement[]>([])

onMounted(() => {
    if (!gridContainer.value) return

    const { animateCards } = useAnimations()

    // Animate feature cards with stagger and interactive effects
    setTimeout(() => {
        animateCards(featureCards, gridContainer)
    }, 300)
})
</script>
