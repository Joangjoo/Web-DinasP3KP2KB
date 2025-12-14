<script setup>
import { ref } from 'vue';
import {
    NewspaperIcon,
    DocumentTextIcon,
    ChartBarIcon,
    MagnifyingGlassIcon,
    ArrowUpTrayIcon
} from '@heroicons/vue/24/outline';

const activeTab = ref('form');

const menuItems = [
    { id: 'info', label: 'Informasi Publik', icon: DocumentTextIcon },
    { id: 'form', label: 'Permohonan Informasi', icon: DocumentTextIcon },
    { id: 'stats', label: 'Statistik', icon: ChartBarIcon },
    { id: 'check', label: 'Cek Progress Permohonan', icon: MagnifyingGlassIcon },
];

const formData = ref({
    nik: '',
    nama: '',
    alamat: '',
    hp: '',
    pekerjaan: '',
    kategori: 'Perorangan',
    email: '',
    infoDibutuhkan: '',
    tujuan: '',
    dinasTujuan: '',
    caraPeroleh: '',
    caraSalinan: '',
    file: null,
    agreement: false
});

const handleFileUpload = (event) => {
    formData.value.file = event.target.files[0];
};

const submitForm = () => {
    console.log('Form submitted', formData.value);
    alert("Permohonan berhasil dikirim (simulasi)");
};
</script>

