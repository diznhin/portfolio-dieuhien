<template>
  <div class="d-flex justify-content-between align-items-center mb-4">
    <div class="d-flex align-items-center">
      <img src="https://via.placeholder.com/50x50" class="rounded-circle me-3" alt="Author">
      <div>
        <h6 class="mb-0">{{ post.author }}</h6>
        <small class="text-muted">Full Stack Developer</small>
      </div>
    </div>
    <div class="d-flex gap-2">
      <button class="btn btn-outline-green btn-sm" @click="$emit('share', 'twitter')">
        <i class="bi bi-twitter"></i>
      </button>
      <button class="btn btn-outline-green btn-sm" @click="$emit('share', 'facebook')">
        <i class="bi bi-facebook"></i>
      </button>
      <button class="btn btn-outline-green btn-sm" @click="$emit('share', 'linkedin')">
        <i class="bi bi-linkedin"></i>
      </button>
      <button class="btn btn-outline-green btn-sm" @click="$emit('copyLink')">
        <i class="bi bi-link"></i>
      </button>
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

defineEmits<{
  share: [platform: string]
  copyLink: []
}>()
</script>
