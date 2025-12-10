<template>
  <section class="pb-5" v-if="totalPages > 1">
    <div class="container">
      <nav aria-label="Blog pagination">
        <ul class="pagination justify-content-center">

          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="$emit('change', currentPage - 1)">
              Previous
            </a>
          </li>

          <li 
            class="page-item" 
            v-for="page in totalPages" 
            :key="page"
            :class="{ active: page === currentPage }"
          >
            <a class="page-link" href="#" @click.prevent="$emit('change', page)">
              {{ page }}
            </a>
          </li>

          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="$emit('change', currentPage + 1)">
              Next
            </a>
          </li>

        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

defineEmits(['change'])
</script>
