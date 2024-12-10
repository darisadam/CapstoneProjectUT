<template>
    <div class="schedule-container">
      <!-- Header Section -->
      <header class="schedule-header">
        <h1 class="header-title">Jadwal Dokter Tersedia</h1>
      </header>
  
      <!-- Doctor List Section -->
      <main class="schedule-content">
        <section class="doctor-list">
          <article
            class="doctor-card"
            v-for="doctor in doctors"
            :key="doctor.id"
          >
            <h3 class="doctor-name">{{ doctor.name }}</h3>
            <p class="doctor-speciality">{{ doctor.speciality }}</p>
            <p class="doctor-schedule">{{ doctor.schedule }}</p>
          </article>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'JadwalDokter',
    data() {
      return {
        doctors: [
          {
            id: 1,
            name: 'dr. WIDIA RINA',
            speciality: 'DOKTER UMUM',
            schedule: 'Senin-Kamis, 08:00-12:00',
          },
          {
            id: 2,
            name: 'dr. ANGGA, Sp.PD',
            speciality: 'DOKTER SPESIALIS PENYAKIT DALAM',
            schedule: 'Rabu-Sabtu, 08:00-12:00',
          },
          {
            id: 3,
            name: 'drg. PURNAMA',
            speciality: 'DOKTER GIGI',
            schedule: 'Selasa-Kamis, 08:00-12:00',
          },
          {
            id: 4,
            name: 'dr. MAULANA, Sp.A',
            speciality: 'DOKTER SPESIALIS ANAK',
            schedule: 'Senin-Rabu, 08:00-12:00',
          },
          {
            id: 5,
            name: 'dr. ARDILES, Sp.OG',
            speciality: 'DOKTER SPESIALIS KANDUNGAN',
            schedule: 'Selasa-Sabtu, 08:00-12:00',
          },
          {
            id: 6,
            name: 'dr. SUMINAH, Sp.KK',
            speciality: 'DOKTER SPESIALIS KULIT KELAMIN',
            schedule: 'Kamis-Sabtu, 08:00-12:00',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Main Container */
  .schedule-container {
    background-color: #166534; /* Dark green */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
  
  /* Header Styles */
  .schedule-header {
    text-align: center;
    margin-bottom: 24px;
  }
  
  .header-title {
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
  }
  
  /* Content Styles */
  .schedule-content {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .doctor-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 900px;
  }
  
  /* Doctor Card Styles */
  .doctor-card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .doctor-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .doctor-name {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
  }
  
  .doctor-speciality,
  .doctor-schedule {
    font-size: 14px;
    color: #555;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .schedule-container {
      padding: 8px;
    }
  
    .doctor-list {
      gap: 12px;
    }
  
    .doctor-card {
      padding: 12px;
    }
  }
  </style>
  