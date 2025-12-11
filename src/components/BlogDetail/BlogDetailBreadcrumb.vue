<template>
  <section class="bg-light py-3">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-decoration-none">Trang chủ</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/blog" class="text-decoration-none">Bài viết</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ post.title }}</li>
        </ol>
      </nav>
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

<style scoped>
.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
  color: rgba(255, 255, 255, 0.7);
}
</style>
