import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/profil/sejarah-dinas-p3ap2kb',
      name: 'sejarah',
      component: () => import('../pages/Profil/Sejarah.vue')
    },
    {
      path: '/profil/profil-pimpinan',
      name: 'profil-pimpinan',
      component: () => import('../pages/Profil/ProfilPimpinan.vue')
    },
    {
      path: '/profil/pejabat-struktural',
      name: 'pejabat-struktural',
      component: () => import('../pages/Profil/PejabatStruktural.vue')
    },
    {
      path: '/profil/tugas-dan-fungsi',
      name: 'tugas-dan-fungsi',
      component: () => import('../pages/Profil/TugasDanFungsi.vue')
    },
    {
      path: '/profil/dasar-hukum',
      name: 'dasar-hukum',
      component: () => import('../pages/Profil/DasarHukum.vue')
    },
    {
      path: '/profil/program-kerja',
      name: 'program-kerja',
      component: () => import('../pages/Profil/ProgramKerja.vue')
    },
    {
      path: '/bidang/sekretariat',
      name: 'sekretariat',
      component: () => import('../pages/Bidang/Sekretariat.vue')
    },
    {
      path: '/bidang/bidang-pp',
      name: 'bidang-pp',
      component: () => import('../pages/Bidang/BidangPP.vue')
    },
    {
      path: '/bidang/bidang-p2kb',
      name: 'bidang-p2kb',
      component: () => import('../pages/Bidang/BidangP2KB.vue')
    },
    {
      path: '/bidang/bidang-kkk',
      name: 'bidang-kkk',
      component: () => import('../pages/Bidang/BidangKKK.vue')
    },
    {
      path: '/bidang/bidang-p2ha',
      name: 'bidang-p2ha',
      component: () => import('../pages/Bidang/BidangP2HA.vue')
    },
    {
      path: '/upt/uptd-ppa',
      name: 'uptd-ppa',
      component: () => import('../pages/UPT/UptdPpa.vue')
    },
    {
      path: '/balai-penyuluhan/berbah',
      name: 'balai-penyuluhan-berbah',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanBerbah.vue')
    },
    {
      path: '/balai-penyuluhan/cangkringan',
      name: 'balai-penyuluhan-cangkringan',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanCangkringan.vue')
    },
    {
      path: '/balai-penyuluhan/depok',
      name: 'balai-penyuluhan-depok',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanDepok.vue')
    },
    {
      path: '/balai-penyuluhan/gamping',
      name: 'balai-penyuluhan-gamping',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanGamping.vue')
    },
    {
      path: '/balai-penyuluhan/godean',
      name: 'balai-penyuluhan-godean',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanGodean.vue')
    },
    {
      path: '/balai-penyuluhan/kalasan',
      name: 'balai-penyuluhan-kalasan',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanKalasan.vue')
    },
    {
      path: '/balai-penyuluhan/minggir',
      name: 'balai-penyuluhan-minggir',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanMinggir.vue')
    },
    {
      path: '/balai-penyuluhan/mlati',
      name: 'balai-penyuluhan-mlati',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanMlati.vue')
    },
    {
      path: '/balai-penyuluhan/moyudan',
      name: 'balai-penyuluhan-moyudan',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanMoyudan.vue')
    },
    {
      path: '/balai-penyuluhan/ngaglik',
      name: 'balai-penyuluhan-ngaglik',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanNgaglik.vue')
    },
    {
      path: '/balai-penyuluhan/ngemplak',
      name: 'balai-penyuluhan-ngemplak',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanNgemplak.vue')
    },
    {
      path: '/balai-penyuluhan/pakem',
      name: 'balai-penyuluhan-pakem',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanPakem.vue')
    },
    {
      path: '/balai-penyuluhan/prambanan',
      name: 'balai-penyuluhan-prambanan',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanPrambanan.vue')
    },
    {
      path: '/balai-penyuluhan/seyegan',
      name: 'balai-penyuluhan-seyegan',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanSeyegan.vue')
    },
    {
      path: '/balai-penyuluhan/sleman',
      name: 'balai-penyuluhan-sleman',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanSleman.vue')
    },
    {
      path: '/balai-penyuluhan/tempel',
      name: 'balai-penyuluhan-tempel',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanTempel.vue')
    },
    {
      path: '/balai-penyuluhan/turi',
      name: 'balai-penyuluhan-turi',
      component: () => import('../pages/BalaiPenyuluhan/BalaiPenyuluhanTuri.vue')
    },
    {
      path: '/info-publik/formulir-permohonan-informasi',
      name: 'formulir-permohonan-informasi',
      component: () => import('../pages/InfoPublik/FormulirPermohonanInformasi.vue')
    },
    {
      path: '/info-publik/wajib-diumumkan-berkala',
      name: 'wajib-diumumkan-berkala',
      component: () => import('../pages/InfoPublik/WajibDiumumkanBerkala.vue')
    },
    {
      path: '/info-publik/wajib-diumumkan-setiap-saat',
      name: 'wajib-diumumkan-setiap-saat',
      component: () => import('../pages/InfoPublik/WajibDiumumkanSetiapSaat.vue')
    },
    {
      path: '/info-publik/wajib-diumumkan-serta-merta',
      name: 'wajib-diumumkan-serta-merta',
      component: () => import('../pages/InfoPublik/WajibDiumumkanSertaMerta.vue')
    },
    {
      path: '/info-publik/agenda',
      name: 'agenda',
      component: () => import('../pages/InfoPublik/Agenda.vue')
    },
    {
      path: '/eppid',
      name: 'eppid',
      component: () => import('../pages/Eppid.vue')
    }
  ],
})

export default router
