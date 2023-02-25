<script setup>
import {reactive, ref, onMounted} from "vue";
import axios from "axios";
import BookCard from "@/components/BookItem.vue";

const query = ref('');
let books = reactive({});

const submitForm = () => {
  if (query.value) {
    axios
        .get('https://www.googleapis.com/books/v1/volumes?q='
            + query.value
            + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'
            + '&maxResults=10')
        .then(responce => {
          if (responce.data.items)
            console.log(responce.data.items)
            books = responce.data.items;
        })
        .catch(err => console.log(err));
  } else alert('Что будем искать?')
}
</script>

<template>
    <div id="title" class="center">
      <h1 id="header" class="text-center mt-5">Поиск книг</h1>
      <form class="row" @submit.prevent.stop='submitForm'>
        <div id="input" class="input-group mx-auto col-lg-6 col-md-8 col-sm-12">
          <input id="search-box" type="search" class="form-control" placeholder="Поиск книг..." v-model.trim="query">
          <button id="search" class="btn btn-primary">Поиск</button>
        </div>
      </form>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
      <div class="col"
           v-for="book in books"
           :key="book.id">
        <BookCard v-bind:bookData="book"/>
      </div>
    </div>
</template>

<style scoped>

</style>