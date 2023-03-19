<script setup>
import UButton from "@/components/global/UButton.vue";

const emits = defineEmits(["deleteItem"]);
const props = defineProps({
  bookData: {
    type: Object,
    default() {
      return {};
    },
  },
});

function deleteItem() {
  emits("deleteItem", props.bookData.id);
}
</script>

<template>
  <div class="row g-0">
    <div class="col-md-4">
      <img
        :src="'/images/' + props.bookData.image"
        class="img-fluid rounded-start"
        :alt="props.bookData.image"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title mb-3">{{ props.bookData.title }}</h5>
        <h6 class="card-title mb-3">{{ props.bookData.authors }}</h6>
        <p class="card-text text-truncate">
          Описание: {{ props.bookData.description }}
        </p>
        <p class="card-text">Категория: {{ props.bookData.categories }}</p>
        <p class="card-text">
          Издательство: {{ props.publishing }}. Год:
          {{ props.bookData.publishedDate }}
        </p>
        <p class="card-text">Цена: {{ props.bookData.price }} руб.</p>
        <p class="card-text">
          <small class="text-muted">ISBN: {{ props.bookData.isbn }}</small>
        </p>
        <UButton @click="deleteItem">Удалить</UButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
