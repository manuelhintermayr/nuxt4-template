<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <!-- Header -->
      <header class="bg-white dark:bg-gray-800 shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-6">
            <div class="flex items-center">
              <UIcon name="i-heroicons-rocket-launch" class="w-8 h-8 text-primary-500 mr-3" />
              <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
                Nuxt 4 + UI Template
              </h1>
            </div>
            <UColorModeToggle />
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="space-y-8">
          <!-- Welcome Section -->
          <div class="text-center">
            <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              Willkommen zu Ihrem Nuxt 4 Projekt
            </h2>
            <p class="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Mit Nuxt UI für moderne und responsive Benutzeroberflächen
            </p>
          </div>

          <!-- Features Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-yellow-500 mr-2" />
                  <h3 class="text-lg font-semibold">Nuxt 4</h3>
                </div>
              </template>
              <p class="text-gray-600 dark:text-gray-300">
                Die neueste Version von Nuxt mit verbesserter Performance und neuen Features.
              </p>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UIcon name="i-heroicons-paint-brush" class="w-5 h-5 text-blue-500 mr-2" />
                  <h3 class="text-lg font-semibold">Nuxt UI</h3>
                </div>
              </template>
              <p class="text-gray-600 dark:text-gray-300">
                Moderne UI-Komponenten basierend auf Tailwind CSS und Headless UI.
              </p>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center">
                  <UIcon name="i-heroicons-moon" class="w-5 h-5 text-indigo-500 mr-2" />
                  <h3 class="text-lg font-semibold">Dark Mode</h3>
                </div>
              </template>
              <p class="text-gray-600 dark:text-gray-300">
                Automatischer Dark Mode Support mit einfacher Umschaltung.
              </p>
            </UCard>
          </div>

          <!-- Example Components -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              Beispiel-Komponenten
            </h3>
            
            <!-- Buttons -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Buttons</h4>
              <div class="flex flex-wrap gap-2">
                <UButton>Default</UButton>
                <UButton color="primary" variant="solid">Primary</UButton>
                <UButton color="gray" variant="soft">Soft Gray</UButton>
                <UButton color="red" variant="outline">Outline Red</UButton>
                <UButton variant="ghost">Ghost</UButton>
                <UButton variant="link">Link</UButton>
              </div>
            </div>

            <!-- Form Example -->
            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Formulare</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <UInput placeholder="Ihr Name" />
                <UInput type="email" placeholder="ihre@email.de" />
                <UTextarea placeholder="Ihre Nachricht..." />
                <USelect 
                  :options="[
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' },
                    { label: 'Option 3', value: '3' }
                  ]"
                  placeholder="Wählen Sie eine Option"
                />
              </div>
            </div>

            <!-- Alert -->
            <UAlert
              icon="i-heroicons-information-circle"
              description="Dies ist eine Beispiel-Benachrichtigung mit Nuxt UI!"
              title="Info"
              color="primary"
              variant="soft"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
