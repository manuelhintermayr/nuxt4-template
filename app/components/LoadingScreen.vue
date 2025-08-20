<template>
    <Teleport to="body">
        <Transition name="loading" @enter="onEnter" @leave="onLeave">
            <div v-if="isVisible"
                class="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-all duration-500"
                :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }">
                <div class="text-center space-y-8">
                    <!-- Logo/Title -->
                    <div class="space-y-4">
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            {{ t('loadingScreen.title') }}
                        </h1>
                        <p class="text-lg text-gray-600 dark:text-gray-400">
                            {{ t('loadingScreen.subtitle') }}
                        </p>
                    </div>

                    <!-- Loading Animation -->
                    <div class="space-y-6">
                        <!-- Progress Bar with Indeterminate Animation -->
                        <div class="w-80 max-w-full mx-auto">
                            <UProgress :value="undefined" color="primary" size="md" class="indeterminate-progress" />
                        </div>

                        <!-- Loading Text -->
                        <div class="flex items-center justify-center space-x-2">
                            <UIcon name="i-lucide-loader-circle" class="w-5 h-5 animate-spin text-primary-500" />
                            <span class="text-gray-600 dark:text-gray-400 font-medium">
                                {{ loadingText }}
                            </span>
                        </div>
                    </div>

                    <!-- Built with love -->
                    <div class="text-xs text-gray-400 dark:text-gray-600">
                        {{ t('loadingScreen.builtWith') }} ❤️
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
interface Props {
    isLoading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    isLoading: true
})

const { t } = useI18n()

// Internal visibility state controlled by parent's isLoading prop
const isVisible = ref(props.isLoading)
const loadingText = ref('')

const loadingTexts = computed(() => [
    t('loadingScreen.texts.loading'),
    t('loadingScreen.texts.preparing'),
    t('loadingScreen.texts.initializing'),
    t('loadingScreen.texts.almostReady')
])

// Watch for prop changes
watch(() => props.isLoading, (newValue) => {
    if (!newValue) {
        // Start hide process when isLoading becomes false
        hideLoadingScreen()
    } else {
        // Show loading screen when isLoading becomes true
        isVisible.value = true
        simulateLoading()
    }
})

// Simulate loading progress
const simulateLoading = () => {
    const steps = [300, 600, 900, 1200] // Faster timing for better UX

    loadingText.value = loadingTexts.value[0] || ''

    steps.forEach((delay, index) => {
        setTimeout(() => {
            if (props.isLoading && loadingTexts.value[index + 1]) {
                loadingText.value = loadingTexts.value[index + 1] || ''
            }
        }, delay)
    })
}

const hideLoadingScreen = () => {
    isVisible.value = false
}

// Animation handlers
const onEnter = (el: Element) => {
    el.classList.add('opacity-100')
}

const onLeave = (el: Element) => {
    el.classList.add('opacity-0')
    setTimeout(() => {
        // Emit event when loading is complete
        if (process.client) {
            window.dispatchEvent(new CustomEvent('loading-complete'))
        }
    }, 500)
}

// Start loading simulation when component mounts and isLoading is true
onMounted(() => {
    if (props.isLoading) {
        nextTick(() => {
            simulateLoading()
        })
    }
})

// Expose method to hide loading screen externally
defineExpose({
    hide: hideLoadingScreen
})
</script>

<style scoped>
.loading-enter-active,
.loading-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.loading-enter-from,
.loading-leave-to {
    opacity: 0;
}

.indeterminate-progress :deep(.progress-bar) {
    animation: indeterminate 2s infinite linear;
    background: linear-gradient(90deg, transparent, currentColor, transparent);
}

@keyframes indeterminate {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}
</style>
