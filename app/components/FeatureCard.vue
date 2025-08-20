<template>
    <UCard class="feature-card glow-on-hover">
        <template #header>
            <div class="flex items-center">
                <UIcon :name="icon" :class="`w-5 h-5 ${iconColor} mr-2`" />
                <h3 class="text-lg font-semibold">{{ title }}</h3>
            </div>
        </template>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ description }}
        </p>
        
        <!-- Dark Mode Toggle -->
        <div v-if="hasToggle" class="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('components.darkModeToggle.label') }}
          </span>
          <button
            @click="toggleColorMode"
            data-cursor-pointer
            class="magnetic-element relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
            :class="colorMode.preference === 'dark' ? 'bg-primary-600' : 'bg-gray-200'"
            role="switch"
            :aria-checked="colorMode.preference === 'dark'"
          >
            <span
              class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              :class="colorMode.preference === 'dark' ? 'translate-x-5' : 'translate-x-0'"
            />
          </button>
        </div>
    </UCard>
</template>

<script setup lang="ts">
interface Props {
    title: string
    description: string
    icon: string
    iconColor?: string
    hasToggle?: boolean
}

withDefaults(defineProps<Props>(), {
    iconColor: 'text-primary-500',
    hasToggle: false
})

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>
