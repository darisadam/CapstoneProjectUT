<template>
    <div class="login-container">
      <div class="login-wrapper">
        <!-- Title -->
        <h1 class="login-title">Login</h1>
  
        <!-- Login Form -->
        <form @submit.prevent="handleSubmit" class="form-container">
          <!-- Username Field -->
          <div class="form-group">
            <input
              v-model="formData.username"
              type="text"
              placeholder="Nama Pengguna"
              class="form-input"
              required
            />
          </div>
  
          <!-- Email Field -->
          <div class="form-group">
            <input
              v-model="formData.email"
              type="email"
              placeholder="Email"
              class="form-input"
              required
            />
          </div>
  
          <!-- Password Field -->
          <div class="form-group">
            <input
              v-model="formData.password"
              type="password"
              placeholder="Masukkan Kata Sandi"
              class="form-input"
              required
            />
          </div>
  
          <!-- Submit Button -->
          <div class="form-action">
            <button type="submit" class="form-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'LoginKlinik',
    setup() {
      const formData = ref({
        username: '',
        email: '',
        password: '',
      });
  
      const handleSubmit = () => {
        if (!formData.value.username || !formData.value.email || !formData.value.password) {
          alert('Harap isi semua bidang!');
          return;
        }
        console.log('Form submitted:', formData.value);
        // Add your login logic here
      };
  
      return {
        formData,
        handleSubmit,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Container Styles */
  .login-container {
    background-color: #166534; /* Dark Green */
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  /* Wrapper Styles */
  .login-wrapper {
    background-color: #bbf7d0; /* Light Green */
    padding: 40px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  /* Title Styles */
  .login-title {
    color: #1a1a1a;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  
  /* Form Styles */
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-input {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 6px;
    background-color: #f3f3f3;
    font-size: 16px;
    transition: box-shadow 0.2s;
  }
  
  .form-input:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(72, 187, 120, 0.5); /* Focus ring */
  }
  
  .form-input::placeholder {
    color: #666;
    font-size: 14px;
  }
  
  /* Button Styles */
  .form-action {
    display: flex;
    justify-content: center;
  }
  
  .form-button {
    background-color: #f3f3f3; /* Light Gray */
    color: #1a1a1a;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
  }
  
  .form-button:hover {
    background-color: #e2e2e2; /* Slightly darker gray */
    transform: translateY(-2px);
  }
  
  .form-button:active {
    transform: translateY(0);
  }
  </style>
  