<template>
    <div ref="buttonSection" class="space-y-6 gsap-loading">
        <h4 ref="buttonTitle" class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {{ $t('examples.buttons.title') }}
        </h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
            {{ $t('examples.buttons.description') }}
        </p>

        <!-- Default Buttons Section -->
        <h5 class="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('examples.buttons.defaultSection') }}</h5>
        <div ref="buttonGrid" class="flex flex-wrap gap-2">
            <UButton data-cursor-pointer>{{ $t('examples.buttons.default') }}</UButton>
            <UButton color="primary" variant="solid" data-cursor-pointer>{{ $t('examples.buttons.primary') }}</UButton>
            <UButton color="neutral" variant="soft" data-cursor-pointer>{{ $t('examples.buttons.softNeutral') }}</UButton>
            <UButton color="error" variant="outline" data-cursor-pointer>{{ $t('examples.buttons.outlineError') }}</UButton>
            <UButton variant="ghost" data-cursor-pointer>{{ $t('examples.buttons.ghost') }}</UButton>
            <UButton variant="link" data-cursor-pointer>{{ $t('examples.buttons.link') }}</UButton>
        </div>

        <!-- Button Groups Section -->
        <h5 class="text-md font-medium text-gray-700 dark:text-gray-300 mt-6 mb-2">{{ $t('examples.buttons.buttonGroupsSection') }}</h5>
        <div class="space-y-4 p-2">
            <!-- Horizontal Button Group -->
            <div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {{ $t('examples.buttons.buttonGroups.horizontal') }}
                </p>
                <UButtonGroup>
                    <UButton color="neutral" variant="outline" label="Edit" icon="i-heroicons-pencil" />
                    <UButton color="neutral" variant="outline" label="Share" icon="i-heroicons-share" />
                    <UButton color="neutral" variant="outline" label="Delete" icon="i-heroicons-trash" />
                </UButtonGroup>
            </div>

            <!-- Vertical Button Group -->
            <div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {{ $t('examples.buttons.buttonGroups.vertical') }}
                </p>
                <UButtonGroup orientation="vertical">
                    <UButton color="neutral" variant="outline" label="Profile" icon="i-heroicons-user" />
                    <UButton color="neutral" variant="outline" label="Settings" icon="i-heroicons-cog-6-tooth" />
                    <UButton color="neutral" variant="outline" label="Logout" icon="i-heroicons-arrow-left-on-rectangle" />
                </UButtonGroup>
            </div>

            <!-- Input with Button -->
            <div>
                <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {{ $t('examples.buttons.buttonGroups.input') }}
                </p>
                <UButtonGroup>
                    <UInput color="neutral" variant="outline" placeholder="Enter your email" />
                    <UButton color="primary" variant="solid" label="Subscribe" />
                </UButtonGroup>
            </div>
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
