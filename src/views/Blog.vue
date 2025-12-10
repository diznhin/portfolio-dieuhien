<template>
  <div class="blog">

    <BlogHero />

    <BlogSearchFilter
      v-model:searchQuery="searchQuery"
      v-model:selectedCategory="selectedCategory"
      :categories="categories"
      @filter="filterPosts"
    />

    <BlogList :posts="paginatedPosts" />

    <BlogPagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @change="changePage"
    />

    <Newsletter />

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import BlogHero from '../components/Blogs/BlogHero.vue'
import BlogSearchFilter from '../components/Blogs/BlogSearchFilter.vue'
import BlogList from '../components/Blogs/BlogList.vue'
import BlogPagination from '../components/Blogs/BlogPagination.vue'
import Newsletter from '../components/Blogs/Newsletter.vue'

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

const searchQuery = ref('')
const selectedCategory = ref('all')
const currentPage = ref(1)
const postsPerPage = 6

const blogPosts = ref<BlogPost[]>([
  {
    id: 1,
    title: 'Vue 3 Composition API Guide',
    excerpt: 'Learn how to use Vue 3 Composition API effectively',
    content: 'Full content here...',
    category: 'Vue.js',
    date: '2024-01-15',
    author: 'John Doe',
    image: '/api/placeholder/400/250',
    readTime: 5,
    views: 1234
  },
  {
    id: 2,
    title: 'TypeScript Best Practices',
    excerpt: 'Essential TypeScript patterns for modern development',
    content: 'Full content here...',
    category: 'TypeScript',
    date: '2024-01-10',
    author: 'Jane Smith',
    image: '/api/placeholder/400/250',
    readTime: 8,
    views: 987
  },
  {
    id: 3,
    title: 'CSS Grid Layout Mastery',
    excerpt: 'Master CSS Grid for responsive layouts',
    content: 'Full content here...',
    category: 'CSS',
    date: '2024-01-05',
    author: 'Mike Johnson',
    image: '/api/placeholder/400/250',
    readTime: 6,
    views: 756
  }
])

const categories = computed(() => {
  const cats = ['all', ...new Set(blogPosts.value.map(post => post.category))]
  return cats
})

const filteredPosts = computed(() => {
  let filtered = blogPosts.value
  
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(post => post.category === selectedCategory.value)
  }
  
  if (searchQuery.value) {
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }
  
  return filtered
})

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / postsPerPage)
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return filteredPosts.value.slice(start, end)
})

const filterPosts = () => {
  currentPage.value = 1
}

const changePage = (page: number) => {
  currentPage.value = page
}

onMounted(() => {
  // Initialize any data fetching here
})
</script>
