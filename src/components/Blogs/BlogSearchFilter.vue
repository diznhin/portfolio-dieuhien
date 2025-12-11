<template>
  <section class="py-4 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-3">
          <div class="input-group">
            <input 
              type="text" 
              class="form-control" 
              placeholder="Tìm kiếm nội dung…"
              v-model="modelSearch"
              @input="$emit('filter')"
            >
            <button class="btn btn-outline-green" type="button">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <select class="form-select" v-model="modelCategory" @change="$emit('filter')">
            <option 
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  categories: {
    type: Array as () => string[],
    required: true
  }
})

defineEmits(['filter'])

const modelSearch = defineModel<string>('searchQuery')
const modelCategory = defineModel<string>('selectedCategory')
</script>
