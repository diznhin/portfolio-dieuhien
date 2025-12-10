<template>
  <div class="blog-detail" v-if="post">
    <!-- Hero Section -->
    <BlogDetailHero :post="post" />

    <!-- Breadcrumb -->
    <BlogDetailBreadcrumb :post="post" />

    <!-- Article Content -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <!-- Article Image -->
            <div class="mb-4">
              <img :src="post.image" class="img-fluid rounded" :alt="post.title">
            </div>

            <!-- Article Meta -->
            <BlogDetailMeta :post="post" @share="sharePost" @copy-link="copyLink" />

            <!-- Article Content -->
            <BlogDetailContent :post="post" />

            <!-- Share Section -->
            <BlogDetailShare @share="sharePost" />

            <!-- Author Bio -->
            <BlogDetailAuthor :post="post" />

            <!-- Comments Section -->
            <BlogDetailComments v-model:comments="comments" />

            <!-- Related Posts -->
            <BlogDetailRelated :related-posts="relatedPosts" />
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="text-center py-5">
    <h2>Article not found</h2>
    <p class="text-muted">The article you're looking for doesn't exist.</p>
    <router-link to="/blog" class="btn btn-main-green">Back to Blog</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import BlogDetailHero from '../components/BlogDetail/BlogDetailHero.vue'
import BlogDetailBreadcrumb from '../components/BlogDetail/BlogDetailBreadcrumb.vue'
import BlogDetailMeta from '../components/BlogDetail/BlogDetailMeta.vue'
import BlogDetailContent from '../components/BlogDetail/BlogDetailContent.vue'
import BlogDetailShare from '../components/BlogDetail/BlogDetailShare.vue'
import BlogDetailAuthor from '../components/BlogDetail/BlogDetailAuthor.vue'
import BlogDetailComments from '../components/BlogDetail/BlogDetailComments.vue'
import BlogDetailRelated from '../components/BlogDetail/BlogDetailRelated.vue'

interface Comment {
  id: number
  name: string
  email: string
  content: string
  date: string
}

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

const route = useRoute()
const postId = parseInt(route.params.id as string)

const comments = ref<Comment[]>([
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    content: 'Great article! Very helpful and well-explained. Keep up the good work!',
    date: '2024-01-16'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    content: 'Thanks for sharing this. I learned a lot from your explanation of the concepts.',
    date: '2024-01-15'
  }
])

const blogPosts = ref<BlogPost[]>([
  {
    id: 1,
    title: 'Getting Started with Vue 3 Composition API',
    excerpt: 'Learn the basics of Vue 3 Composition API and how to use it effectively in your projects.',
    content: `
      <h2>Introduction</h2>
      <p>Vue 3 introduced the Composition API as a new way to organize and reuse code in Vue applications. This article will guide you through the basics and show you how to use it effectively.</p>
      
      <h2>What is the Composition API?</h2>
      <p>The Composition API is a set of APIs that allows you to use Vue's features outside of Vue components. It provides a more flexible way to organize logic and reuse code between components.</p>
      
      <h2>Basic Usage</h2>
      <p>Here's a simple example of how to use the Composition API:</p>
      <pre><code>import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubled = computed(() => count.value * 2)
    
    function increment() {
      count.value++
    }
    
    return {
      count,
      doubled,
      increment
    }
  }
}</code></pre>
      
      <h2>Benefits</h2>
      <ul>
        <li>Better TypeScript support</li>
        <li>More flexible code organization</li>
        <li>Easier logic reuse</li>
        <li>Better performance in large applications</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The Composition API is a powerful addition to Vue that provides better code organization and reusability. While it might have a steeper learning curve initially, the benefits are well worth it for larger applications.</p>
    `,
    category: 'Vue.js',
    date: '2024-01-15',
    author: 'John Doe',
    readTime: 8,
    views: 1250,
    image: 'https://via.placeholder.com/800x400',
    tags: ['Vue.js', 'Composition API', 'JavaScript']
  },
  {
    id: 2,
    title: 'Building RESTful APIs with Node.js',
    excerpt: 'A comprehensive guide to creating scalable REST APIs using Node.js, Express, and MongoDB.',
    content: `<p>Full article content about Node.js APIs...</p>`,
    category: 'Node.js',
    date: '2024-01-10',
    author: 'John Doe',
    readTime: 12,
    views: 890,
    image: 'https://via.placeholder.com/800x400',
    tags: ['Node.js', 'Express', 'MongoDB', 'API']
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox: When to Use Which',
    excerpt: 'Understanding the differences between CSS Grid and Flexbox and when to use each layout system.',
    content: `<p>Full article content about CSS Grid and Flexbox...</p>`,
    category: 'CSS',
    date: '2024-01-05',
    author: 'John Doe',
    readTime: 6,
    views: 670,
    image: 'https://via.placeholder.com/800x400',
    tags: ['CSS', 'Grid', 'Flexbox', 'Layout']
  }
])

const post = computed(() => {
  return blogPosts.value.find(p => p.id === postId)
})

const relatedPosts = computed(() => {
  if (!post.value) return []
  return blogPosts.value
    .filter(p => p.id !== postId && p.category === post.value!.category)
    .slice(0, 3)
})

const sharePost = (platform: string) => {
  const url = window.location.href
  const title = post.value?.title
  
  let shareUrl = ''
  
  switch (platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title || '')}&url=${encodeURIComponent(url)}`
      break
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
      break
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
      break
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }
}

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href)
  alert('Link copied to clipboard!')
}

onMounted(() => {
  // Increment view count
  if (post.value && post.value.views !== undefined) {
    post.value.views++
  }
})
</script>

