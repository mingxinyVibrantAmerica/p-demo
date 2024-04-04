<template>
  <div class="tile">
    {{xIndex}}
    {{yIndex}}
    {{content}}
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  xIndex: Number,
  yIndex: Number,
  content: String,
});
</script>