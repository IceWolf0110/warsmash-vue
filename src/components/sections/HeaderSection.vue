<script setup lang="ts">
import DarkModeSwitcher from '@/components/base/button/DarkModeSwitcher.vue'
import { useMenuStore } from '@/stores/menu.ts'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const store = useMenuStore()
const open = ref(false)
</script>

<template>
  <header class="border-b sticky top-0 bg-background z-50">
    <div class="container mx-auto">
      <div class="h-12 flex items-center justify-between px-4">
        <ul class="hidden md:flex items-center gap-2">
          <li v-for="menu in store.menus" :key="menu.title">
            <Button asChild variant="ghost">
              <a
                v-if="store.isExternal(menu.url)"
                :href="menu.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ menu.title }}
              </a>
              <RouterLink v-else :to="menu.url">
                {{ menu.title }}
              </RouterLink>
            </Button>
          </li>
        </ul>

        <div class="md:hidden">
          <Sheet v-model:open="open">
            <SheetTrigger as-child>
              <Button variant="ghost" size="icon">
                <Icon
                  :icon="open ? 'radix-icons:cross-1' : 'radix-icons:hamburger-menu'"
                  class="w-5 h-5"
                />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" class="w-64">
              <div class="mt-6 flex flex-col gap-3">
                <template v-for="menu in store.menus" :key="menu.title">
                  <Button asChild variant="ghost" class="justify-start">
                    <a
                      v-if="store.isExternal(menu.url)"
                      :href="menu.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      @click="open = false"
                    >
                      {{ menu.title }}
                    </a>

                    <RouterLink v-else :to="menu.url" @click="open = false">
                      {{ menu.title }}
                    </RouterLink>
                  </Button>
                </template>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div class="items-center">
          <dark-mode-switcher variant="ghost" class="rounded-full" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
