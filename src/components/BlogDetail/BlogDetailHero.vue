<template>
  <section class="about-hero text-center py-5">
    <div class="container">
      <h1 class="about-hero-title fw-bold">{{ post.title }}</h1>
      <div class="text-center mt-3">
        <span class="badge skill-badge me-2">{{ post.category }}</span>
        <span class="me-3"><i class="bi bi-calendar me-1"></i>{{ post.date }}</span>
        <span class="me-3"><i class="bi bi-clock me-1"></i>{{ post.readTime }} phút để đọc</span>
        <span><i class="bi bi-eye me-1"></i>{{ post.views }} người xem</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  author: string
  image?: string
  readTime?: number
  views?: number
  tags?: string[]
}

defineProps<{
  post: BlogPost
}>()
</script>
