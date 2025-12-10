<template>
  <div class="contact">
    <!-- Hero Section -->
    <ContactHero title="Contact Me" subtitle="Get in touch for collaborations, projects, or just to say hello!" />

    <!-- Contact Information Section -->
    <ContactInfo @show-map="showMap" />

    <!-- Contact Form Section -->
    <ContactForm 
      :form="form" 
      :errors="errors" 
      :is-submitting="isSubmitting" 
      @submit="submitForm" 
    />

    <!-- Social Media Section -->
    <ContactSocial @social-click="socialClick" />

    <!-- FAQ Section -->
    <ContactFAQ :faqs="faqs" />

    <!-- Success Modal -->
    <ContactModal />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactHero from '../components/Contact/ContactHero.vue'
import ContactInfo from '../components/Contact/ContactInfo.vue'
import ContactForm from '../components/Contact/ContactForm.vue'
import ContactSocial from '../components/Contact/ContactSocial.vue'
import ContactFAQ from '../components/Contact/ContactFAQ.vue'
import ContactModal from '../components/Contact/ContactModal.vue'

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

const form = ref<ContactForm>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  newsletter: false
})

const errors = ref<FormErrors>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const faqs = ref([
  {
    question: 'What types of projects do you work on?',
    answer: 'I work on a variety of web development projects including e-commerce platforms, content management systems, REST APIs, and custom web applications. I\'m comfortable with both frontend and backend development.'
  },
  {
    question: 'What is your typical response time?',
    answer: 'I typically respond to inquiries within 24-48 hours. For urgent matters, please mention it in your message and I\'ll try to get back to you sooner.'
  },
  {
    question: 'Do you offer freelance services?',
    answer: 'Yes, I\'m available for freelance projects. Please provide details about your project in the contact form, and I\'ll get back to you with availability and pricing information.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in Vue.js, React, Node.js, PHP/Laravel, MongoDB, and MySQL. I\'m also experienced with Bootstrap, responsive design, and modern development practices.'
  }
])

const validateForm = () => {
  errors.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  let isValid = true

  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required'
    isValid = false
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!form.value.subject) {
    errors.value.subject = 'Please select a subject'
    isValid = false
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required'
    isValid = false
  } else if (form.value.message.trim().length < 10) {
    errors.value.message = 'Message must be at least 10 characters long'
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value)
    })

    // Parse JSON when available, otherwise fall back to plain text
    const contentType = response.headers.get('content-type') || ''
    const data = contentType.includes('application/json')
      ? await response.json()
      : { message: await response.text() }

    // Treat any 2xx status as success to avoid false "mất kết nối" alerts
    if (response.ok && data?.success !== false) {
      const successMessage = data?.message || 'Gửi thành công!'
      // Show success modal only if Bootstrap is available
      const modalElement = document.getElementById('successModal')
      if (modalElement && (window as any).bootstrap?.Modal) {
        const modal = new (window as any).bootstrap.Modal(modalElement)
        modal.show()
      } else {
        alert(successMessage)
      }
      
      // Reset form
      form.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        newsletter: false
      }
      // Ensure user sees feedback even if modal not present
      if (!modalElement) {
        alert(successMessage)
      }
      return
    }

    // Show validation errors from backend
    if (data?.errors) {
      data.errors.forEach((error: { field: keyof FormErrors; message: string }) => {
        if (error.field in errors.value) {
          errors.value[error.field] = error.message
        }
      })
    } else {
      alert(data?.message || 'Đã xảy ra lỗi, vui lòng thử lại!')
    }

  } catch (error: any) {
    console.error('Lỗi gửi tin nhắn:', error)
    alert(error?.message || 'Không thể kết nối đến server. Vui lòng thử lại sau.')
  } finally {
    isSubmitting.value = false
  }
}

const showMap = () => {
  // Open Google Maps with Hanoi coordinates
  window.open('https://maps.google.com/?q=Hanoi,Vietnam', '_blank')
}

const socialClick = (platform: string) => {
  console.log(`Clicked on ${platform}`)
  // Here you would typically navigate to the actual social media profiles
}
</script>

