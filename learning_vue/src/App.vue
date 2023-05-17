<script setup>
import UFooter from "@/components/global/UFooter.vue";
import UNavbar from "@/components/global/UNavbar.vue";
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <UNavbar></UNavbar>
    <main class="flex-fill container">
      <RouterView/>
    </main>
    <UFooter>&copy; 2023 OTUS, Vue.js</UFooter>
  </div>
</template>

<style scoped>
</style>
