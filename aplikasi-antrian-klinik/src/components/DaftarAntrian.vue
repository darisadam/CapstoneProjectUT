<template>
  <div class="medical-interface p-4 bg-green-700 min-h-screen">
    <!-- Filter Section -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <select class="p-2 bg-gray-100 rounded" v-model="selectedClinic">
        <option value="">POLIKLINIK</option>
        <option v-for="clinic in clinics" :key="clinic" :value="clinic">
          {{ clinic }}
        </option>
      </select>

      <select class="p-2 bg-gray-100 rounded" v-model="selectedDoctor">
        <option value="">DOKTER</option>
        <option v-for="doctor in doctors" :key="doctor" :value="doctor">
          {{ doctor }}
        </option>
      </select>

      <select class="p-2 bg-gray-100 rounded" v-model="selectedDate">
        <option value="">SEMUA TANGGAL</option>
        <option v-for="date in dates" :key="date" :value="date">
          {{ date }}
        </option>
      </select>

      <select class="p-2 bg-gray-100 rounded" v-model="selectedDay">
        <option value="">SEMUA HARI</option>
        <option v-for="day in days" :key="day" :value="day">
          {{ day }}
        </option>
      </select>
    </div>

    <!-- Appointment Table -->
    <div class="bg-green-100 rounded-lg p-4">
      <div class="grid grid-cols-6 gap-2 mb-4 font-bold">
        <div class="bg-gray-200 p-2 rounded">WAKTU KONSUL</div>
        <div class="bg-gray-200 p-2 rounded">ANTRIAN (SLOT)</div>
        <div class="bg-gray-200 p-2 rounded">PASIEN</div>
        <div class="bg-gray-200 p-2 rounded">POLI</div>
        <div class="bg-gray-200 p-2 rounded">DOKTER</div>
        <div class="bg-gray-200 p-2 rounded">STATUS</div>
      </div>

      <div v-for="appointment in appointments" :key="appointment.id" class="grid grid-cols-6 gap-2 mb-2">
        <div class="p-2">
          {{ appointment.day }}<br>
          {{ appointment.date }}<br>
          {{ appointment.time }}
        </div>
        <div class="p-2">{{ appointment.queue }}</div>
        <div class="p-2">
          {{ appointment.patientName }}<br>
          {{ appointment.patientId }}<br>
          {{ appointment.insuranceStatus }}
        </div>
        <div class="p-2">{{ appointment.department }}</div>
        <div class="p-2">{{ appointment.doctor }}</div>
        <div class="p-2">
          {{ appointment.status }}<br>
          {{ appointment.registrationDate }}<br>
          {{ appointment.registrationTime }}
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
      dates: ['01 DESEMBER 2024', '02 DESEMBER 2024', '03 DESEMBER 2024', '04 DESEMBER 2024'],
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
          registrationTime: '09:12 WIB'
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
          registrationTime: '10:23 WIB'
        },
        {
          id: 3,
          day: 'RABU',
          date: '04 DESEMBER 2024',
          time: '08.00 - 12.00 WIB',
          queue: 'A-12\nBELUM DIPANGGIL',
          patientName: 'DEAN',
          patientId: '227103/03/456523',
          insuranceStatus: 'PRIBADI',
          department: 'ANAK',
          doctor: 'dr. MAULANA, Sp.A',
          status: 'REGISTRASI',
          registrationDate: '04 DESEMBER 2024',
          registrationTime: '08:15 WIB'
        }
      ]
    }
  },
  methods: {
    filterAppointments() {
      let filtered = [...this.appointments]
      
      if (this.selectedClinic) {
        filtered = filtered.filter(app => app.department === this.selectedClinic)
      }
      if (this.selectedDoctor) {
        filtered = filtered.filter(app => app.doctor === this.selectedDoctor)
      }
      if (this.selectedDate) {
        filtered = filtered.filter(app => app.date === this.selectedDate)
      }
      if (this.selectedDay) {
        filtered = filtered.filter(app => app.day === this.selectedDay)
      }
      
      return filtered
    }
  },
  computed: {
    filteredAppointments() {
      return this.filterAppointments()
    }
  }
}
</script>
