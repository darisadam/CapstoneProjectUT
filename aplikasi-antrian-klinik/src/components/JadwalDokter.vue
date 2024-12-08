<template>
  <div class="container">
    <div class="header">
      <h1>Jadwal Dokter Tersedia</h1>
    </div>
    <div class="content">
      <div class="doctor-list">
        <div class="doctor-card" v-for="doctor in doctors" :key="doctor.id">
          <h3>{{ doctor.name }}</h3>
          <p>{{ doctor.speciality }}</p>
          <p>{{ doctor.schedule }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doctors: [
        {
          id: 1,
          name: 'dr. WIDIA RINA',
          speciality: 'DOKTER UMUM',
          schedule: 'Senin-Kamis, 08:00-12:00'
        },
        {
          id: 2,
          name: 'dr. ANGGA, Sp.PD',
          speciality: 'DOKTER SPESIALIS PENYAKIT DALAM',
          schedule: 'Rabu-Sabtu, 08:00-12:00'
        },
        {
          id: 3,
          name: 'drg. PURNAMA',
          speciality: 'DOKTER GIGI',
          schedule: 'Selasa-Kamis, 08:00-12:00'
        },
        {
          id: 4,
          name: 'dr. MAULANA, Sp.A',
          speciality: 'DOKTER SPESIALIS ANAK',
          schedule: 'Senin-Rabu, 08:00-12:00'
        },
        {
          id: 5,
          name: 'dr. ARDILES, Sp.OG',
          speciality: 'DOKTER SPESIALIS KANDUNGAN',
          schedule: 'Selasa-Sabtu, 08:00-12:00'
        },
        {
          id: 6,
          name: 'dr. SUMINAH, Sp.KK',
          speciality: 'DOKTER SPESIALIS KULIT KELAMIN',
          schedule: 'Kamis-Sabtu, 08:00-12:00'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #007B00;
  color: white;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.doctor-list {
  background-color: #F2F2F2;
  color: #333;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

.doctor-card {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 767px) {
  .container {
    padding: 10px;
  }

  .doctor-list {
    padding: 10px;
  }

  .doctor-card {
    padding: 10px;
  }
}
</style>
