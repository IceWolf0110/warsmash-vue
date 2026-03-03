<script setup lang="ts">
import HeaderSection from '@/components/sections/HeaderSection.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import FooterSection from '@/components/sections/FooterSection.vue'

const route = useRoute()

const isNotFound = computed(() => route.name === 'not-found')
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header-section />

    <div v-if="isNotFound" class="flex-1 flex items-center justify-center">
      <slot />
    </div>

    <div v-else>
      <slot />
    </div>

    <footer-section />
  </div>
</template>

<style scoped></style>
