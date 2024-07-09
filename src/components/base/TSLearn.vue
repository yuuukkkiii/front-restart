<template>
  <div class="person">
    ???
  </div>
</template>

<script setup lang="ts">/*重命名插件*/
import {ref} from 'vue'
import {type PersonInter,type Persons} from "../types";

let person: PersonInter = {id: '18238151396', name: '张三', age: 18}

// let personList:PersonInter=[] 这种写法不对
let personList: Persons = [
  {id: '18238151396', name: '张三', age: 8},
  {id: '18238151396', name: '李四', age: 18},
  {id: '18238151396', name: '王五', age: 23}
]

</script>

<!--scoped是局部样式-->
<style scoped>

.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 2px;
}

button {
  margin: 0 5px;
}
</style>