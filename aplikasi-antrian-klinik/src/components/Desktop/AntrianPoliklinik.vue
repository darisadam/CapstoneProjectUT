<template>
  <div class="medical-interface p-6 bg-blue-600 min-h-screen">
    <!-- Top Right Navigation Button -->
    <button
      class="back-to-login"
      @click="navigateToLogin"
    >
      Kembali ke Login Pasien
    </button>

    <!-- Filter Section -->
    <div class="filter-section">
      <div class="filter-bar">
        <select
          class="filter-dropdown"
          v-model="selectedClinic"
        >
          <option value="">Pilih Poliklinik</option>
          <option v-for="clinic in clinics" :key="clinic" :value="clinic">
            {{ clinic }}
          </option>
        </select>

        <select
          class="filter-dropdown"
          v-model="selectedDoctor"
        >
          <option value="">Pilih Dokter</option>
          <option v-for="doctor in doctors" :key="doctor" :value="doctor">
            {{ doctor }}
          </option>
        </select>

        <select
          class="filter-dropdown"
          v-model="selectedDate"
        >
          <option value="">Pilih Tanggal</option>
          <option v-for="date in dates" :key="date" :value="date">
            {{ date }}
          </option>
        </select>

        <select
          class="filter-dropdown"
          v-model="selectedDay"
        >
          <option value="">Pilih Hari</option>
          <option v-for="day in days" :key="day" :value="day">
            {{ day }}
          </option>
        </select>
      </div>
    </div>

    <!-- Appointments Section -->
    <div class="appointment-section">
      <div class="appointment-table-header">
        <div>WAKTU KONSUL</div>
        <div>ANTRIAN (SLOT)</div>
        <div>PASIEN</div>
        <div>POLI</div>
        <div>DOKTER</div>
        <div>STATUS</div>
      </div>
      <div class="appointment-table-content">
        <div
          v-for="appointment in filteredAppointments"
          :key="appointment.id"
          class="appointment-row"
        >
          <div>
            {{ appointment.day }}<br />
            {{ appointment.date }}<br />
            {{ appointment.time }}
          </div>
          <div>{{ appointment.queue }}</div>
          <div>
            {{ appointment.patientName }}<br />
            {{ appointment.patientId }}<br />
            {{ appointment.insuranceStatus }}
          </div>
          <div>{{ appointment.department }}</div>
          <div>{{ appointment.doctor }}</div>
          <div>
            {{ appointment.status }}<br />
            {{ appointment.registrationDate }}<br />
            {{ appointment.registrationTime }}
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
      selectedClinic: '',
      selectedDoctor: '',
      selectedDate: '',
      selectedDay: '',
      clinics: ['UMUM', 'GIGI', 'ANAK'],
      doctors: ['dr. WIDIA RINA', 'drg. PURNAMA', 'dr. MAULANA, Sp.A'],
      dates: ['01 DESEMBER 2024', '02 DESEMBER 2024', '03 DESEMBER 2024'],
      days: ['SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT'],
      appointments: [
        {
          id: 1,
          day: 'SENIN',
          date: '02 DESEMBER 2024',
          time: '08.00 - 12.00 WIB',
          queue: 'A-10\nBELUM DIPANGGIL',
          patientName: 'NURJANNAH',
          patientId: '227103/03/1750033',
          insuranceStatus: 'PRIBADI',
          department: 'UMUM',
          doctor: 'dr. WIDIA RINA',
          status: 'REGISTRASI',
          registrationDate: '02 DESEMBER 2024',
          registrationTime: '09:12 WIB',
        },
        {
          id: 2,
          day: 'SELASA',
          date: '03 DESEMBER 2024',
          time: '08.00 - 12.00 WIB',
          queue: 'A-21\nBELUM DIPANGGIL',
          patientName: 'ADI',
          patientId: '227104/03/1950003',
          insuranceStatus: 'PRIBADI',
          department: 'GIGI',
          doctor: 'drg. PURNAMA',
          status: 'REGISTRASI',
          registrationDate: '03 DESEMBER 2024',
          registrationTime: '10:23 WIB',
        },
      ],
    };
  },
  computed: {
    filteredAppointments() {
      let filtered = [...this.appointments];
      if (this.selectedClinic) {
        filtered = filtered.filter(app => app.department === this.selectedClinic);
      }
      if (this.selectedDoctor) {
        filtered = filtered.filter(app => app.doctor === this.selectedDoctor);
      }
      if (this.selectedDate) {
        filtered = filtered.filter(app => app.date === this.selectedDate);
      }
      if (this.selectedDay) {
        filtered = filtered.filter(app => app.day === this.selectedDay);
      }
      return filtered;
    },
  },
  methods: {
    navigateToLogin() {
      alert('Navigating to Login');
    },
  },
};
</script>

<style scoped>
/* General */
.medical-interface {
  font-family: Arial, sans-serif;
  color: #fff;
}

/* Button */
.back-to-login {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  color: #333;
}

/* Filter UI */
.filter-section {
  margin-bottom: 20px;
}

.filter-bar {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-dropdown {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 120px;
}

/* Appointment Section */
.appointment-section {
  background: #ffffff;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.appointment-table-header,
.appointment-row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 8px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

.appointment-table-header {
  font-weight: bold;
}

.appointment-row {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

/* Responsiveness */
@media (max-width: 768px) {
  .filter-dropdown {
    min-width: 100%;
  }
}
</style>
