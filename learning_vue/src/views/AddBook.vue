<script setup>
import {reactive} from "vue";
import AuthorsSelect from "@/components/AuthorsSelect.vue";
import {book, addBook} from "@/utils/book";

const item = reactive(Object.assign({}, book));

function resetFields() {
  Object.assign(item, book);
}
</script>

<template>
  <h5 class="mt-3">Добавить книгу</h5>
  <div class="container row">
    <form class="row" @submit.prevent.stop="addBook(item); resetFields();">
      <div id="input" class="input-group mx-auto col-lg-6 col-md-8 col-sm-12">
        <input class="form-control mb-5"
               type="text"
               placeholder="Название книги"
               v-model.trim="item.title"
               required=""
        >
        <AuthorsSelect multiple v-model="item.authors"></AuthorsSelect>
        <input class="form-control mb-5"
               type="text"
               placeholder="Категория"
               required=""
               v-model.trim="item.categories"
        >
      </div>
      <div id="input" class="input-group mx-auto col-lg-6 col-md-8 col-sm-12">
        <input class="form-control mb-5"
               type="number" step="0.01" min=0.01
               pattern="\d+(\.\d+)?"
               required=""
               placeholder="Цена"
               v-model.trim="item.price"
        >
        <input class="form-control mb-5"
               type="text"
               placeholder="Тег"
               required=""
               v-model.trim="item.tag">
        <input class="form-control mb-5"
               type="text"
               placeholder="Издательство"
               required=""
               v-model.trim="item.publishing"
        >
        <input class="form-control mb-5"
               type="date" step="1"
               placeholder="Дата издания"
               required=""
               v-model.trim="item.publishedDate"
        >
        <input class="form-control mb-5"
               type="number"
               min="0"
               required=""
               placeholder="ISBN"
               v-model.trim="item.isbn"
        >
      </div>
      <div class="form-floating mb-5">
        <textarea class="form-control"
                  placeholder="Краткое описание..." id="floatingTextarea"
                  v-model="item.description"></textarea>
        <label for="floatingTextarea">Краткое описание...</label>
      </div>
      <div>
        <button class="btn btn-primary">Добавить</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
