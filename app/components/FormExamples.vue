<template>
    <div class="space-y-4">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ $t('examples.forms.title') }}</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <UInput :placeholder="$t('examples.forms.namePlaceholder')" />
            <UInput type="email" :placeholder="'sample@mail.com'" />
            <UTextarea :placeholder="$t('examples.forms.messagePlaceholder')" />
            <USelect :options="selectOptions" :placeholder="$t('examples.forms.selectPlaceholder')" />
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const selectOptions = computed(() => [
    { label: t('examples.forms.option1'), value: '1' },
    { label: t('examples.forms.option2'), value: '2' },
    { label: t('examples.forms.option3'), value: '3' }
])
</script>
