<template>
  <div class="talk">
    <button @click="getTalk">获取一句话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import {reactive} from "vue";
import axios from "axios";
import {c} from "vite/dist/node/types.d-aGj9QkWt";
import {nanoid} from "nanoid";

let talkList = reactive([
  {id: 'id1', title: '你好'},
  {id: 'id2', title: '谢谢'},
  {id: 'id3', title: '最后是'},
  {id: 'id4', title: '再见'}
])

async function getTalk() {
  let {data: {content}} = await axios.get('http://api.uomg.com/api/rand.qinghua?format=json')

  let obj = reactive({id: nanoid(), title: content})
  talkList.push(obj);
}


</script>

<style>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  margin: 0 10px;
  height: 25px;
}
</style>