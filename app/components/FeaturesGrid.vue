<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <FeatureCard
      :title="$t('features.nuxt4.title')"
      :description="$t('features.nuxt4.description')"
      icon="i-heroicons-sparkles"
      icon-color="text-yellow-500"
    />
    
    <FeatureCard
      :title="$t('features.nuxtUI.title')"
      :description="$t('features.nuxtUI.description')"
      icon="i-heroicons-paint-brush"
      icon-color="text-blue-500"
    />
    
    <FeatureCard
      :title="$t('features.darkMode.title')"
      :description="$t('features.darkMode.description')"
      icon="i-heroicons-moon"
      icon-color="text-indigo-500"
    />
  </div>
</template>

<script setup lang="ts">
// Features grid showcasing the main features
</script>
