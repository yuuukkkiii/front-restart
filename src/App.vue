<script lang="ts">
import WatchRefObject from "./components/WatchRefObject.vue";
import PersonAttribution from "./components/PersonAttribution.vue";

export default {
  name: 'App',
  components: {WatchRefObject,PersonAttribution} //注册组件
}
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
<!--  <Person/>-->
<!--  <Car/>-->
<!--  <PersonComputed/>-->
<!--  <PersonWatch/>-->
  <PersonAttribution/>
<!--  <Person1/>-->
<!--  <WatchRefObject/>-->
</template>

<style scoped>

</style>
