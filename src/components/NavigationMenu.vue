<script setup lang="ts">
import { Button } from '@/components/ui/button'

</script>

<template>
  <nav class="flex w-full min-h-full justify-between">
    <div>
      <RouterLink :to="{ name: 'home'}">
        <Button>Home</Button>
      </RouterLink>
    </div>
    <div>
      <!--  if user is not logged in-->
      <RouterLink :to="{ name: 'login'}">
        <Button>Log In</Button>
      </RouterLink>
      <RouterLink :to="{ name: 'register'}">
        <Button>Register</Button>
      </RouterLink>
    </div>
    <!--  if user is logged in-->

    <!--  if user is logged in and admin-->

  </nav>
</template>

<style scoped>

</style>