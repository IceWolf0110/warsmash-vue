<script setup lang="ts">
import { useDark } from '@vueuse/core'
import WebLayout from '@/components/layouts/WebLayout.vue'

useDark()
</script>

<template>
  <web-layout>
    <router-view />
  </web-layout>
</template>

<style scoped></style>
