<template>
  <div class="skills">

    <HeroSection />

    <EducationSection :education="education" />

    <TechnicalSkills 
      :hardSkills="hardSkills" 
      :softSkills="softSkills" 
    />

    <WorkExperience :experiences="workExperience" />

    <ProjectsSection :projects="projects" />

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import HeroSection from "../components/Skills/HeroSection.vue"
import EducationSection from "../components/Skills/EducationSection.vue"
import TechnicalSkills from "../components/Skills/TechnicalSkills.vue"
import WorkExperience from "../components/Skills/WorkExperience.vue"
import ProjectsSection from "../components/Skills/ProjectsSection.vue"

// ----- EducationSection -----
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

// ----- TechnicalSkills -----
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

// ----- WorkExperience -----
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

// ----- ProjectsSection -----
const projects = ref([
  {
    id: 1,
    image: "/images/projects/portfolio.png", // đổi path cho phù hợp project của bạn
    name: "Portfolio Website",
    description: "Website cá nhân giới thiệu bản thân, kỹ năng và dự án, xây dựng với Vue 3 + Vite.",
    teamSize: 1,
    duration: "2024",
    technologies: ["Vue 3", "TypeScript", "Bootstrap", "Vite"],
    demoUrl: "https://your-portfolio-demo.com",
    githubUrl: "https://github.com/your-username/portfolio"
  },
  {
    id: 2,
    image: "/images/projects/todo-app.png",
    name: "Todo App",
    description: "Ứng dụng quản lý công việc đơn giản, cho phép thêm, sửa, xóa và lọc công việc.",
    teamSize: 1,
    duration: "2023",
    technologies: ["Vue 3", "Pinia", "LocalStorage"],
    demoUrl: "https://your-todo-demo.com",
    githubUrl: "https://github.com/your-username/todo-app"
  }
])
</script>
