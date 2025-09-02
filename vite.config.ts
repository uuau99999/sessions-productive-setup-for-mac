import { defineConfig } from "vite";

export default defineConfig({
  // 在GitHub Pages部署时使用相对路径
  // 这样资源文件可以正确加载，无论部署在哪个子路径下
  base: process.env.NODE_ENV === "production" ? "./" : "/",

  // 构建配置
  build: {
    outDir: "dist",
    // 确保静态资源使用相对路径
    assetsDir: "assets",
  },
});

