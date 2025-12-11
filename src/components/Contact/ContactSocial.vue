<template>
  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">Liên hệ</h2>
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="d-flex justify-content-center gap-4">
            <a href="#" class="text-center text-decoration-none" @click="$emit('socialClick', 'GitHub')">
              <div class="card">
                <div class="card-body">
                  <i class="bi bi-github fs-1 text-dark"></i>
                  <h6 class="mt-2">GitHub</h6>
                </div>
              </div>
            </a>
            <a href="#" class="text-center text-decoration-none" @click="$emit('socialClick', 'LinkedIn')">
              <div class="card">
                <div class="card-body">
                  <i class="bi bi-linkedin fs-1 text-success"></i>
                  <h6 class="mt-2">LinkedIn</h6>
                </div>
              </div>
            </a>
            <a href="#" class="text-center text-decoration-none" @click="$emit('socialClick', 'Twitter')">
              <div class="card">
                <div class="card-body">
                  <i class="bi bi-twitter fs-1 text-info"></i>
                  <h6 class="mt-2">Twitter</h6>
                </div>
              </div>
            </a>
            <a href="#" class="text-center text-decoration-none" @click="$emit('socialClick', 'Facebook')">
              <div class="card">
                <div class="card-body">
                  <i class="bi bi-facebook fs-1 text-success"></i>
                  <h6 class="mt-2">Facebook</h6>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{
  socialClick: [platform: string]
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

.text-decoration-none:hover .card {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
</style>
