<template>
  <div class="container">
    <div class="header">
      <h1>Antrian Saat ini</h1>
    </div>
    <div class="content">
      <div class="clinic-info">
        <h2>CEK ANTRIAN SAAT INI</h2>
        <div class="clinic-list">
          <div class="clinic" v-for="clinic in clinics" :key="clinic.id">
            <h3>{{ clinic.name }}</h3>
            <p>Nomor Antrian: {{ clinic.number }}</p>
            <p>Perkiraan: {{ clinic.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clinics: [
        {
          id: 1,
          name: 'POLIKLINIK UMUM',
          number: 'A-10',
          time: '10:30'
        },
        {
          id: 2,
          name: 'POLIKLINIK PENYAKIT DALAM',
          number: 'B-8',
          time: '09:20'
        },
        {
          id: 3,
          name: 'POLIKLINIK GIGI',
          number: 'C-12',
          time: '11:40'
        },
        {
          id: 4,
          name: 'POLIKLINIK ANAK',
          number: 'D-15',
          time: '12:40'
        },
        {
          id: 5,
          name: 'POLIKLINIK KEBIDANAN',
          number: 'E-14',
          time: '11:30'
        },
        {
          id: 6,
          name: 'POLIKLINIK KULIT DAN KELAMIN',
          number: 'F-7',
          time: '10:55'
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

.clinic-info {
  background-color: #F2F2F2;
  color: #333;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 800px;
}

.clinic-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

.clinic {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.clinic:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .container {
    padding: 10px;
  }

  .clinic-info {
    padding: 10px;
  }

  .clinic-list {
    grid-template-columns: 1fr;
  }
}
</style>
