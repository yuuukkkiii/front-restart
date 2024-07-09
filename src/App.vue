<script lang="ts" setup name="App">
import WatchRefObject from "./components/base/WatchRefObject.vue";
import PersonAttribution from "./components/base/PersonAttribution.vue";
import WatchEffect from "./components/base/WatchEffect.vue";
import LabelRef from "./components/base/LabelRef.vue";
import {ref} from "vue";

// import HelloWorld from './components/HelloWorld.vue'
let title2 = ref();
let la = ref();

function showLog(){
  console.log(title2.value);
  console.log(la.value)
}

</script>

<template>
<!--  <Person/>-->
<!--  <Car/>-->
<!--  <PersonComputed/>-->
<!--  <PersonWatch/>-->
<!--  <PersonAttribution/>-->
<!--  <Person1/>-->
<!--  <WatchRefObject/>-->
<!--  <WatchEffect/>-->
  <h2 id="title2">hello</h2>
  <h2 ref="title2">hello</h2>
  <button @click="showLog">点击</button>
<!--  ref放在自定义标签上，拿到的是组件的实例对象-->
  <LabelRef ref="la"/>
</template>

<style scoped>

</style>
