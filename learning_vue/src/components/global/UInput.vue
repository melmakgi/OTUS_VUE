<script setup>
import {watch, ref} from 'vue';

const emits = defineEmits([
  'update:modelValue'
])

const {modelValue} = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
    validator: (val) => [
      'text',
      'password',
      'tel',
      'email',
      'search',
      'textarea'
    ].includes(val)
  }
})

const value = ref(modelValue);

watch(value, () => {
      emits('update:modelValue', value.value)
    }
)
</script>

<template>
  <div>
    <input class="form-control mb-3"
           v-if="type !== 'textarea'"
           :type="type"
           :placeholder="placeholder"
           v-model="value"
    />
    <textarea class="form-control mb-3"
              v-else
              rows="5"
              :placeholder="placeholder"
              v-model="value"
    ></textarea>
  </div>
</template>

<style scoped>

</style>