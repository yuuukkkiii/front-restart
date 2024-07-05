<script lang="ts">
import Person from "./components/Person.vue";
import Car from "./components/Car.vue";
import Person1 from "./components/Person1.vue";

export default {
  name: 'App',
  components: {Person,Car,Person1} //注册组件
}
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
<!--  <Person/>-->
<!--  <Car/>-->
  <Person1/>
</template>

<style scoped>

</style>
