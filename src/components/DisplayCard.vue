<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Button} from "@/components/ui/button";

interface Props {
  cardTitle: string,
  buttonName?: string,
  buttonVisible?: boolean,
};

withDefaults(defineProps<Props>(), {
  cardTitle: '',
  buttonName: 'Submit',
  buttonVisible: true,
});

</script>

<template>
  <div class="flex items-center flex-col min-w-full min-h-full m-[10px]">
    <Card class="w-[400px] md:w-1/2 lg:w-1/2 xl:w-1/3">
      <CardHeader>
        <CardTitle>{{ cardTitle }}</CardTitle>
      </CardHeader>
      <CardContent class="flex flex-col items-start gap-[10px]">
        <slot/>
      </CardContent>
      <CardFooter>
        <Button @click="$emit('buttonClick')"
                v-if="buttonVisible"
        >
          {{ buttonName }}
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>