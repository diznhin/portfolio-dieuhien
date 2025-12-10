<template>
  <div class="mt-5 p-4 bg-light rounded">
    <h5>Enjoyed this article? Share it with others!</h5>
    <div class="d-flex gap-2 mt-3">
      <button class="btn btn-main-green" @click="$emit('share', 'twitter')">
        <i class="bi bi-twitter me-2"></i>Share on Twitter
      </button>
      <button class="btn btn-main-green" @click="$emit('share', 'facebook')">
        <i class="bi bi-facebook me-2"></i>Share on Facebook
      </button>
      <button class="btn btn-main-green" @click="$emit('share', 'linkedin')">
        <i class="bi bi-linkedin me-2"></i>Share on LinkedIn
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  share: [platform: string]
}>()
</script>
