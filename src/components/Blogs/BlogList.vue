<template>
  <section class="py-5">
    <div class="container">

      <div class="row" v-if="posts.length > 0">
        <div 
          class="col-md-6 col-lg-4 mb-4"
          v-for="post in posts"
          :key="post.id"
        >
          <BlogCard :post="post" />
        </div>
      </div>

      <div v-else class="text-center py-5">
        <i class="bi bi-search fs-1 text-muted"></i>
        <h4 class="mt-3">Không tìm thấy bài viết phù hợp</h4>
        <p class="text-muted">Thử đổi từ khóa hoặc bộ lọc xem có kết quả không nhé!</p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import BlogCard from './BlogCard.vue'

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
  posts: {
    type: Array as () => BlogPost[],
    required: true
  }
})
</script>
