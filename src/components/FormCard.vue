<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Button} from "@/components/ui/button";

defineProps<{
  cardTitle: string,
  buttonName: string
}>()

</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ cardTitle }}</CardTitle>
     </CardHeader>
    <CardContent>
      <slot/>
    </CardContent>
    <CardFooter>
      <Button @click="$emit('buttonClick')">{{ buttonName }}</Button>
    </CardFooter>
  </Card>
</template>