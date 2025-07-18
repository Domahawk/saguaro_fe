<script setup lang="ts">
import { useUserStore } from "@/stores/userStore.ts";
import type { User } from "@/types/user.ts";
import { onMounted, ref, type Ref } from "vue";
import UserDetails from "@/components/UserDetails.vue";

const userStore = useUserStore();

const user: Ref<User | undefined> = ref<User>();

onMounted(() => {
  user.value = userStore.user
})

</script>

<template>
  <div class="flex flex-col items-center w-full h-full">
    <h1>Hello, {{ user?.username }}</h1>
    <UserDetails :user="user" />
  </div>
</template>

<style scoped>

</style>