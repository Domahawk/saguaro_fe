<script setup lang="ts">

import { Input } from "@/components/ui/input";
import {ref} from "vue";
import apiClient from "@/api/apiClient.ts";
import { useRouter } from "vue-router";
import {useErrorsStore} from "@/stores/errorsStore.ts";
import FormCard from "@/components/FormCard.vue";

const email = ref();
const username = ref();
const password = ref();
const passwordConfirm = ref();
const errors = ref();

const router = useRouter();
const errorsStore = useErrorsStore();

const register = async () => {
  try {
    let response = await apiClient.post(
        "/register",
        {
          'email': email.value,
          'username': username.value,
          'password': password.value,
          'passwordConfirmation': passwordConfirm.value
        }
    );

    router.push({ name: "login" });
  } catch (err: any) {
    errorsStore.setErrors(err.response.data.errors);
  }
}

</script>

<template>
  <FormCard button-name="Register" card-title="Register" @button-click="register">
    <Input v-model="email" type="email" placeholder="Email" required />
    <Input v-model="username" type="text" placeholder="Username" required />
    <Input v-model="password" type="Password" placeholder="Password" required />
    <Input v-model="passwordConfirm" type="Password" placeholder="Confirm Password" required />
  </FormCard>
</template>