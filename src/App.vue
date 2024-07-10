<script lang="ts" setup name="App">
import LabelRef from "./components/base/LabelRef.vue";
import TSLearn from "./components/base/TSLearn.vue";
import {reactive} from "vue";
import {type Persons} from "./components/types";
import PersonProps from "./components/base/PersonProps.vue";

let personList = reactive<Persons>([
  {id: '18238151396', name: '张三', age: 8},
  {id: '18238151396', name: '李四', age: 18},
  {id: '18238151396', name: '王五', age: 23, x: 60}
]);
console.log(personList)
// import {ref} from "vue";
// // import HelloWorld from './components/HelloWorld.vue'
// let title2 = ref();
// let la = ref();
// function showLog(){
//   console.log(title2.value);
//   console.log(la.value)
// }

</script>

<template>
  <!--  <h2 id="title2">hello</h2>-->
  <!--  <h2 ref="title2">hello</h2>-->
  <!--  <button @click="showLog">点击</button>-->
  <!--  ref放在自定义标签上，拿到的是组件的实例对象-->
  <!--  <LabelRef ref="la"/>-->
  <PersonProps a="hahaha" b="xxxx" :list="personList"/>
</template>

<style scoped>

</style>
