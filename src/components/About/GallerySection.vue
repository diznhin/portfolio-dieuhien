<template>
  <section class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-5">{{ title }}</h2>
      <div class="row g-4">
        <div class="col-md-4" v-for="(image, i) in images" :key="i">
          <div class="card">
            <img :src="image.url" class="card-img-top" :alt="image.title" />
            <div class="card-body text-center">
              <p class="mb-0 small">{{ image.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface GalleryImage {
  url: string;
  title: string;
}

defineProps<{
  title: string;
  images: GalleryImage[];
}>();
</script>
