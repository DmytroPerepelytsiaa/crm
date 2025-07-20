<script setup lang="ts">
import AdminSidebar from '@/components/AdminSidebar.vue';
</script>

<template>
  <div>
    <header></header>
    <main class="flex">
      <AdminSidebar />
      <NuxtPage />
    </main>
  </div>
</template>
