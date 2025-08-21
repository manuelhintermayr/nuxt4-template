<template>
    <div ref="formsAdvancedSection" class="space-y-4 gsap-loading">
        <h5 class="text-md font-medium text-gray-700 dark:text-gray-300">
            {{ t('examples.formsAdvanced.title') }}
        </h5>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
            {{ t('examples.formsAdvanced.description') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Date Input (if Calendar not available) -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.formsAdvanced.calendar.title') }}</h5>
                </template>
                <div class="p-2">
                    <UInput type="date" v-model="dateValue" />
                </div>
            </UCard>

            <!-- Multiple Checkboxes -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.formsAdvanced.checkboxGroup.title') }}</h5>
                </template>
                <div class="p-2 space-y-3">
                    <div class="space-y-2">
                        <label class="text-sm font-medium">{{ t('examples.formsAdvanced.checkboxGroup.title') }}</label>
                        <div class="space-y-2">
                            <UCheckbox v-model="darkModeEnabled"
                                :label="t('examples.formsAdvanced.checkboxGroup.darkMode')" />
                            <UCheckbox v-model="animationsEnabled"
                                :label="t('examples.formsAdvanced.checkboxGroup.animations')" />
                            <UCheckbox v-model="notificationsEnabled"
                                :label="t('examples.formsAdvanced.checkboxGroup.notifications')" />
                        </div>
                    </div>
                </div>
            </UCard>

            <!-- Radio Group -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.formsAdvanced.radioGroup.title') }}</h5>
                </template>
                <div class="p-2">
                    <URadioGroup v-model="selectedTheme" :items="radioOptions" legend="Theme" />
                </div>
            </UCard>

            <!-- Switch -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.formsAdvanced.switch.title') }}</h5>
                </template>
                <div class="p-2 space-y-3">
                    <USwitch v-model="notificationsSwitch" :label="t('examples.formsAdvanced.switch.notifications')" />
                    <USwitch v-model="autoSave" :label="t('examples.formsAdvanced.switch.autoSave')"
                        :description="t('examples.formsAdvanced.switch.autoSaveDesc')" />
                </div>
            </UCard>

            <!-- Slider -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.formsAdvanced.slider.title') }}</h5>
                </template>
                <div class="p-4 space-y-4">
                    <div class="space-y-2">
                        <label class="text-sm font-medium">{{ t('examples.formsAdvanced.slider.volume') }}: {{
                            volumeValue
                            }}%</label>
                        <USlider v-model="volumeValue" :min="0" :max="100" />
                    </div>
                    <div class="space-y-2">
                        <label class="text-sm font-medium">{{ t('examples.formsAdvanced.slider.range') }}</label>
                        <USlider v-model="rangeValues" :min="0" :max="100" />
                    </div>
                </div>
            </UCard>

            <!-- Progress -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.formsAdvanced.progress.title') }}</h5>
                </template>
                <div class="p-4 space-y-4">
                    <div class="space-y-2">
                        <UProgress :model-value="progressValue" :max="100" status />
                        <div class="flex justify-between">
                            <UButton size="xs" @click="progressValue = Math.max(0, progressValue - 10)">-10</UButton>
                            <UButton size="xs" @click="progressValue = Math.min(100, progressValue + 10)">+10</UButton>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-sm font-medium">{{ t('examples.formsAdvanced.progress.indeterminate')
                            }}</label>
                        <UProgress />
                    </div>
                </div>
            </UCard>
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Section animation
const formsAdvancedSection = ref<HTMLElement>()

// Form states
const dateValue = ref('')
const darkModeEnabled = ref(true)
const animationsEnabled = ref(false)
const notificationsEnabled = ref(true)
const selectedColor = ref('#00C16A')
const uploadedFiles = ref([])
const agreeToTerms = ref(false)
const newsletter = ref(true)
const indeterminateValue = ref('indeterminate')

// New form states
const selectedTheme = ref('system')
const notificationsSwitch = ref(true)
const autoSave = ref(false)
const volumeValue = ref(75)
const rangeValues = ref([25, 75])
const progressValue = ref(65)

// Radio options
const radioOptions = computed(() => [
    { label: t('examples.formsAdvanced.radioGroup.light'), value: 'light' },
    { label: t('examples.formsAdvanced.radioGroup.dark'), value: 'dark' },
    { label: t('examples.formsAdvanced.radioGroup.system'), value: 'system' }
])

// File upload handler
const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement
    uploadedFiles.value = Array.from(target.files || [])
}

onMounted(() => {
    if (!formsAdvancedSection.value) return

    const { setupSection, utils } = useAnimations()

    // Setup section with proper loading removal
    setupSection(formsAdvancedSection)

    if (utils?.fadeInUp) {
        utils.fadeInUp(formsAdvancedSection.value, {
            scrollTrigger: {
                trigger: formsAdvancedSection.value,
                start: 'top 85%'
            }
        })
    }
})
</script>
