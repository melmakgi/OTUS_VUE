<script setup>
const props = defineProps({
  bookData: {
    type: Object,
    default() {
      return {};
    },
  },
});

let image = props.bookData.volumeInfo.imageLinks; //Array
const title = props.bookData.volumeInfo.title;
const authors = props.bookData.volumeInfo.authors; // Array
let price = props.bookData.saleInfo.listPrice; // Object
const published = props.bookData.volumeInfo.publishedDate;
const categories = props.bookData.volumeInfo.categories; // Array
const publisher = props.bookData.volumeInfo.publisher;
const previewLink = props.bookData.volumeInfo.previewLink;

let authorList = arrayString(authors);
let categoriesList = arrayString(categories);

if (image) {
  image = props.bookData.volumeInfo.imageLinks.smallThumbnail;
}

if (price) {
  price = "Цена: " + price.amount + " " + price.currencyCode;
} else {
  price = "нет в продаже";
}

function arrayString(array) {
  if (array instanceof Array) {
    return array.join(", ");
  }
}
</script>

<template>
  <div class="card h-100">
    <div class="row g-0 h-100 rounded">
      <div class="col-md-4 border rounded">
        <img v-bind:src="image" alt="Нет изображения" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text mb-3">Автор(ы): {{ authorList }}</p>
          <p class="card-text mt-0 mb-0">Категория(и): {{ categoriesList }}</p>
          <p class="card-text mt-0 mb-0">Издательство: {{ publisher }}</p>
          <p class="card-text mt-0 mb-0">Дата издания: {{ published }}</p>
          <p class="card-text mb-0 mt-0">
            <small class="text-muted">{{ price }}</small>
          </p>
        </div>
      </div>
    </div>
    <div class="card-footer text-center">
      <a v-bind:href="previewLink" class="btn btn-primary" target="_blank"
        >Просмотр</a
      >
    </div>
  </div>
</template>

<style scoped></style>
