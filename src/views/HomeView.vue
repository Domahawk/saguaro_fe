<script setup lang="ts">
import { useUserStore } from "@/stores/userStore.ts";
import type { User } from "@/types/user.ts";
import { onMounted, ref, type Ref } from "vue";

const userStore = useUserStore();

const user: Ref<User | undefined> = ref<User>();

onMounted(() => {
  user.value = userStore.user
})

</script>

<template>
<h1>Hello, {{ user?.username }}</h1>
  <h2>Your information</h2>
  <p>Username: {{ user?.username }}</p>
  <p>Email: {{ user?.email }}</p>
  <p>Admin privileges: {{ user?.admin }}</p>
</template>

<style scoped>

</style>