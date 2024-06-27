import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      VueSetupExtend()  //用于在setup语法糖中给组件取别名
  ],
})
