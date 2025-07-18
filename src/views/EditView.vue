<script setup lang="ts">
import {onMounted, type Ref, ref} from "vue";
import apiClient from "@/api/apiClient.ts";
import { useRoute } from "vue-router";
import {useErrorsStore} from "@/stores/errorsStore.ts";
import DisplayCard from "@/components/DisplayCard.vue";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const email = ref();
const username = ref();
const password = ref();
const admin: Ref<boolean> = ref(false);

const route = useRoute();
const errorsStore = useErrorsStore();

const fetchUser = async () => {
  try {
    let response = await apiClient.get(`/users/${route.params.id}`);

    email.value = response?.data?.user.email;
    username.value = response?.data?.user.username;
    admin.value = response?.data?.user.admin === 1;

  } catch (err: any) {
    errorsStore.setErrors(err.response.data.errors);
  }
}

const update = async () => {
  try {
    let response = await apiClient.post(
        `/users/${route.params.id}`,
        {
          'email': email.value,
          'username': username.value,
          'password': password.value,
          'admin': admin.value,
        }
    );
  } catch (err: any) {
    errorsStore.setErrors(err.response.data.errors);
  }
}

const adminChange = () => {
  admin.value = !admin.value;
}

onMounted(async () => {
  await fetchUser();
})
</script>

<template>
  <DisplayCard card-title="Edit user" button-name="Submit" @button-click="update">
    <Input v-model="email" type="email" placeholder="Email" required />
    <Input v-model="username" type="text" placeholder="Username" required />
    <Input v-model="password" type="Password" placeholder="Password" required />
    <div class="flex justify-start items-center">
      <Button class="text-white m-[5px]" @click="adminChange">Is Admin</Button>
      <p class="m-[5px]">{{ admin }}</p>
    </div>
  </DisplayCard>
</template>