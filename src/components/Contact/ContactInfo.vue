<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-envelope fs-1 text-success mb-3"></i>
              <h5 class="card-title">Email</h5>
              <p class="card-text">contact@myportfolio.com</p>
              <a href="mailto:contact@myportfolio.com" class="btn btn-outline-green">Send Email</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-phone fs-1 text-success mb-3"></i>
              <h5 class="card-title">Phone</h5>
              <p class="card-text">+84 123 456 789</p>
              <a href="tel:+84123456789" class="btn btn-outline-green">Call Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 text-center">
            <div class="card-body">
              <i class="bi bi-geo-alt fs-1 text-success mb-3"></i>
              <h5 class="card-title">Location</h5>
              <p class="card-text">Hanoi, Vietnam</p>
              <button class="btn btn-outline-green" @click="$emit('showMap')">View Map</button>
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
