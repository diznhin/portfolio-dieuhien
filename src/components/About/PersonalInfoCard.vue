<template>
  <div class="card h-100">
    <div class="card-body">
      <h5 class="fw-bold mb-3">Thông tin cá nhân</h5>
      <img :src="avatar" alt="Profile" class="profile-avatar img-fluid mb-3" />
      <ul class="list-unstyled small">
        <li><strong>Họ và tên:</strong> {{ name }}</li>
        <li><strong>Tuổi:</strong> {{ age }}</li>
        <li><strong>Địa chỉ:</strong> {{ address }}</li>
        <li><strong>Email:</strong> {{ email }}</li>
        <li><strong>SĐT:</strong> {{ phone }}</li>
        <li><strong>Ngôn ngữ:</strong> {{ languages }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  avatar: string;
  name: string;
  age: number;
  address: string;
  email: string;
  phone: string;
  languages: string;
}>();
</script>


