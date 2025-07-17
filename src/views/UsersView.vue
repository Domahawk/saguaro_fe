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

const users = [
  {
    id: 1,
    name: 'User1',
    email: 'user1@test.com'
  },
  {
    id: 2,
    name: 'User2',
    email: 'user2@test.com'
  },
  {
    id: 3,
    name: 'User3',
    email: 'user3@test.com'
  },
  {
    id: 4,
    name: 'User4',
    email: 'user4@test.com'
  },
  {
    id: 5,
    name: 'User5',
    email: 'user5@test.com'
  },
];

const editUser = (id: number) => {
//   redirect to user edit
  console.log(id);
}

const deleteUser = (id: number) => {
  // delete user request
  console.log(id);
}

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
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in users" :key="user.id">
        <TableCell>
          {{ user.name }}
        </TableCell>
        <TableCell>
          {{ user.email }}
        </TableCell>
        <TableCell>
          <Button @click="editUser(user.id)">Edit</Button>
        </TableCell>
        <TableCell>
          <Button @click="deleteUser(user.id)">Delete</Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>