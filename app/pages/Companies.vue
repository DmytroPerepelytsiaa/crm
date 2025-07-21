<script setup lang="ts">
import AdminHeader from '@/components/AdminHeader.vue';
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';
import CreateCompanyModal from '@/components/company/CreateCompanyModal.vue';
import { useModal } from '@/composables/useModal';

const { openModal } = useModal();

function openCompanyModal(): void {
  openModal(CreateCompanyModal, {});
}
</script>

<template>
  <div>
    <AdminHeader class="mb-8" title="Companies" />
    <div class="flex items-center justify-between px-10">
      <Input class="max-w-[400px]" placeholder="Search..." />
      <Button @click="openCompanyModal()">
        Add company
      </Button>
    </div>
  </div>
</template>
