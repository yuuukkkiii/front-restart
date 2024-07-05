<template>
  <div class="person">
    <!--    <h2>姓：<input type="text" :value="firstName"></h2> v-bind:value 是单向绑定，将内容输出到页面， v-model是双向绑定-->
    <h2>姓：<input type="text" v-model="firstName"></h2>
    <br>
    <h2>名：<input type="text" v-model="lastName"></h2>
    <br>
    <h2>全名:<span>{{ fullName }}</span></h2>
    <h2>全名:<span>{{ fullName2() }}</span></h2>
    <button @click="changeFullName">修改全名</button>
    <br>
  </div>
</template>

<!--<script lang="ts">/*计算属性插件*/-->
<!--export default {-->
<!--  computed:{-->
<!--    -->
<!--  }-->
<!--}-->
<!--</script>-->

<script setup lang="ts">/*重命名插件*/
import {ref, reactive, toRefs, toRef, computed} from 'vue'


let firstName = ref('zhang');
let lastName = ref('san');
let fullName = computed({
  get() {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
  },
  set(val) {
    const [str1, str2] = val.split('-');
    console.log('set', val)
    firstName.value = str1;
    lastName.value = str2;
  }
})

// 计算属性可以缓存，如果数据无变化，只会调用一次，而使用函数实现的话，会调用多次
function fullName2() {
  // firstName.value.replace(1,);=firstName.value.charAt(0).toUpperCase();
  // return firstName.value+ '-' + lastName.value;
  return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
}

// function changeFullName(){
//   fullName.value = 'li-li'; computed是只读属性，不能直接修改，要添加get 和 set
// }

function changeFullName() {
  fullName.value = 'li-li';
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
</style>