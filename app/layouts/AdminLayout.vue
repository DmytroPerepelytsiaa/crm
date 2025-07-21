<script setup lang="ts">
import AdminSidebar from '@/components/AdminSidebar.vue';
</script>

<template>
  <div>
    <main class="flex">
      <AdminSidebar />
      <NuxtPage class="flex-1 bg-white-primary-color" />
    </main>
  </div>
</template>
