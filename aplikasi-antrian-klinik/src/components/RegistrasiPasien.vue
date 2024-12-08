// RegistrationForm.vue
<template>
  <div class="min-h-screen bg-green-800 flex items-center justify-center p-4">
    <div class="bg-black/80 p-6 rounded-lg w-full max-w-sm">
      <h2 class="text-white text-2xl font-medium mb-6 text-center">
        Registrasi Akun
      </h2>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div class="space-y-4">
          <input
            v-model="formData.namaPasien"
            type="text"
            placeholder="Nama Pasien"
            class="w-full p-3 rounded bg-gray-300 placeholder-gray-600"
          />
          
          <input
            v-model="formData.nomorKartu"
            type="text"
            placeholder="Nomor Kartu Berobat"
            class="w-full p-3 rounded bg-gray-300 placeholder-gray-600"
          />
          
          <input
            v-model="formData.nomorTelepon"
            type="tel"
            placeholder="Nomor Telepon"
            class="w-full p-3 rounded bg-gray-300 placeholder-gray-600"
          />
          
          <input
            v-model="formData.email"
            type="email"
            placeholder="Email"
            class="w-full p-3 rounded bg-gray-300 placeholder-gray-600"
          />
          
          <input
            v-model="formData.password"
            type="password"
            placeholder="Masukan kata sandi"
            class="w-full p-3 rounded bg-gray-300 placeholder-gray-600"
          />
        </div>
        
        <div class="flex justify-center mt-6">
          <button
            type="submit"
            class="px-12 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
          >
            Daftar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'RegistrationForm',
  setup() {
    const formData = ref({
      namaPasien: '',
      nomorKartu: '',
      nomorTelepon: '',
      email: '',
      password: ''
    })

    const handleSubmit = () => {
      console.log('Form submitted:', formData.value)
      // Add your form submission logic here
    }

    return {
      formData,
      handleSubmit
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255,255,255,0.2);
}
</style>
