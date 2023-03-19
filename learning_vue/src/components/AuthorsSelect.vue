<script setup>
import { ref } from "vue";
import { authors } from "@/utils/author";

const emits = defineEmits(["input"]);

const selected = ref("Выберите автора для просмотра его книг");
</script>

<template>
  <select
    class="form-select form-select-sm mb-3"
    v-model="selected"
    @input="$emit('input', $event.target.value)"
  >
    <option disabled selected>{{ selected }}</option>
    <option v-for="author in authors" :value="author.fio">
      {{ author.fio }}
    </option>
  </select>
</template>

<style scoped></style>
