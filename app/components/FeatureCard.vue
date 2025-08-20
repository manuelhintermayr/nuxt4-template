<template>
    <UCard>
        <template #header>
            <div class="flex items-center">
                <UIcon :name="icon" :class="`w-5 h-5 ${iconColor} mr-2`" />
                <h3 class="text-lg font-semibold">{{ title }}</h3>
            </div>
        </template>
        <p class="text-gray-600 dark:text-gray-300">
            {{ description }}
        </p>
    </UCard>
</template>

<script setup lang="ts">
interface Props {
    title: string
    description: string
    icon: string
    iconColor?: string
}

withDefaults(defineProps<Props>(), {
    iconColor: 'text-primary-500'
})
</script>
