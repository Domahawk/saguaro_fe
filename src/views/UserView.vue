<script setup lang="ts">
import { useRoute } from "vue-router";
import apiClient from "@/api/apiClient.ts";
import { useErrorsStore } from "@/stores/errorsStore.ts";
import {onMounted, ref} from "vue";
import type { User } from "@/types/user.ts";
import UserDetails from "@/components/UserDetails.vue";

const route = useRoute();
const errorsStore = useErrorsStore();
const user = ref<User | undefined>();

const fetchUserData = async () => {
  try {
    let response = await apiClient.get(`/users/${route.params.id}`);

    user.value = response.data.user;
  } catch (err: any) {
    errorsStore.setErrors(err.response.data.errors);
  }
}

onMounted(() => {
  fetchUserData();
})
</script>

<template>
  <UserDetails :user="user" />
</template>

<style scoped>

</style>