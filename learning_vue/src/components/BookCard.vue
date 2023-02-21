<script setup>
import UButton from "@/components/global/UButton.vue";

const props = defineProps({
  book: {
    type: Object,
    default() {
      return {};
    }
  }
})

</script>

<template>
  <!-- ISBN, название, автор/список авторов, картинку, краткое описание, теги, цена, категория -->
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="../assets/book.jpeg" alt={{book.bookName}} width="150" decoding="auto">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h1>{{ props.title }}</h1>
          <UButton>Купить</UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>