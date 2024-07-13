<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <h2>当前求和*10：{{ bigSum }}</h2>
    <button @click="add">点我+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再来一只狗</button>
  </div>
</template>

<script setup lang="ts" name="personRename">/*重命名插件*/
import useSum from "../../hooks/useSum.ts";
import useDog from "../../hooks/useDog.ts";

const {sum, add,bigSum} = useSum();
const {dogList, getDog} = useDog();
</script>


<style scoped>

.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 2px;
}

button {
  margin: 0 5px;
}

img {
  height: 150px;
  margin-right: 10px;
}
</style>