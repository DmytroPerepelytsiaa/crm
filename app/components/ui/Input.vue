<script setup lang="ts">
defineProps<{
  placeholder?: string;
}>();
</script>

<template>
  <label class="h-11 w-[400px]">
    <input class="w-full h-full p-3 border-gray-primary-color border rounded font-medium text-sm text-gray-accent-color outline-gray-accent-color" type="text" :placeholder="placeholder">
  </label>
</template>
