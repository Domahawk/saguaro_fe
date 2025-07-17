<script setup lang="ts">
import NavigationMenu from '@/components/NavigationMenu.vue'
</script>
<template>
  <main class="flex flex-col min-w-full min-h-full">
    <NavigationMenu />
    <RouterView />
  </main>
</template>