
<script setup lang="ts">
import HeroSection from "../components/About/HeroSection.vue";
import PersonalInfoCard from "../components/About/PersonalInfoCard.vue";
import AboutCard from "../components/About/AboutCard.vue";
import GallerySection from "../components/About/GallerySection.vue";
import TimelineSection from "../components/About/TimelineSection.vue";
import { ref } from "vue";

const aboutParagraphs = [
  "Tôi là một lập trình viên Front-end với kinh nghiệm phát triển web hiện đại bằng Vue.js, HTML/CSS và Bootstrap.",
  "Tôi yêu thích tạo ra giao diện trực quan, đẹp mắt và tối ưu trải nghiệm người dùng.",
  "Tôi thường xuyên học hỏi công nghệ mới và tham gia các dự án nhóm như portfolio, blog cá nhân và bài thi UI."
];

const skills = ["Phát triển Web","Thiết kế UI/UX","Lập trình hướng đối tượng","Quản lý dự án / blog cá nhân","Kỹ năng mềm"];

const galleryImages = ref([
  { url: "https://via.placeholder.com/400x300", title: "Working at Office" },
  { url: "https://via.placeholder.com/400x300", title: "Team Meeting" },
  { url: "https://via.placeholder.com/400x300", title: "Conference Presentation" },
  { url: "https://via.placeholder.com/400x300", title: "Coding Session" },
  { url: "https://via.placeholder.com/400x300", title: "Team Building" },
  { url: "https://via.placeholder.com/400x300", title: "Project Launch" }
]);

const timelineEvents = ref([
  { year: "2020", title: "Started University", description: "Bắt đầu học ĐH Công nghệ – HUST" },
  { year: "2021", title: "First Internship", description: "Thực tập Frontend Developer (Vue & React)" },
  { year: "2022", title: "Full-time Job", description: "Làm Full Stack cho dự án khách hàng" },
  { year: "2023", title: "Graduated", description: "Tốt nghiệp loại Giỏi – tiếp tục làm việc" },
  { year: "2024", title: "Senior Dev", description: "Leader team 3 dev, phụ trách dự án lớn" }
]);
</script>
<template>
  <div class="about">
    <HeroSection title="Giới thiệu" subtitle="Tìm hiểu thêm về hành trình, kinh nghiệm và niềm đam mê công nghệ của tôi" />

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
              :skills="skills"
            />
          </div>
        </div>
      </div>
    </section>

    <GallerySection title="Photo Gallery" :images="galleryImages" />

    <TimelineSection title="My Journey" :events="timelineEvents" />
  </div>
</template>

