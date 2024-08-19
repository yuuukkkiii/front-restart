import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
// 引入pinia
import {createPinia} from "pinia";

// 创建应用
const app=createApp(App);
const pinia = createPinia();
// 使用路由器
app.use(router);
app.use(pinia)
//  挂载整个应用到app应用中
app.mount('#app');
