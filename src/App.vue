<script lang="ts">
import Person from "./components/Person.vue";
import Car from "./components/Car.vue";

export default {
  name: 'App',
  components: {Person,Car} //注册组件
}
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <Person/>
  <Car/>
</template>

<style scoped>

</style>
