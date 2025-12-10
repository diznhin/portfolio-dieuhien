<template>
  <section class="bg-light py-5">
    <div class="container">

      <h2 class="text-center mb-5">Dự án cá nhân</h2>

      <div class="row">
        <div 
          class="col-md-6 mb-4"
          v-for="p in projects"
          :key="p.id"
        >
          <div class="card h-100">
            <img :src="p.image" class="card-img-top" />

            <div class="card-body">
              <h5 class="fw-bold">{{ p.name }}</h5>
              <p>{{ p.description }}</p>

              <small class="text-muted d-block">
                <i class="bi bi-people me-1"></i>{{ p.teamSize }} thành viên
              </small>

              <small class="text-muted">
                <i class="bi bi-calendar-range me-1"></i>{{ p.duration }}
              </small>

              <div class="my-3">
                <span 
                  v-for="t in p.technologies" 
                  :key="t" 
                  class="badge skill-badge me-1"
                >
                  {{ t }}
                </span>
              </div>

              <div class="d-flex gap-2">
                <a 
                  :href="p.demoUrl" 
                  target="_blank" 
                  class="btn btn-main-green btn-sm"
                >
                  Xem demo
                </a>

                <a 
                  :href="p.githubUrl" 
                  target="_blank" 
                  class="btn btn-outline-green btn-sm"
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  id: number
  image: string
  name: string
  description: string
  teamSize: number
  duration: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
}

defineProps<{
  projects: Project[]
}>()
</script>
