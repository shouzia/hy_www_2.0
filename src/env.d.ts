
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
  // 声明 Vite-plugin-pages 虚拟模块
  declare module 'virtual:generated-pages' {
    import type { RouteRecordRaw } from 'vue-router'
    const routes: RouteRecordRaw[]
    export default routes
  }
  
  // 声明 Vite-plugin-vue-layouts 虚拟模块
  declare module 'virtual:generated-layouts' {
    import type { RouteRecordRaw } from 'vue-router'
    function setupLayouts(routes: RouteRecordRaw[]): RouteRecordRaw[]
    export { setupLayouts }
  }
  