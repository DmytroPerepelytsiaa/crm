<script setup lang="ts">
const emit = defineEmits(['click']);
</script>

<template>
  <button class="py-2.5 px-5 rounded bg-primary-color text-white-primary-color hover:bg-primary-color-hover duration-300 transition-colors" @click="emit('click')">
    <slot></slot>
  </button>
</template>
