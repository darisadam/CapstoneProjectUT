import { createRouter, createWebHistory } from 'vue-router';

// Mobile components
import LoginPasien from '@/components/Mobile/LoginPasien.vue';
import CekAntrianKlinik from '@/components/Mobile/CekAntrianKlinik.vue';
import DaftarBerobatPasien from '@/components/Mobile/DaftarBerobatPasien.vue';
import JadwalDokter from '@/components/Mobile/JadwalDokter.vue';
import LupaPasswordPasien from '@/components/Mobile/LupaPasswordPasien.vue';
import RegistrasiPasien from '@/components/Mobile/RegistrasiPasien.vue';

// Desktop components
import AntrianPoliklinik from '@/components/Desktop/AntrianPoliklinik.vue';
import LoginKlinik from '@/components/Desktop/LoginKlinik.vue';
import UbahAntrianPoliklinik from '@/components/Desktop/UbahAntrianPoliklinik.vue';

const routes = [
  {
    path: '/',
    redirect: '/login', // Ensure this redirects properly to LoginPasien
  },
  {
    path: '/login',
    name: 'LoginPasien',
    component: LoginPasien,
  },
  {
    path: '/cek-antrian-klinik',
    name: 'CekAntrianKlinik',
    component: CekAntrianKlinik,
  },
  {
    path: '/daftar-berobat',
    name: 'DaftarBerobatPasien',
    component: DaftarBerobatPasien,
  },
  {
    path: '/jadwal-dokter',
    name: 'JadwalDokter',
    component: JadwalDokter,
  },
  {
    path: '/lupa-password',
    name: 'LupaPasswordPasien',
    component: LupaPasswordPasien,
  },
  {
    path: '/registrasi',
    name: 'RegistrasiPasien',
    component: RegistrasiPasien,
  },
  {
    path: '/antrian-poliklinik',
    name: 'AntrianPoliklinik',
    component: AntrianPoliklinik,
  },
  {
    path: '/login-klinik',
    name: 'LoginKlinik',
    component: LoginKlinik,
  },
  {
    path: '/ubah-antrian-poliklinik',
    name: 'UbahAntrianPoliklinik',
    component: UbahAntrianPoliklinik,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
