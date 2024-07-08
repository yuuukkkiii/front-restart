<script lang="ts">
import Person1 from "./components/Person1.vue";
import PersonAttribution from "./components/PersonAttribution.vue";
import PersonComputed from "./components/PersonComputed.vue";
import PersonWatch from "./components/PersonWatch.vue";

export default {
  name: 'App',
  components: {Person1,PersonComputed,PersonWatch,PersonAttribution} //注册组件
}
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
<!--  <Person/>-->
<!--  <Car/>-->
<!--  <PersonComputed/>-->
  <PersonAttribution/>
<!--  <Person1/>-->
</template>

<style scoped>

</style>
