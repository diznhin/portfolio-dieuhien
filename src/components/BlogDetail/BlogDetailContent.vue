<template>
  <div class="article-content">
    <p class="lead">{{ post.excerpt }}</p>
    <div v-html="post.content"></div>
    
    <!-- Tags -->
    <div class="mt-4" v-if="post.tags && post.tags.length > 0">
      <h6>Tags:</h6>
      <div class="d-flex flex-wrap gap-2">
        <span v-for="tag in post.tags" :key="tag" class="badge skill-badge">{{ tag }}</span>
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
  post: BlogPost
}>()
</script>

<style scoped>
.article-content {
  line-height: 1.8;
  font-size: 1.1rem;
}

.article-content h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.article-content pre {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}

.article-content ul {
  padding-left: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
}
</style>
