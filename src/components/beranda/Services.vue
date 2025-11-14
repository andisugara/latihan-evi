<template>
  <div class="container mx-auto text-center mt-12 mb-12">
    <h1 class="text-2xl">Product & Service</h1>
    <p>Details about products and services will be listed here.</p>
    <div class="grid gap-6 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <template v-for="service in services">
        <Service
          :judul="service.title"
          :deskripsi="service.description"
          :ikon="service.icon"
        />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import Service from "../utils/Service.vue";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites.",
    icon: import("../../assets/icon.png"),
  },
  {
    title: "Mobile Apps",
    description: "Creating user-friendly mobile applications.",
    icon: import("../../assets/icon.png"),
  },
  {
    title: "Digital Marketing",
    description: "Promoting your business online effectively.",
    icon: import("../../assets/icon.png"),
  },
  {
    title: "Web Development",
    description: "Building responsive and modern websites.",
    icon: import("../../assets/icon.png"),
  },
  {
    title: "Mobile Apps",
    description: "Creating user-friendly mobile applications.",
    icon: import("../../assets/icon.png"),
  },
  {
    title: "Digital Marketing",
    description: "Promoting your business online effectively.",
    icon: import("../../assets/icon.png"),
  },
];
</script>
