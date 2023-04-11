<template>
    <Navbar />
    <HeaderProduct />
    <VideoProduct />
    <DetailProduct />
</template>

<script setup>
import HeaderProduct from '../components/product/HeaderProduct.vue';
import DetailProduct from '../components/product/DetailProduct.vue';
import VideoProduct from '../components/product/VideoProduct.vue';
import Navbar from '../components/Navbar.vue';

</script>

<style scoped>

nav{
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100%;
}

</style>
