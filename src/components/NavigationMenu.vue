<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useUserStore } from "@/stores/userStore.ts";
import apiClient from "@/api/apiClient.ts";
import {useRouter} from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const logout = async () => {
  let response = await apiClient.delete('/logout');

  userStore.logout();

  router.push({ name: "landing" });
};

</script>

<template>
  <nav class="flex w-full min-h-full justify-between">
    <div>
      <div v-if="userStore.isAuthenticated()" class="flex">
        <RouterLink :to="{ name: 'home'}">
          <Button class="mr-[5px]">Home</Button>
        </RouterLink>
        <div v-if="userStore.user?.admin">
          <RouterLink :to="{ name: 'users'}">
            <Button class="mr-[5px]">Users</Button>
          </RouterLink>
          <RouterLink :to="{ name: 'userAdd'}">
            <Button class="mr-[5px]">Add User</Button>
          </RouterLink>
        </div>
      </div>
    </div>
    <div v-if="!userStore.isAuthenticated()">
      <RouterLink :to="{ name: 'login'}">
        <Button class="mr-[5px]">Log In</Button>
      </RouterLink>
      <RouterLink :to="{ name: 'register'}">
        <Button>Register</Button>
      </RouterLink>
    </div>
    <div v-if="userStore.isAuthenticated()">
      <Button @click="logout">Log out</Button>
    </div>
  </nav>
</template>

<style scoped>

</style>