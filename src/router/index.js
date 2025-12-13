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
    }
  ],
})

export default router
