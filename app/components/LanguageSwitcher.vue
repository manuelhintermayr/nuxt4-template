<template>
  <USelect
    v-model="currentLocale"
    :options="localeOptions"
    :placeholder="$t('languageSwitcher.placeholder')"
    size="sm"
    @change="switchLanguage"
  />
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const currentLocale = ref(locale.value)

const localeOptions = computed(() => 
  locales.value.map((loc: any) => ({
    label: loc.name,
    value: loc.code
  }))
)

const switchLanguage = (newLocale: string) => {
  setLocale(newLocale)
  currentLocale.value = newLocale
}

// Watch for external locale changes
watch(locale, (newLocale) => {
  currentLocale.value = newLocale
})
</script>
