<script setup>
import { ref, computed } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

const currentDate = ref(new Date());
const selectedDate = ref(new Date());

const events = [
    {
        date: new Date(2024, 6, 23), // July 23, 2024
        title: "Hari Anak Nasional",
        type: "event"
    },
    {
        date: new Date(2024, 5, 29), // June 29, 2024
        title: "Hari Keluarga Nasional",
        type: "event"
    },
    {
        date: new Date(2024, 5, 1), // June 1, 2024
        title: "Hari Lahir Pancasila",
        type: "holiday"
    }
];

const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

const currentMonth = computed(() => currentDate.value.getMonth());
const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonthName = computed(() => monthNames[currentMonth.value]);

const daysInMonth = computed(() => new Date(currentYear.value, currentMonth.value + 1, 0).getDate());
const firstDayOfMonth = computed(() => new Date(currentYear.value, currentMonth.value, 1).getDay());

const calendarDays = computed(() => {
    let daysArray = [];
    const prevMonthDays = new Date(currentYear.value, currentMonth.value, 0).getDate();

    // Previous Month Days
    for (let i = firstDayOfMonth.value - 1; i >= 0; i--) {
        daysArray.push({
            date: prevMonthDays - i,
            isCurrentMonth: false,
            isToday: false,
            events: []
        });
    }

    // Current Month Days
    for (let i = 1; i <= daysInMonth.value; i++) {
        const today = new Date();
        const dateObj = new Date(currentYear.value, currentMonth.value, i);

        daysArray.push({
            date: i,
            isCurrentMonth: true,
            isToday: i === today.getDate() && currentMonth.value === today.getMonth() && currentYear.value === today.getFullYear(),
            isSelected: i === selectedDate.value.getDate() && currentMonth.value === selectedDate.value.getMonth() && currentYear.value === selectedDate.value.getFullYear(),
            events: events.filter(e =>
                e.date.getDate() === i &&
                e.date.getMonth() === currentMonth.value &&
                e.date.getFullYear() === currentYear.value
            )
        });
    }

    // Next Month Days
    const remainingDays = 42 - daysArray.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
        daysArray.push({
            date: i,
            isCurrentMonth: false,
            isToday: false,
            events: []
        });
    }

    return daysArray;
});

const prevMonth = () => {
    currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
};

const nextMonth = () => {
    currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
};

const selectDate = (day) => {
    if (day.isCurrentMonth) {
        selectedDate.value = new Date(currentYear.value, currentMonth.value, day.date);
    }
};

const selectedDateEvents = computed(() => {
    return events.filter(e =>
        e.date.getDate() === selectedDate.value.getDate() &&
        e.date.getMonth() === selectedDate.value.getMonth() &&
        e.date.getFullYear() === selectedDate.value.getFullYear()
    );
});
</script>

