// LoginForm.vue
<template>
  <div class="min-h-screen bg-green-800 flex items-center justify-center">
    <div class="bg-green-200 p-8 rounded-lg w-full max-w-md mx-4">
      <h1 class="text-black text-3xl font-bold text-center mb-8">LOGIN</h1>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <input
            v-model="formData.username"
            type="text"
            placeholder="Nama Pengguna"
            class="w-full px-4 py-2.5 rounded bg-gray-100"
            required
          />
        </div>
        
        <div>
          <input
            v-model="formData.email"
            type="email"
            placeholder="Email"
            class="w-full px-4 py-2.5 rounded bg-gray-100"
            required
          />
        </div>
        
        <div>
          <input
            v-model="formData.password"
            type="password"
            placeholder="Masukan kata sandi"
            class="w-full px-4 py-2.5 rounded bg-gray-100"
            required
          />
        </div>
        
        <div class="flex justify-center mt-8">
          <button
            type="submit"
            class="bg-gray-100 px-8 py-2 rounded text-black hover:bg-gray-200 transition-colors"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Memuat...' : 'Login' }}
          </button>
        </div>

        <!-- Error message -->
        <div v-if="error" class="text-red-600 text-center mt-2">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginForm',
  setup() {
    const router = useRouter()
    const formData = ref({
      username: '',
      email: '',
      password: ''
    })
    const isLoading = ref(false)
    const error = ref('')

    const handleSubmit = async () => {
      try {
        isLoading.value = true
        error.value = ''

        // Simulate API call - replace with your actual login API
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Simulate successful login
        // In a real app, you would validate credentials with your backend
        console.log('Login berhasil:', formData.value)
        
        // Redirect to daftar antrian page
        router.push('/daftar-antrian')
      } catch (err) {
        error.value = 'Login gagal. Silakan periksa kredensial Anda.'
        console.error('Login error:', err)
      } finally {
        isLoading.value = false
      }
    }

    return {
      formData,
      handleSubmit,
      isLoading,
      error
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

input::placeholder {
  color: #666;
}

.bg-green-800 {
  background-color: #166534;
}

.bg-green-200 {
  background-color: #bbf7d0;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
