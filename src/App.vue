<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SiteNavigation from './components/SiteNavigation.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen font-Montserrat bg-weather-primary">
    <SiteNavigation />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.page-enter-active,
.page-enter-active
 {
  transition: 600ms ease all;
}

.page-enter-from,
.page-leave-to
{
  opacity: 0;
}
</style>
