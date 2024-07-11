<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我+1</button>
  </div>
</template>

<script setup lang="ts" name="personRename">/*重命名插件*/
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref} from 'vue'

let sum = ref(0);

function add() {
  sum.value += 1;
}

// 创建，直接写在setup内即可
// console.log('创建')

// 挂载,需要引入,vue3是调用内部定义的函数
onBeforeMount(() => {
  console.log('子挂载前')
})

onMounted(() => {
  console.log('子挂载完成')
})

// 更新
onBeforeUpdate(() => {
  console.log('更新前')
})
onUpdated(() => {
  console.log('更新完成')
})
// 卸载
onBeforeMount(() => {
  console.log('卸载前')
})
onMounted(() => {
  console.log('卸载完成')
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