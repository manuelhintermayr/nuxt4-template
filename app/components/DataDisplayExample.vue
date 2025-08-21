<template>
    <div ref="dataDisplaySection" class="space-y-4 gsap-loading">
        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {{ t('examples.dataDisplay.title') }}
        </h4>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
            {{ t('examples.dataDisplay.description') }}
        </p>

        <div class="space-y-6">
            <!-- Simple Carousel Alternative -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.dataDisplay.carousel.title') }}</h5>
                </template>
                <div class="p-4">
                    <div class="flex space-x-2 overflow-x-auto">
                        <div v-for="(item, index) in carouselItems" :key="index"
                            class="flex-shrink-0 flex items-center justify-center h-48 w-80 rounded-lg text-white text-lg font-semibold"
                            :style="item.style">
                            {{ item.label }}
                        </div>
                    </div>
                </div>
            </UCard>

            <!-- Collapsible Alternative -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.dataDisplay.collapsible.title') }}</h5>
                </template>
                <div class="p-4 space-y-3">
                    <div class="border rounded">
                        <UButton :label="t('examples.dataDisplay.collapsible.firstToggle')" color="neutral"
                            variant="ghost" trailing-icon="i-lucide-chevron-down" block
                            @click="firstCollapsed = !firstCollapsed" />
                        <div v-if="!firstCollapsed" class="p-4 bg-gray-50 dark:bg-gray-800">
                            <p class="text-sm">{{ t('examples.dataDisplay.collapsible.firstContent') }}</p>
                        </div>
                    </div>

                    <div class="border rounded">
                        <UButton :label="t('examples.dataDisplay.collapsible.secondToggle')" color="neutral"
                            variant="ghost" trailing-icon="i-lucide-chevron-down" block
                            @click="secondCollapsed = !secondCollapsed" />
                        <div v-if="!secondCollapsed" class="p-4 bg-gray-50 dark:bg-gray-800">
                            <p class="text-sm">{{ t('examples.dataDisplay.collapsible.secondContent') }}</p>
                            <UButton size="xs" color="primary" variant="soft" class="mt-2">
                                {{ t('examples.dataDisplay.collapsible.action') }}
                            </UButton>
                        </div>
                    </div>
                </div>
            </UCard>

            <!-- Interactive Menus -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Context Menu -->
                <UCard class="card-tilt">
                    <template #header>
                        <h5 class="font-semibold">{{ t('examples.dataDisplay.contextMenu.title') }}</h5>
                    </template>
                    <div class="p-4">
                        <UContextMenu :items="contextMenuItems">
                            <div class="flex items-center justify-center rounded-md border border-dashed border-gray-300 dark:border-gray-600 text-sm aspect-video bg-gray-50 dark:bg-gray-800 cursor-pointer">
                                {{ t('examples.dataDisplay.contextMenu.rightClick') }}
                            </div>
                        </UContextMenu>
                    </div>
                </UCard>

                <!-- Dropdown Menu Alternative -->
                <UCard class="card-tilt">
                    <template #header>
                        <h5 class="font-semibold">{{ t('examples.dataDisplay.dropdownMenu.title') }}</h5>
                    </template>
                    <div class="p-4 relative">
                        <UButton :label="t('examples.dataDisplay.dropdownMenu.trigger')" icon="i-lucide-menu"
                            color="neutral" variant="outline" @click="showDropdown = !showDropdown" />
                        <div v-if="showDropdown"
                            class="absolute top-16 left-4 z-10 p-2 bg-white dark:bg-gray-800 border rounded shadow min-w-40">
                            <div class="space-y-1">
                                <div
                                    class="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">
                                    <UIcon name="i-lucide-user" class="w-4 h-4" />
                                    {{ t('examples.dataDisplay.dropdownMenu.profile') }}
                                </div>
                                <div
                                    class="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">
                                    <UIcon name="i-lucide-settings" class="w-4 h-4" />
                                    {{ t('examples.dataDisplay.dropdownMenu.settings') }}
                                </div>
                                <div
                                    class="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">
                                    <UIcon name="i-lucide-credit-card" class="w-4 h-4" />
                                    {{ t('examples.dataDisplay.dropdownMenu.billing') }}
                                </div>
                                <hr class="my-1">
                                <div
                                    class="flex items-center gap-2 px-2 py-1 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 rounded cursor-pointer">
                                    <UIcon name="i-lucide-log-out" class="w-4 h-4" />
                                    {{ t('examples.dataDisplay.dropdownMenu.logout') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </UCard>
            </div>

            <!-- Modal Drawer Alternative -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.dataDisplay.drawer.title') }}</h5>
                </template>
                <div class="p-4 flex gap-4">
                    <UButton :label="t('examples.dataDisplay.drawer.bottom')" color="neutral" variant="outline"
                        @click="showBottomModal = true" />

                    <UButton :label="t('examples.dataDisplay.drawer.right')" color="primary" variant="soft"
                        @click="showSideModal = true" />
                </div>
            </UCard>

            <!-- Tree View -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.dataDisplay.tree.title') }}</h5>
                </template>
                <div class="p-4">
                    <UTree :items="treeItems" class="w-full" :default-expanded="['src']" />
                </div>
            </UCard>

            <!-- Table -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.dataDisplay.table.title') }}</h5>
                </template>
                <div class="p-0">
                    <UTable :data="tableData" :columns="tableColumns" class="w-full" :loading="tableLoading" />
                </div>
            </UCard>

            <!-- Timeline -->
            <UCard class="card-tilt">
                <template #header>
                    <h5 class="font-semibold">{{ t('examples.dataDisplay.timeline.title') }}</h5>
                </template>
                <div class="p-4">
                    <UTimeline :items="timelineItems" :default-value="2" class="w-full" />
                </div>
            </UCard>

            <!-- Modals -->
            <UModal v-model="showBottomModal">
                <div class="p-6">
                    <h6 class="font-semibold mb-2">{{ t('examples.dataDisplay.drawer.contentTitle') }}</h6>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ t('examples.dataDisplay.drawer.contentText') }}
                    </p>
                </div>
            </UModal>

            <UModal v-model="showSideModal">
                <div class="p-6 min-w-80">
                    <h6 class="font-semibold mb-4">{{ t('examples.dataDisplay.drawer.sidebarTitle') }}</h6>
                    <div class="space-y-2">
                        <UButton label="Profile" icon="i-lucide-user" color="neutral" variant="ghost" block />
                        <UButton label="Settings" icon="i-lucide-settings" color="neutral" variant="ghost" block />
                        <UButton label="Logout" icon="i-lucide-log-out" color="error" variant="ghost" block />
                    </div>
                </div>
            </UModal>
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Section animation
const dataDisplaySection = ref<HTMLElement>()

