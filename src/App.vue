<script lang="ts">
import Person1 from "./components/Person1.vue";
import PersonComputed from "./components/PersonComputed.vue";
import PersonWatch from "./components/PersonWatch.vue";

export default {
  name: 'App',
  components: {Person1,PersonComputed,PersonWatch} //注册组件
}
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
<!--  <Person/>-->
<!--  <Car/>-->
<!--  <PersonComputed/>-->
  <PersonWatch/>
<!--  <Person1/>-->
</template>

<style scoped>

</style>
