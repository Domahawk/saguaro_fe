<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ref} from "vue";
import apiClient from "@/api/apiClient.ts";
import {useRouter} from "vue-router";
import { useUserStore } from "@/stores/userStore.ts";

const email = ref();
const password = ref();
const router = useRouter();
const userStore = useUserStore();

const login = async () => {
  let response = await apiClient.post("/login", {
    email: email.value,
    password: password.value,
  });

  userStore.token = response.data.token;

  router.push({ name: "home" });
}

</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Log In</CardTitle>
      <CardDescription>Enter Your Email and Password to Log in</CardDescription>
    </CardHeader>
    <CardContent>
      <Input v-model="email" type="email" placeholder="Email" required />
      <Input v-model="password" type="password" placeholder="Password" required />
    </CardContent>
    <CardFooter>
      <Button @click="login">Log In</Button>
    </CardFooter>
  </Card>
</template>