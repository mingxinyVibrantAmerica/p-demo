<template>
  <div  class="flex flex-col">
    <div v-for="x in 11" :key="x">
      <div class="flex">
        <div v-for="y in 11" :key="y">
          <Tile :x-index="x-1" :y-index="y-1" :content="String(GameEngine.map[x-1][y-1])" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import GameEngine from "../Service/GameEngine.js";
import Tile from "./Tile.vue";
</script>