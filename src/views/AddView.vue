<script setup lang="ts">
import { type Ref, ref } from "vue";
import apiClient from "@/api/apiClient.ts";
import { useErrorsStore } from "@/stores/errorsStore.ts";
import DisplayCard from "@/components/DisplayCard.vue";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const email = ref();
const username = ref();
const password = ref();
const admin: Ref<boolean> = ref(false);

const errorsStore = useErrorsStore();

const addUser = async () => {
  try {
    let response = await apiClient.post(
        `/users`,
        {
          email: email.value,
          username: username.value,
          password: password.value,
          admin: admin.value,
        }
    );
  } catch (err: any) {
    errorsStore.setErrors(err.response.data.errors);
  }
}

const adminChange = () => {
  admin.value = !admin.value;
}
</script>

<template>
  <DisplayCard card-title="Add user" button-name="Submit" @button-click="addUser">
    <Input v-model="email" type="email" placeholder="Email" required />
    <Input v-model="username" type="text" placeholder="Username" required />
    <Input v-model="password" type="Password" placeholder="Password" required />
    <div class="flex justify-start items-center">
      <Button class="text-white" @click="adminChange">Is Admin</Button>
      <p class="m-[5px]">{{ admin }}</p>
    </div>
  </DisplayCard>
</template>