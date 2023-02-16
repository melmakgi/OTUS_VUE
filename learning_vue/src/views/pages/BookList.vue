<script setup>
import {reactive, ref} from "vue";
import axios from "axios";

const query = ref('');
let map = new Map();
const submit = () => {
  const search =
      axios
          .get('https://www.googleapis.com/books/v1/volumes?q='
              + query.value
              + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'
              + '&maxResults=3')
          .then(responce => {
            console.log(responce.data.items)
            searchRes(responce)
          })
          .catch(err => console.log(err));
}

function searchRes(responce) {
  let key
  for (key in responce.data.items) {
    const book = {
      id: responce.data.items[key].id,
      title: responce.data.items[key].volumeInfo.title,
      description: responce.data.items[key].volumeInfo.description,
      authors: [responce.data.items[key].volumeInfo.authors],
      category: responce.data.items[key].volumeInfo.categories,
      publisher: responce.data.items[key].volumeInfo.publisher,
      previewLink: responce.data.items[key].volumeInfo.previewLink, // тут получаю ошибку
      etag: responce.data.items[key].item.volumeInfo.etag,
      imageLinks: responce.data.items[key].item.imageLinks // imageLinks - это объект
    }
    map.set(key, book);
    console.log(map.get(key));
  }
}
</script>

<template>
  <div>
    <div class="container">
      <div id="title" class="center">
        <h1 id="header" class="text-center mt-5">Поиск книг</h1>
        <form @submit.prevent.stop='submit' class="row">
          <div id="input" class="input-group mx-auto col-lg-6 col-md-8 col-sm-12">
            <input id="search-box" type="search" class="form-control" placeholder="Поиск книг..." v-model="query">
            <button id="search" class="btn btn-primary">Поиск</button>
          </div>
        </form>
      </div>
      <div class="book-list">
        <h2 class="text-center">Результаты поиска</h2>
        <div id="list-output" class="">
          <div className="container">
            <!--            <Card book={bookData}/>-->

          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>