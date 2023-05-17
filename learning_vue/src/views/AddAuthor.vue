<script setup>
import {author, addAuthor} from "@/utils/author";
import {book} from "@/utils/book";
import {reactive} from "vue";

const item = reactive(Object.assign({}, author));

function resetFields() {
  Object.assign(item, author);
}
</script>

<template>
  <h5 class="mt-3">Добавить автора</h5>
  <div class="container row">
    <form class="row" @submit.prevent.stop="addAuthor(item); resetFields();">
      <div id="input" class="input-group mx-auto col-lg-6 col-md-8 col-sm-12">
        <input class="form-control mb-5"
               type="text"
               placeholder="ФИО автора"
               required=""
               v-model.trim="item.fio"/>
        <input class="form-control mb-5"
               type="text"
               placeholder="Страна"
               required=""
               v-model.trim="item.country"/>
        <input class="form-control mb-5"
               type="date"
               placeholder="Дата рождения"
               required=""
               v-model.trim="item.birthDate"
        />
        <input class="form-control mb-5"
               type="text"
               placeholder="пол"
               required=""
               v-model.trim="item.gender"/>
      </div>
      <div>
        <button class="btn btn-primary">Добавить</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
