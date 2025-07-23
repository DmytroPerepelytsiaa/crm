<script setup lang="ts">
const modal = reactive<{ component: unknown; props: Record<string, unknown> }>({
  component: null,
  props: {},
});

const openModal = (component: unknown, props: Record<string, unknown>): void => {
  modal.component = component;
  modal.props = props;
};

const closeModal = (): void => {
  modal.component = null;
  modal.props = {};
};

provide('modalProvider', { openModal, closeModal });
</script>

<template>
  <div>
    <slot></slot>
  </div>

  <teleport to="body">
    <div v-if="modal.component" class="flex items-center justify-center w-screen h-screen z-50 fixed bg-black-50" @click.self="closeModal()">
      <component :is="modal.component" />
    </div>
  </teleport>
</template>
