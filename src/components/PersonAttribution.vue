<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }},{{ person.car.c2 }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改所有车</button>
  </div>
</template>

<script setup lang="ts">/*重命名插件*/
import {ref, reactive, watch} from 'vue'

let person = reactive({
  name: '张三',
  age: 18,
  car: {
    c1: '奔驰',
    c2: '宝马'
  }
})

function changeName() {
  person.name += '~';
}

function changeAge() {
  person.age += 1;
}

function changeC1() {
  person.car.c1 = '问界';
}

function changeC2() {
  person.car.c2 = '大众'
}

function changeCar() {
  person.car = {c1: '捷安特', c2: '美利达'}
}

// 监视属性的时候，如果不是对象属性，可以使用getter函数，即监视getter函数
watch(() => person.name, (newVal, oldVal) => {
  console.log('值变化了', newVal, oldVal)
});
// 想要监视对象里的对象，同样需要监视getter函数，因为直接监视属性的话，地址值变化后，不再是proxy对象，无法监视整体变化
// 如果监视整体对象，则无法监视属性变化，因为只指定到对象的层级，添加deep也无用。
watch(() => person.car, (newVal, oldVal) => {
  console.log('car的值变化了', newVal, oldVal)
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