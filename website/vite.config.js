import {
  defineConfig
} from "vite";
import vue from "@vitejs/plugin-vue";
import {
  viteMockServe
} from "vite-plugin-mock";

import viteCompression from "vite-plugin-compression";

export default defineConfig({
  base: "./", //打包路径
  VITE_BASE_API: "http://localhost:5500/", //配置全局变量替换规则
  viteMockServe: {
    supportTs: true,
    logger: false,   //是否在控制台显示请求日志
    mockPath: "./mock/index.js",    //指定模拟函数文件夹
  },
  publicPath: '/',
  // 配置代理解决跨域
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5500/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {  
  },
  plugins: [
    vue(),
    viteCompression({
      //gzip压缩
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // chunkSizeWarningLimit: 1500,大文件报警阈值设置,不建议使用
    rollupOptions: {
      output: {
        //静态资源分类打包
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        manualChunks(id) {
          //静态资源分拆打包
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        },
      },
    },
  },
  css: {
    /* CSS 预处理器   导入全局样式*/
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "src/styles/common.scss";',
      },
    },
  },
});
