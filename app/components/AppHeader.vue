<template>
  <header class="bg-white dark:bg-gray-800 shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-6">
        <div class="flex items-center">
          <UIcon name="i-heroicons-rocket-launch" class="w-8 h-8 text-primary-500 mr-3" />
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
            {{ $t('header.title') }}
          </h1>
        </div>
        <div class="flex items-center space-x-4">
          <LanguageSwitcher />
          <div data-cursor-pointer>
            <UColorModeToggle />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Header component for the Nuxt 4 + UI template
</script>
