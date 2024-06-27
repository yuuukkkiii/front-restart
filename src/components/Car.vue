<template>
  <div class="person">
    <h2>一辆{{ car.brand }}汽车，价值{{ car.price }}万元</h2>
    <button @click="changePrice">修改汽车价格</button>
    <br>
    <h2>汽车内置游戏列表：</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeGameName">修改第一个游戏的名字</button>
    <hr/>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="changeDeep">修改对象内对象数值</button>
  </div>
</template>

<script setup lang="ts">/*重命名插件*/
import {reactive, ref} from "vue";

let car = reactive({brand: '奔驰', price: 100});//原对象，响应式对象，proxy包裹
let games = reactive([
  {id: '1', name: '水解密'},
  {id: '2', name: '贪吃蛇'},
  {id: '3', name: '扫雷'},
]);
let obj = reactive({
  a: {
    b: {
      c: 111
    }
  }
});//多层级的对象也能转换为响应式

function changePrice() {
  car.price--;
}

function changeGameName() {
  games[0].name = '原神'
}

function changeDeep() {
  obj.a.b.c = 222
}
</script>


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

li {
  font-size: 20px;
}
</style>