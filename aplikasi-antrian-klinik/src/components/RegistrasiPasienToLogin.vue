// Registration.vue
<template>
  <div class="min-h-screen bg-green-700 flex items-center justify-center">
    <div class="bg-black/80 p-8 rounded-lg w-full max-w-md">
      <h1 class="text-white text-2xl font-bold mb-6 text-center">Registrasi Akun</h1>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <input
            v-model="formData.nama"
            type="text"
            placeholder="Nama Pasien"
            class="w-full p-3 rounded-md bg-gray-200"
            required
          />
        </div>
        
        <div>
          <input
            v-model="formData.nomorKartu"
            type="text"
            placeholder="Nomor Kartu Berobat"
            class="w-full p-3 rounded-md bg-gray-200"
            required
          />
        </div>
        
        <div>
          <input
            v-model="formData.telepon"
            type="tel"
            placeholder="Nomor Telepon"
            class="w-full p-3 rounded-md bg-gray-200"
            required
          />
        </div>
        
        <div>
          <input
            v-model="formData.email"
            type="email"
            placeholder="Email"
            class="w-full p-3 rounded-md bg-gray-200"
            required
          />
        </div>
        
        <div>
          <input
            v-model="formData.password"
            type="password"
            placeholder="Masukan kata sandi"
            class="w-full p-3 rounded-md bg-gray-200"
            required
          />
        </div>
        
        <button
          type="submit"
          class="w-full bg-gray-200 text-black py-3 rounded-md hover:bg-gray-300 transition-colors"
        >
          Daftar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const formData = ref({
      nama: '',
      nomorKartu: '',
      telepon: '',
      email: '',
      password: ''
    })

    const handleSubmit = async () => {
      try {
        // Here you would typically make an API call to register the user
        // For demonstration, we'll simulate a successful registration
        console.log('Form submitted:', formData.value)
        
        // Redirect to login page after successful registration
        router.push('/login')
      } catch (error) {
        console.error('Registration error:', error)
      }
    }

    return {
      formData,
      handleSubmit
    }
  }
}
</script>