<template>
    <div class="min-h-screen bg-gray-100 pb-20 pt-32">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Breaking News Ticker -->
            <div class="bg-red-600 text-white p-3 rounded-lg shadow-md mb-8 flex items-center gap-4 overflow-hidden">
                <span class="font-bold bg-red-800 px-2 py-1 rounded text-xs uppercase tracking-wider shrink-0">Breaking
                    News</span>
                <div class="whitespace-nowrap animate-marquee">
                    Selamat Datang di Portal E-PPID Dinas P3AP2KB Kabupaten Sleman. Layanan Informasi Publik
                    Terintegrasi.
                </div>
            </div>

            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Sidebar Menu -->
                <div class="w-full lg:w-1/4 space-y-4">
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div class="p-6 bg-[#5A9CB5] text-white">
                            <h2 class="text-xl font-bold">Menu Layanan</h2>
                            <p class="text-sm opacity-80">Pilih layanan yang anda butuhkan</p>
                        </div>
                        <nav class="p-2">
                            <button v-for="item in menuItems" :key="item.id" @click="activeTab = item.id"
                                class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors mb-1"
                                :class="activeTab === item.id ? 'bg-blue-50 text-[#5A9CB5] font-semibold' : 'text-gray-600 hover:bg-gray-50'">
                                <component :is="item.icon" class="w-5 h-5" />
                                {{ item.label }}
                            </button>
                        </nav>
                    </div>

                    <!-- Contact/Help Widget -->
                    <div
                        class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 text-white text-center">
                        <h3 class="font-bold text-lg mb-2">Butuh Bantuan?</h3>
                        <p class="text-sm opacity-80 mb-4">Hubungi kami jika anda mengalami kendala dalam penggunaan
                            layanan ini.</p>
                        <button
                            class="bg-[#5A9CB5] hover:bg-[#4a8ca5] text-white py-2 px-4 rounded-lg w-full transition-colors text-sm font-semibold">
                            Hubungi Admin
                        </button>
                    </div>
                </div>

                <!-- Main Content Area -->
                <div class="w-full lg:w-3/4">
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">

                        <div v-if="activeTab === 'form'">
                            <div class="border-b border-gray-100 pb-6 mb-8">
                                <h1 class="text-3xl font-bold text-gray-800 mb-2">Form Permohonan Informasi</h1>
                                <p class="text-gray-500">Silahkan lengkapi formulir di bawah ini dengan data yang valid.
                                </p>
                            </div>

                            <form @submit.prevent="submitForm" class="space-y-6">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <!-- Left Column -->
                                    <div class="space-y-6">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">NIK
                                                Pemohon</label>
                                            <input v-model="formData.nik" type="text"
                                                placeholder="Nomor Induk Kependudukan"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A9CB5] focus:border-transparent outline-none transition-shadow"
                                                required />
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Nama Pemohon
                                                Informasi <span class="text-red-500">*</span></label>
                                            <input v-model="formData.nama" type="text" placeholder="Nama Lengkap"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A9CB5] focus:border-transparent outline-none transition-shadow"
                                                required />
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">No. HP Pemohon
                                                <span class="text-red-500">*</span></label>
                                            <input v-model="formData.hp" type="tel" placeholder="08xxx"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A9CB5] focus:border-transparent outline-none transition-shadow"
                                                required />
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Email <span
                                                    class="text-red-500">*</span></label>
                                            <input v-model="formData.email" type="email" placeholder="email@contoh.com"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A9CB5] focus:border-transparent outline-none transition-shadow"
                                                required />
                                        </div>
                                    </div>

                                    <!-- Right Column -->
                                    <div class="space-y-6">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Pekerjaan <span
                                                    class="text-red-500">*</span></label>
                                            <input v-model="formData.pekerjaan" type="text"
                                                placeholder="Pekerjaan saat ini"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A9CB5] focus:border-transparent outline-none transition-shadow"
                                                required />
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Kategori Pemohon
                                                <span class="text-red-500">*</span></label>
                                            <select v-model="formData.kategori"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A9CB5] focus:border-transparent outline-none transition-shadow"
                                                required>
                                                <option value="Perorangan">Perorangan</option>
                                                <option value="Kelompok">Kelompok Orang</option>
                                                <option value="BadanHukum">Badan Hukum</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Dinas / Tujuan
                                                Permohonan <span class="text-red-500">*</span></label>
                                            <input v-model="formData.dinasTujuan" type="text"
                                                placeholder="Dinas P3AP2KB"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A9CB5] focus:border-transparent outline-none transition-shadow"
                                                required />
                                        </div>
                                    </div>
                                </div>

                                <!-- Full Width Areas -->
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap Pemohon
                                        <span class="text-red-500">*</span></label>
                                    <textarea v-model="formData.alamat" rows="3" placeholder="Alamat lengkap sesuai KTP"
                                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A9CB5] focus:border-transparent outline-none transition-shadow"
                                        required></textarea>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Informasi yg Dibutuhkan
                                        <span class="text-red-500">*</span></label>
                                    <textarea v-model="formData.infoDibutuhkan" rows="3"
                                        placeholder="Deskripsikan informasi yang anda butuhkan"
                                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A9CB5] focus:border-transparent outline-none transition-shadow"
                                        required></textarea>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Tujuan Penggunaan
                                        Informasi <span class="text-red-500">*</span></label>
                                    <textarea v-model="formData.tujuan" rows="2"
                                        placeholder="Untuk keperluan apa informasi ini digunakan"
                                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A9CB5] focus:border-transparent outline-none transition-shadow"
                                        required></textarea>
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Cara Memperoleh
                                            Informasi <span class="text-red-500">*</span></label>
                                        <select v-model="formData.caraPeroleh"
                                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A9CB5] focus:border-transparent outline-none transition-shadow"
                                            required>
                                            <option value="">Pilih Cara</option>
                                            <option value="Melihat">Melihat/membaca/mendengarkan/mencatat</option>
                                            <option value="SalinanHardcopy">Salinan Informasi Hardcopy</option>
                                            <option value="SalinanSoftcopy">Salinan Informasi Softcopy</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Cara Mendapatkan
                                            Salinan <span class="text-red-500">*</span></label>
                                        <select v-model="formData.caraSalinan"
                                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5A9CB5] focus:border-transparent outline-none transition-shadow"
                                            required>
                                            <option value="">Pilih Cara</option>
                                            <option value="Langsung">Mengambil Langsung</option>
                                            <option value="Kurir">Kurir</option>
                                            <option value="POS">POS</option>
                                            <option value="Faksimili">Faksimili</option>
                                            <option value="Email">E-mail</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="bg-gray-50 p-6 rounded-lg border border-dashed border-gray-300">
                                    <label class="block text-sm font-medium text-gray-700 mb-2">UPLOAD KTP/Surat
                                        Dinas/Akta Pendirian bagi LSM/swasta <span class="text-red-500">*</span></label>
                                    <div class="flex items-center gap-4">
                                        <label
                                            class="cursor-pointer bg-white border border-gray-300 hover:border-[#5A9CB5] text-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                                            <ArrowUpTrayIcon class="w-5 h-5 text-gray-500" />
                                            <span>Pilih File</span>
                                            <input type="file" @change="handleFileUpload" class="hidden"
                                                accept=".pdf,.jpg,.jpeg" required />
                                        </label>
                                        <span class="text-sm text-gray-500">{{formData.file ? formData.file.name : 'No file chosen (PDF, JPEG, JPG)' }}</span>
                                    </div>
                                </div>

                                <div
                                    class="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                                    <input v-model="formData.agreement" type="checkbox" id="agreement"
                                        class="mt-1 w-4 h-4 text-[#5A9CB5] rounded border-gray-300 focus:ring-[#5A9CB5]"
                                        required />
                                    <label for="agreement" class="text-sm text-gray-700">
                                        <span class="font-bold">Pernyataan:</span> Data & Informasi yang kami peroleh,
                                        kami pergunakan sesuai dengan ketentuan perundang-undangan yang berlaku.
                                    </label>
                                </div>

                                <!-- CAPTCHA Placeholder -->
                                <div
                                    class="bg-gray-100 p-4 rounded-lg flex items-center justify-between border border-gray-300">
                                    <div class="flex items-center gap-4">
                                        <div
                                            class="bg-white px-4 py-2 rounded font-mono font-bold tracking-widest text-xl border border-gray-200">
                                            X7Y2Z</div>
                                        <input type="text" placeholder="Masukkan Captcha"
                                            class="px-3 py-2 border border-gray-300 rounded focus:border-[#5A9CB5] outline-none"
                                            required />
                                    </div>
                                    <span class="text-xs text-gray-500">Recaptcha Placeholder</span>
                                </div>

                                <div class="pt-4">
                                    <button type="submit"
                                        class="w-full bg-[#5A9CB5] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#4a8ca5] transform hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg">
                                        Kirim Permohonan
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div v-if="activeTab !== 'form'"
                            class="flex flex-col items-center justify-center py-20 text-center">
                            <div class="bg-gray-100 p-6 rounded-full mb-4">
                                <component :is="menuItems.find(i => i.id === activeTab).icon"
                                    class="w-16 h-16 text-gray-400" />
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">Halaman {{menuItems.find(i => i.id ===
                                activeTab).label}}</h3>
                            <p class="text-gray-500">Konten untuk halaman ini sedang dalam pengembangan.</p>
                            <button @click="activeTab = 'form'"
                                class="mt-6 text-[#5A9CB5] font-semibold hover:underline">
                                Kembali ke Form Permohonan
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-marquee {
    animation: marquee 20s linear infinite;
    padding-left: 100%;
}

@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>
