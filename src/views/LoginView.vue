<template>
    <div class="create-account">
      <h2 >Login account</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Your email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder=""
            required
          />
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            required
          />
        </div>
        
        <button type="submit" class="btn-primary">Login an account</button>
      </form>
      
      <p class="login-link">
       Chưa có account à ?
        <a href="/login">Bấm ở đây</a>
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  </script>
  
  <style scoped>
  .create-account {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
    color:black;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color:black;
  }
  
  .form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .btn-primary {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  
  .login-link {
    text-align: center;
    margin-top: 20px;
  }
  
  .login-link a {
    color: #007bff;
    text-decoration: none;
  }
  </style>
  