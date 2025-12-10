<template>
  <section class="bg-light py-5">
    <div class="container">

      <h2 class="text-center mb-5">Kỹ năng kỹ thuật</h2>

      <!-- Hard skills -->
      <h4 class="mb-4">Kỹ năng cứng</h4>
      <div class="row mb-5">
        <div
          class="col-md-6"
          v-for="skill in hardSkills"
          :key="skill.name"
        >
          <div class="mb-3">
            <div class="d-flex justify-content-between">
              <span class="fw-bold">{{ skill.name }}</span>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                :style="{ width: skill.level + '%' }"
                :aria-valuenow="skill.level"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft skills -->
      <h4 class="mb-4">Kỹ năng mềm</h4>
      <div class="row">
        <div
          class="col-md-4 mb-2"
          v-for="skill in softSkills"
          :key="skill"
        >
          <i class="bi bi-check-circle-fill text-success me-2"></i>{{ skill }}
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface HardSkill {
  name: string
  level: number
}

defineProps<{
  hardSkills: HardSkill[]
  softSkills: string[]
}>()
</script>
