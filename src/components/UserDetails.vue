<script setup lang="ts">

import type {User} from "@/types/user.ts";

defineProps<{ user: User |undefined }>();

</script>

<template>
  <h2>User information</h2>
  <p>Username: {{ user?.username }}</p>
  <p>Email: {{ user?.email }}</p>
  <p>Admin privileges: {{ user?.admin }}</p>
</template>

<style scoped>

</style>