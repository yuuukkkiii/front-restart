<template>
  <ul class="new-list">
    <li>编号：{{ params.id }}</li>
    <li>标题：{{ params.title }}</li>
    <li>内容：{{ params.content }}</li>
  </ul>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {toRefs} from "vue";

const route = useRoute();
console.log(route)
let {params} = toRefs(route);
</script>

<style scoped>

.new-list {
  list-style: none;
  padding-left: 20px;
}

.news-list > li {
  line-height: 30px;
}

</style>