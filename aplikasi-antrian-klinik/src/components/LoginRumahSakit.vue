// LoginForm.vue
<template>
  <div class="min-h-screen bg-green-800 flex items-center justify-center">
    <div class="bg-green-200 p-8 rounded w-full max-w-md mx-4">
      <h1 class="text-black text-3xl font-bold text-center mb-8">LOGIN</h1>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <input
            v-model="formData.username"
            type="text"
            placeholder="Nama Pengguna"
            class="w-full px-4 py-2.5 rounded bg-gray-100"
          />
        </div>
        
        <div>
          <input
            v-model="formData.email"
            type="email"
            placeholder="Email"
            class="w-full px-4 py-2.5 rounded bg-gray-100"
          />
        </div>
        
        <div>
          <input
            v-model="formData.password"
            type="password"
            placeholder="Masukan kata sandi"
            class="w-full px-4 py-2.5 rounded bg-gray-100"
          />
        </div>
        
        <div class="flex justify-center mt-8">
          <button
            type="submit"
            class="bg-gray-100 px-8 py-2 rounded text-black"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LoginForm',
  setup() {
    const formData = ref({
      username: '',
      email: '',
      password: ''
    })

    const handleSubmit = () => {
      console.log('Form submitted:', formData.value)
      // Add your login logic here
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
</style>
