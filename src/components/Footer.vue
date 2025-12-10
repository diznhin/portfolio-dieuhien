<template>
  <footer class="main-footer py-4 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3">
          <h5 class="fw-bold">Contact Info</h5>
          <p class="mb-2">
            <i class="bi bi-envelope me-2"></i>contact@myportfolio.com
          </p>
          <p class="mb-2">
            <i class="bi bi-phone me-2"></i>+84 123 456 789
          </p>
          <p class="mb-0">
            <i class="bi bi-geo-alt me-2"></i>Hanoi, Vietnam
          </p>
        </div>
        <div class="col-md-4 mb-3">
          <h5 class="fw-bold">Quick Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <router-link to="/" class="text-white text-decoration-none">Home</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/about" class="text-white text-decoration-none">About</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/skills" class="text-white text-decoration-none">Skills</router-link>
            </li>
            <li class="mb-0">
              <router-link to="/blog" class="text-white text-decoration-none">Blog</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-4 mb-3">
          <h5 class="fw-bold">Follow Me</h5>
          <div class="d-flex gap-3">
            <a href="#" class="text-white fs-4" title="GitHub">
              <i class="bi bi-github"></i>
            </a>
            <a href="#" class="text-white fs-4" title="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#" class="text-white fs-4" title="Twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="text-white fs-4" title="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <hr class="bg-white">
      <div class="text-center">
        <p class="mb-0">&copy; 2024 My Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component logic
</script>

<style scoped>
.main-footer {
  background-color: #3a8b4c;
  color: #ffffff;
}

a {
  color: #ffffff;
}

a:hover {
  color: #ffffff !important;
  opacity: 0.85;
  transition: color 0.3s ease, opacity 0.3s ease;
}
</style>
