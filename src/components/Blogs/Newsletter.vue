<template>
  <section class="bg-main-green text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h3 class="mb-3">Subscribe to My Newsletter</h3>
          <p class="mb-4">Get the latest articles and updates delivered to your inbox</p>

          <form class="row g-3" @submit.prevent="submit">
            <div class="col-md-8">
              <input 
                type="email" class="form-control"
                placeholder="Enter your email"
                v-model="email"
                required
              >
            </div>
            <div class="col-md-4">
              <button type="submit" class="btn btn-warning w-100">Subscribe</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const submit = () => {
  alert(`Thank you for subscribing: ${email.value}`)
  email.value = ''
}
</script>
