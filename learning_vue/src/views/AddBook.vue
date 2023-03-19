<script setup>
import UInput from "@/components/global/UInput.vue";
import AuthorsSelect from "@/components/AuthorsSelect.vue";
import { book, addBook } from "@/utils/book";

const item = Object.assign({}, book);
</script>

<template>
  <h5 class="mt-3">Добавить книгу</h5>
  <div class="container row">
    <form class="row" @submit.prevent.stop="addBook(item)">
      <div id="input" class="input-group mx-auto col-lg-6 col-md-8 col-sm-12">
        <UInput
          type="text"
          placeholder="Название книги"
          v-model.trim="item.title"
        ></UInput>
        <AuthorsSelect v-model="item.authors"></AuthorsSelect>
        <UInput
          type="text"
          placeholder="Категория"
          v-model.trim="item.categories"
        ></UInput>
        <UInput
          type="text"
          placeholder="Цена"
          v-model.trim="item.price"
        ></UInput>
        <UInput type="text" placeholder="Тег" v-model.trim="item.tag"></UInput>
        <UInput
          type="text"
          placeholder="Издательство"
          v-model.trim="item.publishing"
        ></UInput>
        <UInput
          type="text"
          placeholder="Дата издания"
          v-model.trim="item.publishedDate"
        ></UInput>
        <UInput
          type="text"
          placeholder="ISBN"
          v-model.trim="item.isbn"
        ></UInput>
      </div>
      <UInput
        type="textarea"
        placeholder="Краткое описание..."
        v-model="item.description"
      ></UInput>
      <div>
        <button class="btn btn-primary">Добавить</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
