<template>
  <section class="about-hero text-center">
    <div class="container">
      <h1 class="about-hero-title fw-bold">{{ title }}</h1>
      <p class="about-hero-subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>
