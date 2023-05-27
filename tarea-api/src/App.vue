<template>
  <div class="div"> 
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
.div{
  align-items:center;
}
.container {
  display: flex;
  justify-content: center; /* Centrado horizontal */
  align-items: center; /* Centrado vertical */
  height: 100vh; /* Altura igual al 100% del viewport */
}
</style>
