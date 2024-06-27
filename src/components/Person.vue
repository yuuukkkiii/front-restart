<script lang="ts">
export default {
  name: 'Person',//控制组件名
}
</script>

<script setup lang="ts">
let name = 'bbb'; /*这种写法不是响应式的*/
let age = 19;
let tel = 120;
let address = '芦荡路228号';

function changeName() {
  name = 'aaa';
}

function changeAge() {
  age += 1;
}

function showTel() {
  alert(tel);
}
</script>

<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>住址:{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

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