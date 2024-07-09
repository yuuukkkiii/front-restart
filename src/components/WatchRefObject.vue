<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person2.name }}</h2>
    <h2>年龄：{{ person2.age }}</h2>
    <h2> 测试：{{ test.a.b.c }}</h2>
    <button @click="change2Name">修改姓名</button>
    <button @click="change2Age">修改年龄</button>
    <button @click="change2Person">修改人</button>
    <button @click="change2Test">修改测试文本</button>
  </div>
</template>


<script setup lang="ts">/*重命名插件*/
import {ref, reactive, watch} from 'vue'

let person = ref({
  name: '张三',
  age: 18
})

let person2 = reactive({
  name: '张三',
  age: 18
})

let test = reactive({
  a: {
    b: {
      c: 666
    }
  }
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


function change2Name() {
  person2.name += '-';
}

function change2Age() {
  person2.age += 1;
}

function change2Person() {
  // 将后面的对象的键值对，赋值给第一个，对象没有发生变化
  Object.assign(person2, {name: '李四', age: 15});
}

function change2Test() {
  test.a.b.c = 888;
}

// 监视ref对象，监视的是对象的地址值，若想监视对象内部属性的变化，需手动开始深度监视
// 但是如果只修改属性，新旧值指向的是同一个对象
// 修改整个对象，old和new才会不同
watch(person2, (newVal, oldVale) => {
  console.log("打印：", newVal, oldVale)
}, {deep: true})


watch(test, (newVal, oldVale) => {
  console.log("打印：", newVal, oldVale)
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