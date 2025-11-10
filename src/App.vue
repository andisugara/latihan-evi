<template>
  <router-view />
</template>
<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => window.HSStaticMethods.autoInit(), 100);
});
</script>
