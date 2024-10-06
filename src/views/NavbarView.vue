<template>
    <nav>
      <router-link 
        to="/Dashboard" 
        class="link" 
        :class="{ active: isActive('/Dashboard') }">
        Dashboard
      </router-link>
      
      <router-link 
        to="/Account" 
        class="link" 
        :class="{ active: isActive('/Account') }">
        Account
      </router-link>
      
      <router-link 
        to="/Product" 
        class="link" 
        :class="{ active: isActive('/Product') }">
        Product
      </router-link>
    </nav>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const isActive = (path) => route.path === path;
  </script>
  
  <style scoped>
  nav {
    display: flex;
    gap: 10px;
  }
  
  .link {
    padding: 10px 15px;
    text-decoration: none;
    color: black;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  
  .active {
    background-color: blue;
    color: #fff;
    font-weight: 700;
  }
  </style>
  