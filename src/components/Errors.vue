<script setup lang="ts">
import {useErrorsStore} from "@/stores/errorsStore.ts";

const errorsStore = useErrorsStore();

</script>

<template>
  <div v-for="error in errorsStore.errors">
    <p>{{ error[0] }}</p>
  </div>
</template>

<style scoped>

</style>