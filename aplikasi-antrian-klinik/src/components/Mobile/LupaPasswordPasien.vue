<template>
    <div class="min-h-screen bg-green-800 flex items-center justify-center p-4">
      <div class="w-full max-w-md">
        <!-- Header -->
        <header class="bg-green-900 text-white px-6 py-4 rounded-t-lg text-center">
          <h1 class="text-xl font-bold">Lupa Kata Sandi</h1>
        </header>
  
        <!-- Form Container -->
        <section class="bg-green-900/80 rounded-b-lg p-6 shadow-lg">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Email Input -->
            <div class="relative">
              <input 
                v-model="email"
                type="email"
                placeholder="Masukkan email"
                class="w-full p-3 rounded bg-gray-100 focus:ring focus:ring-green-500 focus:outline-none"
                required
              />
              <button 
                @click="requestVerification"
                type="button"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                Minta Verifikasi
              </button>
            </div>
  
            <!-- Verification Code Input -->
            <div class="relative">
              <input 
                v-model="verificationCode"
                type="text"
                placeholder="Masukkan kode verifikasi"
                class="w-full p-3 rounded bg-gray-100 focus:ring focus:ring-green-500 focus:outline-none"
                required
              />
              <button 
                @click="verify"
                type="button"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                Verifikasi
              </button>
            </div>
  
            <!-- New Password Input -->
            <div>
              <input 
                v-model="newPassword"
                type="password"
                placeholder="Masukkan kata sandi baru"
                class="w-full p-3 rounded bg-gray-100 focus:ring focus:ring-green-500 focus:outline-none"
                required
              />
            </div>
  
            <!-- Submit Button -->
            <div>
              <button 
                type="submit"
                class="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition-colors font-semibold"
              >
                Reset Kata Sandi
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LupaPasswordPasien",
    data() {
      return {
        email: "",
        verificationCode: "",
        newPassword: "",
      };
    },
    methods: {
      requestVerification() {
        // Implement verification request logic
        console.log("Requesting verification for:", this.email);
      },
      verify() {
        // Implement verification logic
        console.log("Verifying code:", this.verificationCode);
      },
      handleSubmit() {
        // Implement form submission logic
        console.log("Form submitted:", {
          email: this.email,
          verificationCode: this.verificationCode,
          newPassword: this.newPassword,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* General layout */
  .min-h-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: #007b00;
  }
  
  header {
    background-color: #004b00;
    text-align: center;
    padding: 16px;
    border-radius: 8px 8px 0 0;
    color: white;
  }
  
  section {
    background-color: rgba(0, 75, 0, 0.8);
    padding: 24px;
    border-radius: 0 0 8px 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  input {
    background-color: #f0f0f0;
    border-radius: 4px;
    border: none;
    padding: 12px;
    font-size: 14px;
  }
  
  input:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.5);
  }
  
  button {
    transition: color 0.2s, background-color 0.2s, transform 0.2s;
  }
  
  button:hover {
    transform: scale(1.05);
  }
  
  button:active {
    transform: scale(1);
  }
  </style>
  