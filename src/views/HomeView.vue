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
  <h1>Hello, {{ user?.username }}</h1>
  <UserDetails :user="user" />
</template>

<style scoped>

</style>