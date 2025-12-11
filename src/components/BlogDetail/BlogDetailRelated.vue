<template>
  <div class="mt-5">
    <h4>Related Articles</h4>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="relatedPost in relatedPosts" :key="relatedPost.id">
        <div class="card h-100">
          <img :src="relatedPost.image" class="card-img-top" :alt="relatedPost.title">
          <div class="card-body">
            <h6 class="card-title">{{ relatedPost.title }}</h6>
            <p class="card-text small">{{ relatedPost.excerpt }}</p>
            <router-link :to="'/blog/' + relatedPost.id" class="btn btn-outline-green btn-sm">
              Đọc thêm
            </router-link>
          </div>
        </div>
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
  tags?: string[]
}

defineProps<{
  relatedPosts: BlogPost[]
}>()
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
</style>
