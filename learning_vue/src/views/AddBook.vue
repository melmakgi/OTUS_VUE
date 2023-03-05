<script setup>
import UInput from "@/components/global/UInput.vue";
import {reactive} from "vue";

const item = reactive({
  id: "",
  title: "",
  authors: "",
  description: "",
  categories: "",
  price: "",
  tag: "",
  publishing: "",
  publishedDate: "",
  isbn: "",
  image: ""
})

const emit = defineEmits(['addBook']);
const addItem = () => {
  emit('addBook', item);
}

</script>
<template>
  <h5>Добавить книгу</h5>
  <div class="container">
    <form class="row" @submit.prevent.stop='addItem'>
      <div id="input" class="input-group mx-auto col-lg-6 col-md-8 col-sm-12">
        <UInput type="text" placeholder="Название книги" v-model="item.title"></UInput>
        <UInput type="text" placeholder="Автор" v-model="item.authors"></UInput>
        <UInput type="text" placeholder="Категория" v-model="item.categories"></UInput>
        <UInput type="text" placeholder="Цена" v-model="item.price"></UInput>
        <UInput type="text" placeholder="Тег" v-model="item.tag"></UInput>
        <UInput type="text" placeholder="Издательство" v-model="item.publishing"></UInput>
        <UInput type="text" placeholder="Дата издания" v-model="item.publishedDate"></UInput>
        <UInput type="text" placeholder="ISBN" v-model="item.isbn"></UInput>
      </div>
      <UInput type="textarea" placeholder="Краткое описание..." v-model="item.description"></UInput>
      <div>
        <button class="btn btn-primary">Добавить</button>
      </div>
    </form>

  </div>
</template>

<style scoped>

</style>