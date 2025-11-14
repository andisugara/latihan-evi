<template>
  <div class="bg-neutral-200 p-4 rounded-2xl">
    <img :src="Icon" alt="Service Icon" class="mx-auto mb-4" />
    <h2 class="text-xl mb-2">{{ props.judul }}</h2>
    <p class="mb-4">{{ props.deskripsi }}</p>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
  </div>
</template>
<script setup lang="ts">
import Icon from "../../assets/icon.png";

const props = defineProps<{
  judul: string;
  deskripsi: string;
  ikon: string;
}>();
</script>
