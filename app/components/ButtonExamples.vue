<template>
  <div class="space-y-4">
    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ $t('examples.buttons.title') }}</h4>
    <div class="flex flex-wrap gap-2">
      <UButton>{{ $t('examples.buttons.default') }}</UButton>
      <UButton color="primary" variant="solid">{{ $t('examples.buttons.primary') }}</UButton>
      <UButton color="neutral" variant="soft">{{ $t('examples.buttons.softNeutral') }}</UButton>
      <UButton color="error" variant="outline">{{ $t('examples.buttons.outlineError') }}</UButton>
      <UButton variant="ghost">{{ $t('examples.buttons.ghost') }}</UButton>
      <UButton variant="link">{{ $t('examples.buttons.link') }}</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
// Button examples showcasing different variants
</script>
