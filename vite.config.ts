import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    UnoCSS({
      /* options */
    }),
    // 自动布局
    Layouts({
      layoutsDirs:'src/layouts', // 默认就是 src/layouts
      defaultLayout:'default', // 默认就是 default
    }),
    // 自动生成路由
    Pages({
      dirs: 'src/pages', // 默认就是 src/pages
      extensions: ['vue', 'ts'],
    }),

    // 自动导入
    AutoImport({
      imports: ['vue', 'vue-router'], // 自动导入 vue、router API
      resolvers: [],
      dts: 'src/auto-imports.d.ts',
    }),

    // 自动注册组件
    Components({
      dirs: ['src/components'], // 自动扫描组件目录
      extensions: ['vue'],
      deep: true,
      resolvers: [],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 这里设置 @ 指向 src
    },
  },
})
