<template>
  <div class="space-y-4">
    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Formulare</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
      <UInput placeholder="Ihr Name" />
      <UInput type="email" placeholder="ihre@email.de" />
      <UTextarea placeholder="Ihre Nachricht..." />
      <USelect 
        :options="selectOptions"
        placeholder="Wählen Sie eine Option"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const selectOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]
</script>
