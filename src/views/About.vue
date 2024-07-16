<template>
  <div class="about">
    <h2>搭嘎好 !!!</h2>
  </div>
</template>

<script setup lang="ts" name="About">
import {onMounted, onUnmounted} from "vue";

onMounted(() => {
  console.log("被挂载了")
});
onUnmounted(() => {
  console.log("被卸载了")
});
</script>

<style scoped>

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: rgb(85, 84, 84);
  font-size: 18px;
}

</style>