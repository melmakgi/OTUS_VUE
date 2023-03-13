<script setup>
import AuthorsSelect from "@/components/AuthorsSelect.vue";
import {author, authors} from "@/utils/author";
import {reactive, ref} from "vue";

const item = Object.assign({}, author);
const selectAuthor = reactive({});
let books = ref([]);

function selected(val) {
  Object.assign(selectAuthor, authors.value.find(i => i.fio === val));
  books.value = selectAuthor.books;
}

</script>

<template>
  <h5 class="mt-3">Список авторов и их книг</h5>
  <div class="container">
    <AuthorsSelect v-model="item.fio"
                   @input="selected"
    ></AuthorsSelect>
  </div>
  <div class="container" v-if="Object.keys(selectAuthor).length">
    <div class="mt-3 mb-3">
      <span>Страна: {{ selectAuthor.country + ", " }}</span>
      <span>пол: {{ selectAuthor.gender + ", " }}</span>
      <span>дата рождения: {{ selectAuthor.birthDate.split("-").reverse().join(".") + " г." }}</span>
    </div>
    <h6 class="mt-3">Книги автора:</h6>
    <ol>
      <li v-for="book in books"
          :key="book">{{ "«" + book + "»" }}
      </li>
    </ol>
  </div>
</template>

<style scoped>

</style>
