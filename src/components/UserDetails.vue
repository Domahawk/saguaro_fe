<script setup lang="ts">

import type {User} from "@/types/user.ts";
import DisplayCard from "@/components/DisplayCard.vue";

defineProps<{ user: User |undefined }>();

</script>

<template>
  <DisplayCard card-title="User Details" :button-visible="false">
    <h2>User information</h2>
    <p>Username: {{ user?.username }}</p>
    <p>Email: {{ user?.email }}</p>
    <p>Admin privileges: {{ user?.admin }}</p>
  </DisplayCard>
</template>

<style scoped>

</style>