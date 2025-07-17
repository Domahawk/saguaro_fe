<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { ref } from "vue";
import apiClient from "@/api/apiClient.ts";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore.ts";
import { useErrorsStore } from "@/stores/errorsStore.ts";
import FormCard from "@/components/FormCard.vue";

const email = ref();
const password = ref();
const router = useRouter();
const userStore = useUserStore();

const errorsStore = useErrorsStore();

const login = async () => {
  try {
    let response = await apiClient.post("/login", {
      email: email.value,
      password: password.value,
    });

    userStore.login(response.data.token);

    router.push({ name: "home" });
  } catch (err: any) {
    errorsStore.setErrors(err.response.data.errors);
  }
}

</script>

<template>
  <FormCard card-title="Login" button-name="Login" @button-click="login">
    <Input v-model="email" type="email" placeholder="Email" required />
    <Input v-model="password" type="password" placeholder="Password" required />
  </FormCard>
</template>