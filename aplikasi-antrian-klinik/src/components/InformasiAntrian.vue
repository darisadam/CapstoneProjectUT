<template>
    <div class="container">
      <div class="back-button">
        <a href="#" class="btn btn-primary">{{ backButtonText }}</a>
      </div>
      <div class="doctor-info">
        <h2>{{ doctorName }}</h2>
        <p>{{ schedule }}</p>
      </div>
      <div class="queue-info">
        <div class="queue-number">
          <h3>{{ queueNumber }}</h3>
        </div>
        <div class="queue-status">
          <p>{{ queueStatus }}</p>
        </div>
      </div>
      <div class="patient-info">
        <p>{{ patientName }}</p>
        <p>{{ patientStatus }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InformasiAntrian',
    data() {
      return {
        backButtonText: '< Kembali',
        doctorName: 'dr. WIDIA RINA',
        schedule: '08.00 - 12.00 WIB',
        queueNumber: 'A-10',
        queueStatus: 'Buka',
        patientName: 'NURJANAH',
        patientStatus: 'Antrian Sebelumnya / Antrian Selanjutnya'
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    background-color: #008000;
    color: #fff;
    padding: 20px;
  }
  
  .back-button {
    text-align: left;
    margin-bottom: 20px;
  }
  
  .doctor-info {
    text-align: left;
    margin-bottom: 20px;
  }
  
  .queue-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .queue-number {
    font-size: 36px;
    font-weight: bold;
  }
  
  .patient-info {
    text-align: left;
  }
  </style>