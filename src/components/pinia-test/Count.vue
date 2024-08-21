<template>
  <div class="count">
    <h2>当前求和为:{{ sum }},求和X2为: {{bigSum}}</h2>
    <h3>现在位于：{{ company }}，坐落于：{{ address }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts">

import {ref, toRefs} from "vue";
import {useCountStore} from "../../store/Count.ts";
import {storeToRefs} from "pinia";

const countStore = useCountStore();

// let sum = countStore.$state.sum //也可以取到
let n = ref(1);

// toRefs会把store里的所有对象全部转为响应式，不合理
// const {sum, company, address} = toRefs(countStore);
// storeToRefs 只会关注store中的数据
const {sum, company, address,bigSum} = storeToRefs(countStore);


// 用户选择数字

function add() {
  // 第一种修改方式：直接修改
  // countStore.sum += n.value;
  // 第二种写法：patch批量修改，只发生一次提交事件，多条数据可用
  // countStore.$patch({
  //   sum: 8,
  //   company: "weo",
  //   address: "吴中"
  // })
  // 第三种修改方式
  countStore.increment(n.value)
}

function minus() {
  countStore.sum -= n.value
}


</script>

<style>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  margin: 0 10px;
  height: 25px;
}
</style>