<template>
  <div class="person1">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>住址:{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script setup lang="ts">/*重命名插件*/
import {ref, reactive, toRefs,toRef} from 'vue'

let person = reactive({
  name: '张三',
  age: 18
})

// let {name, age} = person; //直接结构属性，是非响应式的
// toRefs 将对象的属性转为了响应式对象
let {name, age} = toRefs(person); //类似指针，结构出的name和age就是person对象中的属性，修改会引起对象属性修改
let nl = toRef(person,'age')


let tel = 120;  /*这种写法不是响应式的*/
let address = '芦荡路228号';

function changeName() {
  name.value += '-';
  person.name += '-';
}

function changeAge() {
  age.value += 1;
  person.age += 1;
}

function showTel() {
  alert(tel);
}
</script>


<style scoped>

.person1 {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 2px;
}

button {
  margin: 0 5px;
}
</style>