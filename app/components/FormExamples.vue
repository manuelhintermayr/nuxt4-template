<template>
    <div ref="formSection" class="space-y-4 gsap-loading">
        <h4 ref="formTitle" class="text-lg font-semibold text-gray-900 dark:text-white">{{ $t('examples.forms.title') }}</h4>
        <div ref="formGrid" class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <UInput :placeholder="$t('examples.forms.namePlaceholder')" />
            <UInput type="email" :placeholder="'sample@mail.com'" />
            <UTextarea :placeholder="$t('examples.forms.messagePlaceholder')" />
            <USelect :options="selectOptions" :placeholder="$t('examples.forms.selectPlaceholder')" />
        </div>
    </div>
</template>

<script setup lang="ts">
// Form examples with GSAP animations

const { t } = useI18n()

const formSection = ref<HTMLElement>()
const formTitle = ref<HTMLElement>()
const formGrid = ref<HTMLElement>()

const selectOptions = computed(() => [
    { label: t('examples.forms.option1'), value: '1' },
    { label: t('examples.forms.option2'), value: '2' },
    { label: t('examples.forms.option3'), value: '3' }
])

onMounted(() => {
  if (!formSection.value) return
  
  const { setupSection, animateTitle, animateStaggered } = useAnimations()
  
  // Setup section
  setupSection(formSection)
  
  // Animate title
  animateTitle(formTitle, formSection)
  
  // Animate form fields with stagger
  if (formGrid.value?.children) {
    animateStaggered(Array.from(formGrid.value.children), formGrid, {
      y: 20,
      stagger: 0.15
    })
  }
})
</script>
