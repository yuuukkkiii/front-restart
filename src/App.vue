<script lang="ts">
import WatchRefObject from "./components/WatchRefObject.vue";
import Person1 from "./components/Person1.vue";
import PersonAttribution from "./components/PersonAttribution.vue";
import PersonComputed from "./components/PersonComputed.vue";
import PersonWatch from "./components/PersonWatch.vue";

export default {
  name: 'App',
  components: {WatchRefObject,Person1,PersonComputed,PersonWatch,PersonAttribution} //注册组件
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
  <WatchRefObject/>
</template>

<style scoped>

</style>
