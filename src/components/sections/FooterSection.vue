<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="pt-4">
    <div class="h-2 bg-red-600"></div>

    <div class="bg-slate-600 text-center py-16 text-slate-200">
      <button
        @click="scrollToTop"
        class="bg-slate-300 text-slate-800 px-6 py-3 rounded shadow hover:bg-slate-200 transition"
      >
        ↑ To the top
      </button>
    </div>
  </footer>
</template>

<style scoped></style>
