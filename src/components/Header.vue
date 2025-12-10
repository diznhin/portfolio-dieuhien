<template>
  <header class="main-header">
    <nav class="navbar navbar-expand-lg main-navbar">
      <div class="container">
        <router-link class="navbar-brand fw-bold" to="/">
          <i class="bi bi-code-slash me-2"></i>My Portfolio
        </router-link>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/skills">Skills</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Header component logic
</script>

<style scoped>
.main-header {
  background-color: #3a8b4c;
  color: #ffffff;
}

.main-navbar {
  background-color: transparent;
}

.navbar-brand {
  font-size: 1.5rem;
  color: #ffffff;
}

.nav-link {
  font-weight: 500;
  color: #ffffff !important;
  transition: color 0.3s ease, border-color 0.3s ease;
  border-bottom: 2px solid transparent;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #ffffff !important;
  border-bottom-color: #ffffff;
}

/* Icons (brand icon, social icons if any, and toggler icon) */
.main-header i {
  color: #ffffff;
}

.navbar-toggler {
  border-color: #ffffff;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255,255,255,1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
</style>
