<template>
  <div class="talk">
    <button @click="getTalk">获取一句话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useLoveTalkStore} from "../../store/LoveTalk.ts";
import {storeToRefs} from "pinia";

const loveTalkStore =useLoveTalkStore()

const {talkList} = storeToRefs(loveTalkStore)

function getTalk() {
  loveTalkStore.getATalk();
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