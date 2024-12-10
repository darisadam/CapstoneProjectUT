<template>
    <div class="registration-container">
      <div class="registration-wrapper">
        <!-- Title -->
        <h2 class="registration-title">Registrasi Akun</h2>
  
        <!-- Registration Form -->
        <form @submit.prevent="handleSubmit" class="form-container">
          <!-- Nama Pasien -->
          <div class="form-group">
            <input
              v-model="formData.namaPasien"
              type="text"
              placeholder="Nama Pasien"
              class="form-input"
              required
            />
          </div>
  
          <!-- Nomor Kartu Berobat -->
          <div class="form-group">
            <input
              v-model="formData.nomorKartu"
              type="text"
              placeholder="Nomor Kartu Berobat"
              class="form-input"
              required
            />
          </div>
  
          <!-- Nomor Telepon -->
          <div class="form-group">
            <input
              v-model="formData.nomorTelepon"
              type="tel"
              placeholder="Nomor Telepon"
              class="form-input"
              required
            />
          </div>
  
          <!-- Email -->
          <div class="form-group">
            <input
              v-model="formData.email"
              type="email"
              placeholder="Email"
              class="form-input"
              required
            />
          </div>
  
          <!-- Password -->
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
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'RegistrasiPasien',
    setup() {
      const formData = ref({
        namaPasien: '',
        nomorKartu: '',
        nomorTelepon: '',
        email: '',
        password: '',
      });
  
      const handleSubmit = () => {
        if (
          !formData.value.namaPasien ||
          !formData.value.nomorKartu ||
          !formData.value.nomorTelepon ||
          !formData.value.email ||
          !formData.value.password
        ) {
          alert('Harap isi semua bidang!');
          return;
        }
        console.log('Form submitted:', formData.value);
        // Add form submission logic here
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
  .registration-container {
    background-color: #166534; /* Dark Green */
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  
  /* Wrapper Styles */
  .registration-wrapper {
    background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent black */
    padding: 32px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  /* Title Styles */
  .registration-title {
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 24px;
  }
  
  /* Form Styles */
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .form-group {
    margin-bottom: 16px;
  }
  
  .form-input {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 6px;
    background-color: #f3f3f3;
    font-size: 16px;
    transition: box-shadow 0.2s, background-color 0.2s;
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
    font-weight: 600;
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
  