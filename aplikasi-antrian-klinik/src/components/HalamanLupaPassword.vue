<template>
  <div class="min-h-screen bg-green-800 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Header -->
      <div class="bg-green-900 text-white px-6 py-4 rounded-t-lg">
        <h1 class="text-xl">Lupa Kata Sandi</h1>
      </div>

      <!-- Form Container -->
      <div class="bg-green-900/80 rounded-b-lg p-6">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Email Input -->
          <div class="relative">
            <input 
              v-model="email"
              type="email"
              placeholder="Email"
              class="w-full p-3 rounded bg-gray-200 focus:outline-none"
            />
            <button 
              @click="requestVerification"
              type="button"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
            >
              Minta Verifikasi
            </button>
          </div>

          <!-- Verification Code Input -->
          <div class="relative">
            <input 
              v-model="verificationCode"
              type="text"
              placeholder="Masukan kode"
              class="w-full p-3 rounded bg-gray-200 focus:outline-none"
            />
            <button 
              @click="verify"
              type="button"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
            >
              Verifikasi
            </button>
          </div>

          <!-- New Password Input -->
          <input 
            v-model="newPassword"
            type="password"
            placeholder="Masukan kata sandi baru"
            class="w-full p-3 rounded bg-gray-200 focus:outline-none"
          />

          <!-- Submit Button -->
          <button 
            type="submit"
            class="w-full bg-gray-200 text-gray-800 p-3 rounded hover:bg-gray-300 transition-colors"
          >
            login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordResetForm',
  data() {
    return {
      email: '',
      verificationCode: '',
      newPassword: '',
    }
  },
  methods: {
    requestVerification() {
      // Implement verification request logic here
      console.log('Requesting verification for:', this.email)
    },
    verify() {
      // Implement verification logic here
      console.log('Verifying code:', this.verificationCode)
    },
    handleSubmit() {
      // Implement form submission logic here
      console.log('Form submitted:', {
        email: this.email,
        verificationCode: this.verificationCode,
        newPassword: this.newPassword
      })
    }
  }
}
</script>
