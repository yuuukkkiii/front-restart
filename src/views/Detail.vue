<template>
  <ul class="new-list">
    <li>编号：{{ id }}</li>
    <li>标题：{{ title }}</li>
    <li>内容：{{ content }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
import {useRoute} from "vue-router";
import {toRefs} from "vue";
defineProps(['id','title','content'])
const route = useRoute();
let {query} = toRefs(route);
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