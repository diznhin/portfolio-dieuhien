<template>
  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">{{ title }}</h2>
      <div class="timeline">
        <div 
          v-for="(event, i) in events" 
          :key="i" 
          class="timeline-item"
          :class="{ 'timeline-item-left': i % 2 === 0 }"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h5 class="fw-bold">{{ event.year }}</h5>
            <h6>{{ event.title }}</h6>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

defineProps<{
  title: string;
  events: TimelineEvent[];
}>();
</script>

