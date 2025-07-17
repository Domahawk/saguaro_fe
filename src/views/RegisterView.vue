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

const email = ref();
const username = ref();
const password = ref();
const passwordConfirm = ref();

const register = () => {
//   send request to backend
  console.log(
      email.value,
      username.value,
      password.value,
      passwordConfirm.value,
  );
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