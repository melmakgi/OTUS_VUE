<script setup>
import { ref } from "vue";
import axios from "axios";
import BookItem from "@/components/BookItem.vue";

const query = ref("");
const books = ref({});
const submitForm = () => {
  if (query.value) {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          query.value +
          "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
          "&maxResults=10"
      )
      .then((responce) => {
        if (responce.data.items) books.value = responce.data.items;
      })
      .catch((err) => console.log(err));
  } else alert("Что будем искать?");
};
</script>

<template>
  <div class="mt-3">
    <form class="row" @submit.prevent.stop="submitForm">
      <div id="input" class="input-group mx-auto col-lg-6 col-md-8 col-sm-12">
        <input
          id="search-box"
          type="search"
          class="form-control"
          placeholder="Поиск книг..."
          v-model.trim="query"
        />
        <button id="search" class="btn btn-primary">Поиск</button>
      </div>
    </form>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
    <div class="col" v-for="book in books" v-bind:key="book.id">
      <BookItem v-bind:bookData="book" />
    </div>
  </div>
</template>

<style scoped></style>
