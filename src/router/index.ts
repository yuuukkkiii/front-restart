// 创建一个路由器，并暴露出去

// 1:引入createRouter
import {createRouter, createWebHistory} from 'vue-router'
// 引入路由组件
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import News from "../views/News.vue";

//2：创建路由器
const router = createRouter({
    history: createWebHistory(),//路由器的工作模式
    routes: [{
        name:'home',
        path: '/home',
        component: Home
    }, {
        name:'news',
        path: '/news',
        component: News
    }, {
        name:'about',
        path: '/about',
        component: About
    }]
});

// 暴露router
export default router;