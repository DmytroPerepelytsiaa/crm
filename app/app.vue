<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import ModalProvider from '@/components/ui/ModalProvider.vue';
</script>

<template>
  <ModalProvider>
    <NuxtLayout>
      <AdminLayout />
    </NuxtLayout>
  </ModalProvider>
</template>
