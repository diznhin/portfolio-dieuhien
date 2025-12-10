<script setup>
import { ref } from 'vue'
import avatar from '../assets/imgs/2.png'
import PersonalInfoCard from '../components/About/PersonalInfoCard.vue'
import AboutCard from '../components/About/AboutCard.vue'
import EducationSection from '../components/Skills/EducationSection.vue'
import WorkExperience from '../components/Skills/WorkExperience.vue'
import TechnicalSkills from '../components/Skills/TechnicalSkills.vue'
import BlogCard from '../components/Blogs/BlogCard.vue'

const aboutParagraphs = [
  'Sinh viên năm cuối chuyên ngành Web Development, tập trung vào Vue.js và UI/UX.',
  'Yêu thích xây dựng giao diện trực quan, tối ưu hiệu năng và trải nghiệm người dùng.',
  'Thực hành dự án nhỏ, viết blog kỹ thuật và làm freelance front-end.'
]

const aboutSkills = ['Vue.js', 'TypeScript', 'Bootstrap', 'Tailwind', 'REST API', 'Figma']

const education = ref([
  {
    id: 1,
    degree: "Cử nhân Công nghệ Thông tin",
    institution: "Đại Học CNTT – UIT",
    period: "2021 – 2025",
    location: "TP. Hồ Chí Minh",
    description: "Tập trung vào phát triển web, UI/UX và lập trình hiện đại.",
    achievements: ["GPA 3.5+", "Tham gia CLB lập trình", "Học bổng 2023"]
  },
  {
    id: 2,
    degree: "Frontend Development Certificate",
    institution: "F8 Fullstack",
    period: "2023",
    location: "Online",
    description: "Học HTML, CSS, JavaScript và Vue.js.",
    achievements: ["Hoàn thành 100+ giờ thực hành"]
  }
])

const workExperience = ref([
  {
    id: 1,
    position: "Front-end Intern",
    company: "ABC Corp",
    period: "06/2024 – 09/2024",
    location: "TP. Hồ Chí Minh",
    responsibilities: [
      "Tham gia phát triển giao diện cho hệ thống quản lý nội bộ.",
      "Phối hợp với backend để tích hợp API.",
      "Tối ưu UI/UX trên mobile và desktop."
    ],
    technologies: ["Vue.js", "TypeScript", "Bootstrap", "REST API"]
  },
  {
    id: 2,
    position: "Freelance Front-end Developer",
    company: "Tự do",
    period: "2023 – Nay",
    location: "Remote",
    responsibilities: [
      "Xây dựng landing page cho khách hàng nhỏ lẻ.",
      "Tư vấn cấu trúc giao diện và trải nghiệm người dùng.",
      "Triển khai website tĩnh lên hosting / Vercel."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vue", "Git"]
  }
])

const hardSkills = ref([
  { name: "HTML", level: 85 },
  { name: "CSS / SCSS", level: 80 },
  { name: "JavaScript (ES6+)", level: 75 },
  { name: "Vue.js / Vite", level: 70 },
  { name: "Bootstrap / Tailwind", level: 70 }
])

const softSkills = ref([
  "Giao tiếp hiệu quả",
  "Làm việc nhóm",
  "Tư duy giải quyết vấn đề",
  "Quản lý thời gian",
  "Chủ động học hỏi"
])

const blogPosts = ref([
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
  }
])
</script>

<template>
  <div class="home">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-top-row">
          <span class="hero-role">WEB DEVELOPER</span>
          <span class="hero-date">December| 2025</span>
        </div>

        <div class="hero-main">
          <div class="hero-side hero-side-left">
            <div class="hero-icon-circle"></div>
            <div class="hero-icon-circle hero-icon-outline"></div>
          </div>

          <div class="hero-center">
            <h1 class="hero-title"><em>PORTFOLIO</em></h1>
            <div class="hero-photo-wrapper">
              <img :src="avatar" alt="Portfolio" class="hero-photo" />
            </div>
            <div class="hero-name-block">
              <p class="hero-name">Nguyễn Bích Diệu Hiền</p>
              <p class="hero-caption">
                Đang theo học ngành Web Development, có 1 năm kinh nghiệm và tiếp tục phát triển kỹ năng chuyên môn.
              </p>
            </div>
          </div>

          <div class="hero-side hero-side-center">
            <div class="hero-icon-circle"></div>
            <div class="hero-icon-circle hero-icon-outline"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Thông tin cá nhân -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4">
            <PersonalInfoCard
              avatar="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/547184727_122284576856011492_1123146261134047823_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG4fUIDEPJaB1G7w1NOn22mJ9nbgZ_d6Gsn2duBn93oa6bXE-qNyQQGCK6q0MTa2Upq21wFzCqv4agCfWIcr02v&_nc_ohc=GGsGS5keU8kQ7kNvwGqB2KP&_nc_oc=AdkFxZlI7yruudCH9e7FpW9bIm-V80D2u4YvAlG3WrbeMwzJBpGcoX1XW-wWnUzMEmg&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=RZ6CP-WUlECimLajNhV9Hg&oh=00_Afis_DE8J97leP77bsfXTIFn8T8IgHaOhUZ1O-N_eY3IwQ&oe=6927635F/300x300"
              name="Diệu Hiền"
              :age="19"
              address="Đà Nẵng, Việt Nam"
              email="dieu.hien@example.com"
              phone="+84 123 456 789"
              languages="Tiếng Việt, Tiếng Anh"
            />
          </div>
          <div class="col-md-8 mb-4">
            <AboutCard 
              :paragraphs="aboutParagraphs"
              :skills="aboutSkills"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Học vấn -->
    <EducationSection :education="education" />

    <!-- Kinh nghiệm làm việc -->
    <WorkExperience :experiences="workExperience" />

    <!-- Kỹ năng -->
    <TechnicalSkills :hard-skills="hardSkills" :soft-skills="softSkills" />

    <!-- Bài viết nổi bật -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Một số bài viết nổi bật</h2>
        <div class="row">
          <div
            v-for="post in blogPosts"
            :key="post.id"
            class="col-md-4 mb-4"
          >
            <BlogCard :post="post" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

