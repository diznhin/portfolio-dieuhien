<template>
  <section class="py-5">
    <div class="container">

      <h2 class="text-center mb-5">Kinh nghiệm làm việc</h2>

      <div class="timeline">
        <div
          class="timeline-item"
          v-for="exp in experiences"
          :key="exp.id"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h5 class="fw-bold">{{ exp.position }}</h5>
            <h6 class="text-success">{{ exp.company }}</h6>

            <p class="text-muted mb-2">
              <i class="bi bi-calendar me-2"></i>{{ exp.period }}
            </p>
            <p class="text-muted mb-2">
              <i class="bi bi-geo-alt me-2"></i>{{ exp.location }}
            </p>

            <ul class="responsibilities">
              <li
                v-for="r in exp.responsibilities"
                :key="r"
              >
                <i class="bi bi-arrow-right me-2"></i>{{ r }}
              </li>
            </ul>

            <div class="mt-3">
              <span
                v-for="t in exp.technologies"
                :key="t"
                class="badge skill-badge me-1"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Experience {
  id: number
  position: string
  company: string
  period: string
  location: string
  responsibilities: string[]
  technologies: string[]
}

defineProps<{
  experiences: Experience[]
}>()
</script>




