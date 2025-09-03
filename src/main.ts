import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import { createRouter, createWebHistory } from 'vue-router'
// 引入 pages 自动生成的路由
import generatedRoutes from 'virtual:generated-pages'
// 把路由和 layouts 结合
import { setupLayouts } from 'virtual:generated-layouts'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
