<template>
    <div class="login-container">
      <!-- Back to Login Pasien Button placed at the top right corner of the screen -->
      <button @click="navigateToLoginPasien" class="back-button">Kembali ke Login Pasien</button>
  
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
              placeholder="Username"
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
            <button type="submit" class="form-button">Login</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  export default {
    name: "LoginKlinik",
    setup() {
      const router = useRouter();
      const formData = ref({
        username: '',
        password: '',
      });
  
      const handleSubmit = () => {
        if (formData.value.username && formData.value.password) {
          console.log("Navigating to AntrianPoliklinik.vue");
          router.push({ name: 'AntrianPoliklinik' });
        } else {
          alert("Harap isi semua bidang!");
        }
      };
  
      const navigateToLoginPasien = () => {
        router.push({ name: 'LoginPasien' });
      };
  
      return {
        formData,
        handleSubmit,
        navigateToLoginPasien,
      };
    },
  };
  </script>
  
  <style scoped>
  /* General Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Login Container */
  .login-container {
    background-color: #166534; /* Dark Green */
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    position: relative; /* To position the top-right button */
  }
  
  /* Back to Login Pasien Button */
  .back-button {
    position: absolute; /* Fixed position */
    top: 15px;
    right: 15px;
    background-color: #f3f3f3;
    color: #1a1a1a;
    padding: 8px 12px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .back-button:hover {
    background-color: #e2e2e2;
  }
  
  /* Login Wrapper */
  .login-wrapper {
    background-color: #bbf7d0; /* Light Green */
    padding: 40px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  /* Title */
  .login-title {
    color: #1a1a1a;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  
  /* Form */
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
  }
  
  .form-input:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(72, 187, 120, 0.5);
  }
  
  /* Submit Button */
  .form-action {
    display: flex;
    justify-content: center;
  }
  
  .form-button {
    background-color: #f3f3f3;
    color: #1a1a1a;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
  }
  
  .form-button:hover {
    background-color: #e2e2e2;
    transform: translateY(-2px);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .login-wrapper {
      padding: 30px;
    }
  }
  
  @media (max-width: 480px) {
    .login-wrapper {
      padding: 20px;
    }
    .login-title {
      font-size: 24px;
    }
  }
  </style>
  