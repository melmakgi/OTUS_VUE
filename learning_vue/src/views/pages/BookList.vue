<script setup>

</script>

<template>
  <div class="container">
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
<!--      <div class="col"-->
<!--           v-for="book in books"-->
<!--           :key="book.id">-->
<!--        <BookCard v-bind:bookData="book"/>-->
<!--      </div>-->
    </div>

  </div>
</template>

<style scoped></style>