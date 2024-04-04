<template>
  <div class="flex w-full justify-center">
    <ViewPort />
  </div>
</template>


<script setup>
import ViewPort from './gameEngine/ViewPort.vue';
import GameEngine from "./Service/GameEngine.js";
import { onMounted, onBeforeMount } from 'vue';
onBeforeMount(() => {
  window.removeEventListener('keydown', handleGlobalKeyDown);
  GameEngine.init();
});

const handleGlobalKeyDown = (event) => {
  event.stopPropagation();
  GameEngine.handleKey(event.key);
  console.log('Global key press:', event.key);
};

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeyDown);
});
</script>

<style scoped>
</style>
