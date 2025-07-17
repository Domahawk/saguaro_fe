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
const password = ref();

const login = () => {
// send request to backend
  console.log(email.value, password.value);
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