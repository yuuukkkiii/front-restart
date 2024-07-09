<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点击+1</button>
  </div>
</template>


<script setup lang="ts">/*重命名插件*/
import {ref, watch} from 'vue'

let sum = ref(0)

function changeSum() {
  sum.value += 1
}

// 监视,第一个变量一定要是ref或reactive对象，监听值是无用的
const stopWatch = watch(sum, (newVal, oldVal) => {
  console.log('sum变化了', newVal, oldVal)
  // 大于10时结束监听
  if (newVal >= 10) {
    stopWatch();
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