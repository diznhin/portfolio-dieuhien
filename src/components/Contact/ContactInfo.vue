<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-envelope fs-1 text-success mb-3"></i>
              <h5 class="card-title">Email</h5>
              <p class="card-text">dieuhiennguyen.2006@gmail.com</p>
              <a href="mailto:contact@myportfolio.com" class="btn btn-outline-green">Gửi Email</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-phone fs-1 text-success mb-3"></i>
              <h5 class="card-title">Số điện thoại</h5>
              <p class="card-text">+84 989 902 059</p>
              <a href="tel:+84 989 902 059" class="btn btn-outline-green">Gọi ngay</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-geo-alt fs-1 text-success mb-3"></i>
              <h5 class="card-title">Địa chỉ</h5>
              <p class="card-text">Đà Nẵng, Vietnam</p>
              <button class="btn btn-outline-green" @click="$emit('showMap')">Xem bản đồ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{
  showMap: []
}>()
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
</style>
