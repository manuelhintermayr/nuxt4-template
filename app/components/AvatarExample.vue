<template>
    <div ref="avatarSection" class="space-y-4 gsap-loading">
        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {{ t('examples.avatar.title') }}
        </h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
            {{ t('examples.avatar.description') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Basic Avatars -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.avatar.basic') }}</h5>
                </template>
                <div class="flex items-center space-x-4 p-4">
                    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" size="sm" />
                    <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" size="md" />
                    <UAvatar src="https://github.com/noook.png" alt="Neil Richter" size="lg" />
                    <UAvatar src="https://github.com/nuxt.png" alt="Nuxt" size="xl" />
                </div>
            </UCard>

            <!-- Avatar Group -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.avatar.group') }}</h5>
                </template>
                <div class="p-4">
                    <UAvatarGroup size="md" :max="3">
                        <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
                        <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
                        <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
                        <UAvatar src="https://github.com/nuxt.png" alt="Nuxt" />
                        <UAvatar src="https://github.com/manuelhintermayr.png" alt="Manuel Hintermayr" />
                    </UAvatarGroup>
                </div>
            </UCard>

            <!-- Fallback Avatars -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.avatar.fallback') }}</h5>
                </template>
                <div class="flex items-center justify-center space-x-4 p-4">
                    <UAvatar icon="i-heroicons-user" size="md" />
                    <UAvatar text="MH" size="md" />
                    <UAvatar alt="John Doe" size="md" />
                </div>
            </UCard>
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Section animation
const avatarSection = ref<HTMLElement>()

onMounted(() => {
    if (!avatarSection.value) return

    const { setupSection, utils } = useAnimations()

    // Setup section with proper loading removal
    setupSection(avatarSection)

    if (utils?.fadeInUp) {
        utils.fadeInUp(avatarSection.value, {
            scrollTrigger: {
                trigger: avatarSection.value,
                start: 'top 85%'
            }
        })
    }
})
</script>
