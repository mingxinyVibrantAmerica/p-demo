<template>
  <div class="flex w-full justify-center">
    <ViewPort />
  </div>
</template>


<script setup>
import ViewPort from './gameEngine/ViewPort.vue';
import GameEngine from "./Service/GameEngine.js";
import { onBeforeMount } from 'vue';
onBeforeMount(() => {
  GameEngine.init();
});
</script>

<style scoped>
</style>
