<template>
  <div class="space-y-4">
    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ $t('examples.buttons.title') }}</h4>
    <div class="flex flex-wrap gap-2">
      <UButton data-cursor-pointer>{{ $t('examples.buttons.default') }}</UButton>
      <UButton color="primary" variant="solid" data-cursor-pointer>{{ $t('examples.buttons.primary') }}</UButton>
      <UButton color="neutral" variant="soft" data-cursor-pointer>{{ $t('examples.buttons.softNeutral') }}</UButton>
      <UButton color="error" variant="outline" data-cursor-pointer>{{ $t('examples.buttons.outlineError') }}</UButton>
      <UButton variant="ghost" data-cursor-pointer>{{ $t('examples.buttons.ghost') }}</UButton>
      <UButton variant="link" data-cursor-pointer>{{ $t('examples.buttons.link') }}</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
// Button examples showcasing different variants
</script>
