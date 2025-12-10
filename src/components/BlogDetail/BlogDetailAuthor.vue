<template>
  <div class="mt-5 p-4 bg-light rounded">
    <div class="d-flex">
      <img src="https://via.placeholder.com/80x80" class="rounded-circle me-4" alt="Author">
      <div>
        <h5>About the Author</h5>
        <p class="mb-2">
          <strong>{{ post.author }}</strong> is a Full Stack Developer with over 3 years of experience 
          in building web applications. He loves sharing his knowledge through writing and 
          contributing to open-source projects.
        </p>
        <div class="d-flex gap-2">
          <a href="#" class="text-dark"><i class="bi bi-github fs-5"></i></a>
          <a href="#" class="text-dark"><i class="bi bi-linkedin fs-5"></i></a>
          <a href="#" class="text-dark"><i class="bi bi-twitter fs-5"></i></a>
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
  post: BlogPost
}>()
</script>
