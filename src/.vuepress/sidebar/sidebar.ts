import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  //推荐：使用structure将指定导航下所有的文件加入侧边栏
  "/guide/": "structure",
  "/second/": "structure",

  //数组格式：自定义侧边栏导航的目录
  "/third":[
    "/0001.md",
    "/guide/",
  ],

  //对象格式：自定义侧边栏标题和子侧边栏
  //暂略，这个太麻烦了，用途不大。

  // 注意：单文件无论如何配置都不会显示侧边栏
  "/使用指南": "structure",
});
