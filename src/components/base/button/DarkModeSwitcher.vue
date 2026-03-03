<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Button, type ButtonVariants } from '@/components/ui/button'
import type { HTMLAttributes } from 'vue'
import { Icon } from '@iconify/vue'
import { useDark } from '@vueuse/core'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})

const isDark = useDark()
</script>

<template>
  <Button v-bind="props" @click="isDark = !isDark">
    <Icon
      icon="radix-icons:moon"
      class="h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:scale-0"
    />
    <Icon
      icon="radix-icons:sun"
      class="absolute h-[1.2rem] w-[1.2rem] scale-0 transition-all dark:scale-100"
    />
  </Button>
</template>

<style scoped></style>
