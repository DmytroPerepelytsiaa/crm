<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <header class="h-24 flex items-center justify-between px-10 border-b border-gray-primary-color">
    <h2>{{ title }}</h2>
    <div class="flex items-center gap-5">
      <div class="w-[1px] h-11 bg-gray-primary-color"></div>
      <div class="flex items-center gap-3">
        <div 
          class="bg-red-500 w-11 h-11 flex items-center justify-center rounded-full" 
          aria-label="Adam Smith"
        >
          AS
        </div>
        <div>
          <h3>Adam Smith</h3>
          <p>adamsmith@gmail.com</p>
        </div>
      </div>
    </div>
  </header>
</template>
