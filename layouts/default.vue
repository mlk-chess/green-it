<template>
  <div class="bg-white dark:bg-black">
    <slot />
    <Footer/>
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue"
</script>
