<template>
  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">Học vấn</h2>

      <div class="row">
        <div class="col-md-6 mb-4" 
             v-for="edu in education" 
             :key="edu.id">
             
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ edu.degree }}</h5>
              <h6 class="text-success mb-3">{{ edu.institution }}</h6>

              <p><i class="bi bi-calendar me-2"></i>{{ edu.period }}</p>
              <p><i class="bi bi-geo-alt me-2"></i>{{ edu.location }}</p>

              <p>{{ edu.description }}</p>

              <div class="mt-3">
                <span 
                  v-for="a in edu.achievements" 
                  :key="a" 
                  class="badge bg-success me-1">
                  {{ a }}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  education: {
    id: number,
    degree: string,
    institution: string,
    period: string,
    location: string,
    description: string,
    achievements: string[]
  }[]
}>()
</script>
