<script setup lang="ts">
import {useErrorsStore} from "@/stores/errorsStore.ts";

const errorsStore = useErrorsStore();

</script>

<template>
  <div class="flex flex-row min-w-full min-h-full justify-center text-red-500"
      v-for="error in errorsStore.errors"
  >
    <p>{{ error[0] }}</p>
  </div>
</template>

<style scoped>

</style>