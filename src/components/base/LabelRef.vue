<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">苏州</h2>
    <h3>吴江区</h3>
    <button @click="showLog">点我输出h2里的元素</button>
  </div>
</template>

<script setup lang="ts">/*重命名插件*/
import {ref} from 'vue'

// 创建title2，用于存储ref标记的内容
let title2 = ref();
let a = ref(0);
let b = ref(1);
let c = ref(2);

function showLog() {
  console.log(title2.value);
}

// 向父类暴露自己的属性
defineExpose({a, b, c});
</script>

<!--scoped是局部样式-->
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