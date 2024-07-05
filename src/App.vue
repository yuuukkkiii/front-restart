<script lang="ts">
import Person1 from "./components/Person1.vue";
import PersonComputed from "./components/PersonComputed.vue";

export default {
  name: 'App',
  components: {Person1,PersonComputed} //注册组件
}
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
<!--  <Person/>-->
<!--  <Car/>-->
  <PersonComputed/>
<!--  <Person1/>-->
</template>

<style scoped>

</style>
