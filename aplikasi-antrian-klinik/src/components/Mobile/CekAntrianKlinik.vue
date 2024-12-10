<template>
    <div class="container">
      <header class="header">
        <h1>Antrian Saat Ini</h1>
      </header>
      <main class="content">
        <section class="clinic-info">
          <h2>Cek Antrian Saat Ini</h2>
          <div class="clinic-list">
            <div class="clinic" v-for="clinic in clinics" :key="clinic.id">
              <h3>{{ clinic.name }}</h3>
              <p><strong>Nomor Antrian:</strong> {{ clinic.number }}</p>
              <p><strong>Perkiraan:</strong> {{ clinic.time }}</p>
            </div>
          </div>
          
          <!-- Buttons for navigation -->
          <div class="button-container">
            <button @click="navigateToJadwalDokter" class="nav-button">Jadwal Dokter</button>
            <button @click="navigateToDaftarBerobat" class="nav-button">Daftar Berobat Pasien</button>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "CekAntrianKlinik",
    data() {
      return {
        clinics: [
          { id: 1, name: "Poliklinik Umum", number: "A-10", time: "10:30" },
          { id: 2, name: "Poliklinik Penyakit Dalam", number: "B-8", time: "09:20" },
          { id: 3, name: "Poliklinik Gigi", number: "C-12", time: "11:40" },
          { id: 4, name: "Poliklinik Anak", number: "D-15", time: "12:40" },
          { id: 5, name: "Poliklinik Kebidanan", number: "E-14", time: "11:30" },
          { id: 6, name: "Poliklinik Kulit dan Kelamin", number: "F-7", time: "10:55" },
        ],
      };
    },
    methods: {
      navigateToJadwalDokter() {
        this.$router.push({ name: "JadwalDokter" });
      },
      navigateToDaftarBerobat() {
        this.$router.push({ name: "DaftarBerobatPasien" });
      },
    },
  };
  </script>
  
  <style scoped>
  /* General Reset */
  * {
    box-sizing: border-box;
  }
  
  /* Main Container */
  .container {
    background-color: #007b00;
    color: white;
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  /* Header */
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  /* Content Section */
  .content {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  
  /* Clinic Info Section */
  .clinic-info {
    background-color: #f2f2f2;
    color: #333;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 900px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .clinic-info h2 {
    margin-bottom: 20px;
    text-align: center;
    color: #007b00;
  }
  
  /* Clinics Grid */
  .clinic-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
  }
  
  .clinic {
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .clinic:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .clinic h3 {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #007b00;
  }
  
  /* Buttons Section */
  .button-container {
    display: flex;
    justify-content: space-around;
    gap: 15px;
    margin-top: 10px;
  }
  
  .nav-button {
    background-color: #007b00;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .nav-button:hover {
    background-color: #005800;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .clinic-list {
      grid-template-columns: 1fr;
    }
  
    .button-container {
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }
  }
  </style>
  