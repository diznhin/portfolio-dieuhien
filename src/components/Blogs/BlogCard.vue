<template>
  <div class="card h-100">
    <img :src="post.image" class="card-img-top" :alt="post.title">
    <div class="card-body d-flex flex-column">
      
      <div class="mb-2">
        <span class="badge skill-badge me-1">{{ post.category }}</span>
        <small class="text-muted">{{ post.readTime }} phút để đọc</small>
      </div>

      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.excerpt }}</p>

      <div class="mt-auto">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <small class="text-muted">
            <i class="bi bi-calendar me-1"></i>{{ post.date }}
          </small>
          <small class="text-muted">
            <i class="bi bi-eye me-1"></i>{{ post.views }} người xem
          </small>
        </div>

        <router-link :to="'/blog/' + post.id" class="btn btn-main-green">
          Đọc thêm
        </router-link>
      </div>

    </div>
  </div>
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
}

defineProps({
  post: {
    type: Object as () => BlogPost,
    required: true
  }
})
</script>
