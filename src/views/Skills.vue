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
import gold from "../assets/imgs/gold.png"
// ----- EducationSection -----
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

// ----- ProjectsSection -----
const projects = ref([
  {
    id: 1,
    image: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/547221360_1083436200515644_6197530695118705784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEny8d3_x1NtTzpnJ7qLzJCtTc6twpwKVm1Nzq3CnApWZqOezoNnJWbA6L5gQ2U_myBRyEFVmT49Ebu6RQ5xxN7&_nc_ohc=XM1l1yO-gAYQ7kNvwHP6b-0&_nc_oc=AdmZ1_fZzSlglFUrM-J8-CGJLwzatsMPhwI_nDb5JLmUZaYZM99rOGWZPCQNaLMCqwIXK0GS8_9CTr5cbWGa8vWq&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=S3zCvtOVK4u66yxj2MhA0Q&oh=00_AfnI896zpbidakwYOm0QD4YbwHR2hqL5FX6rqC6Z0xAd2w&oe=693F601D", // đổi path cho phù hợp project của bạn
    name: "Website Trường THPT Phước Vĩnh",
    description: "Website giới thiệu Trường THPT Phước Vĩnh",
    teamSize: 1,
    duration: "2025",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://diznhin.github.io/myweb/",
    githubUrl: "https://github.com/diznhin/myweb"
  },
  {
    id: 2,
    image: gold,
    name: "Susan Gold Shop",
    description: "Website bán vàng đơn giản",
    teamSize: 1,
    duration: "2025",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://diuhin.io.vn/susan-gold-shop/",
    githubUrl: "https://github.com/diznhin/susan-gold-shop"
  }
])
</script>
