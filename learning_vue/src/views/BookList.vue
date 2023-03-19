<script setup>
import { computed, ref } from "vue";
import UInput from "@/components/global/UInput.vue";
import BookItem from "@/components/BookItem2.vue";
import { books, delBookItem } from "@/utils/book";

const query = ref("");

let queryBook = computed(() => {
  let bookRes = books.value;
  let search = query.value;
  if (search) {
    bookRes = bookRes.filter((book) => {
      return (
        book.title.indexOf(search) !== -1 ||
        book.price.toString().indexOf(search) !== -1 ||
        book.publishedDate.toString().indexOf(search) !== -1 ||
        book.categories.indexOf(search) !== -1 ||
        book.publishing.indexOf(search) !== -1
      );
    });
  }
  return bookRes;
});
</script>

<template>
  <h5 class="mt-3">Книги</h5>
  <UInput v-model="query" type="search" placeholder="Поиск книг"></UInput>
  <div class="card mb-3" v-for="book in queryBook" v-bind:key="book.id">
    <BookItem :bookData="book" @deleteItem="delBookItem"></BookItem>
  </div>
</template>

<style scoped></style>
