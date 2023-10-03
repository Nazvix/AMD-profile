<script lang="ts" setup>
import { ref, onMounted } from 'vue'
// import router from '../services/router'
import { RouterLink } from 'vue-router'

const routes = ref([
  {
    label: 'Layanan',
    path: '/services',
  },
  {
    label: 'Portfolio',
    path: '/portfolios',
  },
  {
    label: 'Kontak',
    path: '/contact',
  },
])

onMounted(async () => {})
</script>

<template>
  <div class="flex w-full justify-between bg-[#2D2D2D] text-[#8D8D8D] border-b-[0.5px] border-o">
    <div class="mx-6">
      <p class="text-lg text-on-surface-variant-light m-2 font-dmmono tracking-widest">AMD</p>
    </div>
    <div class="flex flex-row justify-end mx-6 font-dmmono">
      <RouterLink exact-active-class="text-white border-b-2 border-white" class="mx-4" :to="route.path" v-for="route in routes" :key="route.label">
        <p class="text-lg text-on-surface-variant-light m-2">
          {{ route.label }}
        </p>
      </RouterLink>
    </div>
  </div>
</template>