// Component states
const firstCollapsed = ref(true)
const secondCollapsed = ref(true)
const showDropdown = ref(false)
const showBottomModal = ref(false)
const showSideModal = ref(false)

// Context Menu items
const contextMenuItems = computed(() => [
    {
        label: t('examples.dataDisplay.contextMenu.copy'),
        icon: 'i-lucide-copy',
        onSelect: () => console.log('Copy clicked')
    },
    {
        label: t('examples.dataDisplay.contextMenu.cut'),
        icon: 'i-lucide-scissors',
        onSelect: () => console.log('Cut clicked')
    },
    {
        label: t('examples.dataDisplay.contextMenu.paste'),
        icon: 'i-lucide-clipboard',
        onSelect: () => console.log('Paste clicked')
    }
])

// Carousel data
const carouselItems = [
    {
        label: 'Slide 1',
        style: 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);'
    },
    {
        label: 'Slide 2',
        style: 'background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);'
    },
    {
        label: 'Slide 3',
        style: 'background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);'
    },
    {
        label: 'Slide 4',
        style: 'background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);'
    }
]

// Tree data
const treeItems = computed(() => [
    {
        label: 'src/',
        icon: 'i-lucide-folder',
        value: 'src',
        defaultExpanded: true,
        children: [
            {
                label: 'components/',
                icon: 'i-lucide-folder',
                value: 'components',
                children: [
                    { label: 'Button.vue', icon: 'i-vscode-icons-file-type-vue', value: 'button' },
                    { label: 'Card.vue', icon: 'i-vscode-icons-file-type-vue', value: 'card' }
                ]
            },
            {
                label: 'composables/',
                icon: 'i-lucide-folder',
                value: 'composables',
                children: [
                    { label: 'useAuth.ts', icon: 'i-vscode-icons-file-type-typescript', value: 'auth' }
                ]
            }
        ]
    },
    { label: 'app.vue', icon: 'i-vscode-icons-file-type-vue', value: 'app' },
    { label: 'nuxt.config.ts', icon: 'i-vscode-icons-file-type-nuxt', value: 'config' }
])

// Table data
const tableLoading = ref(false)
const tableColumns = [
    {
        accessorKey: 'name',
        header: () => t('examples.dataDisplay.table.nameColumn'),
        id: 'name'
    },
    {
        accessorKey: 'role',
        header: () => t('examples.dataDisplay.table.roleColumn'),
        id: 'role'
    },
    {
        accessorKey: 'status',
        header: () => t('examples.dataDisplay.table.statusColumn'),
        id: 'status'
    },
    {
        accessorKey: 'email',
        header: () => t('examples.dataDisplay.table.emailColumn'),
        id: 'email'
    }
]

const tableData = computed(() => [
    {
        name: 'John Doe',
        role: 'Developer',
        status: 'Active',
        email: 'john@example.com'
    },
    {
        name: 'Jane Smith',
        role: 'Designer',
        status: 'Active',
        email: 'jane@example.com'
    },
    {
        name: 'Bob Johnson',
        role: 'Manager',
        status: 'Inactive',
        email: 'bob@example.com'
    }
])

// Timeline data
const timelineItems = computed(() => [
    {
        date: 'Mar 15, 2025',
        title: t('examples.dataDisplay.timeline.step1Title'),
        description: t('examples.dataDisplay.timeline.step1Desc'),
        icon: 'i-lucide-rocket',
        value: 1
    },
    {
        date: 'Mar 22, 2025',
        title: t('examples.dataDisplay.timeline.step2Title'),
        description: t('examples.dataDisplay.timeline.step2Desc'),
        icon: 'i-lucide-palette',
        value: 2
    },
    {
        date: 'Mar 29, 2025',
        title: t('examples.dataDisplay.timeline.step3Title'),
        description: t('examples.dataDisplay.timeline.step3Desc'),
        icon: 'i-lucide-code',
        value: 3
    },
    {
        date: 'Apr 5, 2025',
        title: t('examples.dataDisplay.timeline.step4Title'),
        description: t('examples.dataDisplay.timeline.step4Desc'),
        icon: 'i-lucide-check-circle',
        value: 4
    }
])

onMounted(() => {
    if (!dataDisplaySection.value) return

    const { setupSection, utils } = useAnimations()

    // Setup section with proper loading removal
    setupSection(dataDisplaySection)

    if (utils?.fadeInUp) {
        utils.fadeInUp(dataDisplaySection.value, {
            scrollTrigger: {
                trigger: dataDisplaySection.value,
                start: 'top 85%'
            }
        })
    }
})
</script>
