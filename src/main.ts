import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";

// 创建应用
const app=createApp(App);
// 使用路由器
app.use(router);
//  挂载整个应用到app应用中
app.mount('#app');