<template>
    <div class="min-h-screen bg-gray-50 pb-20">
        <!-- Hero Header -->
        <div class="bg-[#5A9CB5] text-white pt-32 pb-20 mb-12 relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" stroke-width="2" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h1 class="text-3xl md:text-5xl font-bold mb-4">Agenda</h1>
                <p class="text-lg opacity-90">Kalender Kegiatan Dinas P3AP2KB</p>
            </div>
            <div class="absolute bottom-0 left-0 w-full leading-none overflow-hidden rotate-180">
                <svg class="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        fill="#F9FAFB"></path>
                </svg>
            </div>
        </div>

        <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
            <!-- Calendar Section -->
            <div class="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <!-- Calendar Header -->
                <div class="flex items-center justify-between mb-8">
                    <h2 class="text-2xl font-bold text-gray-800">{{ currentMonthName }} {{ currentYear }}</h2>
                    <div class="flex gap-2">
                        <button @click="prevMonth" class="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <ChevronLeftIcon class="w-6 h-6 text-gray-600" />
                        </button>
                        <button @click="nextMonth" class="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <ChevronRightIcon class="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>

                <!-- Calendar Grid -->
                <div class="grid grid-cols-7 gap-4 mb-4">
                    <div v-for="day in days" :key="day" class="text-center text-sm font-semibold text-gray-400">
                        {{ day }}
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-4">
                    <div v-for="(day, index) in calendarDays" :key="index" @click="selectDate(day)"
                        class="aspect-square flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all duration-200 relative group"
                        :class="[
                            day.isCurrentMonth ? 'text-gray-800 hover:bg-blue-50' : 'text-gray-300 pointer-events-none',
                            day.isToday ? 'bg-blue-50 text-[#5A9CB5] font-bold ring-2 ring-[#5A9CB5] ring-offset-2' : '',
                            day.isSelected ? 'bg-[#5A9CB5] text-white shadow-lg shadow-blue-200 hover:bg-[#5A9CB5]' : ''
                        ]">
                        <span class="text-lg">{{ day.date }}</span>
                        <!-- Event Dots -->
                        <div v-if="day.events.length > 0" class="flex gap-1 mt-1">
                            <span v-for="(evt, idx) in day.events" :key="idx" class="w-1.5 h-1.5 rounded-full" :class="[
                                day.isSelected ? 'bg-white' : (evt.type === 'holiday' ? 'bg-red-400' : 'bg-[#5A9CB5]')
                            ]"></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Events List Sidebar -->
            <div class="w-full md:w-80 space-y-6">
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 class="text-lg font-bold text-gray-800 mb-4 border-b border-gray-100 pb-4">
                        Agenda Tanggal {{ selectedDate.getDate() }} {{ monthNames[selectedDate.getMonth()] }} {{
                        selectedDate.getFullYear() }}
                    </h3>

                    <div v-if="selectedDateEvents.length > 0" class="space-y-4">
                        <div v-for="(event, idx) in selectedDateEvents" :key="idx" class="p-4 rounded-xl border-l-4"
                            :class="event.type === 'holiday' ? 'bg-red-50 border-red-400' : 'bg-blue-50 border-[#5A9CB5]'">
                            <h4 class="font-semibold"
                                :class="event.type === 'holiday' ? 'text-red-700' : 'text-[#5A9CB5]'">{{ event.title }}
                            </h4>
                            <span class="text-xs font-medium uppercase tracking-wider mt-1 block opacity-75"
                                :class="event.type === 'holiday' ? 'text-red-500' : 'text-blue-500'">
                                {{ event.type === 'holiday' ? 'Hari Libur' : 'Acara' }}
                            </span>
                        </div>
                    </div>
                    <div v-else class="text-center py-8 text-gray-400">
                        <p>Tidak ada agenda pada tanggal ini</p>
                    </div>
                </div>

                <!-- Upcoming Events Widget -->
                <div class="bg-gradient-to-br from-[#5A9CB5] to-[#4A8CA5] rounded-2xl shadow-lg p-6 text-white">
                    <h3 class="font-bold text-lg mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd" />
                        </svg>
                        Agenda Bulan Ini
                    </h3>
                    <ul class="space-y-3">
                        <li v-for="(event, idx) in events.filter(e => e.date.getMonth() === currentMonth && e.date.getFullYear() === currentYear)"
                            :key="idx"
                            class="flex gap-3 items-start border-b border-white/20 pb-3 last:border-0 last:pb-0">
                            <div class="text-center bg-white/20 rounded-lg p-2 min-w-14">
                                <span class="block text-xs uppercase opacity-80">{{
                                    monthNames[event.date.getMonth()].substr(0, 3) }}</span>
                                <span class="block text-xl font-bold">{{ event.date.getDate() }}</span>
                            </div>
                            <div>
                                <h4 class="font-semibold text-sm">{{ event.title }}</h4>
                                <span class="text-xs opacity-75 capitalize">{{ event.type === 'holiday' ? 'Hari Libur Nasional' : 'Agenda Dinas' }}</span>
                            </div>
                        </li>
                        <li v-if="events.filter(e => e.date.getMonth() === currentMonth && e.date.getFullYear() === currentYear).length === 0"
                            class="text-center py-4 opacity-80 text-sm">
                            Belum ada agenda bulan ini
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
