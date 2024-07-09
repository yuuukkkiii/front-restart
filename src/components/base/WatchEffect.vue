<template>
  <div class="person">
    <h2>需求：当水温达到60度，或水位达到80cm，发送请求</h2>
    <h2>当前水温为：{{ temp }}℃</h2>
    <h2>当前水位为：{{ height }}cm</h2>
    <button @click="changeTemp">修改温度</button>
    <button @click="changeHeight">修改水位</button>
  </div>
</template>

<script setup lang="ts">/*重命名插件*/
import {ref, reactive, watch, watchEffect} from 'vue'

let temp = ref(10);
let height = ref(0);

function changeTemp() {
  temp.value += 10;
}

function changeHeight() {
  height.value += 10;
}

// 监视 watch实现
watch([temp, height], ([newTemp, newHeight]) => {
  console.log(newTemp, newHeight)
  if (newTemp >= 60 || newHeight >= 80) {
    console.log('给服务器发请求')
  }
})
// 监视 watchEffect实现 watchEffect初始化时会执行一次
// watchEffect中出现的变量，会被监视
watchEffect(() => {
  if (temp.value >= 60 || height.value >= 80) {
    console.log('watchEffect给服务器发请求')
  }
})

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
</style>