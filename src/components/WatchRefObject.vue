<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>


<script setup lang="ts">/*重命名插件*/
import {ref, watch} from 'vue'

let person = ref({
  name: '张三',
  age: 18
})

function changeName() {
  person.value.name += '-';
}

function changeAge() {
  person.value.age += 1;
}

function changePerson() {
  person.value = {name: '李四', age: 15}
}

// 监视ref对象，监视的是对象的地址值，若想监视对象内部属性的变化，需手动开始深度监视
// 但是如果只修改属性，新旧值指向的是同一个对象
// 修改整个对象，old和new才会不同
watch(person, (newVal, oldVale) => {
  console.log("打印：", newVal, oldVale)
}, {deep: true})
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