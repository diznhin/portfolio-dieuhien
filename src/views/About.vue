
<script setup lang="ts">
import HeroSection from "../components/About/HeroSection.vue";
import PersonalInfoCard from "../components/About/PersonalInfoCard.vue";
import AboutCard from "../components/About/AboutCard.vue";
import GallerySection from "../components/About/GallerySection.vue";
import TimelineSection from "../components/About/TimelineSection.vue";
import { ref } from "vue";
import avatar from "../assets/imgs/2.png";

const aboutParagraphs = [
  "Tôi là một lập trình viên Front-end với kinh nghiệm xây dựng giao diện web hiện đại bằng Vue.js, HTML/CSS và Bootstrap. Tôi có khả năng chuyển đổi ý tưởng thiết kế thành sản phẩm giao diện hoàn chỉnh, tối ưu về bố cục, tốc độ và khả năng tương tác. Tôi yêu thích việc tạo ra UI trực quan, tinh gọn và đem lại trải nghiệm tự nhiên cho người dùng. Bên cạnh đó, tôi luôn chủ động cập nhật công nghệ mới, rèn luyện kỹ năng qua các dự án thực tế như portfolio cá nhân, blog, website thử nghiệm và các bài thi giao diện để nâng cao tư duy thiết kế và khả năng lập trình."
];

const skills = ["Phát triển Web","Thiết kế UI/UX","Lập trình hướng đối tượng","Quản lý dự án / blog cá nhân","Kỹ năng mềm"];

const galleryImages = ref([
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZz2qTVEItU4qJP9In51Qj5jyJgDtXjwJTTA&s", title: "Làm việc tại văn phòng" }
]);

const timelineEvents = ref([
  { year: "2024", title: "FPT Polytechnic", description: "Bắt đầu học Cao Đẳng FPT" },
  { year: "2026", title: "FPT Software", description: "Thực tập làm việc tại FPT Software" }
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

    <GallerySection title="Thư viện hình ảnh" :images="galleryImages" />

    <TimelineSection title="Hành trình trưởng thành" :events="timelineEvents" />
  </div>
</template>

