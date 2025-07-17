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
import { useRouter } from "vue-router";

const email = ref();
const username = ref();
const password = ref();
const passwordConfirm = ref();

const router = useRouter();

const register = async () => {
//   send request to backend
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
}

</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Register</CardTitle>
      <CardDescription>Enter Your Email, Username and Password to register</CardDescription>
    </CardHeader>
    <CardContent>
      <Input v-model="email" type="email" placeholder="Email" required />
      <Input v-model="username" type="text" placeholder="Username" required />
      <Input v-model="password" type="Password" placeholder="Password" required />
      <Input v-model="passwordConfirm" type="Password" placeholder="Confirm Password" required />
    </CardContent>
    <CardFooter>
      <Button @click="register">Register</Button>
    </CardFooter>
  </Card>
</template>