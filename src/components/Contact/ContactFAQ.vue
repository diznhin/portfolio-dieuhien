<template>
  <section class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-5">Câu hỏi thường gặp</h2>
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
              <h2 class="accordion-header" :id="'heading' + index">
                <button 
                  class="accordion-button" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  :data-bs-target="'#collapse' + index"
                  :class="{ collapsed: index !== 0 }"
                >
                  {{ faq.question }}
                </button>
              </h2>
              <div 
                :id="'collapse' + index" 
                class="accordion-collapse collapse" 
                :class="{ show: index === 0 }"
                :aria-labelledby="'heading' + index"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FAQ {
  question: string
  answer: string
}

defineProps<{
  faqs: FAQ[]
}>()
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  background-color: #3a8b4c;
  color: white;
}

.accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(58, 139, 76, 0.25);
}
</style>
