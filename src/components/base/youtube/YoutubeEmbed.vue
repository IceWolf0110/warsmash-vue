<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  videoId: string,
  title?: string,
}>()

const isPlaying = ref(false)

</script>

<template>
    <div class="relative aspect-video">
      <img
        v-if="!isPlaying"
        :src="`https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg`"
        class="w-full h-full object-cover cursor-pointer"
        @click="isPlaying = true"
        :alt="title ? title : ''"
      />

      <iframe
        v-if="isPlaying"
        class="absolute inset-0 w-full h-full"
        :src="`https://www.youtube.com/embed/${props.videoId}?autoplay=1`"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
    </div>
</template>

<style scoped></style>
