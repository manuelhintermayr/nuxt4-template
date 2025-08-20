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
  if (formSection.value && formTitle.value && formGrid.value) {
    const { $animationUtils } = useNuxtApp()
    
    if ($animationUtils && typeof $animationUtils === 'object') {
      const utils = $animationUtils as any
      
      // Remove loading class
      formSection.value.classList.remove('gsap-loading')
      
      // Animate title
      if ('fadeInUp' in utils) {
        utils.fadeInUp(formTitle.value, {
          scrollTrigger: {
            trigger: formSection.value,
            start: 'top 85%'
          }
        })
      }

      // Animate form fields with stagger
      if ('fadeInUp' in utils) {
        const formFields = formGrid.value.children
        utils.fadeInUp(Array.from(formFields), {
          scrollTrigger: {
            trigger: formGrid.value,
            start: 'top 80%'
          },
          stagger: 0.15,
          y: 20
        })
      }
    }
  }
})
</script>
