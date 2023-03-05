<script setup>
import UFooter from "@/components/global/UFooter.vue";
import UNavbar from "@/components/global/UNavbar.vue";
</script>

<template>
  <UNavbar></UNavbar>
  <div class="container">
    <RouterView/>
  </div>
  <UFooter>&copy; 2023 OTUS, Vue.js</UFooter>
</template>

<style scoped>
</style>
