<script setup lang="ts">
import loopedVideo from '@/assets/videos/WS_Loop.mp4'
import YoutubeEmbed from '@/components/base/youtube/YoutubeEmbed.vue'
</script>

<template>
    <div class="relative md:h-[calc(100vh-48px)] overflow-hidden">
      <video
        :src="loopedVideo"
        class="w-full h-auto md:absolute md:inset-0 md:w-full md:h-full md:object-cover"
        autoplay
        muted
        loop
        playsinline
      />

      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div class="bg-orange-600 px-10 py-4">
          <h1 class="text-white text-4xl md:text-6xl tracking-widest font-light">WARSMASH.NET</h1>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto px-6 pt-4">
      <div class="pt-4">
        <h1 class="text-center text-2xl text-orange-700">WARSMASH</h1>
      </div>

      <p>
        Warsmash is a free (as in free software) Java RTS engine capable of emulating Warcraft III:
        The Frozen Throne gameplay on top of LibGDX.
      </p>

      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-6 pt-4">
        <youtube-embed videoId="9z9NV6J72nA" />
        <youtube-embed videoId="sQgY5ZSjqL8" />
      </div>

      <p class="pt-4">
        This project is capable of emulating some parts of Warcraft III gameplay from source code. It
        began when the developer of "Retera Model Studio" (a 3D model tool for Warcraft III)
        repurposed some of the same Java code to make a game engine, then ported the Ghostwolf
        "mdx-m3-viewer" render engine on top of LibGDX to create a game engine that rendered models
        in the style of MDX.
      </p>
    </div>
</template>

<style scoped></style>
