<script setup>
import UButton from "@/components/global/UButton.vue";

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
          <!--          <h5 class="card-title">{{ bookName }}</h5>
                    <p class="card-text m-0">Автор: {{ author }}</p>
                    <p class="card-text m-0">Автор: {{ authors }}</p>
                    <p class="card-text m-0">Кракткое описание: {{ shortDes }}</p>
                    <p class="card-text m-0">Издатель: {{ publisher }}</p>
                    <p class="card-text m-0">Цена: {{ price }}</p>
                    <p class="card-text m-0"><small class="text-muted">Тег: {{ teg }}</small></p>
                    <p class="card-text m-0"><small class="text-muted">Категория: {{ concat }}</small></p>
                    <p class="card-text"><small class="text-muted">ISBN: {{ isbn }}</small></p>-->
          <UButton>Купить</UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>