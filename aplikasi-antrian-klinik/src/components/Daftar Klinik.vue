<template>
  <div class="polyclinic-container">
    <div class="menu-header">
      <h2>DAFTAR POLIKLINIK</h2>
    </div>
    
    <div class="button-container">
      <button 
        v-for="clinic in clinics" 
        :key="clinic.id"
        class="clinic-button"
        @click="handleClinicClick(clinic)"
      >
        {{ clinic.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PolyclinicMenu',
  data() {
    return {
      clinics: [
        { id: 1, name: 'POLIKLINIK UMUM' },
        { id: 2, name: 'POLIKLINIK PENYAKIT DALAM' },
        { id: 3, name: 'POLIKLINIK GIGI' },
        { id: 4, name: 'POLIKLINIK ANAK' },
        { id: 5, name: 'POLIKLINIK KEBIDANAN' },
        { id: 6, name: 'POLIKLINIK KULIT DAN KELAMIN' }
      ]
    }
  },
  methods: {
    handleClinicClick(clinic) {
      console.log(`Selected clinic: ${clinic.name}`);
      // You can add navigation or other actions here
    }
  }
}
</script>

<style scoped>
.polyclinic-container {
  background-color: #008f39;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
}

.menu-header {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
}

.menu-header h2 {
  margin: 0;
  text-align: center;
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.clinic-button {
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
}

.clinic-button:hover {
  background-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.clinic-button:active {
  transform: translateY(0);
}
</style>
