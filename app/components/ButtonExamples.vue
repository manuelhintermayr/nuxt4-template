<template>
    <div ref="buttonSection" class="space-y-4 gsap-loading">
        <h4 ref="buttonTitle" class="text-lg font-semibold text-gray-900 dark:text-white">{{
            $t('examples.buttons.title') }}</h4>
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
    if (!buttonSection.value) return

    const { setupSection, animateTitle, animateButtons } = useAnimations()

    // Setup section with common patterns
    setupSection(buttonSection)

    // Animate title
    animateTitle(buttonTitle, buttonSection)

    // Animate buttons with magnetic effects
    animateButtons('button', buttonGrid)
})
</script>
