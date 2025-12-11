<script setup>
import { ref } from 'vue'
import avatar from '../assets/imgs/2.png'
import vue3 from '../assets/imgs/vue3.webp'
import tj from '../assets/imgs/tj.png'
import PersonalInfoCard from '../components/About/PersonalInfoCard.vue'
import AboutCard from '../components/About/AboutCard.vue'
import EducationSection from '../components/Skills/EducationSection.vue'
import WorkExperience from '../components/Skills/WorkExperience.vue'
import TechnicalSkills from '../components/Skills/TechnicalSkills.vue'
import BlogCard from '../components/Blogs/BlogCard.vue'

const aboutParagraphs = [
  "Tôi là một lập trình viên Front-end với kinh nghiệm xây dựng giao diện web hiện đại bằng Vue.js, HTML/CSS và Bootstrap. Tôi có khả năng chuyển đổi ý tưởng thiết kế thành sản phẩm giao diện hoàn chỉnh, tối ưu về bố cục, tốc độ và khả năng tương tác. Tôi yêu thích việc tạo ra UI trực quan, tinh gọn và đem lại trải nghiệm tự nhiên cho người dùng. Bên cạnh đó, tôi luôn chủ động cập nhật công nghệ mới, rèn luyện kỹ năng qua các dự án thực tế như portfolio cá nhân, blog, website thử nghiệm và các bài thi giao diện để nâng cao tư duy thiết kế và khả năng lập trình."
];

const skills = ["Phát triển Web","Thiết kế UI/UX","Lập trình hướng đối tượng","Quản lý dự án / blog cá nhân","Kỹ năng mềm"];

const education = ref([
  {
      id: 1,
      degree: "Tốt nghiệp THPT",
      institution: "THPT Phước Vĩnh",
      period: "2022 – 2024",
      location: "TP. Hồ Chí Minh",
      description: "Tốt nghiệp THPT với điểm trung bình 8.0",
      achievements: ["Điểm trung bình 8.0"]
    },
    {
      id: 2,
      degree: "Cao Đẳng FPT",
      institution: "FPT Polytechnic",
      period: "2024 – 2026",
      location: "TP. Đà Nẵng",
      description: "Tập trung vào phát triển web, UI/UX và lập trình hiện đại.",
      achievements: ["GPA 3.5+", "Tham gia CLB lập trình"]
    }
])

const workExperience = ref([
  {
    id: 1,
    position: "Front-end Intern",
    company: "ABC Corp",
    period: "06/2025 – 09/2025",
    location: "TP. Đà Nẵng",
    responsibilities: [
      "Hỗ trợ làm giao diện cho một số tính năng nhỏ.",
      "Lấy và hiển thị dữ liệu từ API theo hướng dẫn.",
      "Chỉnh sửa giao diện để phù hợp trên mobile."
    ],
    technologies: ["Vue.js", "TypeScript"]
  },
  {
    id: 2,
    position: "Freelance Front-end Developer",
    company: "Tự do ",
    period: "2025 – Nay",
    location: "TP. Đà Nẵng",
    responsibilities: [
      "Làm các trang web đơn giản cho khách hàng.",
      "Sắp xếp bố cục và chỉnh sửa giao diện cơ bản.",
      "Đưa website lên hosting."
    ],
    technologies: ["HTML", "CSS", "JavaScript"]
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
            :avatar="avatar"
              name="Nguyễn Bích Diệu Hiền"
              :age="19"
              address="Đà Nẵng, Việt Nam"
              email="dieuhiennguyen.2006@gmail.com"
              phone="+84 989 902 059"
              languages="Tiếng Việt, Tiếng Hàn"
            />
          </div>
          <div class="col-md-8 mb-4">
            <AboutCard 
              :paragraphs="aboutParagraphs"
              :skills="skills"
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

