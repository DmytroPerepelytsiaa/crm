<script setup lang="ts">
import AdminHeader from '@/components/AdminHeader.vue';
import Input from '@/components/ui/Input.vue';
</script>

<template>
  <div>
    <AdminHeader class="mb-8" title="Companies" />
    <div class="flex items-center justify-between px-10">
      <Input placeholder="Search..." />
    </div>
  </div>
</template>
