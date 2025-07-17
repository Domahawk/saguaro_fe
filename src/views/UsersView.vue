<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {Button} from "@/components/ui/button";
import {onMounted, ref} from "vue";
import apiClient from "@/api/apiClient.ts";
import type {User} from "@/types/user.ts";

const users = ref();

const fetchUsers = async () => {
  let data = await apiClient.get("/users");

  users.value = data.data;
}

const deleteUser = async (id: number) => {
  try {
    let response = await apiClient.delete(`/users/${id}`);
    users.value = users.value.filter((user: User) => user.id != id);
  } catch (err) {
    console.error(err);
  }
}

onMounted(() => {fetchUsers()});

</script>

<template>
  <Table>
    <TableCaption>List of users</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>
          Name
        </TableHead>
        <TableHead>
          Email
        </TableHead>
        <TableHead>
          Email
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in users" :key="user.id">
        <TableCell>
          {{ user.username }}
        </TableCell>
        <TableCell>
          {{ user.email }}
        </TableCell>
        <TableCell>
          {{ user.admin }}
        </TableCell>
        <TableCell>
          <RouterLink :to="{ name: 'userEdit', params: { id: user.id } }">
            <Button>Edit</Button>
          </RouterLink>
        </TableCell>
        <TableCell>
          <Button @click="deleteUser(user.id)">Delete</Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>