<script setup lang="ts">
import NavigationMenu from '@/components/NavigationMenu.vue'
import Errors from "@/components/Errors.vue";
</script>
<template>
  <main class="flex flex-col min-w-full min-h-full p-[10px]">
    <NavigationMenu />
    <Errors />
    <RouterView />
  </main>
</template>