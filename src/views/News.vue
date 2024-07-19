<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
        <!--        query 第一种写法,直接拼字符串-->
        <!--        <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink>-->
        <!--        query 第二种写法，写对象-->
        <!--        <RouterLink :to="{-->
        <!--          path:'/news/detail',-->
        <!--          query:{-->
        <!--            id:news.id,-->
        <!--            title:news.title,-->
        <!--            content:news.content-->
        <!--          }-->
        <!--        }">{{ news.title }}-->
        <!--        </RouterLink>-->
        <!--          params 第一种写法-->
        <!--        <RouterLink to="/news/detail"></RouterLink>-->
        <!--        params 第二种写法-->
        <RouterLink :to="{
          name:'paramsDetail',
          params:{
            id:news.id,
            title:news.title,
            content:news.content
          },
          query:{
            id:news.id,
            title:news.title,
            content:news.content
        }
          }">{{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import {reactive} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

interface NewsInter {
  id: string,
  title: string,
  content: string
}

const newsList:Array<NewsInter> = reactive([
  {id: 1, title: '特没谱枪击案', content: '特没谱被枪击身亡'},
  {id: 2, title: '如何暴富', content: '听主任的话，去刮彩票'},
  {id: 3, title: '震惊，一男子竟', content: '刮彩票赔钱，买基金回本'},
  {id: 4, title: '好消息', content: '好消息，特大好消息'}
])



function showNewsDetail(news: NewsInter) {
  router.push({
    name: 'paramsDetail',
    params: {
      id: news.id,
      title: news.title,
      content: news.content
    }
  })
}
</script>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  /*list-style: none;*/
  padding-left: 10px;
}

.news li::marker {
  color: #64967E;
}

.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}

</style>