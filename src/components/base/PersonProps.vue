<template>
  <div class="person">
    <h2>{{ a }}</h2>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}----{{ item.age }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">/*重命名插件*/
import {type PersonInter, type Persons} from "../types";

// 只接收，不限制类型
// let x =defineProps(['a','b','list'])
// 添加?为非必填，限制必要性
withDefaults(defineProps<{ list?: Persons, a: string }>(), {
      list: () => [{id: '182381513ada96', name: '狗剩', age: 38}],
      a: '2222'
    }
)
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