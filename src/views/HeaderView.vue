<template>
  <nav>
    <router-link class="link" exact-active-class="active" :to="{ name:'home' } ">Home</router-link>
    <router-link class="link" exact-active-class="active" :to="{ name: 'Product' }">Product</router-link>
    <router-link class="link" exact-active-class="active" :to="{ name: 'Detail' }">Detail</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}
.link {
  padding: 10px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  border: 1px solid transparent;
  border-radius: 4px;
}
.active {
  color: white;
  background-color: #007bff;
  border-color: #007bff;
}
</style>