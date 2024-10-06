<template>
  <div>
    Bai7:<header-view></header-view><br>
    Bai8:<nav-view></nav-view><br>
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderView from './views/HeaderView.vue';
import NavbarView from './views/NavbarView.vue';
</script>

<style>

</style>