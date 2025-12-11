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
import vue3 from '../assets/imgs/vue3.webp'
import tj from '../assets/imgs/tj.png'
import css from '../assets/imgs/css.png'

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
const selectedCategory = ref('All')
const currentPage = ref(1)
const postsPerPage = 6

const blogPosts = ref<BlogPost[]>([
  {
    id: 1,
    title: 'Hướng dẫn Vue 3 Composition API',
    excerpt: 'Tìm hiểu cách dùng Composition API trong Vue 3',
    content: 'Nội dung đầy đủ...',
    category: 'Vue.js',
    date: '2024-01-15',
    author:'Evan You', 
    image: vue3,
    readTime: 5,
    views: 1234
  },
  {
    id: 2,
    title: 'Các nguyên tắc TypeScript cơ bản',
    excerpt: 'Những cách viết TypeScript hiệu quả cho dự án',
    content: 'Nội dung đầy đủ...',
    category: 'TypeScript',
    date: '2024-01-10',
    author: 'Jane Smith', 
    image: tj,
    readTime: 8,
    views: 987
  },
  {
    id: 3,
    title: 'Làm chủ CSS Grid Layout',
    excerpt: 'Hiểu và áp dụng CSS Grid cho layout responsive',
    content: 'Nội dung đầy đủ...',
    category: 'CSS',
    date: '2024-01-05',
    author: 'Mike Johnson',
    image: css,
    readTime: 6,
    views: 756
  }
])

// Tính danh sách danh mục vd:'Vue.js',....
const categories = computed(() => {
  const cats = ['All', ...new Set(blogPosts.value.map(post => post.category))]
  return cats
})

// Lọc bài viết theo danh mục và từ khóa 
const filteredPosts = computed(() => {
  let filtered = blogPosts.value
  
  if (selectedCategory.value !== 'All') {
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

// Tính tổng số trang
const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / postsPerPage)
})

// Lấy bài viết của trang hiện tại(phân trang)
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return filteredPosts.value.slice(start, end)
})

// Reset về trang 1 khi lọc
const filterPosts = () => {
  currentPage.value = 1
}

// Chuyển trang
const changePage = (page: number) => {
  currentPage.value = page
}

// Load dữ liệu blog từ sever
onMounted(() => {
  // Initialize any data fetching here
})
</script>
