<template>
  <div class="modal fade" id="successModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body text-center py-5">
          <i class="bi bi-check-circle text-success fs-1"></i>
          <h4 class="mt-3">Message Sent Successfully!</h4>
          <p class="text-muted">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          <button type="button" class="btn btn-main-green" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Modal is controlled by Bootstrap via data-bs attributes
</script>
