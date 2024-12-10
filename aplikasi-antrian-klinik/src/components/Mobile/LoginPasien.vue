<template>
    <div class="login-container">
      <!-- Top Right Navigation Button -->
      <button class="nav-login-klinik" @click="navigateToLoginKlinik">Klinik Login</button>
  
      <!-- Login UI Wrapper -->
      <div class="login-wrapper">
        <!-- Title -->
        <h1 class="login-title">Login</h1>
  
        <!-- Email Input -->
        <div class="form-group">
          <input 
            type="email" 
            v-model="email" 
            placeholder="Masukkan email"
            class="form-input"
            required
          />
        </div>
  
        <!-- Password Input -->
        <div class="form-group">
          <input 
            type="password" 
            v-model="password" 
            placeholder="Masukkan kata sandi"
            class="form-input"
            required
          />
        </div>
  
        <!-- Forgot Password Link -->
        <div class="forgot-password">
          <a @click.prevent="navigateToLupaPassword" class="forgot-link">Lupa Kata Sandi?</a>
        </div>
  
        <!-- Login Button -->
        <button 
          @click="handleLogin"
          class="login-button"
        >
          Login
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginPasien",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      navigateToLoginKlinik() {
        this.$router.push({ name: "LoginKlinik" });
      },
      navigateToLupaPassword() {
        this.$router.push({ name: "LupaPasswordPasien" });
      },
      handleLogin() {
        if (!this.email || !this.password) {
          alert("Harap isi email dan kata sandi!");
          return;
        }
        // Handle successful login navigation
        console.log("Login successful with credentials:", { email: this.email, password: this.password });
        this.$router.push({ name: "CekAntrianKlinik" });
      },
    },
  };
  </script>
  
  <style scoped>
  /* General Reset */
  * {
    box-sizing: border-box;
  }
  
  /* Green Background Across Entire Screen */
  .login-container {
    background-color: #1b5e20; /* Primary green */
    height: 100vh; /* Ensures it takes up the entire viewport height */
    width: 100%; /* Ensures it spans the entire viewport width */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }
  
  /* Top Right Navigation Button for LoginKlinik */
  .nav-login-klinik {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #42a5f5;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  .nav-login-klinik:hover {
    background-color: #1e88e5;
  }
  
  /* Login Wrapper */
  .login-wrapper {
    background-color: rgba(0, 0, 0, 0.85);
    padding: 40px 30px;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  /* Login Title */
  .login-title {
    color: white;
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: bold;
  }
  
  /* Form Inputs */
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 6px;
    background-color: #f5f5f5;
    font-size: 1rem;
    transition: box-shadow 0.2s ease;
  }
  
  .form-input:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.6);
  }
  
  /* Forgot Password */
  .forgot-password {
    text-align: right;
    margin-bottom: 20px;
  }
  
  .forgot-link {
    color: #42a5f5;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;
  }
  
  .forgot-link:hover {
    color: #1e88e5;
  }
  
  /* Login Button */
  .login-button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 6px;
    background-color: #42a5f5;
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
  }
  
  .login-button:hover {
    background-color: #1e88e5;
    transform: translateY(-2px);
  }
  
  /* Responsive UI for Mobile and Desktop Devices */
  @media (max-width: 768px) {
    .login-wrapper {
      padding: 20px;
    }
  
    .login-title {
      font-size: 1.8rem;
    }
  }
  
  @media (max-width: 480px) {
    .login-wrapper {
      padding: 15px;
    }
  
    .form-input,
    .login-button {
      font-size: 0.9rem;
    }
  
    .login-title {
      font-size: 1.5rem;
    }
  }
  </style>
  