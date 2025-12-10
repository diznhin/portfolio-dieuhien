<template>
  <div class="card h-100">
    <div class="card-body">
      <h5 class="fw-bold mb-4">Về bản thân</h5>
      <p v-for="(para, i) in paragraphs" :key="i">{{ para }}</p>
      <h6 class="fw-bold mt-4">Kỹ năng:</h6>
      <div class="d-flex flex-wrap gap-2">
        <span
          v-for="(skill, i) in skills"
          :key="i"
          class="badge skill-badge"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  paragraphs: string[];
  skills: string[];
}>();
</script>
