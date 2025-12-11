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
import vue3 from '../assets/imgs/vue3.webp'
import tj from '../assets/imgs/tj.png'
import css from '../assets/imgs/css.png'

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
    content: 'Bài viết tuyệt vời! Rất hữu ích và giải thích dễ hiểu. Hãy tiếp tục phát huy nhé!',
    date: '2024-01-16'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    content: 'Cảm ơn bạn đã chia sẻ. Mình học được rất nhiều từ phần giải thích các khái niệm của bạn.',
    date: '2024-01-15'
  }
])

const blogPosts = ref<BlogPost[]>([
  {
    id: 1,
    title: 'Hướng dẫn Vue 3 Composition API',
    excerpt: 'Tìm hiểu cách dùng Composition API trong Vue 3.',
    content: `
      <h2>Giới thiệu</h2>
      <p>Composition API trong Vue 3 giúp quản lý logic tốt hơn, linh hoạt hơn và dễ tái sử dụng hơn.</p>

      <h2>Composition API là gì?</h2>
      <p>Đây là cách mới để tổ chức code bằng setup(), ref(), computed(), reactive()…</p>

      <h2>Cách sử dụng cơ bản</h2>
      <pre><code>import { ref, computed } from 'vue'

      export default {
        setup() {
          const count = ref(0)
          const doubled = computed(() => count.value * 2)

          function increment() {
            count.value++
          }

          return { count, doubled, increment }
        }
      }</code></pre>
            
      <h2>Lợi ích</h2>
      <ul>
        <li>Hỗ trợ TypeScript tốt hơn</li>
        <li>Tổ chức mã linh hoạt hơn</li>
        <li>Dễ tái sử dụng logic</li>
        <li>Hiệu suất tốt hơn trong các ứng dụng lớn</li>
      </ul>
      
      <h2>Kết luận</h2>
      <p>Composition API là một bổ sung mạnh mẽ cho Vue, mang lại khả năng tổ chức mã tốt hơn và dễ tái sử dụng hơn. Mặc dù ban đầu có thể khó học hơn một chút, nhưng những lợi ích mà nó mang lại rất xứng đáng cho các ứng dụng lớn.</p>
    `,
    category: 'Vue.js',
    date: '2024-01-15',
    author: 'Evan You',
    readTime: 8,
    views: 1250,
    image: vue3,
    tags: ['Vue.js', 'Composition API', 'JavaScript']
  },
    {
    id: 2,
    title: 'Các nguyên tắc TypeScript cơ bản',
    excerpt: 'Những cách viết TypeScript hiệu quả cho dự án',
    content: `
      <h2>Giới thiệu</h2>
      <p>TypeScript giúp viết code JavaScript an toàn hơn với kiểu dữ liệu rõ ràng và hỗ trợ IDE tốt hơn.</p>

      <h2>1. Sử dụng type và interface</h2>
      <p>Dùng <code>type</code> hoặc <code>interface</code> để định nghĩa cấu trúc dữ liệu:</p>
      <pre><code>interface User {
            id: number;
            name: string;
            email: string;
          }</code></pre>

      <h2>2. Sử dụng strict mode</h2>
      <p>Bật <code>strict</code> trong tsconfig.json giúp tránh lỗi runtime và tăng độ an toàn cho code.</p>

      <h2>3. Sử dụng Generics</h2>
      <p>Giúp tạo các hàm hoặc class linh hoạt, có thể tái sử dụng với nhiều kiểu dữ liệu khác nhau:</p>
      <pre><code>function identity<T>(arg: T): T {
    return arg;
  }</code></pre>

      <h2>Kết luận</h2>
      <p>Hiểu và áp dụng các nguyên tắc cơ bản của TypeScript sẽ giúp dự án của bạn bền vững và dễ bảo trì hơn.</p>
    `,
    category: 'TypeScript',
    date: '2024-01-10',
    author: 'Jane Smith',
    readTime: 8,
    views: 987,
    image: tj,
    tags: ['TypeScript', 'JavaScript', 'Programming']
  },
  {
    id: 3,
    title: 'Làm chủ CSS Grid Layout',
    excerpt: 'Hiểu và áp dụng CSS Grid cho layout responsive',
    content: `
      <h2>Giới thiệu CSS Grid</h2>
      <p>CSS Grid là một hệ thống layout 2 chiều mạnh mẽ, giúp bạn xây dựng các bố cục phức tạp mà vẫn dễ quản lý.</p>

      <h2>Các khái niệm cơ bản</h2>
      <ul>
        <li><strong>Grid Container:</strong> Phần tử cha chứa grid items.</li>
        <li><strong>Grid Items:</strong> Các phần tử con trong grid container.</li>
        <li><strong>Grid Lines:</strong> Các đường chia hàng và cột.</li>
        <li><strong>Grid Track:</strong> Các hàng hoặc cột được tạo ra giữa grid lines.</li>
      </ul>

      <h2>Các thuộc tính quan trọng</h2>
      <p>Một số thuộc tính phổ biến:</p>
      <ul>
        <li><code>display: grid;</code> – Khai báo container là grid</li>
        <li><code>grid-template-columns</code> – Định nghĩa cột</li>
        <li><code>grid-template-rows</code> – Định nghĩa hàng</li>
        <li><code>gap</code> – Khoảng cách giữa các item</li>
        <li><code>justify-items / align-items</code> – Căn chỉnh item</li>
      </ul>

      <h2>Ví dụ cơ bản</h2>
      <pre><code>.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }</code></pre>

      <h2>Kết luận</h2>
      <p>CSS Grid giúp bạn làm chủ layout, tạo giao diện responsive dễ dàng và giảm thiểu việc dùng float hay flex quá nhiều.</p>
    `,
    category: 'CSS',
    date: '2024-01-05',
    author: 'Mike Johnson',
    readTime: 6,
    views: 756,
    image: css,
    tags: ['CSS', 'Grid', 'Layout', 'Responsive']
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

