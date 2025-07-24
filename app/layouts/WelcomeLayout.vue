<script setup lang="ts">
import WelcomeHeader from '@/components/WelcomeHeader.vue';
</script>

<template>
  <main class="bg-primary-color h-screen relative">
    <WelcomeHeader class="focus-in" />
    <NuxtPage class="focus-in" />
    <div class="absolute bottom-0 right-0 w-[100vw] h-[100vh] rounded-full blur-[20vw] opacity-20 bg-blue-500 pointer-events-none"></div>
  </main>
</template>
