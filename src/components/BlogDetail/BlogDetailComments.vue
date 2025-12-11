<template>
  <div class="mt-5">
    <h4>Comments ({{ comments.length }})</h4>
    
    <!-- Comment Form -->
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">Để lại bình luận</h5>
        <form @submit.prevent="submitComment">
          <div class="mb-3">
            <input 
              type="text" 
              class="form-control" 
              placeholder="Nhập tên của bạn"
              v-model="commentForm.name"
              required
            >
          </div>
          <div class="mb-3">
            <input 
              type="email" 
              class="form-control" 
              placeholder="Nhập Mail của bạn..."
              v-model="commentForm.email"
              required
            >
          </div>
          <div class="mb-3">
            <textarea 
              class="form-control" 
              rows="4" 
              placeholder="Để lại bình luận"
              v-model="commentForm.content"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-main-green">Gửi</button>
        </form>
      </div>
    </div>

    <!-- Comments List -->
    <div v-for="comment in comments" :key="comment.id" class="card mb-3">
      <div class="card-body">
        <div class="d-flex justify-content-between mb-2">
          <h6 class="mb-0">{{ comment.name }}</h6>
          <small class="text-muted">{{ comment.date }}</small>
        </div>
        <p class="mb-0">{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Comment {
  id: number
  name: string
  email: string
  content: string
  date: string
}

interface CommentForm {
  name: string
  email: string
  content: string
}

const comments = defineModel<Comment[]>('comments', { required: true })

const commentForm = ref<CommentForm>({
  name: '',
  email: '',
  content: ''
})

const submitComment = () => {
  const newComment: Comment = {
    id: comments.value.length + 1,
    name: commentForm.value.name,
    email: commentForm.value.email,
    content: commentForm.value.content,
    date: new Date().toISOString().split('T')[0] || ''
  }
  comments.value.unshift(newComment)
  
  // Reset form
  commentForm.value = {
    name: '',
    email: '',
    content: ''
  }
  
  alert('Gửi mail thành công!')
}
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
</style>
