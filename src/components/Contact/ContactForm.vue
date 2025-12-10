<template>
  <section class="bg-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-center mb-4">Send Me a Message</h3>
              <form @submit.prevent="$emit('submit')">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="name" class="form-label">Name *</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="name"
                      v-model="form.name"
                      :class="{ 'is-invalid': errors.name }"
                      required
                    >
                    <div class="invalid-feedback" v-if="errors.name">
                      {{ errors.name }}
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="email" class="form-label">Email *</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="email"
                      v-model="form.email"
                      :class="{ 'is-invalid': errors.email }"
                      required
                    >
                    <div class="invalid-feedback" v-if="errors.email">
                      {{ errors.email }}
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input 
                    type="tel" 
                    class="form-control" 
                    id="phone"
                    v-model="form.phone"
                    placeholder="Optional"
                  >
                </div>
                <div class="mb-3">
                  <label for="subject" class="form-label">Subject *</label>
                  <select 
                    class="form-select" 
                    id="subject"
                    v-model="form.subject"
                    :class="{ 'is-invalid': errors.subject }"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="project">Project Collaboration</option>
                    <option value="job">Job Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                  <div class="invalid-feedback" v-if="errors.subject">
                    {{ errors.subject }}
                  </div>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message *</label>
                  <textarea 
                    class="form-control" 
                    id="message"
                    rows="5"
                    v-model="form.message"
                    :class="{ 'is-invalid': errors.message }"
                    required
                  ></textarea>
                  <div class="invalid-feedback" v-if="errors.message">
                    {{ errors.message }}
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input 
                      type="checkbox" 
                      class="form-check-input" 
                      id="newsletter"
                      v-model="form.newsletter"
                    >
                    <label class="form-check-label" for="newsletter">
                      I'd like to receive newsletter updates
                    </label>
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-main-green btn-lg" :disabled="isSubmitting">
                    <span v-if="isSubmitting">
                      <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </span>
                    <span v-else>
                      <i class="bi bi-send me-2"></i>Send Message
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  newsletter: boolean
}

interface FormErrors {
  name: string
  email: string
  subject: string
  message: string
}

defineProps<{
  form: ContactForm
  errors: FormErrors
  isSubmitting: boolean
}>()

defineEmits<{
  submit: []
}>()
</script>

<style scoped>
.btn-main-green:hover {
  background-color: #2d6e3b;
  border-color: #2d6e3b;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}
</style>
