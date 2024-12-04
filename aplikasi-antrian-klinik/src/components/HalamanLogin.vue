<template>
  <div class="login-container">
    <div class="login-wrapper">
      <h1 class="login-title">LOGIN</h1>
      
      <div class="form-group">
        <input 
          type="email" 
          v-model="email" 
          placeholder="Email" 
          class="form-input"
        >
      </div>
      
      <div class="form-group">
        <input 
          type="password" 
          v-model="password" 
          placeholder="Kata sandi" 
          class="form-input"
        >
      </div>
      
      <div class="forgot-password">
        <a href="#" class="forgot-link">Lupa kata sandi</a>
      </div>
      
      <button @click="handleLogin" class="login-button">
        login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // Implement login logic here
      console.log('Login attempted with:', this.email)
    }
  }
}
</script>

<style scoped>
.login-container {
  background-color: #1B5E20;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login-wrapper {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
}

.login-title {
  color: white;
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #e0e0e0;
  font-size: 16px;
}

.forgot-password {
  text-align: right;
  margin-bottom: 20px;
}

.forgot-link {
  color: #2196F3;
  text-decoration: none;
  font-size: 14px;
}

.forgot-link:hover {
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #e0e0e0;
  cursor: pointer;
  font-size: 16px;
  text-transform: lowercase;
}

.login-button:hover {
  background-color: #d0d0d0;
}
</style>
