<script lang="ts" setup>
import { NAVIGATION_LINKS as links } from '@/utils';
</script>

<template>
  <aside class="w-60 bg-primary-color h-screen py-8">
    <NuxtLink class="flex items-center justify-center gap-2 mb-20" to="/">
      <Icon name="icon:logo" size="24" />
      <h1 class="text-white-primary-color">CRM</h1>
    </NuxtLink>

    <nav class="flex flex-col text-white-primary-color">
      <NuxtLink 
        v-for="link of links" 
        :key="link.name" 
        :to="link.linkTo" 
        class="h-16 pl-6 flex items-center hover:bg-primary-color-hover transition-colors duration-300" 
        active-class="bg-primary-color-hover"
      >
        <div class="flex items-center gap-3">
          <Icon :name="link.iconName" size="18" />
          {{ link.name }}
        </div>
      </NuxtLink>
    </nav>
  </aside>
</template>
