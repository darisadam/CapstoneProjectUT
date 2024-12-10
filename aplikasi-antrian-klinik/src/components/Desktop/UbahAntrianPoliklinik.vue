<template>
    <div class="container">
      <!-- Back Button -->
      <div class="back-button">
        <a href="#" class="btn btn-primary" @click="handleBackClick">{{ backButtonText }}</a>
      </div>
  
      <!-- Doctor Information Section -->
      <div class="doctor-info">
        <h2>{{ doctorName }}</h2>
        <p>{{ schedule }}</p>
      </div>
  
      <!-- Queue Information Section -->
      <div class="queue-info">
        <div class="queue-number">
          <h3>{{ queueNumber }}</h3>
        </div>
        <div class="queue-status">
          <p>{{ queueStatus }}</p>
        </div>
      </div>
  
      <!-- Patient Information Section -->
      <div class="patient-info">
        <p>{{ patientName }}</p>
        <p>{{ patientStatus }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UbahAntrianPoliklinik',
    data() {
      return {
        backButtonText: '< Kembali',
        doctorName: 'dr. WIDIA RINA',
        schedule: '08.00 - 12.00 WIB',
        queueNumber: 'A-10',
        queueStatus: 'Buka',
        patientName: 'NURJANAH',
        patientStatus: 'Antrian Sebelumnya / Antrian Selanjutnya'
      };
    },
    methods: {
      handleBackClick() {
        // Logic for back navigation
        console.log('Back button clicked');
        this.$router.push('/dashboard'); // Navigate back to Dashboard or a predefined route
      }
    }
  };
  </script>
  
  <style scoped>
  /* General Container Styling */
  .container {
    background-color: #008000;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Back Button Styling */
  .back-button {
    text-align: left;
    margin-bottom: 20px;
  }
  
  .btn {
    background-color: #006400;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s ease;
  }
  
  .btn:hover {
    background-color: #004d00;
  }
  
  /* Doctor Information */
  .doctor-info {
    text-align: left;
    margin-bottom: 20px;
  }
  
  /* Queue Information */
  .queue-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #f0fff0;
    border-radius: 6px;
  }
  
  .queue-number {
    font-size: 36px;
    font-weight: bold;
    color: #004d00;
  }
  
  .queue-status p {
    font-size: 16px;
    color: #555;
  }
  
  /* Patient Info */
  .patient-info {
    text-align: left;
    font-size: 16px;
    color: #f5f5f5;
  }
  </style>
  