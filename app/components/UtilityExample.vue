<template>
    <div ref="utilitySection" class="space-y-4 gsap-loading">
        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {{ t('examples.utility.title') }}
        </h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
            {{ t('examples.utility.description') }}
        </p>

        <div class="grid grid-cols-1 gap-6">
            <!-- Command Palette Alternative -->
            <UCard class="card-tilt">
                <template #header>
                    <div class="flex justify-between items-center">
                        <h5 class="font-semibold">{{ t('examples.utility.commandPalette.title') }}</h5>
                        <UBadge>Ctrl K</UBadge>
                    </div>
                </template>
                <div class="p-4">
                    <UButton :label="t('examples.utility.commandPalette.openButton')" color="neutral" variant="outline"
                        icon="i-lucide-search" block @click="isCommandPaletteOpen = true" />
                </div>
            </UCard>

            <!-- Command Palette Modal -->
            <UModal v-model="isCommandPaletteOpen">
                <div class="p-6">
                    <h3 class="text-lg font-semibold mb-4">{{ t('examples.utility.commandPalette.title') }}</h3>
                    <UInput :placeholder="t('examples.utility.commandPalette.placeholder')" icon="i-lucide-search"
                        v-model="commandSearch" class="mb-4" />

                    <div class="space-y-4">
                        <div v-for="group in filteredCommandGroups" :key="group.id" class="space-y-2">
                            <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ group.label }}</h4>
                            <div class="space-y-1">
                                <div v-for="item in group.items" :key="item.label"
                                    class="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
                                    @click="handleCommand(item)">
                                    <div class="flex items-center gap-2">
                                        <UIcon :name="item.icon" class="w-4 h-4" />
                                        <span>{{ item.label }}</span>
                                    </div>
                                    <div v-if="item.kbds" class="flex gap-1">
                                        <UBadge v-for="kbd in item.kbds" :key="kbd" size="xs">{{ kbd }}</UBadge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UModal>
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Section animation
const utilitySection = ref<HTMLElement>()

// Command palette state
const isCommandPaletteOpen = ref(false)
const commandSearch = ref('')

// Command groups
const commandGroups = computed(() => [
    {
        id: 'navigation',
        label: t('examples.utility.commandPalette.groups.navigation'),
        items: [
            {
                label: t('examples.utility.commandPalette.commands.home'),
                icon: 'i-lucide-home',
                onSelect: () => closeAndNavigate('/')
            },
            {
                label: t('examples.utility.commandPalette.commands.about'),
                icon: 'i-lucide-info',
                onSelect: () => closeAndNavigate('/')
            },
            {
                label: t('examples.utility.commandPalette.commands.contact'),
                icon: 'i-lucide-mail',
                onSelect: () => closeAndNavigate('/')
            }
        ]
    },
    {
        id: 'actions',
        label: t('examples.utility.commandPalette.groups.actions'),
        items: [
            {
                label: t('examples.utility.commandPalette.commands.toggleTheme'),
                icon: 'i-lucide-moon',
                kbds: ['⌘', 'T'],
                onSelect: () => {
                    const colorMode = useColorMode()
                    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
                    isCommandPaletteOpen.value = false
                }
            },
            {
                label: t('examples.utility.commandPalette.commands.copy'),
                icon: 'i-lucide-copy',
                kbds: ['⌘', 'C'],
                onSelect: () => {
                    navigator.clipboard.writeText(window.location.href)
                    isCommandPaletteOpen.value = false
                }
            },
            {
                label: t('examples.utility.commandPalette.commands.refresh'),
                icon: 'i-lucide-refresh-cw',
                kbds: ['⌘', 'R'],
                onSelect: () => {
                    window.location.reload()
                }
            }
        ]
    },
    {
        id: 'settings',
        label: t('examples.utility.commandPalette.groups.settings'),
        items: [
            {
                label: t('examples.utility.commandPalette.commands.language'),
                icon: 'i-lucide-globe',
                onSelect: () => {
                    const { setLocale, locale } = useI18n()
                    setLocale(locale.value === 'en' ? 'de' : 'en')
                    isCommandPaletteOpen.value = false
                }
            },
            {
                label: t('examples.utility.commandPalette.commands.preferences'),
                icon: 'i-lucide-settings',
                onSelect: () => {
                    isCommandPaletteOpen.value = false
                }
            }
        ]
    }
])

// Filtered command groups based on search
const filteredCommandGroups = computed(() => {
    if (!commandSearch.value) return commandGroups.value

    return commandGroups.value.map(group => ({
        ...group,
        items: group.items.filter(item =>
            item.label.toLowerCase().includes(commandSearch.value.toLowerCase())
        )
    })).filter(group => group.items.length > 0)
})

// Command handlers
const handleCommand = (command: any) => {
    if (command?.onSelect) {
        command.onSelect()
    }
}

const closeAndNavigate = (path: string) => {
    isCommandPaletteOpen.value = false
    console.log('Navigate to:', path)
}

// Keyboard shortcut
onMounted(() => {
    if (!utilitySection.value) return

    const { setupSection, utils } = useAnimations()

    // Setup section with proper loading removal
    setupSection(utilitySection)

    if (utils?.fadeInUp) {
        utils.fadeInUp(utilitySection.value, {
            scrollTrigger: {
                trigger: utilitySection.value,
                start: 'top 85%'
            }
        })
    }

    // Keyboard shortcut
    const handleKeydown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault()
            isCommandPaletteOpen.value = !isCommandPaletteOpen.value
        }
    }

    window.addEventListener('keydown', handleKeydown)

    onUnmounted(() => {
        window.removeEventListener('keydown', handleKeydown)
    })
})
</script>
