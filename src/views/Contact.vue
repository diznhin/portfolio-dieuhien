<template>
  <div class="contact">
    <!-- Hero Section -->
    <ContactHero 
      title="Liên hệ" 
      subtitle="Liên hệ để hợp tác, trao đổi dự án, hoặc chỉ để chào hỏi!" 
    />

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
    question: 'Bạn thường làm các dự án nào?',
    answer: 'Tôi tham gia nhiều loại dự án phát triển web, bao gồm nền tảng thương mại điện tử, hệ thống quản lý nội dung, REST API và các ứng dụng web tùy chỉnh. Tôi có kinh nghiệm cả frontend và backend.'
  },
  {
    question: 'Thời gian phản hồi trung bình là bao lâu?',
    answer: 'Tôi thường phản hồi trong vòng 24-48 giờ. Nếu gấp, vui lòng ghi chú trong tin nhắn để tôi có thể trả lời sớm hơn.'
  },
  {
    question: 'Bạn có nhận làm freelance không?',
    answer: 'Có, tôi nhận dự án freelance. Vui lòng cung cấp chi tiết dự án trong form liên hệ, tôi sẽ phản hồi về thời gian và chi phí.'
  },
  {
    question: 'Bạn chuyên về công nghệ nào?',
    answer: 'Tôi chuyên về Vue.js, React, Node.js, PHP/Laravel, MongoDB và MySQL. Tôi cũng có kinh nghiệm với Bootstrap, thiết kế responsive và các phương pháp phát triển hiện đại.'
  }
])

const validateForm = () => {
  errors.value = { name: '', email: '', subject: '', message: '' }
  let isValid = true

  if (!form.value.name.trim()) {
    errors.value.name = 'Vui lòng nhập tên'
    isValid = false
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Vui lòng nhập email'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Vui lòng nhập địa chỉ email hợp lệ'
    isValid = false
  }

  if (!form.value.subject) {
    errors.value.subject = 'Vui lòng chọn chủ đề'
    isValid = false
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Vui lòng nhập tin nhắn'
    isValid = false
  } else if (form.value.message.trim().length < 10) {
    errors.value.message = 'Tin nhắn phải ít nhất 10 ký tự'
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })


    const contentType = response.headers.get('content-type') || ''
    const data = contentType.includes('application/json')
      ? await response.json()
      : { message: await response.text() }


    if (response.ok && data?.success !== false) {

      const successMessage = data?.message || 'Gửi thành công!'
      
      const modalElement = document.getElementById('successModal')

      if (modalElement && (window as any).bootstrap?.Modal) {
        const modal = new (window as any).bootstrap.Modal(modalElement)
        modal.show()
      } else {
        alert(successMessage)
      }

      form.value = { name: '', email: '', phone: '', subject: '', message: '', newsletter: false }
      if (!modalElement) alert(successMessage)
      return
    }


    if (data?.errors) {
      data.errors.forEach((error: { field: keyof FormErrors; message: string }) => {
        if (error.field in errors.value) errors.value[error.field] = error.message
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
  window.open('https://maps.google.com/?q=DaNang,Vietnam', '_blank')
}

const socialClick = (platform: string) => {
  console.log(`Nhấn vào: ${platform}`)
}
</script>


