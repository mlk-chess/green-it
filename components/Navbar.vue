<template>
<div class="topnav" id="myTopnav">
  <router-link to="/"><span class="link active">GREEN CAR</span></router-link>
  <router-link to="/product"><span class="link">Green X</span></router-link>
  <span class="link"><router-link to="/contact">Contact</router-link></span>

  <select id="locale-select" v-model="$i18n.locale"
      class="appearance-none bg-white border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 m-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
      <option value="en" class="flex items-center">
          En
      </option>
      <option value="fr" class="flex items-center">
          Fr
      </option>
  </select>

  <span class="icon" @click="myFunction">
    <img src="@/assets/img/burger.svg" loading=”lazy” alt="Menu de navigation">
  </span>
</div>
</template>

<style scoped>

.topnav {
  overflow: hidden;
  background-color: rgba(0, 0, 0,0.9);
}

.topnav span.link {
  float: left;
  display: block;
  color: #eee;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav span.link:hover {
  background-color: #eee;
  color: black;
}

.topnav span.link.active {
  background-color: #0074e8;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav span.link:not(:first-child), #locale-select {display: none;}
  .topnav span.icon {
    float: right;
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .topnav.responsive span.link{
    float: none;
    display: block;
    text-align: left;
  }
}
</style>

<script setup>

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>