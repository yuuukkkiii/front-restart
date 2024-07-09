<script lang="ts">
import WatchRefObject from "./components/base/WatchRefObject.vue";
import PersonAttribution from "./components/base/PersonAttribution.vue";
import WatchEffect from "./components/base/WatchEffect.vue";

export default {
  name: 'App',
  components: {WatchRefObject,PersonAttribution,WatchEffect} //注册组件
}
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
<!--  <Person/>-->
<!--  <Car/>-->
<!--  <PersonComputed/>-->
<!--  <PersonWatch/>-->
<!--  <PersonAttribution/>-->
<!--  <Person1/>-->
<!--  <WatchRefObject/>-->
  <WatchEffect/>
</template>

<style scoped>

</style>
