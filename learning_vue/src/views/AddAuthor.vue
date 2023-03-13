<script setup>
import UInput from "@/components/global/UInput.vue";
import {author, addAuthor} from "@/utils/author";

const item = Object.assign({}, author);

</script>

<template>
  <h5 class="mt-3">Добавить автора</h5>
  <div class="container row">
    <form class="row" @submit.prevent.stop='addAuthor(item)'>
      <div id="input" class="input-group mx-auto col-lg-6 col-md-8 col-sm-12">
        <UInput type="text" placeholder="ФИО автора" v-model.trim="item.fio"/>
        <UInput type="text" placeholder="Страна" v-model.trim="item.country"/>
        <UInput type="date" placeholder="Дата рождения" v-model.trim="item.birthDate"/>
        <UInput type="text" placeholder="пол" v-model.trim="item.gender"/>
      </div>
      <div>
        <button class="btn btn-primary">Добавить</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>